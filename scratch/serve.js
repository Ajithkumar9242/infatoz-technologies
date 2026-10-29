const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const PUBLIC_DIR = path.join(__dirname, '..', 'out');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain',
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';
  if (!path.extname(reqPath)) reqPath += '.html';

  let filePath = path.join(PUBLIC_DIR, reqPath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(PUBLIC_DIR, '404.html');
    if (!fs.existsSync(filePath)) {
      filePath = path.join(PUBLIC_DIR, '_not-found.html');
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server error: ' + err.code);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}/ serving ${PUBLIC_DIR}`);
});
