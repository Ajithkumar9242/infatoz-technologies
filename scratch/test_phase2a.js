const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

// Simple static server for 'out'
function startServer(port = 4567) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain',
    '.xml': 'application/xml',
  };

  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/') reqPath = '/index.html';
    let filePath = path.join(__dirname, '..', 'out', reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    } else if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  });

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server));
  });
}

async function runTests() {
  const server = await startServer(4567);
  console.log('Static server listening on http://localhost:4567');

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const results = [];

  const viewports = [320, 360, 390, 768, 1024, 1279, 1280, 1440];

  for (const width of viewports) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const consoleMessages = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
      }
    });

    await page.goto('http://localhost:4567/', { waitUntil: 'networkidle' });

    // Check Navigation
    const hamburger = page.locator('button[aria-label="Open mobile navigation menu"]');
    const isHamburgerVisible = await hamburger.isVisible();
    const desktopMenu = page.locator('nav[aria-label="Main Navigation"]');
    const isDesktopMenuVisible = await desktopMenu.isVisible();

    // Check mutual exclusivity
    const mutualExclusivity = !(isHamburgerVisible && isDesktopMenuVisible);

    let mobileDrawerTest = 'N/A (Desktop)';
    if (width < 1280) {
      // Test opening mobile drawer
      await hamburger.click();
      await page.waitForTimeout(200);
      const drawer = page.locator('div[aria-label="Mobile Navigation Menu"]');
      const isDrawerVisible = await drawer.isVisible();
      // Test closing drawer
      await page.keyboard.press('Escape');
      await page.waitForTimeout(200);
      const isDrawerClosed = !(await drawer.isVisible());
      mobileDrawerTest = isDrawerVisible && isDrawerClosed ? 'PASS' : 'FAIL';
    }

    // Check horizontal overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const overflowClean = scrollWidth <= clientWidth;

    results.push({
      width,
      isHamburgerVisible,
      isDesktopMenuVisible,
      mutualExclusivity,
      mobileDrawerTest,
      overflowClean,
      consoleErrors: consoleMessages.length,
    });

    await page.close();
  }

  // Deep functional checks at 1280px (Desktop) and 390px (Mobile)
  const testPage = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await testPage.goto('http://localhost:4567/', { waitUntil: 'networkidle' });

  // 1. Case Study Controls
  const prevArrow = await testPage.locator('button[aria-label="Previous case study"]').count();
  const nextArrow = await testPage.locator('button[aria-label="Next case study"]').count();
  const deadControlsRemoved = prevArrow === 0 && nextArrow === 0;

  // 2. Case study card click opens modal, not Calendly
  const caseStudyCard = testPage.locator('button[aria-label^="View overview for"]').first();
  await caseStudyCard.click();
  await testPage.waitForTimeout(200);
  const caseStudyModal = testPage.locator('div[role="dialog"][aria-labelledby="case-study-modal-title"]');
  const modalOpened = (await caseStudyModal.count()) > 0;
  // Press Escape
  await testPage.keyboard.press('Escape');
  await testPage.waitForTimeout(200);
  const modalClosed = (await caseStudyModal.count()) === 0;

  // 3. Duplication check in AboutSection
  const aboutSectionHtml = await testPage.locator('#about').innerHTML();
  const aboutHasPercentages = /92%|95%|90%/.test(aboutSectionHtml);

  // 4. Duplication check in ConsultationCTA
  const consultationHtml = await testPage.locator('#consultation').innerHTML();
  const ctaHasBulletList = consultationHtml.includes('Business-Focused IT Planning');

  // 5. Contact section has the consultation bullets
  const contactHtml = await testPage.locator('#contact').innerHTML();
  const contactHasBullets = contactHtml.includes('Business-Focused IT Planning');

  // 6. Hero typography check
  const heroSubtitle = testPage.locator('section[aria-label="Enterprise Capabilities Showcase"] h1 + p');
  const heroSubtitleClass = await heroSubtitle.getAttribute('class');
  const isSansSerif = !heroSubtitleClass.includes('font-serif') && !heroSubtitleClass.includes('italic');

  await testPage.close();
  await browser.close();
  server.close();

  console.log('\n=== RESPONSIVE VIEWPORT TEST RESULTS ===');
  console.table(results);

  console.log('\n=== FUNCTIONAL VERIFICATION ===');
  console.log('1. Dead case study arrow buttons removed:', deadControlsRemoved ? 'PASS' : 'FAIL');
  console.log('2. Case study card opens accessible modal (not Calendly):', modalOpened && modalClosed ? 'PASS' : 'FAIL');
  console.log('3. Duplicated percentages removed from AboutSection:', !aboutHasPercentages ? 'PASS' : 'FAIL');
  console.log('4. Duplicated bullet points removed from ConsultationCTA:', !ctaHasBulletList ? 'PASS' : 'FAIL');
  console.log('5. Consultation bullet points retained in ContactFormSection:', contactHasBullets ? 'PASS' : 'FAIL');
  console.log('6. Hero subtitle typography updated to sans-serif:', isSansSerif ? 'PASS' : 'FAIL');
}

runTests().catch((err) => {
  console.error(err);
  process.exit(1);
});
