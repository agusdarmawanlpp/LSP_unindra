import React, { useState } from 'react';
import {
  FileText,
  User,
  CheckCircle2,
  FileCheck,
  Send,
  Printer,
  Eye,
  Building,
  GraduationCap,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { INITIAL_APL01 } from '../../data/mockData';
import { APL01Data } from '../../types';
import { Dropzone } from '../common/Dropzone';
import { SignaturePad } from '../common/SignaturePad';
import { SweetAlert } from '../common/SweetAlert';

export const APL01Form: React.FC = () => {
  const [aplData, setAplData] = useState<APL01Data>(INITIAL_APL01);
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [previewDocUrl, setPreviewDocUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessAlertOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
              FR.APL.01
            </span>
            <span className="text-xs text-gray-500">No: {aplData.noPermohonan}</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-1">
            Permohonan Sertifikasi Kompetensi (APL-01)
          </h2>
          <p className="text-xs text-gray-500">
            Formulir pendaftaran sertifikasi kompetensi & verifikasi berkas persyaratan dasar calon asesi.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Mencetak formulir APL-01 ke PDF...')}
            className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" /> Cetak PDF APL-01
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* SECTION 1: BIODATA PESERTA (ASESI) */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <User className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-base text-gray-900">Bagian 1 : Rincian Data Pemohon Sertifikasi</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Nama Lengkap Asesi</label>
              <input
                type="text"
                value={aplData.namaLengkap}
                onChange={(e) => setAplData({ ...aplData, namaLengkap: e.target.value })}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">NPM / NIK KTP</label>
              <input
                type="text"
                value={aplData.npmNik}
                onChange={(e) => setAplData({ ...aplData, npmNik: e.target.value })}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Tempat, Tanggal Lahir</label>
              <input
                type="text"
                value={aplData.tempatTglLahir}
                onChange={(e) => setAplData({ ...aplData, tempatTglLahir: e.target.value })}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Jenis Kelamin</label>
              <select
                value={aplData.jenisKelamin}
                onChange={(e) => setAplData({ ...aplData, jenisKelamin: e.target.value as any })}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
              >
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Alamat Rumah Lengkap</label>
              <input
                type="text"
                value={aplData.alamatRumah}
                onChange={(e) => setAplData({ ...aplData, alamatRumah: e.target.value })}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">No HP / Whatsapp & Email</label>
              <input
                type="text"
                value={`${aplData.noHp} / ${aplData.email}`}
                onChange={(e) => setAplData({ ...aplData, noHp: e.target.value })}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Program Studi & Instansi</label>
              <input
                type="text"
                value={`${aplData.kualifikasiPendidikan} - ${aplData.namaInstansi}`}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Skema Sertifikasi Pilihan</label>
              <input
                type="text"
                readOnly
                value={aplData.namaSkema}
                className="w-full px-3 py-2 bg-blue-50/80 border border-blue-200 text-blue-900 font-bold rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: UPLOAD DOKUMEN PERSYARATAN & PREVIEW */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-base text-gray-900">Bagian 2 : Kelengkapan Dokumen Persyaratan</h3>
            </div>
            <span className="text-xs text-emerald-700 bg-emerald-50 font-semibold px-2.5 py-0.5 rounded border border-emerald-200">
              Verifikasi Berkas OK
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Dropzone
              label="1. Identitas KTP / Kartu Tanda Mahasiswa (KTM)"
              initialFileName={aplData.fileUrls.ktpKtm}
              required
            />
            <Dropzone
              label="2. Transkrip Nilai Akademik UNINDRA"
              initialFileName={aplData.fileUrls.transkripNilai}
              required
            />
            <Dropzone
              label="3. Pas Foto 3x4 (Latar Belakang Merah)"
              initialFileName={aplData.fileUrls.pasFoto}
              required
            />
            <Dropzone
              label="4. Portofolio Karya / Sertifikat Pelatihan"
              initialFileName={aplData.fileUrls.portofolio}
            />
          </div>
        </div>

        {/* SECTION 3: TANDA TANGAN DIGITAL ASESI & STATUS VERIFIKASI */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-base text-gray-900">Bagian 3 : Pernyataan Kebenaran & Tanda Tangan</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <SignaturePad
                initialValue={aplData.tandaTanganAsesi}
                onSave={(dataUrl) => setAplData({ ...aplData, tandaTanganAsesi: dataUrl })}
                label="Tanda Tangan Elektronik Pemohon (Asesi)"
              />
              <p className="text-[11px] text-gray-500 italic">
                Dengan menggoreskan tanda tangan di atas, saya menyatakan seluruh data dan dokumen yang disampaikan adalah sah dan benar.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-gray-200 rounded-2xl space-y-3">
              <h4 className="font-bold text-xs text-gray-900 uppercase tracking-wider">Status Verifikasi Admin LSP:</h4>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-lg border border-emerald-300">
                  {aplData.statusVerifikasi}
                </span>
                <span className="text-xs text-gray-500">Tgl: {aplData.tanggalPermohonan}</span>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Catatan Verifikator/Admin:</label>
                <textarea
                  rows={2}
                  value={aplData.catatanVerifikator}
                  onChange={(e) => setAplData({ ...aplData, catatanVerifikator: e.target.value })}
                  className="w-full p-2 text-xs bg-white border border-gray-300 rounded-xl focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" /> Simpan & Verifikasi Permohonan APL-01
            </button>
          </div>
        </div>
      </form>

      <SweetAlert
        isOpen={successAlertOpen}
        type="success"
        title="APL-01 Berhasil Disimpan!"
        message="Formulir Permohonan Sertifikasi APL-01 telah diverifikasi dan siap dilanjutkan ke tahap APL-02 Asesmen Mandiri."
        onClose={() => setSuccessAlertOpen(false)}
      />
    </div>
  );
};
