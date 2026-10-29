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
}).listen(5679, async () => {
  console.log('Server started on 5679');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Test 1: Just loading the page with cursor at (200, 200) inside hero
  await page.mouse.move(200, 200);
  await page.goto('http://localhost:5679/', { waitUntil: 'networkidle' });
  
  console.log('--- Test with mouse positioned inside hero (200, 200) ---');
  let h1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1').innerText();
  console.log('At 0s:', h1);
  await page.waitForTimeout(8000);
  h1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1').innerText();
  console.log('At 8s with mouse at (200, 200):', h1);

  // Test 2: Moving mouse outside hero (e.g. at 200, 950)
  console.log('--- Moving mouse to (200, 950) outside hero ---');
  await page.mouse.move(200, 950);
  await page.waitForTimeout(8000);
  h1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1').innerText();
  console.log('At 16s with mouse outside:', h1);

  // Test 3: Clicking on slide indicator or button
  console.log('--- Clicking slide indicator button ---');
  const slide2Btn = page.locator('button[aria-label="Switch to slide 2"]');
  await slide2Btn.click();
  h1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1').innerText();
  console.log('Immediately after clicking slide 2 button:', h1);
  
  // Now move mouse outside hero
  await page.mouse.move(200, 950);
  console.log('Waiting 8.5 seconds after click (mouse outside)...');
  await page.waitForTimeout(8500);
  h1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1').innerText();
  console.log('After 8.5s following button click:', h1);

  await browser.close();
  server.close();
});
