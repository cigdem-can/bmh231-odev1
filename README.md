# BMH231 Ödev 1

Bu proje, BMH231 Web Programlama dersi Ödev 1 için yaptığım küçük bir Node.js web sunucusu. Sunucu Express kullanmadan, sadece Node.js'in `http` modülü ve `dayjs` paketiyle yazıldı. Ödevin amacı Git, GitHub ve npm kullanmayı ve basit bir HTTP sunucusunun nasıl çalıştığını görmek.

## Kurulum ve çalıştırma

Bilgisayarda Git ve Node.js (LTS) kurulu olmalı.

1. Depoyu indir:

   git clone https://github.com/cigdem-can/bmh231-odev1.git

2. Proje klasörüne gir:

   cd bmh231-odev1

3. Paketleri kur:

   npm install

4. Sunucuyu başlat:

   npm start

Sunucu 3000 numaralı portta çalışır. Tarayıcıda http://localhost:3000 adresini açabilirsin.

## Desteklenen yollar

| Yol | Durum kodu | Yanıt |
|---|---|---|
| / | 200 | HTML ana sayfa, /hakkimda bağlantısı var |
| /hakkimda | 200 | HTML, kendimi tanıttığım kısa sayfa |
| /api/ders | 200 | JSON, dersin kodu, adı ve günü |
| /api/agep | 200 | JSON, AGEP son teslim tarihi (01.11.2026) ve bugünden kalan gün sayısı |
| Diğer yollar | 404 | Düz metin, "Sayfa bulunamadı" |
| GET dışındaki yöntemler | 405 | Düz metin, Allow: GET başlığıyla |