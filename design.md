# Design Spec — Web Jasa Pembuatan Website UMKM

Referensi visual: Stallion Landing Page (dokumentasi + screenshot user). Diadaptasi ke konteks jasa website UMKM Indonesia. Bukan clone: struktur dan gaya dipinjam, konten dan klaim dibuat jujur untuk UMKM.

---

## 1. Mood & Gaya Visual

- Modern minimalis + Hangat dan personal. Putih dominan, banyak whitespace, kesan premium tapi ramah untuk pemilik UMKM.
- Sentuhan vibrant di momen kunci: banner highlight oranye penuh + pre-footer playful.
- Dial: ENERGY 2 / RHYTHM 3 / MOTION 2. Design Read: landing jasa website untuk pemilik UMKM Indonesia, bahasa visual agensi modern yang hangat, dial ENERGY 2 / RHYTHM 3 / MOTION 2.

## 2. Palet Warna

### Warna Utama (Primary)
- CTA dan aksen: `#C2410C` (orange-700) untuk teks putih di atasnya, rasio 5.18:1, lolos AA. Alasan: oranye Stallion sebagai momen aksi, digelapkan dari `#EA580C` (yang gagal AA 3.56:1) supaya tombol kecil tetap terbaca.
- Oranye terang `#F97316` hanya dekorasi (ikon, titik label, gradient banner), bukan background teks kecil.

### Warna Sekunder / Pendukung
- Wash biru pastel `#E0F2FE` ke putih di hero saja. Alasan: memberi udara lapang di pembuka, tidak dipakai di section lain supaya aksen tetap satu.

### Background
- Utama: `#FFFFFF` (putih).
- Selang: `#F9FAFB` (abu sangat muda) untuk section portofolio/kontak. Banner highlight: gradient oranye `#FB923C` ke `#EA580C` dengan teks putih besar (teks besar lolos 3:1).

### Teks
- Utama: `#18181B` (zinc-950) di atas putih, rasio 17.72:1.
- Sekunder: `#3F3F46` (zinc-700, bukan abu muda) supaya paragraf tetap lolos AA.

## 3. Tipografi

- Heading: `Plus Jakarta Sans` (600-700, tracking tight). Alasan: sans modern yang ramah Indonesia, tegas untuk headline jasa.
- Aksen artistik: `Playfair Display` italic untuk 1-2 kata penekan per headline (contoh: "naik kelas"). Alasan: meminjam gestur serif italic Stallion sebagai motif identitas.
- Body: `Plus Jakarta Sans` 400-500. Satu keluarga untuk heading dan body supaya hemat dan konsisten.
- Semua dari Google Fonts.

## 4. Referensi Website

1. Stallion Landing Page (screenshot user) — alasan: ritme section bervariasi, hero lapang dengan mockup floating, banner oranye dramatis, kartu layanan berborder halus. Dipinjam polanya, bukan mereknya.

## 5. Komponen & Elemen Visual

### Hero
- Teks tengah (headline, sub, CTA) seperti referensi, lalu strip showcase full-bleed di bawahnya. Background wash gradient biru pastel halus.
- Badge: tanpa pill + dot (hindari badge AI). Diganti baris teks kecil dengan ikon relevan + klaim jujur.
- Showcase: marquee bingkai browser/HP abstrak dari div (bukan screenshot palsu), tiap kartu berlabel tipe layout ("Contoh: Toko Online"). Alasan: belum ada portofolio real (R-38).
- Marquee berhenti saat hover (R-19, tujuan: pengguna sempat membaca tiap kartu) dan nonaktif total saat `prefers-reduced-motion` (ganti scroll horizontal manual).

### Ilustrasi / Gambar
- Tidak pakai ilustrasi stok generik. Visual = mockup UI abstrak + foto kontak jujur menyusul. Alasan: R-22.

### Layanan bernomor (referensi averra.id)
- Kolom kiri sticky: eyebrow uppercase spasi lebar + headline + deskripsi + link garis bawah "Bandingkan jenis layanan". Alasan tracking lebar: meminjam suara editorial referensi sebagai penanda section, dipakai sekali ini saja (R-06).
- Kolom kanan: daftar 01-04, tiap baris ikon garis relevan dalam kotak border + judul + blurb + panah ↗. Alasan panah: tiap baris adalah link ke halaman perbandingan harga (R-08, R-26).
- Background `stone-50` hangat. Alasan: jeda bertekstur antara hero biru dan konten putih, tetap netral (R-29).
### Card Tier per Kategori (referensi screenshot pricing)
- Tab pil kategori di atas (satu aktif solid oranye, sisanya outline). Alasan: pola dari referensi, diterjemahkan ke oranye brand (bukan ungu, R-01).
- 3 kartu tier: nama, harga Rp besar, checklist (ikon cek lingkaran oranye), estimasi, kotak bonus, tombol "Pesan Sekarang".
- Tier `is_highlighted`: kartu solid oranye + teks putih + tombol putih. Alasan: satu momen penekanan, setara peran kartu ungu di referensi. Kontras putih di `#C2410C` 5.18:1, teks oranye di putih 5.18:1.
- Tombol per tier ke `/kontak?paket=slug&tier=Nama`, form prefill "paket X tier Y" dan ikut ke pesan WA.

