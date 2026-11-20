import React, { useState } from 'react';
import {
  Award,
  Printer,
  Mail,
  QrCode,
  CheckCircle2,
  Download,
  ShieldCheck,
  Search,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { INITIAL_SERTIFIKAT } from '../../data/mockData';
import { SertifikatData } from '../../types';
import { SweetAlert } from '../common/SweetAlert';

export const SertifikatView: React.FC = () => {
  const [sertifikatList, setSertifikatList] = useState<SertifikatData[]>(INITIAL_SERTIFIKAT);
  const [selectedSertifikat, setSelectedSertifikat] = useState<SertifikatData>(INITIAL_SERTIFIKAT[0]);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handlePrintPDF = () => {
    alert(`Mencetak E-Sertifikat BNSP untuk Asesi: ${selectedSertifikat.namaAsesi} (No: ${selectedSertifikat.noSertifikat})...`);
  };

  const handleSendEmail = () => {
    setToastMsg(`E-Sertifikat telah dikirimkan ke email asesi ${selectedSertifikat.namaAsesi}!`);
    setToastOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
            Sertifikat BNSP RI
          </span>
          <h2 className="text-xl font-bold text-gray-900 mt-1">
            Manajemen & Penerbitan Sertifikat Kompetensi
          </h2>
          <p className="text-xs text-gray-500">
            Penerbitan E-Sertifikat resmi berlogo Garuda BNSP dengan verifikasi QR Code keamanan digital.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSendEmail}
            className="px-4 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4 text-blue-600" /> Kirim Email E-Sertifikat
          </button>
          <button
            onClick={handlePrintPDF}
            className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" /> Cetak PDF Official
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CERTIFICATE PREVIEW CARD CONTAINER */}
        <div className="lg:col-span-8 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-6">
          {/* Certificate Border Frame Ornaments */}
          <div className="absolute inset-4 border-2 border-amber-400/40 rounded-2xl pointer-events-none" />
          <div className="absolute inset-6 border border-amber-400/20 rounded-xl pointer-events-none" />

          {/* Certificate Content */}
          <div className="relative z-10 space-y-6 text-center pt-4">
            <div className="flex justify-between items-center px-4">
              <div className="text-left">
                <p className="text-[10px] text-amber-300 font-bold uppercase tracking-widest">
                  BADAN NASIONAL SERTIFIKASI PROFESI
                </p>
                <p className="text-[11px] font-extrabold text-white">REPUBLIK INDONESIA</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold border border-amber-400/30">
                <Award className="w-7 h-7" />
              </div>
              <div className="text-right">
                <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">
                  LSP P1 UNINDRA
                </p>
                <p className="text-[11px] font-extrabold text-white">UNIVERSITAS INDRAPRASTA PGRI</p>
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-300 tracking-tight font-serif">
                SERTIFIKAT KOMPETENSI
              </h1>
              <p className="text-xs text-slate-300">
                No. Sertifikat: <strong className="text-white">{selectedSertifikat.noSertifikat}</strong>
              </p>
              <p className="text-[11px] text-slate-400">
                No. Registrasi: {selectedSertifikat.noRegistrasi}
              </p>
            </div>

            <div className="space-y-2 py-4">
              <p className="text-xs text-slate-300">Dengan ini menyatakan bahwa:</p>
              <h2 className="text-2xl font-extrabold text-white tracking-wide underline underline-offset-8 decoration-amber-400/80">
                {selectedSertifikat.namaAsesi}
              </h2>
              <p className="text-xs text-slate-400">NPM / Identitas: {selectedSertifikat.npm}</p>
            </div>

            <div className="space-y-2 max-w-xl mx-auto">
              <p className="text-xs text-slate-300">Dinyatakan KOMPETEN pada Bidang / Skema:</p>
              <div className="p-3 bg-slate-800/80 border border-amber-500/30 rounded-xl">
                <p className="font-bold text-sm text-amber-200">{selectedSertifikat.namaSkema}</p>
              </div>
            </div>

            {/* Footer Signatures & QR */}
            <div className="grid grid-cols-3 items-end pt-6 text-xs text-slate-300">
              <div className="text-center space-y-1">
                <p className="text-[10px] text-slate-400">Ketua LSP UNINDRA</p>
                <div className="h-12 flex items-center justify-center font-serif text-amber-300 text-sm font-bold">
                  Dr. Ir. Hendra S.
                </div>
                <p className="font-semibold text-white">Ketua Lembaga</p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-1">
                <img
                  src={selectedSertifikat.qrCodeUrl}
                  alt="QR Verify"
                  className="w-16 h-16 rounded-lg bg-white p-1 shadow-md border border-amber-400"
                />
                <span className="text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Validated BNSP
                </span>
              </div>

              <div className="text-center space-y-1">
                <p className="text-[10px] text-slate-400">Ketua Tim Asesor</p>
                <div className="h-12 flex items-center justify-center font-serif text-amber-300 text-sm font-bold">
                  Ir. Ratna Dewi, M.Kom.
                </div>
                <p className="font-semibold text-white">Master Asesor</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIWAYAT PENERBITAN TABLE */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div className="border-b border-gray-100 pb-3">
            <h3 className="font-bold text-base text-gray-900">Daftar Sertifikat Terbit</h3>
            <p className="text-xs text-gray-500">Pilih asesi untuk melihat pratinjau sertifikat</p>
          </div>

          <div className="space-y-3">
            {sertifikatList.map((srt) => (
              <div
                key={srt.id}
                onClick={() => setSelectedSertifikat(srt)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all space-y-1.5 ${
                  selectedSertifikat.id === srt.id
                    ? 'border-blue-500 bg-blue-50/80 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-100">
                    {srt.noRegistrasi}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {srt.status}
                  </span>
                </div>
                <p className="font-bold text-xs text-gray-900">{srt.namaAsesi}</p>
                <p className="text-[11px] text-gray-600 line-clamp-1">{srt.namaSkema}</p>
                <p className="text-[10px] text-gray-400">Terbit: {srt.tanggalTerbit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SweetAlert
        isOpen={toastOpen}
        type="success"
        title="Email Terkirim!"
        message={toastMsg}
        onClose={() => setToastOpen(false)}
      />
    </div>
  );
};
