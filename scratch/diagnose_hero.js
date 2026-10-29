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
}).listen(5678, async () => {
  console.log('Server started on 5678');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));

  await page.goto('http://localhost:5678/', { waitUntil: 'networkidle' });

  const mediaVal = await page.evaluate(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  console.log('prefers-reduced-motion matches:', mediaVal);

  const initialH1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1').innerText();
  const initialCounter = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log('Initial H1:', initialH1);
  console.log('Initial Counter:', initialCounter);

  // Check focused element on page
  const focusedTag = await page.evaluate(() => document.activeElement ? `${document.activeElement.tagName} (${document.activeElement.className})` : 'none');
  console.log('Focused element on page load:', focusedTag);

  console.log('Waiting 8.5 seconds...');
  await page.waitForTimeout(8500);

  const afterH1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1').innerText();
  const afterCounter = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log('H1 after 8.5s:', afterH1);
  console.log('Counter after 8.5s:', afterCounter);

  // Check slide 2 transition
  if (initialH1 === afterH1) {
    console.log('FAIL: Slider did NOT advance automatically!');
  } else {
    console.log('SUCCESS: Slider advanced automatically!');
  }

  await browser.close();
  server.close();
});
