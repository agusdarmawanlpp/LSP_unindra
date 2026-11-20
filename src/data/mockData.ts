import {
  SkemaSertifikasi,
  Asesi,
  Asesor,
  JadwalUji,
  TUK,
  SertifikatData,
  APL01Data,
  MAPA01Data,
  MAPA02Data
} from '../types';

export const INITIAL_SKEMA: SkemaSertifikasi[] = [
  {
    id: 'SKM-001',
    kodeSkema: 'SKM-INFT-01',
    namaSkema: 'Pemrogram Web (Junior Web Developer)',
    kategori: 'Teknologi Informasi',
    jumlahUnit: 7,
    biaya: 450000,
    status: 'Aktif',
    deskripsi: 'Skema sertifikasi kompetensi untuk jabatan kerja Junior Web Developer tingkat nasional berbasis SKKNI Bidang Pemrograman Web.',
    persyaratan: [
      'Mahasiswa UNINDRA minimal semester 5 prodi Informatika/SI/Pendidikan Informatika',
      'Lulus mata kuliah Pemrograman Web / Algoritma & Pemrograman',
      'Menyerahkan Portofolio Aplikasi Web / Project Mandiri',
      'Pas Foto 3x4 Latar Belakang Merah'
    ],
    unitKompetensiList: [
      { id: 'U-01', kodeUnit: 'J.620100.004.01', judulUnit: 'Menggunakan Struktur Data', standarSkkni: 'SKKNI 2019-282', jumlahElemen: 3 },
      { id: 'U-02', kodeUnit: 'J.620100.009.01', judulUnit: 'Menggunakan Spesifikasi Kode Program', standarSkkni: 'SKKNI 2019-282', jumlahElemen: 2 },
      { id: 'U-03', kodeUnit: 'J.620100.010.01', judulUnit: 'Menerapkan Perintah Pemrograman Dasar', standarSkkni: 'SKKNI 2019-282', jumlahElemen: 4 },
      { id: 'U-04', kodeUnit: 'J.620100.016.01', judulUnit: 'Menulis Kode dengan Prinsip Sesuai Guidelines', standarSkkni: 'SKKNI 2019-282', jumlahElemen: 3 },
      { id: 'U-05', kodeUnit: 'J.620100.017.02', judulUnit: 'Implementasi Algoritma Pemrograman', standarSkkni: 'SKKNI 2019-282', jumlahElemen: 4 },
      { id: 'U-06', kodeUnit: 'J.620100.019.01', judulUnit: 'Melakukan Debugging Program Web', standarSkkni: 'SKKNI 2019-282', jumlahElemen: 2 },
      { id: 'U-07', kodeUnit: 'J.620100.023.01', judulUnit: 'Membuat Dokumen Kode Program', standarSkkni: 'SKKNI 2019-282', jumlahElemen: 2 }
    ]
  },
  {
    id: 'SKM-002',
    kodeSkema: 'SKM-INFT-02',
    namaSkema: 'Pemrogram Mobil (Mobile Application Developer)',
    kategori: 'Teknologi Informasi',
    jumlahUnit: 8,
    biaya: 500000,
    status: 'Aktif',
    deskripsi: 'Sertifikasi kompetensi pengembang aplikasi mobile berbasis Android/iOS mengacu standar industri.',
    persyaratan: [
      'Mahasiswa aktif UNINDRA minimal semester 5',
      'Lulus MK Pemrograman Perangkat Bergerak',
      'Memiliki portofolio APK / Project App'
    ]
  },
  {
    id: 'SKM-003',
    kodeSkema: 'SKM-DKV-01',
    namaSkema: 'Desainer Grafis Muda (Junior Graphic Designer)',
    kategori: 'Desain Komunikasi Visual',
    jumlahUnit: 6,
    biaya: 400000,
    status: 'Aktif',
    deskripsi: 'Sertifikasi kualifikasi nasional desainer visual grafis, branding, & media cetak/digital.',
    persyaratan: [
      'Mahasiswa DKV / Arsitektur UNINDRA',
      'Portofolio karya desain (Katalog / Brand Identity)'
    ]
  },
  {
    id: 'SKM-004',
    kodeSkema: 'SKM-INFT-03',
    namaSkema: 'Administrator Jaringan Komputer (Network Administrator)',
    kategori: 'Jaringan & Infrastruktur',
    jumlahUnit: 9,
    biaya: 500000,
    status: 'Aktif',
    deskripsi: 'Kompetensi perancangan, konfigurasi routing switching, dan keamanan jaringan LAN/WAN.',
    persyaratan: [
      'Mahasiswa Teknik Informatika / Pendidikan Informatika',
      'Transkrip Nilai Jaringan Komputer minimal B'
    ]
  },
  {
    id: 'SKM-005',
    kodeSkema: 'SKM-DATA-01',
    namaSkema: 'Analis Data (Data Analyst)',
    kategori: 'Data Science & Analytics',
    jumlahUnit: 7,
    biaya: 550000,
    status: 'Aktif',
    deskripsi: 'Sertifikasi pemrosesan data, pembersihan, eksplorasi visualisasi, dan laporan intelijen bisnis.',
    persyaratan: [
      'Mahasiswa Teknik Informatika / MIPA / Teknik Industri',
      'Memiliki sertifikat/project analisis data'
    ]
  },
  {
    id: 'SKM-006',
    kodeSkema: 'SKM-MKT-01',
    namaSkema: 'Spesialis Pemasaran Digital (Digital Marketing Specialist)',
    kategori: 'Bisnis & Pemasaran',
    jumlahUnit: 5,
    biaya: 400000,
    status: 'Aktif',
    deskripsi: 'Kompetensi strategi SEO, Social Media Ads, Content Strategy, dan Analytics.',
    persyaratan: [
      'Mahasiswa Komunikasi / Bisnis / Manajemen UNINDRA'
    ]
  }
];