### Card Paket Layanan
- Border halus, radius sedang konsisten. Tiap kartu: nama, penanda level (misal "Essential · paling dipilih"), deskripsi, harga mulai, estimasi, fitur, CTA ke form kontak. Tanpa badge "Paling Populer" (belum ada data konversi). Hover: angkat 1 level + border menguat, dengan alasan elevasi.
- Kartu ke-5 "Custom" tampil beda: banner horizontal border putus-putus + CTA gelap "Diskusikan kebutuhan". Alasan: komposisi beda menandai aksi beda (konsultasi, bukan pilih harga), bukan sekadar kartu ke-5.

### Animasi & Motion
- MOTION 2: hover states + satu marquee hero dengan tujuan tertulis (memberi kesan portofolio hidup). Tanpa loop lain dan tanpa scroll-reveal template.
- Batas: marquee satu-satunya animasi berjalan; durasi 45 detik per putaran supaya tenang; pause saat hover; hormati `prefers-reduced-motion`.

## 6. Layout & Struktur Halaman

Struktur multi-halaman (tiap item navbar adalah route Inertia sendiri, bukan anchor scroll):

- `/` Home: Hero + Layanan bernomor + Tier per kategori (tab) + HighlightBanner + Portofolio preview (+ link /portofolio) + Pre-footer CTA
- `/layanan`: tab kategori (Landing, Company, Toko, Redesign) + 3 kartu tier per tab + banner Custom + akordeon rincian. `/harga` redirect 301 ke `/layanan`.
- `/tentang`: About + HighlightBanner + Kenapa pilih kami
- `/harga`: 4 kartu paket + akordeon rincian layanan + CTA ke `/kontak?paket=slug` (form terisi otomatis)
- `/portofolio`: grid slot + empty state jujur
- `/kontak`: info + form (prefill paket dari query, fallback WA ke halaman ini bila nomor belum diisi)

### Navbar
- Pil melayang seperti referensi: bar `rounded-full` putih dengan bayangan halus, logo serif miring kiri, menu tengah, CTA pil gelap kanan. Sticky dengan jarak atas. Alasan: pil jadi motif identitas yang menggemakan kartu membulat di hero.
- Mobile: tombol "Menu" berlabel di dalam pil + panel dropdown membulat di bawahnya.

### Footer
- Lengkap tapi ramping: info kontak, tautan section real, teks raksasa brand, bottom bar copyright + kebijakan (placeholder jujur "segera hadir" bila belum ada halaman).

### Yang SENGAJA dihilangkan dari referensi (aturan antislop)
- Logo bar klien: tidak ada logo klien real, jadi tidak ditampilkan (R-18, R-38).
- Statistik 500+/98%/$2M+/15+: tidak ada sumber, jadi tidak ditampilkan (R-17).
- Testimoni James M dan kartu 95%: fiktif untuk projek ini, jadi section testimoni tidak ada sampai ada testimoni real (R-18).
- FAQ generik: tidak dibuat (R-28).

## 7. Nada & Bahasa

- Semi-formal hangat Indonesia: "Kami bantu...", "Ceritakan kebutuhan...". Tanpa em dash, tanpa buzzword (tanpa seamless, revolusioner, cutting edge).
- CTA spesifik per aksi, bukan generik: "Mulai project landing page", "Konsultasi via WhatsApp", "Kirim permintaan konsultasi", "Jadwalkan panggilan gratis".

## 8. Konten yang Sudah Disiapkan

- [ ] Nama brand resmi (sementara `[Nama Brand]`)
- [ ] Tagline final
- [x] Struktur 3 paket (Landing Page, Company Profile, E-commerce) — harga dan fitur masih placeholder
- [ ] Teks Tentang final
- [ ] Nomor WhatsApp CTA (sementara kosong, fallback ke `#kontak`)
- [ ] Logo (sementara wordmark teks)
- [ ] Foto tim / portofolio (belum ada, pakai placeholder jujur)

## 9. Catatan Tambahan

- Tombol CTA oranye wajib `#C2410C` + teks putih (hasil cek kontras). Oranye terang hanya dekorasi.
- Mockup hero dan kartu portofolio dari div hingga ada aset real. Jangan samarkan sebagai produk final.
- Setelah nomor WA, harga, dan 2 portofolio real tersedia, ganti placeholder tanpa ubah struktur komponen.
