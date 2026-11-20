# LSP UNINDRA — Sistem Informasi Sertifikasi Profesi

Aplikasi web Sistem Informasi Sertifikasi Profesi untuk **Lembaga Sertifikasi Profesi (LSP P1) Universitas Indraprasta PGRI (UNINDRA)** berbasis standar **BNSP** dan **SKKNI**.

---

## Fitur Utama

### 1. Portal Publik & Autentikasi
- **Landing Page Publik**: Informasi profil LSP UNINDRA, daftar skema sertifikasi aktif, alur sertifikasi, dan akses cepat pendaftaran skema.
- **Login Multi-Role (`LoginPage`)**: Mendukung simulasi masuk berdasarkan peran:
  - **Admin / Manajemen LSP** (`admin.lsp`)
  - **Asesor Kompetensi** (`hendra.asesor`)
  - **Asesi / Mahasiswa** (`202243500123`)

### 2. Dashboard Manajemen Terintegrasi (`DashboardOverview`)
- Ringkasan statistik pendaftaran asesi, pelaksanaan uji kompetensi, jadwal aktif, dan sertifikat terbit.
- Akses cepat ke modul **Ujian Online (CBT)** dan formulir pelaksanaan asesmen.

### 3. Ujian Kompetensi Online / CBT (`UjianOnlineView`)
- **Daftar Paket Skema Ujian**: Dukungan berbagai skema (mis. *Junior Web Developer*, *Administrator Jaringan & Sistem Informasi*) lengkap dengan durasi, jumlah soal, dan *passing grade*.
- **Mode Ujian Interaktif**:
  - Timer hitung mundur otomatis (*auto-submit* saat waktu habis).
  - Navigasi nomor soal, penanda jawaban (*Sudah Dijawab*, *Ragu-ragu*, *Belum Dijawab*).
  - Modal konfirmasi sebelum pengiriman jawaban.
- **Auto-Grading & Pembahasan MUK**: Perhitungan skor otomatis, status rekomendasi **Kompeten (K)** / **Belum Kompeten (BK)**, serta pembahasan per unit SKKNI.
- **Monitoring Asesor (Proctoring)**: Simulasi pemantauan peserta secara langsung (sisa waktu, progres soal, status kamera, dan deteksi pelanggaran tab).

### 4. Master Data (`MasterDataTable`)
Pengelolaan data referensi lengkap dengan fitur pencarian, tambah/edit data, dan ekspor Excel:
- Data User & Hak Akses
- Data Asesi (Peserta)
- Data Asesor Kompetensi (MET BNSP)
- Skema Sertifikasi
- Unit Kompetensi, Elemen Kompetensi, KUK, Kelompok Kerja, dan Master MUK
- Tempat Uji Kompetensi (TUK)

### 5. Pelaksanaan Asesmen & Formulir BNSP
- **APL 01**: Formulir Permohonan Sertifikasi Kompetensi
- **FR.MAPA.01**: Perencanaan Aktivitas dan Proses Asesmen
- **FR.MAPA.02**: Peta Instrumen Asesmen Hasil Pendekatan & Perencanaan Asesmen
- Modul instrumen lanjutan: Jadwal Uji, Pendaftaran Asesi, APL 02, AK 01, IA 01–IA 05, Umpan Balik Asesi, dan Keputusan Asesmen (K/BK).

### 6. Sertifikat & Pelaporan
- **Sertifikat (`SertifikatView`)**: Manajemen penerbitan, nomor registrasi, status sertifikat, dan verifikasi QR Code.
- **Laporan (`LaporanView`)**: Rekapitulasi dan filter laporan pelaksanaan asesmen berdasarkan tahun, bulan, asesor, skema, TUK, dan status.

---

## Teknologi yang Digunakan

- **Frontend**: React 19, TypeScript, Vite 6
- **Styling & UI**: Tailwind CSS v4 (`@tailwindcss/vite`), Lucide React (`lucide-react`), Motion (`motion`)
- **Backend/Runtime Tools**: Express, `tsx`, `@google/genai`

---

## Struktur Direktori Utama

```text
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── App.tsx                       # Entry routing & manajemen tampilan utama
    ├── main.tsx                      # Mount point React
    ├── index.css                     # Konfigurasi global Tailwind CSS
    ├── types.ts                      # Definisi tipe TypeScript (User, Skema, Asesi, APL01, MAPA, Sertifikat, dll.)
    ├── data/
    │   └── mockData.ts               # Data awal skema, asesi, asesor, TUK, dan jadwal
    └── components/
        ├── auth/LoginPage.tsx        # Halaman login multi-role
        ├── common/Header.tsx         # Header navigasi publik
        ├── dashboard/
        │   ├── DashboardLayout.tsx   # Kerangka sidebar & topbar dashboard
        │   ├── DashboardOverview.tsx # Ringkasan statistik utama
        │   └── MasterDataTable.tsx   # Tabel CRUD & ekspor data master
        ├── exam/
        │   └── UjianOnlineView.tsx   # Modul Ujian Kompetensi Online (CBT & Proctoring)
        ├── forms/
        │   ├── APL01Form.tsx         # Formulir FR.APL.01
        │   ├── FRMAPA01Form.tsx      # Formulir FR.MAPA.01
        │   └── FRMAPA02Form.tsx      # Formulir FR.MAPA.02
        ├── landing/LandingPage.tsx   # Halaman depan publik
        ├── laporan/LaporanView.tsx   # Halaman laporan & rekapitulasi
        └── sertifikat/SertifikatView.tsx # Halaman manajemen sertifikat
```

---

## Menjalankan Proyek Secara Lokal

1. **Instalasi dependensi**
   ```bash
   npm install
   ```

2. **Menjalankan server pengembangan** (berjalan di port `3000`)
   ```bash
   npm run dev
   ```

3. **Pengecekan TypeScript (`lint`) & Build produksi**
   ```bash
   npm run lint
   npm run build
   ```
