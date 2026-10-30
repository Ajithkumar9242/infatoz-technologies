const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const PORT = 5851;
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

  if (!fs.existsSync(filePath)) {
    filePath = path.join(OUT_DIR, '404.html');
  }

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
  console.log(`Server running at http://localhost:${PORT}`);
  const browser = await chromium.launch({ channel: 'msedge' });

  const viewports = [1024, 1279, 1280, 1440, 1920];
  const results = [];

  for (const width of viewports) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });

    // Capture header screenshot
    const header = await page.$('header[role="banner"]');
    const screenshotPath = path.join(__dirname, `header_${width}_after.png`);
    await header.screenshot({ path: screenshotPath });

    const layoutData = await page.evaluate(() => {
      const headerEl = document.querySelector('header[role="banner"]');
      const innerContainer = headerEl.querySelector('.max-w-7xl');
      const logo = headerEl.querySelector('a[aria-label*="Homepage"]');
      const milestone = Array.from(headerEl.querySelectorAll('span')).find(s => s.textContent.includes('Idea to Impact'));
      const nav = headerEl.querySelector('nav[aria-label="Main Navigation"]');
      const capabilities = headerEl.querySelector('a[aria-label="Explore Capabilities"]');
      const phone = headerEl.querySelector('a[aria-label="Call Infatoz Technologies"]');
      const consultation = Array.from(headerEl.querySelectorAll('button')).find(b => b.textContent.includes('Consultation'));
      const hamburger = headerEl.querySelector('button[aria-label="Open mobile navigation menu"]');

      const getRect = (el) => {
        if (!el || el.offsetParent === null) return null;
        const r = el.getBoundingClientRect();
        return { left: Math.round(r.left), width: Math.round(r.width), right: Math.round(r.right) };
      };

      const cRect = innerContainer ? innerContainer.getBoundingClientRect() : null;

      return {
        container: cRect ? { left: Math.round(cRect.left), width: Math.round(cRect.width), right: Math.round(cRect.right) } : null,
        logo: getRect(logo),
        milestone: getRect(milestone),
        nav: getRect(nav),
        capabilities: getRect(capabilities),
        phone: getRect(phone),
        consultation: getRect(consultation),
        hamburger: getRect(hamburger),
      };
    });

    results.push({ width, ...layoutData });
    await page.close();
  }

  console.log(JSON.stringify(results, null, 2));

  await browser.close();
  server.close();
});
