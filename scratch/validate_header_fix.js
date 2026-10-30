const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const PORT = 5853;
const OUT_DIR = path.join(__dirname, '..', 'out');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join(OUT_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  if (!fs.existsSync(filePath)) filePath = path.join(OUT_DIR, '404.html');

  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, async () => {
  console.log(`Validation server listening on http://localhost:${PORT}`);
  const browser = await chromium.launch({ channel: 'msedge' });

  // 1. Test Mega Menu Dropdown alignment before and after scrolling at 1440px
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });

  // Open Capabilities menu
  const capabilitiesBtn = page.locator('nav[aria-label="Main Navigation"] button:has-text("Capabilities")');
  await capabilitiesBtn.click();
  await page.waitForTimeout(300);

  // Check dropdown positioning unscrolled
  const unscrolledCheck = await page.evaluate(() => {
    const header = document.querySelector('header[role="banner"]');
    const dropdown = document.querySelector('[role="region"][aria-label*="Submenu"]');
    if (!dropdown) return { error: 'Dropdown not found' };
    const hRect = header.getBoundingClientRect();
    const dRect = dropdown.getBoundingClientRect();
    return {
      headerBottom: hRect.bottom,
      dropdownTop: dRect.top,
      gap: Math.abs(dRect.top - hRect.bottom)
    };
  });
  console.log('Unscrolled Dropdown alignment:', unscrolledCheck);

  // Scroll down 150px
  await page.evaluate(() => window.scrollBy(0, 150));
  await page.waitForTimeout(300);

  const scrolledCheck = await page.evaluate(() => {
    const header = document.querySelector('header[role="banner"]');
    const dropdown = document.querySelector('[role="region"][aria-label*="Submenu"]');
    if (!dropdown) return { error: 'Dropdown not found' };
    const hRect = header.getBoundingClientRect();
    const dRect = dropdown.getBoundingClientRect();
    return {
      headerBottom: hRect.bottom,
      dropdownTop: dRect.top,
      gap: Math.abs(dRect.top - hRect.bottom)
    };
  });
  console.log('Scrolled Dropdown alignment:', scrolledCheck);

  // 2. Test Capabilities shortcut click
  const shortcut = page.locator('a[aria-label="Explore Capabilities"]');
  const href = await shortcut.getAttribute('href');
  console.log('Capabilities shortcut href:', href);

  // 3. Test Mobile Drawer at 1024px
  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });
  const hamburger = page.locator('button[aria-label="Open mobile navigation menu"]');
  await hamburger.click();
  await page.waitForTimeout(300);
  const drawerVisible = await page.locator('[role="dialog"][aria-label="Mobile Navigation Menu"]').isVisible();
  console.log('Mobile Drawer opens at 1024px:', drawerVisible);

  // Close drawer
  const closeBtn = page.locator('button[aria-label="Close navigation menu"]');
  await closeBtn.click();
  await page.waitForTimeout(300);
  const drawerClosed = !(await page.locator('[role="dialog"][aria-label="Mobile Navigation Menu"]').isVisible());
  console.log('Mobile Drawer closes cleanly:', drawerClosed);

  // Check horizontal overflow across 5 viewports
  const viewports = [1024, 1279, 1280, 1440, 1920];
  const overflowResults = [];
  for (const w of viewports) {
    await page.setViewportSize({ width: w, height: 900 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(100);
    const overflowClean = await page.evaluate(() => {
      return document.documentElement.scrollWidth <= window.innerWidth;
    });
    overflowResults.push({ width: w, overflowClean });
  }
  console.log('Overflow results:', overflowResults);
  console.log('Console errors:', consoleErrors.length);

  await browser.close();
  server.close();
});
