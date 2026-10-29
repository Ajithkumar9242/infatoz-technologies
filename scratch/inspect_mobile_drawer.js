const { chromium } = require('playwright');

async function inspectMobileMenu() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();

  await page.goto('https://www.techmahindra.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);

  // Click accept cookies if present
  try {
    const cookieBtn = await page.$('#onetrust-accept-btn-handler');
    if (cookieBtn) await cookieBtn.click();
  } catch(e) {}

  // Click hamburger
  const menuBtn = await page.$('.navbar-toggler') || await page.$('button[aria-label*="navigation"]') || await page.$('.tb-megamenu-button');
  if (menuBtn) {
    await menuBtn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'scratch/techm-mobile-drawer.png' });
  }

  await browser.close();
}

inspectMobileMenu().catch(console.error);
