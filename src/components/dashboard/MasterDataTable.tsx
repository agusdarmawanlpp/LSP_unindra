import React, { useState } from 'react';
import {
  Search,
  Plus,
  FileSpreadsheet,
  FileText,
  Edit,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  XCircle,
  Download,
  Database
} from 'lucide-react';
import { SweetAlert } from '../common/SweetAlert';

interface MasterDataTableProps {
  title: string;
  categoryName: string;
  columns: { key: string; label: string; render?: (val: any, row: any) => React.ReactNode }[];
  initialData: any[];
  onExportExcel?: () => void;
  onExportPDF?: () => void;
}

export const MasterDataTable: React.FC<MasterDataTableProps> = ({
  title,
  categoryName,
  columns,
  initialData,
  onExportExcel,
  onExportPDF
}) => {
  const [data, setData] = useState<any[]>(initialData);
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  // Modal State
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'detail'>('add');
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});

  // SweetAlert Delete State
  const [deleteAlertOpen, setDeleteAlertOpen] = useState<boolean>(false);
  const [deletingRowId, setDeletingRowId] = useState<string | null>(null);

  // Success Alert State
  const [successAlertOpen, setSuccessAlertOpen] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const filteredData = data.filter((row) =>
    Object.values(row).some(
      (val) => val && String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleOpenAdd = () => {
    setModalMode('add');
    setSelectedRow(null);
    const emptyForm: any = {};
    columns.forEach((c) => (emptyForm[c.key] = ''));
    setFormValues(emptyForm);
    setModalOpen(true);
  };

  const handleOpenEdit = (row: any) => {
    setModalMode('edit');
    setSelectedRow(row);
    setFormValues({ ...row });
    setModalOpen(true);
  };

  const handleOpenDetail = (row: any) => {
    setModalMode('detail');
    setSelectedRow(row);
    setModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalMode === 'add') {
      const newRow = { id: `MST-${Date.now()}`, ...formValues };
      setData([newRow, ...data]);
      setSuccessMessage('Data baru berhasil ditambahkan!');
    } else if (modalMode === 'edit') {
      setData(data.map((item) => (item.id === selectedRow.id ? { ...item, ...formValues } : item)));
      setSuccessMessage('Perubahan data berhasil disimpan!');
    }
    setModalOpen(false);
    setSuccessAlertOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (deletingRowId) {
      setData(data.filter((item) => item.id !== deletingRowId));
      setSuccessMessage('Data berhasil dihapus dari sistem!');
      setSuccessAlertOpen(true);
    }
  };

  const handleTriggerExportPDF = () => {
    alert(`Mengeksport ${title} ke format PDF... File akan diunduh secara otomatis.`);
  };

  const handleTriggerExportExcel = () => {
    alert(`Mengeksport ${title} ke format Microsoft Excel (.xlsx)...`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Title & Actions */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
            {categoryName}
          </span>
          <h2 className="text-xl font-bold text-gray-900 mt-1">{title}</h2>
          <p className="text-xs text-gray-500">Kelola dan perbarui data master {title.toLowerCase()} sistem LSP UNINDRA</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleTriggerExportPDF}
            className="px-3.5 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-rose-600" /> Export PDF
          </button>
          <button
            onClick={handleTriggerExportExcel}
            className="px-3.5 py-2 text-xs font-bold text-white bg-[#198754] hover:bg-emerald-700 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <FileSpreadsheet className="w-4 h-4" /> Export Excel
          </button>
          <button
            onClick={handleOpenAdd}
            className="px-4 py-2 text-xs font-bold text-white bg-[#0D6EFD] hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" /> Tambah Data
          </button>
        </div>
      </div>

      {/* DataTable Container */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden space-y-4 p-4 sm:p-6">
        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari kata kunci data..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
            />
          </div>

          <div className="text-xs text-gray-500 font-medium">
            Menampilkan <strong className="text-gray-900">{filteredData.length}</strong> entri data
          </div>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto border border-gray-100 rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-200 text-xs font-bold text-gray-700 uppercase">
                <th className="py-3 px-4 w-12 text-center">No</th>
                {columns.map((col) => (
                  <th key={col.key} className="py-3 px-4">{col.label}</th>
                ))}
                <th className="py-3 px-4 text-center w-32">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-800">
              {paginatedData.length > 0 ? (
                paginatedData.map((row, idx) => (
                  <tr key={row.id || idx} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-3 px-4 text-center font-bold text-gray-500">
                      {(currentPage - 1) * itemsPerPage + idx + 1}
                    </td>
                    {columns.map((col) => (
                      <td key={col.key} className="py-3 px-4 font-medium">
                        {col.render ? col.render(row[col.key], row) : row[col.key] || '-'}
                      </td>
                    ))}
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => handleOpenDetail(row)}
                          className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Lihat Detail"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleOpenEdit(row)}
                          className="p-1.5 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                          title="Edit Data"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            setDeletingRowId(row.id);
                            setDeleteAlertOpen(true);
                          }}
                          className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Hapus Data"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length + 2} className="py-8 text-center text-gray-400">
                    Tidak ada data ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-xs text-gray-500">
            Halaman {currentPage} dari {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-1.5 text-gray-600 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 rounded-lg text-xs flex items-center gap-1 font-semibold"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1.5 text-gray-600 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 rounded-lg text-xs flex items-center gap-1 font-semibold"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* CRUD MODAL FORM */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="font-bold text-gray-900 text-base">
                {modalMode === 'add' ? 'Tambah Data Baru' : modalMode === 'edit' ? 'Edit Data Master' : 'Detail Data Master'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-lg font-bold">
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
              {columns.map((col) => (
                <div key={col.key}>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {col.label}
                  </label>
                  <input
                    type="text"
                    disabled={modalMode === 'detail'}
                    value={formValues[col.key] || ''}
                    onChange={(e) => setFormValues({ ...formValues, [col.key]: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white disabled:bg-gray-100 disabled:text-gray-600"
                  />
                </div>
              ))}

              <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl"
                >
                  Batal
                </button>
                {modalMode !== 'detail' && (
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md"
                  >
                    Simpan Data
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SweetAlert Delete Confirmation */}
      <SweetAlert
        isOpen={deleteAlertOpen}
        type="confirm"
        title="Konfirmasi Hapus Data"
        message="Apakah Anda yakin ingin menghapus data master ini dari sistem LSP UNINDRA?"
        confirmText="Ya, Hapus!"
        cancelText="Batal"
        onConfirm={handleDeleteConfirm}
        onClose={() => setDeleteAlertOpen(false)}
      />

      {/* Success Notification Alert */}
      <SweetAlert
        isOpen={successAlertOpen}
        type="success"
        title="Berhasil!"
        message={successMessage}
        onClose={() => setSuccessAlertOpen(false)}
      />
    </div>
  );
};