export const INITIAL_ASESI: Asesi[] = [
  {
    id: 'ASI-2026-001',
    npm: '202243500123',
    nama: 'Rizky Pratama Kurniawan',
    email: 'rizky.pratama@unindra.ac.id',
    phone: '081298765432',
    prodi: 'Teknik Informatika (S1)',
    skemaId: 'SKM-001',
    namaSkema: 'Pemrogram Web (Junior Web Developer)',
    statusAPL01: 'Terverifikasi',
    statusAPL02: 'Mandiri Kompeten',
    statusAsesmen: 'Kompeten (K)',
    tanggalDaftar: '2026-07-10',
    fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'ASI-2026-002',
    npm: '202243500245',
    nama: 'Siti Nurhaliza Aulia',
    email: 'siti.aulia@unindra.ac.id',
    phone: '085711223344',
    prodi: 'Desain Komunikasi Visual (S1)',
    skemaId: 'SKM-003',
    namaSkema: 'Desainer Grafis Muda (Junior Graphic Designer)',
    statusAPL01: 'Terverifikasi',
    statusAPL02: 'Terverifikasi',
    statusAsesmen: 'Proses Asesmen',
    tanggalDaftar: '2026-07-15'
  },
  {
    id: 'ASI-2026-003',
    npm: '202243500389',
    nama: 'Ahmad Fauzi Rahmad',
    email: 'fauzi.rahmad@unindra.ac.id',
    phone: '081388990011',
    prodi: 'Pendidikan Informatika (S1)',
    skemaId: 'SKM-004',
    namaSkema: 'Administrator Jaringan Komputer (Network Administrator)',
    statusAPL01: 'Pending',
    statusAPL02: 'Belum Asesmen',
    statusAsesmen: 'Belum Diuji',
    tanggalDaftar: '2026-07-28'
  },
  {
    id: 'ASI-2026-004',
    npm: '202143500901',
    nama: 'Dewi Anjani Pertiwi',
    email: 'dewi.anjani@unindra.ac.id',
    phone: '081900112233',
    prodi: 'Teknik Informatika (S1)',
    skemaId: 'SKM-002',
    namaSkema: 'Pemrogram Mobil (Mobile Application Developer)',
    statusAPL01: 'Terverifikasi',
    statusAPL02: 'Mandiri Kompeten',
    statusAsesmen: 'Kompeten (K)',
    tanggalDaftar: '2026-06-20'
  },
  {
    id: 'ASI-2026-005',
    npm: '202243500512',
    nama: 'Bagas Aditya Putra',
    email: 'bagas.aditya@unindra.ac.id',
    phone: '081233445566',
    prodi: 'Teknik Industri (S1)',
    skemaId: 'SKM-005',
    namaSkema: 'Analis Data (Data Analyst)',
    statusAPL01: 'Terverifikasi',
    statusAPL02: 'Mandiri Kompeten',
    statusAsesmen: 'Belum Diuji',
    tanggalDaftar: '2026-08-01'
  }
];

