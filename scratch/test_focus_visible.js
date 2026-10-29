const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  await page.setContent('<button id="btn1">Button 1</button><button id="btn2">Button 2</button>');
  
  // Test click
  await page.click('#btn1');
  const clickFocusVisible = await page.evaluate(() => document.getElementById('btn1').matches(':focus-visible'));
  console.log('On mouse click, matches :focus-visible:', clickFocusVisible);

  // Test tab
  await page.keyboard.press('Tab');
  const tabFocusVisible = await page.evaluate(() => document.getElementById('btn2').matches(':focus-visible'));
  console.log('On Tab press, matches :focus-visible:', tabFocusVisible);

  await browser.close();
})();
