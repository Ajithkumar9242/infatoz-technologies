const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

function startServer(port = 5850) {
  const server = http.createServer((req, res) => {
    let p = req.url.split('?')[0];
    if (p === '/') p = '/index.html';
    let f = path.join(__dirname, '..', 'out', p);
    if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
    if (fs.existsSync(f)) {
      const ext = path.extname(f);
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
      fs.createReadStream(f).pipe(res);
    } else {
      res.writeHead(404);
      res.end();
    }
  });

  return new Promise((resolve) => server.listen(port, () => resolve(server)));
}

async function runPhase2BTests() {
  const server = await startServer(5850);
  console.log('Static server listening on http://localhost:5850');

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const viewports = [320, 390, 768, 1024, 1279, 1280, 1440, 1920];
  const viewportResults = [];

  for (const width of viewports) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('http://localhost:5850/', { waitUntil: 'networkidle' });

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const overflowClean = scrollWidth <= clientWidth;

    const hamburger = page.locator('button[aria-label="Open mobile navigation menu"]');
    const isHamburgerVisible = await hamburger.isVisible();
    const desktopMenu = page.locator('nav[aria-label="Main Navigation"]');
    const isDesktopMenuVisible = await desktopMenu.isVisible();

    // 1440px / desktop check: phone and milestone badge
    const phoneLink = page.locator('a[aria-label="Call Infatoz Technologies"]');
    const isPhoneVisible = await phoneLink.isVisible();
    const milestoneBadge = page.locator('text=Idea to Impact™').first();
    const isMilestoneVisible = await milestoneBadge.isVisible();

    viewportResults.push({
      width,
      isHamburgerVisible,
      isDesktopMenuVisible,
      isPhoneVisible,
      isMilestoneVisible,
      overflowClean,
      consoleErrors: consoleErrors.length,
    });

    await page.close();
  }

  console.log('\n=== RESPONSIVE VIEWPORT TEST RESULTS ===');
  console.table(viewportResults);

  // Deep checks on 1440px desktop
  const page1440 = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page1440.goto('http://localhost:5850/', { waitUntil: 'networkidle' });

  // 1. Mega Menu Alignment Test before and after scroll
  console.log('\n--- 1. Mega Menu Dropdown Alignment Test ---');
  // Open Capabilities menu
  const capabilitiesBtn = page1440.locator('button:has-text("Capabilities")').first();
  await capabilitiesBtn.hover();
  await page1440.waitForTimeout(200);

  const headerBoxUnscrolled = await page1440.locator('header[role="banner"]').boundingBox();
  const dropdownBoxUnscrolled = await page1440.locator('div[role="region"][aria-label="Capabilities Submenu"]').boundingBox();
  
  const gapUnscrolled = Math.abs(dropdownBoxUnscrolled.y - (headerBoxUnscrolled.y + headerBoxUnscrolled.height));
  console.log(`Unscrolled Header bottom: ${headerBoxUnscrolled.y + headerBoxUnscrolled.height}px | Dropdown top: ${dropdownBoxUnscrolled.y}px | Gap: ${gapUnscrolled}px`);

  // Now scroll the page 150px down
  await page1440.mouse.wheel(0, 150);
  await page1440.waitForTimeout(300);

  // Keep hover on Capabilities
  await capabilitiesBtn.hover();
  await page1440.waitForTimeout(200);

  const headerBoxScrolled = await page1440.locator('header[role="banner"]').boundingBox();
  const dropdownBoxScrolled = await page1440.locator('div[role="region"][aria-label="Capabilities Submenu"]').boundingBox();
  const gapScrolled = Math.abs(dropdownBoxScrolled.y - (headerBoxScrolled.y + headerBoxScrolled.height));
  console.log(`Scrolled Header bottom: ${headerBoxScrolled.y + headerBoxScrolled.height}px | Dropdown top: ${dropdownBoxScrolled.y}px | Gap: ${gapScrolled}px`);

  const passedMegaMenuAlignment = gapUnscrolled <= 1 && gapScrolled <= 1;

  // 2. Explore Capabilities shortcut test
  console.log('\n--- 2. Explore Capabilities Shortcut Test ---');
  const exploreLink = page1440.locator('a[aria-label="Explore Capabilities"]').first();
  const exploreHref = await exploreLink.getAttribute('href');
  const exploreText = await exploreLink.innerText();
  console.log(`Explore Capabilities link text: "${exploreText.trim()}" | href: "${exploreHref}"`);
  const fakeSearchButtonCount = await page1440.locator('button[aria-label*="Search"]').count();
  console.log(`Fake search button count in header: ${fakeSearchButtonCount}`);

  const passedExploreShortcut = exploreHref === '#services' && fakeSearchButtonCount === 0;

  // 3. Desktop Header Balance at 1440px
  console.log('\n--- 3. Desktop Header Balance at 1440px ---');
  const phoneVisible1440 = await page1440.locator('a[aria-label="Call Infatoz Technologies"]').isVisible();
  const milestoneVisible1440 = await page1440.locator('text=Idea to Impact™').first().isVisible();
  console.log(`Phone number visible at 1440px: ${phoneVisible1440}`);
  console.log(`Milestone badge visible at 1440px: ${milestoneVisible1440}`);

  // 4. Tech Ecosystem Domain Groups & Scanning Test
  console.log('\n--- 4. Tech Ecosystem 4-Domain Rendering ---');
  const domainHeaders = await page1440.locator('#tech-ecosystem-heading + p + div h3, section[aria-labelledby="tech-ecosystem-heading"] h3').allInnerTexts();
  console.log('Domain groups found:', domainHeaders);

  const techNames = await page1440.locator('section[aria-labelledby="tech-ecosystem-heading"] h4').allInnerTexts();
  console.log(`Total technologies rendered: ${techNames.length}`);
  console.log('Technologies:', techNames);

  const expectedDomains = ['cloud and devops', 'frontend and mobile', 'backend and erp', 'data and ai'];
  const domainHeadersLower = domainHeaders.map(d => d.toLowerCase());
  const passedTechEcosystem = expectedDomains.every(d => domainHeadersLower.includes(d)) && techNames.length === 10;

  // 5. Verify Hero Slider hotfix still advances
  console.log('\n--- 5. Verify Hero Slider Hotfix Continuity ---');
  const initialHeroCounter = await page1440.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Hero counter at start: ${initialHeroCounter}`);
  console.log('Waiting 7.5s to verify rotation...');
  await page1440.waitForTimeout(7500);
  const rotatedHeroCounter = await page1440.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Hero counter after 7.5s: ${rotatedHeroCounter}`);
  const passedHeroAutoplay = initialHeroCounter !== rotatedHeroCounter;

  await page1440.close();
  await browser.close();
  server.close();

  console.log('\n======================================================');
  console.log('              PHASE 2B VALIDATION SUMMARY             ');
  console.log('======================================================');
  console.log('1. Mega menu dropdown flush before and after scroll (0px gap):', passedMegaMenuAlignment ? 'PASS' : 'FAIL');
  console.log('2. Search icon replaced with Explore Capabilities (#services):', passedExploreShortcut ? 'PASS' : 'FAIL');
  console.log('3. Desktop header balanced at 1440px (phone & badge visible):', phoneVisible1440 && milestoneVisible1440 ? 'PASS' : 'FAIL');
  console.log('4. Tech ecosystem organized into 4 domain groups (10 techs):', passedTechEcosystem ? 'PASS' : 'FAIL');
  console.log('5. Hero slider hotfix confirmed active & advancing:', passedHeroAutoplay ? 'PASS' : 'FAIL');
}

runPhase2BTests().catch(err => {
  console.error(err);
  process.exit(1);
});