export const INITIAL_ASESOR: Asesor[] = [
  {
    id: 'ASR-001',
    noReg: 'MET.000.002938 2021',
    nama: 'Dr. Ir. Hendra Saputra, M.T.',
    email: 'hendra.saputra@unindra.ac.id',
    phone: '0811882233',
    bidangKeahlian: 'Software Engineering & Web Technologies',
    jumlahAsesiDiuji: 142,
    status: 'Aktif'
  },
  {
    id: 'ASR-002',
    noReg: 'MET.000.003412 2022',
    nama: 'Ir. Ratna Dewi, M.Kom.',
    email: 'ratna.dewi@unindra.ac.id',
    phone: '0812998877',
    bidangKeahlian: 'Mobile Computing & Cloud Infrastructure',
    jumlahAsesiDiuji: 98,
    status: 'Aktif'
  },
  {
    id: 'ASR-003',
    noReg: 'MET.000.004105 2023',
    nama: 'Budi Santoso, S.Sn., M.Ds.',
    email: 'budi.santoso@unindra.ac.id',
    phone: '0813776655',
    bidangKeahlian: 'Visual Communication Design & UI/UX',
    jumlahAsesiDiuji: 115,
    status: 'Aktif'
  },
  {
    id: 'ASR-004',
    noReg: 'MET.000.005291 2023',
    nama: 'Agus Gunawan, S.T., M.T.',
    email: 'agus.gunawan@unindra.ac.id',
    phone: '0815443322',
    bidangKeahlian: 'Network Security & Cisco Infrastructure',
    jumlahAsesiDiuji: 84,
    status: 'Aktif'
  }
];

export const INITIAL_JADWAL: JadwalUji[] = [
  {
    id: 'JDW-2026-08',
    kodeJadwal: 'UK-2026-0801',
    namaKegiatan: 'Uji Kompetensi Gelombang IV 2026 - Web Programmer',
    namaSkema: 'Pemrogram Web (Junior Web Developer)',
    tuk: 'TUK Komputer Lab A3 Kampus A UNINDRA',
    tanggalUji: '2026-08-15',
    kuota: 30,
    terdaftar: 28,
    asesorName: 'Dr. Ir. Hendra Saputra, M.T.',
    status: 'Buka'
  },
  {
    id: 'JDW-2026-09',
    kodeJadwal: 'UK-2026-0802',
    namaKegiatan: 'Uji Kompetensi Gelombang IV 2026 - Mobile Dev',
    namaSkema: 'Pemrogram Mobil (Mobile Application Developer)',
    tuk: 'TUK Software Engineering Lab B1 Kampus B UNINDRA',
    tanggalUji: '2026-08-18',
    kuota: 25,
    terdaftar: 25,
    asesorName: 'Ir. Ratna Dewi, M.Kom.',
    status: 'Mendatang'
  },
  {
    id: 'JDW-2026-10',
    kodeJadwal: 'UK-2026-0803',
    namaKegiatan: 'Uji Sertifikasi Desain Grafis Muda Agst 2026',
    namaSkema: 'Desainer Grafis Muda (Junior Graphic Designer)',
    tuk: 'TUK Studio DKV Kampus B UNINDRA',
    tanggalUji: '2026-08-22',
    kuota: 20,
    terdaftar: 14,
    asesorName: 'Budi Santoso, S.Sn., M.Ds.',
    status: 'Buka'
  },
  {
    id: 'JDW-2026-11',
    kodeJadwal: 'UK-2026-0701',
    namaKegiatan: 'Uji Kompetensi Network Administrator Gelombang III',
    namaSkema: 'Administrator Jaringan Komputer (Network Administrator)',
    tuk: 'TUK Lab Jaringan Kampus A UNINDRA',
    tanggalUji: '2026-07-25',
    kuota: 20,
    terdaftar: 20,
    asesorName: 'Agus Gunawan, S.T., M.T.',
    status: 'Selesai'
  }
];

export const INITIAL_TUK: TUK[] = [
  {
    id: 'TUK-01',
    kodeTUK: 'TUK-UNINDRA-KA',
    namaTUK: 'TUK Mandiri Kampus A UNINDRA',
    jenis: 'Mandiri',
    alamat: 'Jl. Nangka No.58C Tanjung Barat, Jagakarsa, Jakarta Selatan',
    kapasitas: 120,
    penanggungJawab: 'Drs. Yudi Sukarna, M.Pd.'
  },
  {
    id: 'TUK-02',
    kodeTUK: 'TUK-UNINDRA-KB',
    namaTUK: 'TUK Mandiri Kampus B UNINDRA',
    jenis: 'Mandiri',
    alamat: 'Jl. Raya Tengah No.80, Gedong, Pasar Rebo, Jakarta Timur',
    kapasitas: 150,
    penanggungJawab: 'Sri Rahayu, S.T., M.Kom.'
  }
];

