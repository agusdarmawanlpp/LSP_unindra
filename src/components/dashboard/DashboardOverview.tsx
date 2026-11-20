import React from 'react';
import {
  Users,
  Award,
  Calendar,
  BookOpen,
  FileCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  AlertCircle,
  Eye,
  ArrowUpRight,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import {
  INITIAL_ASESI,
  INITIAL_JADWAL,
  INITIAL_SKEMA,
  INITIAL_ASESOR,
  INITIAL_SERTIFIKAT
} from '../../data/mockData';

interface DashboardOverviewProps {
  onNavigateToMenu: (menuId: string) => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({ onNavigateToMenu }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative z-10 space-y-2">
          <span className="text-xs font-semibold text-blue-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Sistem Informasi Sertifikasi Profesi UNINDRA
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Selamat Datang di Panel Manajemen LSP UNINDRA
          </h1>
          <p className="text-sm text-blue-100 max-w-2xl leading-relaxed">
            Pantau statistik pendaftaran asesi, pelaksanaan uji kompetensi, penugasan asesor, hingga penerbitan sertifikat BNSP secara terintegrasi.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <button
            onClick={() => onNavigateToMenu('ujian-online')}
            className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-900/40 transition-all flex items-center gap-2 text-xs border border-emerald-400/40 hover:scale-105"
          >
            <span>💻 Akses Ujian Online (CBT)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 5 CARD STATISTIK UTAMA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1: Asesi */}
        <div
          onClick={() => onNavigateToMenu('master-asesi')}
          className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +12%
            </span>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-gray-900">{INITIAL_ASESI.length + 4845}</p>
            <p className="text-xs font-medium text-gray-500">Jumlah Asesi Terdaftar</p>
          </div>
        </div>

        {/* Card 2: Asesor */}
        <div
          onClick={() => onNavigateToMenu('master-asesor')}
          className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <UserCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              BNSP MET
            </span>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-gray-900">{INITIAL_ASESOR.length + 116}</p>
            <p className="text-xs font-medium text-gray-500">Jumlah Asesor Aktif</p>
          </div>
        </div>

        {/* Card 3: Jadwal */}
        <div
          onClick={() => onNavigateToMenu('pelaksanaan-jadwal')}
          className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              4 Gel/Thn
            </span>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-gray-900">{INITIAL_JADWAL.length + 24}</p>
            <p className="text-xs font-medium text-gray-500">Jadwal Uji Kompetensi</p>
          </div>
        </div>

        {/* Card 4: Skema */}
        <div
          onClick={() => onNavigateToMenu('master-skema')}
          className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
              18 SKKNI
            </span>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-gray-900">{INITIAL_SKEMA.length + 12}</p>
            <p className="text-xs font-medium text-gray-500">Skema Sertifikasi</p>
          </div>
        </div>

        {/* Card 5: Sertifikat */}
        <div
          onClick={() => onNavigateToMenu('sertifikat')}
          className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <FileCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              94.8% Lulus
            </span>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-gray-900">{INITIAL_SERTIFIKAT.length + 4200}</p>
            <p className="text-xs font-medium text-gray-500">Sertifikat Terbit BNSP</p>
          </div>
        </div>
      </div>

      {/* GRAFIK & ANALITIK CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bar Chart Representation */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-gray-900">Grafik Pendaftaran Per Skema</h3>
              <p className="text-xs text-gray-500">Distribusi peserta asesi pada gelombang berjalan</p>
            </div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
              Tahun 2026
            </span>
          </div>

          <div className="space-y-4 pt-2">
            {[
              { label: 'Pemrogram Web (Junior Web Dev)', count: 1840, pct: 92, color: 'bg-blue-600' },
              { label: 'Pemrogram Mobil (Mobile Dev)', count: 1420, pct: 75, color: 'bg-emerald-600' },
              { label: 'Desainer Grafis Muda (Graphic Designer)', count: 1100, pct: 60, color: 'bg-purple-600' },
              { label: 'Administrator Jaringan Komputer', count: 980, pct: 52, color: 'bg-indigo-600' },
              { label: 'Analis Data (Data Analyst)', count: 860, pct: 45, color: 'bg-amber-600' },
            ].map((bar, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-gray-700">
                  <span>{bar.label}</span>
                  <span className="text-gray-900">{bar.count} Asesi</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${bar.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${bar.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doughnut Chart Pass Rate & Assessment Status */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="border-b border-gray-100 pb-3">
            <h3 className="font-bold text-base text-gray-900">Rekapitulasi Keputusan Asesmen</h3>
            <p className="text-xs text-gray-500">Persentase kelulusan Kompeten (K) vs Belum Kompeten (BK)</p>
          </div>

          <div className="py-4 flex items-center justify-center gap-8">
            {/* Visual Donut SVG */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-100"
                  strokeWidth="3.8"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-500"
                  strokeDasharray="94, 100"
                  strokeWidth="3.8"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-center">
                <p className="text-2xl font-extrabold text-gray-900">94.8%</p>
                <p className="text-[10px] text-gray-500 font-semibold">Tingkat Lulus</p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Kompeten (K)</p>
                  <p className="text-gray-500 text-[11px]">3,980 Asesi (94.8%)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Belum Kompeten (BK)</p>
                  <p className="text-gray-500 text-[11px]">220 Asesi (5.2%)</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateToMenu('laporan')}
            className="w-full py-2.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors flex items-center justify-center gap-1"
          >
            Lihat Laporan Detail <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* JADWAL ASESMEN HARI INI & ASESI TERBARU */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Asesi Terbaru */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-gray-900">Pendaftaran Asesi Terbaru</h3>
              <p className="text-xs text-gray-500">Daftar mahasiswa yang baru saja menyerahkan APL-01</p>
            </div>
            <button
              onClick={() => onNavigateToMenu('pelaksanaan-apl01')}
              className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
            >
              Lihat Semua APL-01 <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-[11px] font-bold text-gray-600 uppercase border-b border-gray-200">
                  <th className="py-2.5 px-3">NPM & Nama Asesi</th>
                  <th className="py-2.5 px-3">Skema Pilihan</th>
                  <th className="py-2.5 px-3">APL-01</th>
                  <th className="py-2.5 px-3">Hasil Asesmen</th>
                  <th className="py-2.5 px-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {INITIAL_ASESI.map((asi) => (
                  <tr key={asi.id} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3 px-3">
                      <p className="font-bold text-gray-900">{asi.nama}</p>
                      <p className="text-[10px] text-gray-500">{asi.npm} • {asi.prodi}</p>
                    </td>
                    <td className="py-3 px-3 font-medium text-gray-700">{asi.namaSkema}</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded font-semibold text-[10px] ${
                        asi.statusAPL01 === 'Terverifikasi'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {asi.statusAPL01}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded font-semibold text-[10px] ${
                        asi.statusAsesmen === 'Kompeten (K)'
                          ? 'bg-emerald-100 text-emerald-800'
                          : asi.statusAsesmen === 'Proses Asesmen'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {asi.statusAsesmen}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => onNavigateToMenu('pelaksanaan-apl01')}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Verifikasi Dokumen"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Jadwal Hari Ini & Calendar Summary */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div className="border-b border-gray-100 pb-3 flex items-center justify-between">
            <h3 className="font-bold text-base text-gray-900">Agenda Asesmen Hari Ini</h3>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
              05 Ags 2026
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-blue-700">08.30 - 12.00 WIB</span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                  Berlangsung
                </span>
              </div>
              <p className="font-bold text-xs text-gray-900">Uji Praktik Web Programmer</p>
              <p className="text-[11px] text-gray-600">TUK Komputer Lab A3 Kampus A UNINDRA</p>
              <p className="text-[10px] text-gray-500 font-medium">Asesor: Dr. Ir. Hendra Saputra, M.T.</p>
            </div>

            <div className="p-3 bg-slate-50 border border-gray-200 rounded-xl space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-600">13.30 - 16.00 WIB</span>
                <span className="text-[10px] font-semibold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">
                  Mendatang
                </span>
              </div>
              <p className="font-bold text-xs text-gray-900">Sesi Wawancara Portfolio DKV</p>
              <p className="text-[11px] text-gray-600">TUK Studio DKV Kampus B UNINDRA</p>
              <p className="text-[10px] text-gray-500 font-medium">Asesor: Budi Santoso, S.Sn., M.Ds.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
