const fs = require('fs');
const path = require('path');

function checkHtml(file) {
  console.log('=== Checking ' + file + ' ===');
  const filePath = path.join(__dirname, '..', 'out', file);
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  console.log('Title:', titleMatch ? titleMatch[1] : 'NOT FOUND');

  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                    html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  console.log('Description:', descMatch ? descMatch[1] : 'NOT FOUND');

  const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  console.log('Canonical:', canonMatch ? canonMatch[1] : 'NOT FOUND');

  const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  console.log('og:title:', ogTitleMatch ? ogTitleMatch[1] : 'NOT FOUND');

  const ogDescMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  console.log('og:description:', ogDescMatch ? ogDescMatch[1] : 'NOT FOUND');

  const ogUrlMatch = html.match(/<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']*)["']/i);
  console.log('og:url:', ogUrlMatch ? ogUrlMatch[1] : 'NOT FOUND');

  const twitterCard = html.match(/<meta[^>]*name=["']twitter:card["'][^>]*content=["']([^"']*)["']/i);
  console.log('twitter:card:', twitterCard ? twitterCard[1] : 'NOT FOUND');

  const jsonLdMatch = html.match(/<script type=["']application\/ld\+json["']>([^<]*)<\/script>/);
  if (jsonLdMatch) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      console.log('JSON-LD: Valid JSON-LD schema present!');
      console.log(' - Context:', parsed['@context']);
      console.log(' - Graph items count:', parsed['@graph'] ? parsed['@graph'].length : 1);
      if (parsed['@graph']) {
        parsed['@graph'].forEach(g => {
          console.log('   * @type:', JSON.stringify(g['@type']), '| name:', g.name);
        });
      }
    } catch(e) {
      console.log('JSON-LD parse error:', e.message);
    }
  } else {
    console.log('JSON-LD: NOT FOUND');
  }
  console.log('\n');
}

checkHtml('index.html');
checkHtml('privacy.html');
checkHtml('terms.html');