export const INITIAL_SERTIFIKAT: SertifikatData[] = [
  {
    id: 'SRT-001',
    noSertifikat: '50021 2132 0 000123 2026',
    noRegistrasi: 'REG.MET.2026.009182',
    namaAsesi: 'Rizky Pratama Kurniawan',
    npm: '202243500123',
    namaSkema: 'Pemrogram Web (Junior Web Developer)',
    tanggalTerbit: '2026-07-15',
    tanggalKadaluarsa: '2029-07-15',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=VERIFY-LSP-UNINDRA-SRT-001',
    status: 'Aktif'
  },
  {
    id: 'SRT-002',
    noSertifikat: '50021 2132 0 000124 2026',
    noRegistrasi: 'REG.MET.2026.009183',
    namaAsesi: 'Dewi Anjani Pertiwi',
    npm: '202143500901',
    namaSkema: 'Pemrogram Mobil (Mobile Application Developer)',
    tanggalTerbit: '2026-06-25',
    tanggalKadaluarsa: '2029-06-25',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=VERIFY-LSP-UNINDRA-SRT-002',
    status: 'Aktif'
  }
];

export const INITIAL_APL01: APL01Data = {
  id: 'APL01-2026-001',
  noPermohonan: 'APL01/LSP-UNINDRA/2026/08/001',
  asesiId: 'ASI-2026-001',
  namaLengkap: 'Rizky Pratama Kurniawan',
  npmNik: '202243500123 / 3174092104010003',
  tempatTglLahir: 'Jakarta, 12 April 2002',
  jenisKelamin: 'Laki-Laki',
  kebangsaan: 'Indonesia',
  alamatRumah: 'Jl. Raya Lenteng Agung No. 42, Jagakarsa, Jakarta Selatan',
  kodePos: '12610',
  noHp: '081298765432',
  email: 'rizky.pratama@unindra.ac.id',
  kualifikasiPendidikan: 'S1 Teknik Informatika (Semester 7)',
  namaInstansi: 'Universitas Indraprasta PGRI (UNINDRA)',
  jabatan: 'Mahasiswa / Student Developer',
  skemaId: 'SKM-001',
  namaSkema: 'Pemrogram Web (Junior Web Developer)',
  tujuanAsesmen: 'Sertifikasi',
  dokumenPersyaratan: {
    ktpKtm: true,
    transkripNilai: true,
    pasFoto: true,
    sertifikatPelatihan: true,
    portofolio: true
  },
  fileUrls: {
    ktpKtm: 'KTP_KTM_Rizky.pdf',
    transkripNilai: 'Transkrip_Rizky.pdf',
    pasFoto: 'PasFoto_3x4_Rizky.jpg',
    portofolio: 'Portofolio_WebDev_Rizky.pdf'
  },
  tandaTanganAsesi: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="80"><path d="M10 50 Q 30 10, 60 50 T 120 40 T 180 60" fill="none" stroke="%230D6EFD" stroke-width="3"/></svg>',
  statusVerifikasi: 'Diterima',
  catatanVerifikator: 'Dokumen lengkap dan memenuhi kualifikasi persayaratan awal.',
  tanggalPermohonan: '2026-07-10'
};

export const INITIAL_MAPA01: MAPA01Data = {
  id: 'MAPA01-001',
  asesiName: 'Rizky Pratama Kurniawan',
  asesorName: 'Dr. Ir. Hendra Saputra, M.T.',
  skemaName: 'Pemrogram Web (Junior Web Developer)',
  pendekatanAsesmen: 'Hasil Pelatihan dan/atau Pengalaman Kerja',
  metodeAsesmen: ['Observasi Langsung / Demo Praktik', 'Tes Tulis Pilihan Ganda & Essai', 'Tanya Jawab / Wawancara Portfolio'],
  perangkatAsesmen: ['FR.IA.01 Ceklis Observasi', 'FR.IA.02 Tugas Praktik', 'FR.IA.03 Pertanyaan Pendukung', 'FR.IA.05 Pertanyaan Tertulis'],
  tujuanAsesmen: 'Sertifikasi Kualifikasi Pekerjaan Nasional',
  lokasiAsesmen: 'TUK Komputer Lab A3 Kampus A UNINDRA',
  tanggalAsesmen: '2026-08-15',
  catatanAsesor: 'Asesi siap melaksanakan asesmen praktik penuh dengan membawa laptop dan hasil pengerjaan project web.',
  status: 'Disetujui'
};

