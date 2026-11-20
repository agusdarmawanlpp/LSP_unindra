import React, { useState } from 'react';
import { FileCheck, Printer, Send, Save, CheckSquare, ClipboardList, ShieldCheck } from 'lucide-react';
import { INITIAL_MAPA01 } from '../../data/mockData';
import { MAPA01Data } from '../../types';
import { SweetAlert } from '../common/SweetAlert';

export const FRMAPA01Form: React.FC = () => {
  const [mapaData, setMapaData] = useState<MAPA01Data>(INITIAL_MAPA01);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
            FR.MAPA.01
          </span>
          <h2 className="text-xl font-bold text-gray-900 mt-1">
            Merencanakan Aktivitas dan Proses Asesmen
          </h2>
          <p className="text-xs text-gray-500">
            Penetapan pendekatan, metode, bukti, serta perangkat asesmen yang akan digunakan oleh Asesor.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Mencetak dokumen FR.MAPA.01 ke PDF...')}
            className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" /> Cetak PDF
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Detail Identitas */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4 text-xs">
          <h3 className="font-bold text-sm text-gray-900 border-b border-gray-100 pb-2">
            Informasi Skema & Penguji
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Nama Asesi (Peserta)</label>
              <input
                type="text"
                value={mapaData.asesiName}
                onChange={(e) => setMapaData({ ...mapaData, asesiName: e.target.value })}
                className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Nama Asesor Kompetensi</label>
              <input
                type="text"
                value={mapaData.asesorName}
                onChange={(e) => setMapaData({ ...mapaData, asesorName: e.target.value })}
                className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Skema Sertifikasi</label>
              <input
                type="text"
                value={mapaData.skemaName}
                readOnly
                className="w-full p-2 bg-blue-50/80 border border-blue-200 font-bold text-blue-900 rounded-xl"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">TUK & Tanggal Asesmen</label>
              <input
                type="text"
                value={`${mapaData.lokasiAsesmen} (${mapaData.tanggalAsesmen})`}
                className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Pendekatan & Metode Asesmen */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4 text-xs">
          <h3 className="font-bold text-sm text-gray-900 border-b border-gray-100 pb-2">
            Pendekatan & Metode Asesmen
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Pendekatan Asesmen</label>
              <select
                value={mapaData.pendekatanAsesmen}
                onChange={(e) => setMapaData({ ...mapaData, pendekatanAsesmen: e.target.value })}
                className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl font-medium"
              >
                <option value="Hasil Pelatihan dan/atau Pengalaman Kerja">Hasil Pelatihan dan/atau Pengalaman Kerja</option>
                <option value="Pekerja Berpengalaman">Pekerja Berpengalaman</option>
                <option value="Sertifikasi Ulang">Sertifikasi Ulang (Recertification)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Metode Asesmen yang Ditetapkan:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Observasi Langsung / Demo Praktik',
                  'Tes Tulis Pilihan Ganda & Essai',
                  'Tanya Jawab / Wawancara Portfolio',
                  'Verifikasi Portofolio Produk',
                  'Studi Kasus / Simulation'
                ].map((metode) => (
                  <label key={metode} className="flex items-center gap-2 p-2 bg-slate-50 border border-gray-200 rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={mapaData.metodeAsesmen.includes(metode)}
                      className="rounded text-emerald-600"
                    />
                    <span className="font-medium text-gray-800">{metode}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Catatan Asesor & Actions */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4 text-xs">
          <h3 className="font-bold text-sm text-gray-900 border-b border-gray-100 pb-2">
            Catatan Asesor & Persetujuan
          </h3>

          <div>
            <textarea
              rows={3}
              value={mapaData.catatanAsesor}
              onChange={(e) => setMapaData({ ...mapaData, catatanAsesor: e.target.value })}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Simpan FR.MAPA.01
            </button>
          </div>
        </div>
      </form>

      <SweetAlert
        isOpen={alertOpen}
        type="success"
        title="Rencana Asesmen Tersimpan!"
        message="Dokumen perencanaan aktivitas asesmen (FR.MAPA.01) berhasil disimpan."
        onClose={() => setAlertOpen(false)}
      />
    </div>
  );
};
