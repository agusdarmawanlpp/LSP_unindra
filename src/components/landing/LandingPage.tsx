import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  Search,
  ShieldCheck,
  Building2,
  GraduationCap,
  Sparkles,
  FileCheck,
  MapPin,
  ChevronRight,
  ExternalLink,
  QrCode,
  Info,
  Clock,
  Briefcase
} from 'lucide-react';
import {
  INITIAL_SKEMA,
  INITIAL_JADWAL,
  INITIAL_ASESOR,
  BERITA_LSP,
  TESTIMONI_LIST
} from '../../data/mockData';
import { SkemaSertifikasi, JadwalUji } from '../../types';
import { Footer } from '../common/Footer';

interface LandingPageProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenLogin: () => void;
  onSelectSkemaDaftar: (skema: SkemaSertifikasi) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigate,
  onOpenLogin,
  onSelectSkemaDaftar
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkemaModal, setSelectedSkemaModal] = useState<SkemaSertifikasi | null>(null);
  const [verifyCode, setVerifyCode] = useState<string>('');
  const [verifyResult, setVerifyResult] = useState<boolean | null>(null);

  const categories = ['Semua', 'Teknologi Informasi', 'Desain Komunikasi Visual', 'Jaringan & Infrastruktur', 'Data Science & Analytics'];

  const filteredSkema = INITIAL_SKEMA.filter((s) => {
    const matchCat = selectedCategory === 'Semua' || s.kategori === selectedCategory;
    const matchSearch =
      s.namaSkema.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.kodeSkema.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleVerifyCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyCode.trim()) return;
    setVerifyResult(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      {/* HERO SECTION */}
      <section id="beranda" className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white pt-12 pb-24 lg:pt-16 lg:pb-32">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>Sistem Informasi Sertifikasi Profesi Resmi UNINDRA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Raih Sertifikasi Profesi <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-emerald-300">
                  BNSP Standar Industri
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
                LSP P1 Universitas Indraprasta PGRI menyelenggarakan uji kompetensi kerja bagi mahasiswa & profesional untuk mencetak tenaga kerja yang unggul, diakui secara nasional, dan berdaya saing global.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('skema');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 group text-base"
                >
                  <BookOpen className="w-5 h-5" />
                  Daftar Sertifikasi Sekarang
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenLogin}
                  className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Users className="w-5 h-5 text-blue-300" />
                  Login Sistem Asesi & Asesor
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Terlisensi BNSP RI</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-300" />
                  <span>Sertifikat Pendamping Ijazah (SKPI)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-sky-300" />
                  <span>E-Sertifikat QR Code</span>
                </div>
              </div>
            </div>

            {/* Right Column Illustration Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> BNSP Verified
                </div>

                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/30">
                    <Award className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">LSP P1 UNINDRA</h3>
                    <p className="text-xs text-blue-300 font-medium">Sistem Sertifikasi Kompetensi Profesi</p>
                  </div>

                  <div className="bg-slate-800/90 rounded-2xl p-4 text-left border border-slate-700/80 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Status Lisensi:</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Aktif (LISP-1829-ID)
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Total Skema Terverifikasi:</span>
                      <span className="text-white font-bold">18 Skema Sertifikasi</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Tempat Uji Kompetensi (TUK):</span>
                      <span className="text-blue-300 font-semibold">Kampus A & B UNINDRA</span>
                    </div>
                  </div>

                  {/* Quick Verify Box */}
                  <div className="pt-2">
                    <form onSubmit={handleVerifyCert} className="space-y-2">
                      <label className="block text-xs text-left text-slate-300 font-medium">
                        Verifikasi Keabsahan Sertifikat:
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={verifyCode}
                          onChange={(e) => setVerifyCode(e.target.value)}
                          placeholder="Masukkan No. Registrasi / Sertifikat"
                          className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shrink-0 transition-colors flex items-center gap-1"
                        >
                          <QrCode className="w-3.5 h-3.5" /> Cek
                        </button>
                      </div>
                    </form>

                    {verifyResult && (
                      <div className="mt-3 p-3 bg-emerald-900/40 border border-emerald-500/50 rounded-xl text-xs text-emerald-200 text-left animate-in fade-in duration-200">
                        <p className="font-semibold text-emerald-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sertifikat Terverifikasi Sah!
                        </p>
                        <p className="text-[11px] mt-1 text-slate-300">
                          Nama: Rizky Pratama K. | Skema: Junior Web Developer | Berlaku s.d. 2029
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIK COUNTER SECTION */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 border-r border-gray-100 last:border-0 pr-4">
            <div className="w-10 h-10 mx-auto rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-2">
              <Users className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">4,850+</p>
            <p className="text-xs font-medium text-gray-500">Jumlah Asesi Terdaftar</p>
          </div>

          <div className="space-y-1 border-r border-gray-100 last:border-0 pr-4">
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-2">
              <Award className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">120+</p>
            <p className="text-xs font-medium text-gray-500">Asesor Kompetensi</p>
          </div>

          <div className="space-y-1 border-r border-gray-100 last:border-0 pr-4">
            <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-2">
              <BookOpen className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">18</p>
            <p className="text-xs font-medium text-gray-500">Skema Sertifikasi</p>
          </div>

          <div className="space-y-1">
            <div className="w-10 h-10 mx-auto rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-2">
              <FileCheck className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">4,200+</p>
            <p className="text-xs font-medium text-gray-500">Sertifikat Terbit BNSP</p>
          </div>
        </div>
      </section>

      {/* PROFIL & KEUNGGULAN LSP */}
      <section id="profil" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Mengapa Pilih LSP UNINDRA
          </span>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Keunggulan & Standar Sertifikasi Kompetensi
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Menjamin kualitas lulusan yang kompeten, siap kerja, dan memiliki pengakuan resmi secara nasional oleh Negara melalui BNSP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Terlisensi Resmi BNSP</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mendapat nomor lisensi resmi dari Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia dengan jaminan standar mutu SKKNI.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Asesor Bersertifikat MET</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Diuji langsung oleh dosen & praktisi industri ahli yang memiliki sertifikat penguji kompetensi resmi dari BNSP.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fasilitas TUK Standar Industri</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tempat Uji Kompetensi (TUK) mandiri di Kampus A & B UNINDRA dilengkapi perangkat laboratorium modern dan software lisensi resmi.
            </p>
          </div>
        </div>
      </section>

      {/* DAFTAR SKEMA SERTIFIKASI */}
      <section id="skema" className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100/80 px-3 py-1 rounded-full">
                Skema Sertifikasi
              </span>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Pilih Skema Kompetensi Anda
              </h2>
              <p className="text-gray-600 text-sm">
                Temukan skema sertifikasi yang sesuai dengan program studi dan keahlian profesi Anda.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari skema sertifikasi..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 shadow-sm"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skema Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkema.map((skema) => (
              <div
                key={skema.id}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                      {skema.kodeSkema}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {skema.kategori}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                    {skema.namaSkema}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {skema.deskripsi}
                  </p>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                      {skema.jumlahUnit} Unit Kompetensi
                    </span>
                    <span className="text-gray-900 font-bold">
                      Rp {skema.biaya.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <div className="pt-6 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedSkemaModal(skema)}
                    className="flex-1 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                  >
                    Detail Skema
                  </button>
                  <button
                    onClick={() => onSelectSkemaDaftar(skema)}
                    className="flex-1 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors flex items-center justify-center gap-1"
                  >
                    Daftar APL-01
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JADWAL UJI KOMPETENSI */}
      <section id="jadwal" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Agenda Sertifikasi
          </span>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Jadwal Uji Kompetensi Terdekat
          </h2>
          <p className="text-gray-600 text-sm">
            Silakan periksa tanggal dan kuota pendaftaran yang masih terbuka untuk mengikuti ujian asesmen.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-200 text-xs font-bold text-gray-700 uppercase tracking-wider">
                  <th className="py-4 px-6">Kode & Nama Kegiatan</th>
                  <th className="py-4 px-6">Skema Sertifikasi</th>
                  <th className="py-4 px-6">TUK / Lokasi</th>
                  <th className="py-4 px-6">Tanggal Uji</th>
                  <th className="py-4 px-6">Kuota / Terdaftar</th>
                  <th className="py-4 px-6 text-center">Status & Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {INITIAL_JADWAL.map((j) => (
                  <tr key={j.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      <span className="text-[10px] text-blue-600 block">{j.kodeJadwal}</span>
                      {j.namaKegiatan}
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-700">{j.namaSkema}</td>
                    <td className="py-4 px-6 text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        {j.tuk}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        {j.tanggalUji}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">{j.terdaftar} / {j.kuota}</span>
                        <div className="w-16 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-blue-600 h-full rounded-full"
                            style={{ width: `${(j.terdaftar / j.kuota) * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      {j.status === 'Buka' ? (
                        <button
                          onClick={onOpenLogin}
                          className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs shadow-sm transition-all"
                        >
                          Daftar Sekarang
                        </button>
                      ) : j.status === 'Mendatang' ? (
                        <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-md font-semibold text-[11px] border border-amber-200">
                          Mendatang
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md font-semibold text-[11px]">
                          Selesai
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BERITA & PENGUMUMAN */}
      <section id="berita" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Kabar Terbaru
              </span>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mt-2">
                Berita & Kegiatan LSP UNINDRA
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BERITA_LSP.map((b) => (
              <div key={b.id} className="bg-slate-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
                <img src={b.gambar} alt={b.judul} className="h-48 w-full object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded">
                        {b.kategori}
                      </span>
                      <span className="text-gray-500 font-medium">{b.tanggal}</span>
                    </div>
                    <h3 className="font-bold text-base text-gray-900 leading-snug hover:text-blue-600 transition-colors">
                      {b.judul}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {b.ringkasan}
                    </p>
                  </div>

                  <button className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 pt-2">
                    Baca Selengkapnya <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONI ALUMNI */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Testimoni Asesi
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Apa Kata Alumni Lulusan Sertifikasi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONI_LIST.map((t) => (
              <div key={t.id} className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{t.testimoni}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                  <img src={t.avatar} alt={t.nama} className="w-11 h-11 rounded-full object-cover border-2 border-emerald-400" />
                  <div>
                    <h4 className="font-bold text-sm text-white">{t.nama}</h4>
                    <p className="text-[11px] text-emerald-400 font-medium">{t.peran}</p>
                    <p className="text-[10px] text-slate-400">{t.skema}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DETAIL SKEMA */}
      {selectedSkemaModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  {selectedSkemaModal.kodeSkema}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">
                  {selectedSkemaModal.namaSkema}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSkemaModal(null)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-gray-700">
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Deskripsi Skema</h4>
                <p className="text-gray-600 leading-relaxed">{selectedSkemaModal.deskripsi}</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">Persyaratan Pemohon (APL 01)</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {selectedSkemaModal.persyaratan.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>

              {selectedSkemaModal.unitKompetensiList && (
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Daftar Unit Kompetensi (SKKNI)</h4>
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <table className="w-full text-left">
                      <thead className="bg-gray-50 font-bold text-[11px] text-gray-600">
                        <tr>
                          <th className="p-2.5">Kode Unit</th>
                          <th className="p-2.5">Judul Unit Kompetensi</th>
                          <th className="p-2.5">Standar</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-[11px]">
                        {selectedSkemaModal.unitKompetensiList.map((unit) => (
                          <tr key={unit.id}>
                            <td className="p-2.5 font-semibold text-blue-600">{unit.kodeUnit}</td>
                            <td className="p-2.5 font-medium">{unit.judulUnit}</td>
                            <td className="p-2.5 text-gray-500">{unit.standarSkkni}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedSkemaModal(null)}
                className="px-4 py-2 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  const skm = selectedSkemaModal;
                  setSelectedSkemaModal(null);
                  onSelectSkemaDaftar(skm);
                }}
                className="px-6 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md"
              >
                Daftar Permohonan APL-01
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
