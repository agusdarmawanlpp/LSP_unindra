import React, { useState } from 'react';
import {
  FileText,
  FileSpreadsheet,
  Printer,
  Filter,
  BarChart3,
  CheckCircle2,
  XCircle,
  Users,
  Award,
  Search,
  Download
} from 'lucide-react';
import { INITIAL_SKEMA, INITIAL_ASESOR, INITIAL_TUK, INITIAL_ASESI } from '../../data/mockData';
import { LaporanFilter } from '../../types';

export const LaporanView: React.FC = () => {
  const [filter, setFilter] = useState<LaporanFilter>({
    tahun: '2026',
    bulan: 'Semua',
    asesorId: 'Semua',
    skemaId: 'Semua',
    tukId: 'Semua',
    status: 'Semua'
  });

  const handleExportPDF = () => {
    alert(`Mengeksport Laporan Rekapitulasi Asesmen LSP UNINDRA Tahun ${filter.tahun} ke format PDF...`);
  };

  const handleExportExcel = () => {
    alert(`Mengeksport Laporan Rekapitulasi Asesmen LSP UNINDRA ke format Excel (.xlsx)...`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
            Laporan Kinerja Asesmen
          </span>
          <h2 className="text-xl font-bold text-gray-900 mt-1">
            Laporan Rekapitulasi & Pelaporan Sertifikasi
          </h2>
          <p className="text-xs text-gray-500">
            Filter dan cetak rekapitulasi data hasil kelulusan asesmen berdasarkan periode, skema, dan TUK.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportPDF}
            className="px-4 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-rose-600" /> Export Laporan PDF
          </button>
          <button
            onClick={handleExportExcel}
            className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all flex items-center gap-1.5"
          >
            <FileSpreadsheet className="w-4 h-4" /> Export Excel (.xlsx)
          </button>
        </div>
      </div>

      {/* MULTI FILTER CONTAINER */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <Filter className="w-4 h-4 text-blue-600" />
          <h3 className="font-bold text-sm text-gray-900">Filter Parameter Laporan</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 text-xs">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Tahun Asesmen</label>
            <select
              value={filter.tahun}
              onChange={(e) => setFilter({ ...filter, tahun: e.target.value })}
              className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl"
            >
              <option value="2026">Tahun 2026</option>
              <option value="2025">Tahun 2025</option>
              <option value="2024">Tahun 2024</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Bulan</label>
            <select
              value={filter.bulan}
              onChange={(e) => setFilter({ ...filter, bulan: e.target.value })}
              className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl"
            >
              <option value="Semua">Semua Bulan</option>
              <option value="Agustus">Agustus</option>
              <option value="Juli">Juli</option>
              <option value="Juni">Juni</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Skema Sertifikasi</label>
            <select
              value={filter.skemaId}
              onChange={(e) => setFilter({ ...filter, skemaId: e.target.value })}
              className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl"
            >
              <option value="Semua">Semua Skema</option>
              {INITIAL_SKEMA.map((s) => (
                <option key={s.id} value={s.id}>{s.namaSkema}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Asesor Penguji</label>
            <select
              value={filter.asesorId}
              onChange={(e) => setFilter({ ...filter, asesorId: e.target.value })}
              className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl"
            >
              <option value="Semua">Semua Asesor</option>
              {INITIAL_ASESOR.map((a) => (
                <option key={a.id} value={a.id}>{a.nama}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">TUK / Lokasi</label>
            <select
              value={filter.tukId}
              onChange={(e) => setFilter({ ...filter, tukId: e.target.value })}
              className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl"
            >
              <option value="Semua">Semua TUK</option>
              {INITIAL_TUK.map((t) => (
                <option key={t.id} value={t.id}>{t.namaTUK}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Hasil Kelulusan</label>
            <select
              value={filter.status}
              onChange={(e) => setFilter({ ...filter, status: e.target.value })}
              className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl"
            >
              <option value="Semua">Semua Status</option>
              <option value="K">Kompeten (K)</option>
              <option value="BK">Belum Kompeten (BK)</option>
            </select>
          </div>
        </div>
      </div>

      {/* REKAPITULASI SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
          <p className="text-xs font-semibold text-gray-500">Total Peserta Asesi Diuji</p>
          <p className="text-2xl font-extrabold text-gray-900">4,200 Orang</p>
          <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">
            Periode {filter.tahun}
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
          <p className="text-xs font-semibold text-emerald-700">Jumlah Asesi Kompeten (K)</p>
          <p className="text-2xl font-extrabold text-emerald-600">3,980 Orang</p>
          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
            94.8% Lulus Sertifikasi
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
          <p className="text-xs font-semibold text-rose-700">Belum Kompeten (BK)</p>
          <p className="text-2xl font-extrabold text-rose-600">220 Orang</p>
          <span className="text-[10px] text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded">
            5.2% Perlu Asesmen Ulang
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
          <p className="text-xs font-semibold text-amber-700">TUK Aktif Digunakan</p>
          <p className="text-2xl font-extrabold text-amber-600">2 Lokasi TUK</p>
          <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">
            Kampus A & B UNINDRA
          </span>
        </div>
      </div>

      {/* REKAPITULASI TABLE */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
        <h3 className="font-bold text-base text-gray-900">Tabel Detail Rekapitulasi Asesmen</h3>

        <div className="overflow-x-auto border border-gray-100 rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-200 text-xs font-bold text-gray-700 uppercase">
                <th className="py-3 px-4">No & NPM</th>
                <th className="py-3 px-4">Nama Asesi</th>
                <th className="py-3 px-4">Skema Sertifikasi</th>
                <th className="py-3 px-4">TUK</th>
                <th className="py-3 px-4">Asesor Penguji</th>
                <th className="py-3 px-4 text-center">Keputusan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-800">
              {INITIAL_ASESI.map((asi, idx) => (
                <tr key={asi.id} className="hover:bg-blue-50/30">
                  <td className="py-3 px-4 font-bold text-gray-500">{idx + 1}. {asi.npm}</td>
                  <td className="py-3 px-4 font-bold text-gray-900">{asi.nama}</td>
                  <td className="py-3 px-4 font-medium text-gray-700">{asi.namaSkema}</td>
                  <td className="py-3 px-4 text-gray-600">TUK Kampus A UNINDRA</td>
                  <td className="py-3 px-4 font-medium text-gray-800">Dr. Ir. Hendra Saputra, M.T.</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2.5 py-1 rounded font-extrabold text-[11px] ${
                      asi.statusAsesmen === 'Kompeten (K)'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {asi.statusAsesmen}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
