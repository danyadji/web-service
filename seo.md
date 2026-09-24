# Analytics & SEO — Web Jasa Pembuatan Website UMKM

Dokumen acuan untuk setup analitik dan strategi peningkatan SEO. Dibagi jadi: setup sekali di awal, dan monitoring rutin.

## 1. Tools yang Dipasang

### A. Web Analytics (traffic & behavior)
| Tool | Fungsi | Biaya |
|---|---|---|
| **Google Analytics 4 (GA4)** | Traffic, sumber pengunjung (organic/social/direct), halaman populer, bounce rate | Gratis |
| **Google Search Console** | Keyword yang memunculkan web di Google, posisi ranking, status index/error | Gratis — tool paling penting untuk SEO |
| **Microsoft Clarity** | Heatmap + session recording (lihat perilaku user, kenapa tidak submit form) | Gratis |

### B. Business/Lead Analytics (dari tabel `leads` sendiri)
Dibangun sebagai dashboard di admin panel Filament:
- Leads per bulan (trend)
- Leads per kota (validasi jangkauan nasional)
- Leads per layanan (Landing Page / Company Profile / E-commerce)
- Leads per tier paket (Basic/Essential/Custom)
- Conversion funnel: lihat Layanan → isi form → klik WA → deal
- Breakdown status leads (new/contacted/deal/closed)

### C. SEO Tools Tambahan
| Tool | Fungsi | Biaya | Prioritas |
|---|---|---|---|
| Google Search Console | Core SEO monitoring | Gratis | Wajib |
| Google Keyword Planner | Riset volume pencarian keyword | Gratis (butuh akun Google Ads, tidak perlu jalankan campaign) | Wajib |
| PageSpeed Insights / Core Web Vitals | Cek kecepatan & performa (faktor ranking) | Gratis | Wajib |
| Google Business Profile | Local SEO, muncul di Google Maps, kumpulkan review | Gratis | Wajib |
| Ubersuggest | Riset keyword lebih detail, cek kompetitor | Berbayar (murah) | Opsional, susul kalau budget ada |
| Ahrefs / Semrush | Riset keyword mendalam, backlink analysis | Berbayar (mahal) | Opsional, untuk fase scale-up |

## 2. Setup Sekali di Awal (Checklist Implementasi)

- [ ] Pasang GA4 tracking code di semua halaman (via Google Tag Manager direkomendasikan, biar gampang tambah tool lain nanti)
- [ ] Daftar & verifikasi domain di Google Search Console
- [ ] Submit `sitemap.xml` ke Search Console
- [ ] Pasang Microsoft Clarity tracking code
- [ ] Daftar Google Business Profile, isi lengkap (kategori bisnis, area layanan nasional, foto, deskripsi)
- [ ] Setup `robots.txt` yang benar (jangan sampai block halaman penting)
- [ ] Pastikan SSR benar-benar jalan — cek via "View Page Source", konten harus muncul di HTML mentah (bukan cuma div kosong yang di-render JS)
- [ ] Setup meta title/description dinamis per halaman (Home, Layanan, tiap Portofolio, tiap Blog post)
- [ ] Setup Open Graph tags (og:title, og:image, og:description) — penting karena leads sering share link ke rekan/tim
- [ ] Cek Mobile-Friendly Test (Google) — pastikan lolos
- [ ] Cek PageSpeed Insights, target skor hijau di Core Web Vitals (LCP, INP, CLS)
- [ ] Riset keyword awal (pakai Keyword Planner) — buat daftar 10-15 keyword target sebagai basis konten blog

## 3. Keyword Target Awal (Contoh — sesuaikan hasil riset asli)
- "jasa pembuatan website UMKM" (kompetisi tinggi, target jangka panjang)
- "jasa website company profile murah" (lebih spesifik, lebih mudah bersaing)
- "harga jasa buat toko online" (long-tail, biasanya konversi lebih tinggi)
- "jasa landing page bisnis"
- "jasa buat website cafe"
- *(lengkapi setelah riset Keyword Planner/Ubersuggest)*

## 4. Strategi Konten (Ongoing)
- Target minimal **1 artikel blog per minggu** di 2-3 bulan pertama — konsistensi lebih penting daripada volume besar sekaligus
- Tiap artikel: incorporate 1 keyword target, internal link ke halaman Layanan/Portofolio terkait
- Halaman portofolio: tulis deskripsi unik per project (bukan cuma gambar) — bantu index & keyword coverage
- Dorong klien share portofolio mereka sendiri (dapat exposure + potensi backlink natural)

## 5. Off-page SEO
- Daftar ke direktori bisnis lokal/nasional (gratis)
- Kolaborasi/artikel tamu dengan komunitas UMKM
- Aktif di media sosial dengan link balik ke web (bukan untuk ranking langsung, tapi bangun sinyal brand)

## 6. Monitoring Rutin (Checklist Bulanan)
- [ ] Cek Search Console: keyword baru yang muncul, perubahan posisi ranking, error crawl/index
- [ ] Cek GA4: sumber traffic paling efektif, halaman dengan bounce rate tinggi
- [ ] Cek dashboard Leads: apakah traffic organik berkontribusi ke leads asli, breakdown per kota/layanan/tier
- [ ] Cek PageSpeed Insights ulang (terutama setelah ada perubahan besar di web)
- [ ] Review 1-2 artikel lama, update kalau ada info yang outdated (Google suka konten yang di-refresh)
- [ ] Cek review/rating di Google Business Profile, respon kalau ada yang masuk

## 7. Catatan
- SEO nasional butuh waktu — hasil organik biasanya baru terasa signifikan di **bulan 3-6**. Selama masa ini, andalkan juga social media & komunitas untuk leads, jangan hanya mengandalkan SEO
- Jangan keyword stuffing — Google makin pintar deteksi konten yang dipaksakan, prioritaskan konten yang benar-benar membantu (calon) klien
- Data dari dashboard Leads (section 1B) adalah metrik paling jujur — traffic tinggi tidak ada artinya kalau tidak menghasilkan leads