const http = require('http');
const dayjs = require('dayjs');

const PORT = 3000;

function gonder(res, durum, tur, icerik, ekBasliklar = {}) {
  res.writeHead(durum, { 'Content-Type': tur + '; charset=utf-8', ...ekBasliklar });
  res.end(icerik);
}

const sunucu = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method !== 'GET') {
    gonder(res, 405, 'text/plain', 'Bu yöntem desteklenmiyor', { Allow: 'GET' });
    return;
  }

  if (req.url === '/') {
    const sayfa = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>BMH231 Ödev 1</title>
</head>
<body>
  <h1>BMH231 Web Programlama Ödevi</h1>
  <p><a href="/hakkimda">Hakkımda</a></p>
</body>
</html>`;
    gonder(res, 200, 'text/html', sayfa);
    return;
  }

  if (req.url === '/api/ders') {
    const ders = { kod: 'BMH231', ad: 'Web Programlama', gun: 'Cuma' };
    gonder(res, 200, 'application/json', JSON.stringify(ders));
    return;
  }

  if (req.url === '/api/agep') {
    const sonTeslim = dayjs('2026-11-01');
    const bugun = dayjs();
    const kalanGun = sonTeslim.startOf('day').diff(bugun.startOf('day'), 'day');
    const yanit = { son_teslim: '01.11.2026', kalan_gun: kalanGun };
    gonder(res, 200, 'application/json', JSON.stringify(yanit));
    return;
  }

  gonder(res, 404, 'text/plain', 'Sayfa bulunamadı');
});

sunucu.listen(PORT, () => {
  console.log('Sunucu http://localhost:' + PORT + ' adresinde çalışıyor');
});