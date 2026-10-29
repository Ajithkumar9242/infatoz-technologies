const { chromium } = require('playwright');
const path = require('path');

async function capture() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  // Start the server or load from localhost:3000
  // Since we stopped task-304, let's load file or start a server
}
