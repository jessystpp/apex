const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// SSE Live reload clients
let sseClients = [];

// Watch directory for changes to trigger live reload
fs.watch(ROOT, { recursive: false }, (eventType, filename) => {
  if (filename && (filename.endsWith('.html') || filename.endsWith('.css') || filename.endsWith('.js'))) {
    console.log(`[Live Reload] File changed: ${filename}. Refreshing connected browsers...`);
    sseClients.forEach(client => client.write('data: reload\n\n'));
  }
});

const LIVE_RELOAD_SNIPPET = `
<!-- Auto Live-Reload Script -->
<script>
  (function() {
    const evtSource = new EventSource("/__live_reload");
    evtSource.onmessage = function(e) {
      if (e.data === "reload") {
        console.log("[Live Reload] Changes detected, reloading page...");
        window.location.reload();
      }
    };
  })();
</script>
`;

const server = http.createServer((req, res) => {
  // SSE endpoint for auto reload
  if (req.url === '/__live_reload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    sseClients.push(res);
    req.on('close', () => {
      sseClients = sseClients.filter(c => c !== res);
    });
    return;
  }

  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const safePath = path.normalize(path.join(ROOT, reqPath));
  if (!safePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Access Denied');
    return;
  }

  fs.readFile(safePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    if (ext === '.html') {
      let htmlStr = data.toString('utf-8');
      if (htmlStr.includes('</body>')) {
        htmlStr = htmlStr.replace('</body>', `${LIVE_RELOAD_SNIPPET}</body>`);
      } else {
        htmlStr += LIVE_RELOAD_SNIPPET;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(htmlStr);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Dev server with Live Reload running at: http://localhost:${PORT}`);
});
