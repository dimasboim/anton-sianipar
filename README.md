# Profil Dr. Anton Zulkarnain Sianipar, M.Pd

Website profil satu halaman (Next.js) untuk **https://antonzulkarnainsianipar.my.id**.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Mengubah konten

Semua isi profil ada di [`app/data.ts`](app/data.ts). Foto ada di `public/anton.png`.

## Deploy ke Vercel

1. Import repo `dimasboim/anton-sianipar` di https://vercel.com/new (framework otomatis terdeteksi sebagai Next.js).
2. Setelah deploy, buka **Project → Settings → Domains**, tambahkan `antonzulkarnainsianipar.my.id` (dan `www.antonzulkarnainsianipar.my.id`).
3. Atur DNS di registrar domain `.my.id`:
   - `A` record `@` → `76.76.21.21`
   - `CNAME` record `www` → `cname.vercel-dns.com`
   (atau ikuti nilai persis yang ditampilkan Vercel di halaman Domains)
