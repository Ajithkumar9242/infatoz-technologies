const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const viewports = [
  { name: 'mobile-320', width: 320, height: 640 },
  { name: 'mobile-360', width: 360, height: 740 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'wide-1920', width: 1920, height: 1080 }
];

async function run() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });

  const overflowResults = [];

  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1
    });

    console.log(`Loading http://localhost:3001 at ${vp.width}x${vp.height}...`);
    try {
      await page.goto('http://localhost:3001', { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1000);

      // Check horizontal overflow
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const bodyWidth = document.body.scrollWidth;
        const winWidth = window.innerWidth;
        const maxScroll = Math.max(docWidth, bodyWidth);
        const hasOverflow = maxScroll > winWidth;

        // Find elements causing overflow if any
        let offending = [];
        if (hasOverflow) {
          document.querySelectorAll('*').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.right > winWidth + 1) {
              offending.push({
                tag: el.tagName,
                className: el.className,
                id: el.id,
                right: rect.right,
                width: rect.width
              });
            }
          });
        }
        return { docWidth, bodyWidth, winWidth, hasOverflow, offending: offending.slice(0, 5) };
      });

      overflowResults.push({ viewport: vp.name, ...overflow });

      // Take screenshot of hero/above fold and full page for key viewports
      if (['mobile-390', 'desktop-1440', 'tablet-768'].includes(vp.name)) {
        await page.screenshot({
          path: path.join(__dirname, `infatoz-redesign-${vp.name}-hero.png`),
          fullPage: false
        });
        await page.screenshot({
          path: path.join(__dirname, `infatoz-redesign-${vp.name}-full.png`),
          fullPage: true
        });
      }
    } catch (err) {
      console.error(`Error loading viewport ${vp.name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  // Also test Mobile Navigation Drawer at 390px
  const drawerPage = await browser.newPage({
    viewport: { width: 390, height: 844 }
  });
  try {
    await drawerPage.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    await drawerPage.waitForTimeout(1000);
    // Click hamburger button
    const menuBtn = await drawerPage.$('button[aria-label*="navigation"], button[aria-label*="menu"]');
    if (menuBtn) {
      await menuBtn.click();
      await drawerPage.waitForTimeout(500);
      await drawerPage.screenshot({
        path: path.join(__dirname, 'infatoz-redesign-mobile-drawer.png')
      });
      console.log('Mobile drawer screenshot captured.');
    }
  } catch (err) {
    console.error('Drawer capture error:', err.message);
  } finally {
    await drawerPage.close();
  }

  // Also test Desktop Megamenu at 1440px
  const megaPage = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  try {
    await megaPage.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    await megaPage.waitForTimeout(1000);
    // Hover over Capabilities navigation button
    const capBtn = await megaPage.$('button:has-text("Capabilities")');
    if (capBtn) {
      await capBtn.hover();
      await megaPage.waitForTimeout(500);
      await megaPage.screenshot({
        path: path.join(__dirname, 'infatoz-redesign-desktop-megamenu.png')
      });
      console.log('Desktop megamenu screenshot captured.');
    }
  } catch (err) {
    console.error('Megamenu capture error:', err.message);
  } finally {
    await megaPage.close();
  }

  await browser.close();

  fs.writeFileSync(
    path.join(__dirname, 'overflow-results.json'),
    JSON.stringify(overflowResults, null, 2)
  );
  console.log('Finished capturing screenshots & overflow report.');
  console.log(JSON.stringify(overflowResults, null, 2));
}

run();
