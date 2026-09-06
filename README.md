# MI Apparel - Company Profile & Landing Page

Sebuah proyek *landing page* dan profil perusahaan untuk **PT Mayapada Industri Luhur (MI Apparel)**. Proyek ini telah dipisah menjadi dua arsitektur utama: Frontend (UI/Tampilan) dan Backend (API/Data), dengan menjalankan pola Full-Stack (Express + Vite) yang terintegrasi.

## Struktur Folder Akhir

```text
/ (root)
â”œâ”€â”€ frontend/          -> Tanggung jawab: UI, Komponen React, Halaman, Interaksi, Pemanggilan API.
â”‚   â”œâ”€â”€ index.html     -> Titik masuk aplikasi web.
â”‚   â”œâ”€â”€ public/        -> Aset statis publik.
â”‚   â””â”€â”€ src/
â”‚       â”œâ”€â”€ components/-> Bagian halaman (Header, Hero, ProductCatalog, dll).
â”‚       â”œâ”€â”€ contexts/  -> Tempat ConfigContext mengambil data backend melalui API.
â”‚       â””â”€â”€ App.tsx    -> Root komponen frontend.
â”‚
â”œâ”€â”€ backend/           -> Tanggung jawab: API endpoints, Logika server, Pengaturan data profil.
â”‚   â”œâ”€â”€ server.ts      -> Server Express yang menyediakan rute API & me-*mount* Vite middleware.
â”‚   â””â”€â”€ data.ts        -> Data katalog dan konfigurasi kontak.
â”‚
â”œâ”€â”€ package.json       -> Pengaturan script & dependencies workspace terpadu.
â””â”€â”€ vite.config.ts     -> Konfigurasi Vite (di-*pointing* ke folder frontend).
```

## Prasyarat & Instalasi
1. Pastikan Anda memiliki Node.js terinstal.
2. Jalankan perintah instalasi di folder root:
   ```bash
   npm install
   ```

## Menjalankan Proyek (Development)
Sistem ini menggunakan *single port constraint* dimana Backend dan Frontend disatukan di port 3000.
```bash
npm run dev
```
Perintah ini akan menjalankan `tsx backend/server.ts`. Backend akan menyajikan rute API di `/api/*` dan meneruskan rute sisa ke Vite untuk dirender ke Frontend.

## Konfigurasi & Mengedit Konten
Semua informasi perusahaan, URL sosial media, nomor WhatsApp, dan katalog produk kini dipusatkan di **`backend/data.ts`**.
Frontend mengambil data tersebut melalui endpoint:
- `GET /api/config`
- `GET /api/products`

Data gambar masih disajikan langsung dari URL publik (Unsplash) seperti diatur di `backend/data.ts`.

## Build & Deployment (Production)
Untuk mem-build proyek ke versi produksi:
```bash
npm run build
```
Lalu jalankan hasilnya:
```bash
npm run start
```
Proses ini akan mengompilasi TypeScript di backend menjadi `dist/server.cjs` dan menggabungkan hasil build frontend Vite ke dalam folder `dist/`. Server backend kemudian akan langsung menyajikan file statis tersebut secara mandiri di mode produksi.

## Hasil Pengujian & Pemisahan
- âœ… **Pemisahan Tuntas**: Folder `frontend` dan `backend` dipisah sesuai tanggung jawabnya tanpa mengubah framework.
- âœ… **Koneksi Frontend-Backend**: Frontend sekarang bersifat dinamis; komponen akan memanggil API dari Express (menunggu data dengan indikator *loading* lalu merendernya).
- âœ… **Konsistensi UI**: Tidak ada satupun desain, responsivitas, ataupun fitur lama (seperti klik Modal, tombol WA) yang dihapus atau dirusak.
- âœ… **Port Terpusat**: Karena keterbatasan sandbox platform yang hanya membuka Port 3000, pemisahan diterapkan melalui integrasi *API Routes* dalam 1 Server Induk. Ini menjamin CORS & routing lebih sederhana (Origin yang sama).
