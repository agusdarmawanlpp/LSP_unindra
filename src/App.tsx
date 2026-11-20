import React, { useState } from 'react';
import { Header } from './components/common/Header';
import { LandingPage } from './components/landing/LandingPage';
import { LoginPage } from './components/auth/LoginPage';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { DashboardOverview } from './components/dashboard/DashboardOverview';
import { MasterDataTable } from './components/dashboard/MasterDataTable';
import { APL01Form } from './components/forms/APL01Form';
import { FRMAPA01Form } from './components/forms/FRMAPA01Form';
import { FRMAPA02Form } from './components/forms/FRMAPA02Form';
import { SertifikatView } from './components/sertifikat/SertifikatView';
import { LaporanView } from './components/laporan/LaporanView';
import { UjianOnlineView } from './components/exam/UjianOnlineView';
import {
  INITIAL_SKEMA,
  INITIAL_ASESI,
  INITIAL_ASESOR,
  INITIAL_TUK,
  INITIAL_JADWAL
} from './data/mockData';
import { User, SkemaSertifikasi } from './types';
import { Settings, ShieldCheck, Database, FileCheck } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'landing' | 'login' | 'dashboard'>('landing');
  const [activeDashboardMenu, setActiveDashboardMenu] = useState<string>('dashboard');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setViewMode('dashboard');
    setActiveDashboardMenu('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setViewMode('landing');
  };

  const handleSelectSkemaDaftar = (skema: SkemaSertifikasi) => {
    const demoUser: User = {
      id: 'USR-ASI-01',
      name: 'Rizky Pratama Kurniawan',
      username: '202243500123',
      email: 'rizky.pratama@unindra.ac.id',
      role: 'asesi',
      npmNidn: '202243500123',
      prodi: 'Teknik Informatika (S1)'
    };
    setCurrentUser(demoUser);
    setViewMode('dashboard');
    setActiveDashboardMenu('pelaksanaan-apl01');
  };

  // Render Master Data Configs
  const getMasterDataConfig = (menuId: string) => {
    switch (menuId) {
      case 'master-user':
        return {
          title: 'Master Data User System',
          categoryName: 'Sistem Security & Hak Akses',
          columns: [
            { key: 'username', label: 'Username' },
            { key: 'name', label: 'Nama Lengkap' },
            { key: 'email', label: 'Alamat Email' },
            { key: 'role', label: 'Role / Peran', render: (v: string) => <span className="font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{v}</span> }
          ],
          data: [
            { id: '1', username: 'admin.lsp', name: 'Administrator LSP', email: 'admin.lsp@unindra.ac.id', role: 'admin' },
            { id: '2', username: 'hendra.asesor', name: 'Dr. Ir. Hendra Saputra, M.T.', email: 'hendra@unindra.ac.id', role: 'asesor' },
            { id: '3', username: '202243500123', name: 'Rizky Pratama Kurniawan', email: 'rizky@unindra.ac.id', role: 'asesi' }
          ]
        };

      case 'master-asesi':
        return {
          title: 'Master Data Asesi (Peserta)',
          categoryName: 'Data Mahasiswa & Calon Sertifikasi',
          columns: [
            { key: 'npm', label: 'NPM' },
            { key: 'nama', label: 'Nama Asesi' },
            { key: 'prodi', label: 'Program Studi' },
            { key: 'namaSkema', label: 'Skema Pilihan' },
            { key: 'statusAPL01', label: 'Status APL-01', render: (v: string) => <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{v}</span> }
          ],
          data: INITIAL_ASESI
        };

      case 'master-asesor':
        return {
          title: 'Master Data Asesor Kompetensi',
          categoryName: 'Penguji Terlisensi MET BNSP',
          columns: [
            { key: 'noReg', label: 'No. Registrasi MET' },
            { key: 'nama', label: 'Nama Asesor' },
            { key: 'bidangKeahlian', label: 'Bidang Keahlian' },
            { key: 'jumlahAsesiDiuji', label: 'Total Diuji' },
            { key: 'status', label: 'Status', render: (v: string) => <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{v}</span> }
          ],
          data: INITIAL_ASESOR
        };

      case 'master-skema':
        return {
          title: 'Master Skema Sertifikasi',
          categoryName: 'Kualifikasi Standar SKKNI & BNSP',
          columns: [
            { key: 'kodeSkema', label: 'Kode Skema' },
            { key: 'namaSkema', label: 'Nama Skema' },
            { key: 'kategori', label: 'Kategori Bidang' },
            { key: 'jumlahUnit', label: 'Jumlah Unit' },
            { key: 'biaya', label: 'Biaya Asesmen', render: (v: number) => `Rp ${v.toLocaleString('id-ID')}` }
          ],
          data: INITIAL_SKEMA
        };

      case 'master-unit':
        return {
          title: 'Master Unit Kompetensi',
          categoryName: 'Standard Kompetensi Kerja Nasional (SKKNI)',
          columns: [
            { key: 'kodeUnit', label: 'Kode Unit' },
            { key: 'judulUnit', label: 'Judul Unit Kompetensi' },
            { key: 'standarSkkni', label: 'Standar SKKNI' },
            { key: 'jumlahElemen', label: 'Jumlah Elemen' }
          ],
          data: INITIAL_SKEMA[0].unitKompetensiList || []
        };

      case 'master-tuk':
        return {
          title: 'Master Tempat Uji Kompetensi (TUK)',
          categoryName: 'Fasilitas Laboratorium Assessment',
          columns: [
            { key: 'kodeTUK', label: 'Kode TUK' },
            { key: 'namaTUK', label: 'Nama Tempat Uji' },
            { key: 'jenis', label: 'Jenis TUK' },
            { key: 'kapasitas', label: 'Kapasitas (Orang)' },
            { key: 'penanggungJawab', label: 'Penanggung Jawab' }
          ],
          data: INITIAL_TUK
        };

      default:
        return {
          title: `Master ${menuId.replace('master-', '').toUpperCase()}`,
          categoryName: 'Data Referensi Master LSP',
          columns: [
            { key: 'kode', label: 'Kode Referensi' },
            { key: 'nama', label: 'Deskripsi Master' },
            { key: 'status', label: 'Status Data' }
          ],
          data: [
            { id: '1', kode: 'REF-001', nama: 'Item Modul Referensi Standar 1', status: 'Aktif' },
            { id: '2', kode: 'REF-002', nama: 'Item Modul Referensi Standar 2', status: 'Aktif' }
          ]
        };
    }
  };

  // Render Dashboard Content based on active submenu
  const renderDashboardContent = () => {
    if (activeDashboardMenu === 'dashboard') {
      return <DashboardOverview onNavigateToMenu={(menu) => setActiveDashboardMenu(menu)} />;
    }

    if (activeDashboardMenu === 'ujian-online') {
      return <UjianOnlineView />;
    }

    if (activeDashboardMenu.startsWith('master-')) {
      const config = getMasterDataConfig(activeDashboardMenu);
      return (
        <MasterDataTable
          title={config.title}
          categoryName={config.categoryName}
          columns={config.columns}
          initialData={config.data}
        />
      );
    }

    if (activeDashboardMenu === 'pelaksanaan-apl01') {
      return <APL01Form />;
    }

    if (activeDashboardMenu === 'pelaksanaan-mapa01') {
      return <FRMAPA01Form />;
    }

    if (activeDashboardMenu === 'pelaksanaan-mapa02') {
      return <FRMAPA02Form />;
    }

    if (activeDashboardMenu.startsWith('pelaksanaan-')) {
      return (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-gray-900 capitalize">
              {activeDashboardMenu.replace('pelaksanaan-', '').replace('-', ' ').toUpperCase()}
            </h2>
          </div>
          <p className="text-xs text-gray-600">
            Formulir instrumen pengujian asesmen untuk modul <strong>{activeDashboardMenu}</strong>. Seluruh checklist verifikasi terhubung langsung dengan keputusan rekomendasi Asesor.
          </p>
          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl text-xs space-y-2">
            <p className="font-bold text-blue-900">Petunjuk Pelaksanaan Asesmen:</p>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Pastikan identitas asesi dan ketersediaan berkas APL-01 telah terverifikasi.</li>
              <li>Instruktur/Asesor melakukan observasi sesuai kriteria unjuk kerja MUK.</li>
              <li>Simpan hasil pengujian dan secara otomatis sistem akan memperbarui rekapitulasi.</li>
            </ul>
          </div>
        </div>
      );
    }

    if (activeDashboardMenu === 'sertifikat') {
      return <SertifikatView />;
    }

    if (activeDashboardMenu === 'laporan') {
      return <LaporanView />;
    }

    if (activeDashboardMenu === 'pengaturan') {
      return (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6 max-w-3xl">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <Settings className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-bold text-gray-900">Pengaturan Profil LSP UNINDRA</h2>
          </div>

          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Nama Lembaga</label>
                <input
                  type="text"
                  defaultValue="LSP P1 Universitas Indraprasta PGRI"
                  className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl font-bold"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">No Lisensi BNSP</label>
                <input
                  type="text"
                  defaultValue="LISP-1829-ID"
                  className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl font-bold text-emerald-700"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Alamat Sekretariat Utama</label>
              <textarea
                rows={2}
                defaultValue="Jl. Nangka No.58C, Tanjung Barat, Jagakarsa, Jakarta Selatan 12530"
                className="w-full p-2 bg-gray-50 border border-gray-300 rounded-xl"
              />
            </div>

            <button
              onClick={() => alert('Pengaturan profil LSP berhasil disimpan!')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md text-xs"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      {viewMode === 'landing' && (
        <>
          <Header
            onNavigate={(nav) => {
              if (nav === 'verify-cert') {
                const demoUser: User = {
                  id: 'USR-ADM-01',
                  name: 'Administrator LSP',
                  username: 'admin.lsp',
                  email: 'admin.lsp@unindra.ac.id',
                  role: 'admin'
                };
                handleLoginSuccess(demoUser);
                setActiveDashboardMenu('sertifikat');
              }
            }}
            onOpenLogin={() => setViewMode('login')}
          />
          <LandingPage
            onNavigate={(nav) => console.log('Navigated:', nav)}
            onOpenLogin={() => setViewMode('login')}
            onSelectSkemaDaftar={handleSelectSkemaDaftar}
          />
        </>
      )}

      {viewMode === 'login' && (
        <LoginPage
          onLoginSuccess={handleLoginSuccess}
          onBackToLanding={() => setViewMode('landing')}
        />
      )}

      {viewMode === 'dashboard' && currentUser && (
        <DashboardLayout
          user={currentUser}
          activeMenu={activeDashboardMenu}
          onSelectMenu={(menuId) => setActiveDashboardMenu(menuId)}
          onLogout={handleLogout}
          onBackToPublic={() => setViewMode('landing')}
        >
          {renderDashboardContent()}
        </DashboardLayout>
      )}
    </div>
  );
}
