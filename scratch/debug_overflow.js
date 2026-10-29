const { chromium } = require('playwright');

async function debug() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const info = await page.evaluate(() => {
    const winWidth = window.innerWidth;
    const docWidth = document.documentElement.scrollWidth;
    const all = Array.from(document.querySelectorAll('*'));
    const overflowers = all
      .filter(el => el.getBoundingClientRect().right > winWidth + 1)
      .map(el => {
        let parent = el.parentElement;
        const getCls = (e) => typeof e.className === 'string' ? e.className.split(' ').slice(0, 2).join('.') : '';
        let path = [el.tagName + '.' + getCls(el)];
        while (parent && parent !== document.body) {
          path.unshift(parent.tagName + '.' + getCls(parent));
          parent = parent.parentElement;
        }
        return {
          path: path.join(' > '),
          id: el.id,
          rect: {
            left: el.getBoundingClientRect().left,
            right: el.getBoundingClientRect().right,
            width: el.getBoundingClientRect().width
          }
        };
      });

    return { winWidth, docWidth, count: overflowers.length, firstFew: overflowers.slice(0, 10) };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
}

debug();
