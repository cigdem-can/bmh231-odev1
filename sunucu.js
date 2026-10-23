const http = require('http');

const PORT = 3000;

const sunucu = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Sunucu çalışıyor');
});

sunucu.listen(PORT, () => {
  console.log('Sunucu http://localhost:' + PORT + ' adresinde çalışıyor');
});