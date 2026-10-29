const { chromium } = require('playwright');

async function inspectSections() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  await page.goto('https://www.techmahindra.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);

  // Click accept cookies if present
  try {
    const cookieBtn = await page.$('#onetrust-accept-btn-handler') || await page.$('button:has-text("ACCEPT ALL COOKIES")');
    if (cookieBtn) {
      await cookieBtn.click();
      await page.waitForTimeout(1000);
    }
  } catch(e) {}

  // Let's capture scrolling down screenshot by screenshot to see every section in full fidelity!
  const scrollSteps = [0, 800, 1600, 2400, 3200, 4000, 4800, 5600, 6400, 7200];
  for (let i = 0; i < scrollSteps.length; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollSteps[i]);
    await page.waitForTimeout(800);
    await page.screenshot({ path: `scratch/techm-scroll-${i}.png`, fullPage: false });
  }

  // Hover over one of the nav items to see mega-menu!
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  const capLink = await page.$('a:has-text("CAPABILITIES")') || await page.$('.tb-megamenu-item:nth-child(2) > a');
  if (capLink) {
    await capLink.hover();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'scratch/techm-megamenu.png', fullPage: false });
  }

  await browser.close();
  console.log('Scroll screenshots and megamenu screenshot saved');
}

inspectSections().catch(console.error);
