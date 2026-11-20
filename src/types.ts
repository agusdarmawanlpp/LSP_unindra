export type Role = 'admin' | 'asesor' | 'asesi' | 'pimpinan';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  role: Role;
  avatar?: string;
  npmNidn?: string;
  prodi?: string;
}

export interface SkemaSertifikasi {
  id: string;
  kodeSkema: string;
  namaSkema: string;
  kategori: string;
  jumlahUnit: number;
  biaya: number;
  status: 'Aktif' | 'Nonaktif';
  deskripsi: string;
  persyaratan: string[];
  unitKompetensiList?: UnitKompetensi[];
}

export interface UnitKompetensi {
  id: string;
  kodeUnit: string;
  judulUnit: string;
  standarSkkni: string;
  jumlahElemen: number;
}

export interface Asesi {
  id: string;
  npm: string;
  nama: string;
  email: string;
  phone: string;
  prodi: string;
  skemaId: string;
  namaSkema: string;
  statusAPL01: 'Draft' | 'Terverifikasi' | 'Ditolak' | 'Pending';
  statusAPL02: 'Belum Asesmen' | 'Mandiri Kompeten' | 'Terverifikasi';
  statusAsesmen: 'Belum Diuji' | 'Proses Asesmen' | 'Kompeten (K)' | 'Belum Kompeten (BK)';
  tanggalDaftar: string;
  fotoUrl?: string;
}

export interface Asesor {
  id: string;
  noReg: string;
  nama: string;
  email: string;
  phone: string;
  bidangKeahlian: string;
  jumlahAsesiDiuji: number;
  status: 'Aktif' | 'Cuti';
  fotoUrl?: string;
}

export interface JadwalUji {
  id: string;
  kodeJadwal: string;
  namaKegiatan: string;
  namaSkema: string;
  tuk: string;
  tanggalUji: string;
  kuota: number;
  terdaftar: number;
  asesorName: string;
  status: 'Mendatang' | 'Berlangsung' | 'Selesai' | 'Buka';
}

export interface TUK {
  id: string;
  kodeTUK: string;
  namaTUK: string;
  jenis: 'Sewaktu' | 'Tempat Kerja' | 'Mandiri';
  alamat: string;
  kapasitas: number;
  penanggungJawab: string;
}

export interface APL01Data {
  id: string;
  noPermohonan: string;
  asesiId: string;
  namaLengkap: string;
  npmNik: string;
  tempatTglLahir: string;
  jenisKelamin: 'Laki-Laki' | 'Perempuan';
  kebangsaan: string;
  alamatRumah: string;
  kodePos: string;
  noHp: string;
  email: string;
  kualifikasiPendidikan: string;
  namaInstansi: string;
  jabatan: string;
  skemaId: string;
  namaSkema: string;
  tujuanAsesmen: 'Sertifikasi' | 'Pengakuan Kompetensi Terkini (PKT)' | 'Rekognisi Pembelajaran Lampau (RPL)';
  dokumenPersyaratan: {
    ktpKtm: boolean;
    transkripNilai: boolean;
    pasFoto: boolean;
    sertifikatPelatihan: boolean;
    portofolio: boolean;
  };
  fileUrls: {
    ktpKtm?: string;
    transkripNilai?: string;
    pasFoto?: string;
    portofolio?: string;
  };
  tandaTanganAsesi?: string;
  statusVerifikasi: 'Diterima' | 'Ditolak' | 'Pending';
  catatanVerifikator?: string;
  tanggalPermohonan: string;
}

export interface MAPA01Data {
  id: string;
  asesiName: string;
  asesorName: string;
  skemaName: string;
  pendekatanAsesmen: string;
  metodeAsesmen: string[];
  perangkatAsesmen: string[];
  tujuanAsesmen: string;
  lokasiAsesmen: string;
  tanggalAsesmen: string;
  catatanAsesor: string;
  status: 'Disetujui' | 'Draft';
}

export interface MAPA02Data {
  id: string;
  skemaName: string;
  kelompokKerja: string;
  units: {
    kodeUnit: string;
    judulUnit: string;
    mukList: {
      kodeMUK: string;
      deskripsi: string;
      status: 'K' | 'BK';
    }[];
  }[];
  rekomendasi: 'K' | 'BK';
  catatan: string;
}

export interface SertifikatData {
  id: string;
  noSertifikat: string;
  noRegistrasi: string;
  namaAsesi: string;
  npm: string;
  namaSkema: string;
  tanggalTerbit: string;
  tanggalKadaluarsa: string;
  qrCodeUrl: string;
  status: 'Aktif' | 'Dicabut' | 'Proses Cetak';
}

export interface LaporanFilter {
  tahun: string;
  bulan: string;
  asesorId: string;
  skemaId: string;
  tukId: string;
  status: string;
}
