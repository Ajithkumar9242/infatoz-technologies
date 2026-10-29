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

function startServer(port = 5800) {
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

async function validate() {
  const server = await startServer(5800);
  console.log('Static test server started on http://localhost:5800');

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.goto('http://localhost:5800/', { waitUntil: 'networkidle' });

  // 1. Initial State Check
  console.log('\n--- 1. Initial State Check ---');
  let h1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1').innerText();
  let subtitle = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1 + p').innerText();
  let counter = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Slide 1: "${h1}" | Subtitle: "${subtitle}" | Counter: ${counter}`);

  const passedInitial = counter.trim().includes('01 / 03') && h1.includes('Driving Business Growth Through Technology');

  // 2. Autoplay: Wait 7.5s for Slide 2
  console.log('\n--- 2. Autoplay to Slide 2 (waiting 7.5s) ---');
  await page.waitForTimeout(7500);
  h1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1').innerText();
  subtitle = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1 + p').innerText();
  counter = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Slide 2: "${h1}" | Subtitle: "${subtitle}" | Counter: ${counter}`);

  const passedSlide2 = counter.trim().includes('02 / 03') && h1.includes('Web, Mobile & Enterprise ERP Automation');

  // 3. Autoplay: Wait another 7.5s for Slide 3
  console.log('\n--- 3. Autoplay to Slide 3 (waiting 7.5s) ---');
  await page.waitForTimeout(7500);
  h1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1').innerText();
  subtitle = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1 + p').innerText();
  counter = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Slide 3: "${h1}" | Subtitle: "${subtitle}" | Counter: ${counter}`);

  const passedSlide3 = counter.trim().includes('03 / 03') && h1.includes('Cloud Migration, AI & Digital Growth Services');

  // 4. Autoplay: Wait another 7.5s for Loop back to Slide 1
  console.log('\n--- 4. Autoplay Loop back to Slide 1 (waiting 7.5s) ---');
  await page.waitForTimeout(7500);
  h1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] h1').innerText();
  counter = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Loop back to Slide 1: "${h1}" | Counter: ${counter}`);

  const passedLoop = counter.trim().includes('01 / 03');

  // 5. Keyboard Focus Pausing Check
  console.log('\n--- 5. Keyboard Focus Pausing Check ---');
  // Press Tab from the top to focus into the hero section CTAs
  await page.keyboard.press('Tab'); // focus skip link or header
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');

  // Focus directly into primary hero CTA using keyboard Tab
  const heroPrimaryBtn = page.locator('section[aria-label="Enterprise Capabilities Showcase"] a, section[aria-label="Enterprise Capabilities Showcase"] button').first();
  await heroPrimaryBtn.focus();

  // Emulate keydown to simulate keyboard navigation state
  await page.keyboard.press('Tab'); // Moves focus to secondary CTA inside hero
  
  const focusedTextBeforeWait = await page.evaluate(() => document.activeElement ? document.activeElement.innerText : 'none');
  const slideBeforeWait = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Focused element: "${focusedTextBeforeWait.trim()}" | Counter: ${slideBeforeWait}`);
  console.log('Waiting 8 seconds while keyboard focus is active inside hero...');
  await page.waitForTimeout(8000);

  const slideAfterWait = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Counter after 8s with focus held: ${slideAfterWait}`);
  const passedFocusPause = slideBeforeWait === slideAfterWait;

  // 6. Focus Leave & Autoplay Resume Check
  console.log('\n--- 6. Focus Leave & Resume Check ---');
  // Focus an element outside the hero section (e.g. skip link or footer or body)
  await page.evaluate(() => {
    document.body.focus();
    if (document.activeElement) document.activeElement.blur();
  });
  console.log('Focus removed from hero. Waiting 8 seconds for rotation to resume...');
  await page.waitForTimeout(8000);
  const slideAfterResume = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Counter after resume: ${slideAfterResume}`);
  const passedResume = slideAfterWait !== slideAfterResume;

  // 7. Manual Slide Selection
  console.log('\n--- 7. Manual Slide Selection & Pause Button Check ---');
  const pauseBtn = page.locator('button[aria-label="Pause carousel"]');
  await pauseBtn.click();
  console.log('Clicked Pause button.');
  const pausedSlide = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  await page.waitForTimeout(8000);
  const stillPausedSlide = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Slide before wait: ${pausedSlide} | After 8s: ${stillPausedSlide}`);
  const passedPauseBtn = pausedSlide === stillPausedSlide;

  // Resume play
  const playBtn = page.locator('button[aria-label="Play carousel"]');
  await playBtn.click();
  console.log('Clicked Play button.');

  // Manual select slide 3
  const slide3Tab = page.locator('button[aria-label="Switch to slide 3"]');
  await slide3Tab.click();
  const manualSlide = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Manually switched to slide 3: ${manualSlide}`);
  const passedManual = manualSlide.includes('03 / 03');

  // 8. Reduced Motion Check
  console.log('\n--- 8. Reduced Motion Emulation Check ---');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload({ waitUntil: 'networkidle' });
  const reducedMotionSlide1 = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Reduced motion initial slide: ${reducedMotionSlide1}`);
  console.log('Waiting 8 seconds with reduced motion enabled...');
  await page.waitForTimeout(8000);
  const reducedMotionSlideAfter = await page.locator('section[aria-label="Enterprise Capabilities Showcase"] span.font-mono').innerText();
  console.log(`Reduced motion slide after 8s: ${reducedMotionSlideAfter}`);
  const passedReducedMotion = reducedMotionSlide1 === reducedMotionSlideAfter;

  await page.close();
  await browser.close();
  server.close();

  console.log('\n========================================');
  console.log('         VALIDATION SUMMARY            ');
  console.log('========================================');
  console.log('1. Initial slide loaded (01 / 03):', passedInitial ? 'PASS' : 'FAIL');
  console.log('2. Auto-advances to slide 2 after 7s (02 / 03):', passedSlide2 ? 'PASS' : 'FAIL');
  console.log('3. Auto-advances to slide 3 after 7s (03 / 03):', passedSlide3 ? 'PASS' : 'FAIL');
  console.log('4. Auto-loops back to slide 1 (01 / 03):', passedLoop ? 'PASS' : 'FAIL');
  console.log('5. Keyboard focus pauses autoplay (including Tab move):', passedFocusPause ? 'PASS' : 'FAIL');
  console.log('6. Leaving hero resumes autoplay:', passedResume ? 'PASS' : 'FAIL');
  console.log('7. Manual controls & pause/play work reliably:', passedPauseBtn && passedManual ? 'PASS' : 'FAIL');
  console.log('8. prefers-reduced-motion respected (no autoplay):', passedReducedMotion ? 'PASS' : 'FAIL');
  console.log('9. Zero browser console errors:', consoleErrors.length === 0 ? 'PASS' : `FAIL (${consoleErrors.length} errors)`);
}

validate().catch(err => {
  console.error(err);
  process.exit(1);
});
