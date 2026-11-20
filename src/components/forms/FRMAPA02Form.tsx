import React, { useState } from 'react';
import { CheckCircle2, XCircle, Save, Printer, Award, FileText } from 'lucide-react';
import { INITIAL_MAPA02 } from '../../data/mockData';
import { MAPA02Data } from '../../types';
import { SweetAlert } from '../common/SweetAlert';

export const FRMAPA02Form: React.FC = () => {
  const [mapa02, setMapa02] = useState<MAPA02Data>(INITIAL_MAPA02);
  const [alertOpen, setAlertOpen] = useState(false);

  const toggleStatus = (unitIdx: number, mukIdx: number) => {
    const updatedUnits = [...mapa02.units];
    const current = updatedUnits[unitIdx].mukList[mukIdx].status;
    updatedUnits[unitIdx].mukList[mukIdx].status = current === 'K' ? 'BK' : 'K';
    setMapa02({ ...mapa02, units: updatedUnits });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
            FR.MAPA.02
          </span>
          <h2 className="text-xl font-bold text-gray-900 mt-1">
            Peta Asesmen & Ceklis Observasi MUK
          </h2>
          <p className="text-xs text-gray-500">
            Peta pencapaian elemen dan kriteria unjuk kerja (KUK) berdasarkan Materi Uji Kompetensi.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Mencetak dokumen Peta Asesmen FR.MAPA.02...')}
            className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" /> Cetak PDF
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Table MUK & Checklist */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-xs">
            <div>
              <p className="font-bold text-gray-900 text-sm">{mapa02.skemaName}</p>
              <p className="text-gray-500">{mapa02.kelompokKerja}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-700">Rekomendasi Asesor:</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-extrabold rounded-lg">
                {mapa02.rekomendasi === 'K' ? 'KOMPETEN (K)' : 'BELUM KOMPETEN (BK)'}
              </span>
            </div>
          </div>

          {mapa02.units.map((unit, uIdx) => (
            <div key={unit.kodeUnit} className="border border-gray-200 rounded-2xl overflow-hidden space-y-0">
              <div className="bg-slate-50 p-3 border-b border-gray-200 text-xs font-bold text-gray-800 flex justify-between items-center">
                <span>Unit {uIdx + 1}: {unit.kodeUnit} - {unit.judulUnit}</span>
                <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-semibold">
                  SKKNI Valid
                </span>
              </div>

              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white text-[11px] font-bold text-gray-600 uppercase border-b border-gray-200">
                    <th className="py-2.5 px-4 w-24">Kode MUK</th>
                    <th className="py-2.5 px-4">Kriteria Unjuk Kerja / Deskripsi Pengujian</th>
                    <th className="py-2.5 px-4 w-32 text-center">Hasil Penilaian</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs text-gray-800">
                  {unit.mukList.map((muk, mIdx) => (
                    <tr key={muk.kodeMUK} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-bold text-blue-600">{muk.kodeMUK}</td>
                      <td className="py-3 px-4 font-medium">{muk.deskripsi}</td>
                      <td className="py-3 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => toggleStatus(uIdx, mIdx)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                            muk.status === 'K'
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'bg-rose-600 text-white shadow-sm'
                          }`}
                        >
                          {muk.status === 'K' ? '✓ Kompeten' : '✕ Belum Kompeten'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Simpan FR.MAPA.02
            </button>
          </div>
        </div>
      </form>

      <SweetAlert
        isOpen={alertOpen}
        type="success"
        title="Peta Asesmen Tersimpan!"
        message="Hasil ceklis pengujian observasi MUK (FR.MAPA.02) telah disimpan dalam basis data."
        onClose={() => setAlertOpen(false)}
      />
    </div>
  );
};