export const INITIAL_MAPA02: MAPA02Data = {
  id: 'MAPA02-001',
  skemaName: 'Pemrogram Web (Junior Web Developer)',
  kelompokKerja: 'Pokja Pengembangan Perangkat Lunak UNINDRA',
  units: [
    {
      kodeUnit: 'J.620100.004.01',
      judulUnit: 'Menggunakan Struktur Data',
      mukList: [
        { kodeMUK: 'MUK-01', deskripsi: 'Struktur data array, stack, queue diimplementasikan sesuai kebutuhan algoritma web.', status: 'K' },
        { kodeMUK: 'MUK-02', deskripsi: 'Manipulasi data JSON/Object untuk konsumsi API dilakukan dengan benar.', status: 'K' }
      ]
    },
    {
      kodeUnit: 'J.620100.010.01',
      judulUnit: 'Menerapkan Perintah Pemrograman Dasar',
      mukList: [
        { kodeMUK: 'MUK-03', deskripsi: 'Sintaks logika percabangan dan perulangan ditulis secara bersih dan terstruktur.', status: 'K' },
        { kodeMUK: 'MUK-04', deskripsi: 'Penanganan error exception handling berfungsi dengan baik.', status: 'K' }
      ]
    }
  ],
  rekomendasi: 'K',
  catatan: 'Seluruh KUK untuk Unit Kompetensi yang diuji telah dipenuhi dengan bukti yang meyakinkan.'
};

export const BERITA_LSP = [
  {
    id: 1,
    judul: 'Pembukaan Pendaftaran Uji Kompetensi Gelombang IV Tahun 2026 LSP UNINDRA',
    kategori: 'Pengumuman',
    tanggal: '02 Agustus 2026',
    ringkasan: 'LSP UNINDRA secara resmi membuka pendaftaran uji sertifikasi kompetensi BNSP untuk mahasiswa seluruh Fakultas Teknik & Ilmu Komputer.',
    gambar: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    judul: 'Penyerahan 350 Sertifikat Kompetensi BNSP kepada Lulusan UNINDRA Periode Wisuda 88',
    kategori: 'Kegiatan',
    tanggal: '25 Juli 2026',
    ringkasan: 'Ketua LSP UNINDRA menyerahkan secara simbolis sertifikat kompetensi berlogo Garuda BNSP kepada perwakilan wisudawan terbaik.',
    gambar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    judul: 'Workshop Upskilling Asesor Kompetensi LSP UNINDRA Bersama Master Asesor BNSP',
    kategori: 'Berita',
    tanggal: '18 Juli 2026',
    ringkasan: 'Sebanyak 45 Asesor Kompetensi mengikuti pembaruan materi MUK 2026 untuk meningkatkan kualitas dan objektivitas verifikasi.',
    gambar: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80'
  }
];

export const TESTIMONI_LIST = [
  {
    id: 1,
    nama: 'Fajar Nugraha, S.Kom.',
    peran: 'Software Engineer di PT Bank Mandiri (Persero) Tbk',
    skema: 'Skema Pemrogram Web BNSP',
    testimoni: 'Sertifikasi kompetensi dari LSP UNINDRA berlogo Garuda BNSP sangat membantu saya dalam proses rekrutmen kerja di perusahaan BUMN. Penguji sangat profesional dan fasilitas TUK sangat memadai!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    nama: 'Nabila Putri, S.Ds.',
    peran: 'Lead UI/UX Designer di Unicorn Tech Enterprise',
    skema: 'Skema Desainer Grafis Muda BNSP',
    testimoni: 'Sistem pendaftaran APL-01 & APL-02 online LSP UNINDRA sangat efisien. Hasil asesmen langsung transparan dan sertifikat berstandar internasional.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    nama: 'Muhammad Arifin, S.Kom.',
    peran: 'Cloud & Network Engineer',
    skema: 'Skema Administrator Jaringan BNSP',
    testimoni: 'Pengalaman asesmen yang komprehensif. Soal praktik sesuai tantangan nyata industri jaringan jaringan saat ini.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80'
  }
];
