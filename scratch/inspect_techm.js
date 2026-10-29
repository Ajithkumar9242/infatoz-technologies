const { chromium } = require('playwright');
const fs = require('fs');

async function inspect() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  console.log('Navigating to Tech Mahindra...');
  try {
    await page.goto('https://www.techmahindra.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    // wait a little bit for scripts to settle
    await page.waitForTimeout(4000);
  } catch (e) {
    console.error('Error navigating:', e.message);
  }

  // Take desktop screenshot
  await page.screenshot({ path: 'scratch/techm-desktop.png', fullPage: false });
  console.log('Desktop top screenshot saved');

  // Also take full page screenshot or top 4000px
  await page.screenshot({ path: 'scratch/techm-desktop-full.png', fullPage: true });
  console.log('Desktop full page screenshot saved');

  // Extract page structure, sections, classes, headings, etc.
  const pageData = await page.evaluate(() => {
    const header = document.querySelector('header');
    const headerInfo = header ? {
      tag: header.tagName,
      className: header.className,
      rect: header.getBoundingClientRect(),
      navLinks: Array.from(header.querySelectorAll('a')).map(a => ({
        text: a.innerText.trim(),
        href: a.href,
        className: a.className
      })).filter(x => x.text)
    } : null;

    // Get main sections
    const main = document.querySelector('main') || document.querySelector('#main-content') || document.body;
    // Find all prominent sections or div containers on the page
    const sections = Array.from(document.querySelectorAll('body > div, main > section, section, .view, .block, [class*="section"], [class*="hero"], [class*="banner"]')).map(el => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        tag: el.tagName,
        id: el.id,
        className: el.className,
        rect: { top: rect.top, height: rect.height, width: rect.width },
        bg: style.backgroundColor,
        bgImg: style.backgroundImage,
        color: style.color,
        h1: Array.from(el.querySelectorAll('h1')).map(h => h.innerText.trim()).filter(Boolean),
        h2: Array.from(el.querySelectorAll('h2')).map(h => h.innerText.trim()).filter(Boolean),
        h3: Array.from(el.querySelectorAll('h3')).map(h => h.innerText.trim()).filter(Boolean),
        sampleText: el.innerText ? el.innerText.slice(0, 200).replace(/\s+/g, ' ').trim() : ''
      };
    }).filter(s => s.rect.height > 50 && s.rect.width > 200);

    // Get typography styles
    const bodyStyle = window.getComputedStyle(document.body);
    const h1Sample = document.querySelector('h1');
    const h1Style = h1Sample ? window.getComputedStyle(h1Sample) : null;
    const h2Sample = document.querySelector('h2');
    const h2Style = h2Sample ? window.getComputedStyle(h2Sample) : null;

    // Footer info
    const footer = document.querySelector('footer');
    const footerInfo = footer ? {
      className: footer.className,
      rect: footer.getBoundingClientRect(),
      bg: window.getComputedStyle(footer).backgroundColor,
      text: footer.innerText.slice(0, 500)
    } : null;

    return {
      title: document.title,
      headerInfo,
      typography: {
        bodyFont: bodyStyle.fontFamily,
        h1Font: h1Style ? { font: h1Style.fontFamily, size: h1Style.fontSize, weight: h1Style.fontWeight, line: h1Style.lineHeight, color: h1Style.color } : null,
        h2Font: h2Style ? { font: h2Style.fontFamily, size: h2Style.fontSize, weight: h2Style.fontWeight, line: h2Style.lineHeight, color: h2Style.color } : null
      },
      sections: sections.slice(0, 30),
      footerInfo
    };
  });

  fs.writeFileSync('scratch/techm_data.json', JSON.stringify(pageData, null, 2));
  console.log('techm_data.json written');

  // Mobile viewport
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 390, height: 844 });
  await mobilePage.goto('https://www.techmahindra.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await mobilePage.waitForTimeout(3000);
  await mobilePage.screenshot({ path: 'scratch/techm-mobile.png', fullPage: false });
  await mobilePage.screenshot({ path: 'scratch/techm-mobile-full.png', fullPage: true });
  console.log('Mobile screenshots saved');

  await browser.close();
}

inspect().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
