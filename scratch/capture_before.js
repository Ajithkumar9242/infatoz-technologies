const { chromium } = require('playwright');

async function captureInfatozBefore() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  
  // Desktop
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  try {
    await page.goto('https://infatoz.netlify.app/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'scratch/infatoz-before-desktop.png', fullPage: false });
    await page.screenshot({ path: 'scratch/infatoz-before-desktop-full.png', fullPage: true });
    console.log('Infatoz before desktop saved');
  } catch (e) {
    console.error('Error fetching netlify:', e.message);
  }

  // Mobile
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobilePage = await mobileContext.newPage();
  try {
    await mobilePage.goto('https://infatoz.netlify.app/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await mobilePage.waitForTimeout(3000);
    await mobilePage.screenshot({ path: 'scratch/infatoz-before-mobile.png', fullPage: false });
    console.log('Infatoz before mobile saved');
  } catch (e) {
    console.error('Error fetching mobile netlify:', e.message);
  }

  await browser.close();
}

captureInfatozBefore().catch(console.error);
