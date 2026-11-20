import React, { useState } from 'react';
import {
  Award,
  LayoutDashboard,
  Database,
  FileCheck,
  Award as CertificateIcon,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Bell,
  Search,
  User as UserIcon,
  LogOut,
  Globe,
  Users,
  ShieldAlert,
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  Layers,
  FolderOpen,
  Laptop
} from 'lucide-react';
import { User } from '../../types';

interface DashboardLayoutProps {
  user: User;
  activeMenu: string;
  onSelectMenu: (menuId: string) => void;
  onLogout: () => void;
  onBackToPublic: () => void;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  user,
  activeMenu,
  onSelectMenu,
  onLogout,
  onBackToPublic,
  children
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({
    master: true,
    pelaksanaan: true
  });
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const masterDataSubmenus = [
    { id: 'master-user', label: 'Data User' },
    { id: 'master-asesi', label: 'Data Asesi' },
    { id: 'master-asesor', label: 'Data Asesor' },
    { id: 'master-skema', label: 'Skema Sertifikasi' },
    { id: 'master-unit', label: 'Unit Kompetensi' },
    { id: 'master-elemen', label: 'Elemen Kompetensi' },
    { id: 'master-kuk', label: 'KUK (Kriteria Unjuk Kerja)' },
    { id: 'master-pokja', label: 'Kelompok Kerja' },
    { id: 'master-muk', label: 'Master MUK' },
    { id: 'master-tuk', label: 'Tempat Uji Kompetensi (TUK)' },
  ];

  const pelaksanaanSubmenus = [
    { id: 'ujian-online', label: '💻 Ujian Online (CBT)' },
    { id: 'pelaksanaan-jadwal', label: 'Jadwal Uji Kompetensi' },
    { id: 'pelaksanaan-pendaftaran', label: 'Pendaftaran Asesi' },
    { id: 'pelaksanaan-apl01', label: 'APL 01 (Permohonan)' },
    { id: 'pelaksanaan-apl02', label: 'APL 02 (Asesmen Mandiri)' },
    { id: 'pelaksanaan-mapa01', label: 'FR.MAPA.01 (Perencanaan)' },
    { id: 'pelaksanaan-mapa02', label: 'FR.MAPA.02 (Peta Asesmen)' },
    { id: 'pelaksanaan-ak01', label: 'AK 01 (Persetujuan Asesmen)' },
    { id: 'pelaksanaan-ia01', label: 'IA 01 (Ceklis Observasi)' },
    { id: 'pelaksanaan-ia02', label: 'IA 02 (Tugas Praktik Demostrasi)' },
    { id: 'pelaksanaan-ia03', label: 'IA 03 (Pertanyaan Pendukung)' },
    { id: 'pelaksanaan-ia05', label: 'IA 05 (Pertanyaan Tertulis)' },
    { id: 'pelaksanaan-umpanbalik', label: 'Umpan Balik Asesi' },
    { id: 'pelaksanaan-keputusan', label: 'Keputusan Asesmen (K/BK)' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans text-gray-800">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200/80 shadow-sm h-16 flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-gray-600 hover:text-[#0D6EFD] hover:bg-gray-100 rounded-xl transition-colors"
            title="Toggle Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo Brand */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onSelectMenu('dashboard')}>
            <div className="w-9 h-9 rounded-lg bg-[#0D6EFD] text-white flex items-center justify-center font-bold shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-base text-gray-900 tracking-tight">
                LSP UNINDRA
              </span>
              <span className="hidden sm:inline-block text-[11px] text-gray-500 font-medium ml-2 border-l border-gray-300 pl-2">
                Professional System
              </span>
            </div>
            <div className="hidden md:block px-3 py-1 bg-blue-50 text-[#0D6EFD] text-[10px] font-bold rounded-full uppercase tracking-tighter border border-blue-100/80 ml-2">
              Live System
            </div>
          </div>
        </div>

        {/* Search & Top Action Utilities */}
        <div className="flex items-center gap-3">
          {/* Quick Search */}
          <div className="hidden md:flex items-center relative w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3" />
            <input
              type="text"
              placeholder="Cari asesi, skema, dokumen..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-gray-100 border border-transparent rounded-xl focus:bg-white focus:border-[#0D6EFD] transition-all focus:outline-none"
            />
          </div>

          {/* Back to Public Web */}
          <button
            onClick={onBackToPublic}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0D6EFD] bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200/80 transition-colors"
          >
            <Globe className="w-3.5 h-3.5" /> Portal Beranda
          </button>

          {/* Notification Badge */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2 text-gray-500 hover:text-[#0D6EFD] hover:bg-gray-100 rounded-xl relative transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 text-xs space-y-3 animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <h4 className="font-bold text-gray-900">Notifikasi Sistem</h4>
                  <span className="text-[10px] text-[#0D6EFD] bg-blue-50 px-2 py-0.5 rounded font-semibold">
                    3 Baru
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-2 bg-blue-50/70 rounded-xl space-y-0.5">
                    <p className="font-semibold text-gray-900">Permohonan APL 01 Baru</p>
                    <p className="text-gray-600 text-[11px]">Rizky Pratama mengajukan pendaftaran skema Web Programmer.</p>
                  </div>
                  <div className="p-2 bg-emerald-50/70 rounded-xl space-y-0.5">
                    <p className="font-semibold text-gray-900">Verifikasi Berhasil</p>
                    <p className="text-gray-600 text-[11px]">Dokumen APL 02 Siti Nurhaliza disetujui Asesor.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Menu */}
          <div className="relative border-l border-gray-200 pl-3">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-2.5 hover:bg-gray-100 p-1.5 rounded-xl transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#0D6EFD] text-white font-bold flex items-center justify-center text-xs shadow-sm border border-gray-100">
                {user.name.charAt(0)}
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-xs font-bold text-gray-900 leading-tight">{user.name}</p>
                <p className="text-[10px] text-[#0D6EFD] font-bold uppercase tracking-wider">{user.role}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 text-xs space-y-1 animate-in fade-in duration-150">
                <div className="p-2.5 border-b border-gray-100">
                  <p className="font-bold text-gray-900">{user.name}</p>
                  <p className="text-gray-500 text-[11px]">{user.email}</p>
                </div>
                <button
                  onClick={() => {
                    setUserDropdownOpen(false);
                    onSelectMenu('pengaturan');
                  }}
                  className="w-full text-left p-2 rounded-xl hover:bg-gray-100 flex items-center gap-2 font-medium text-gray-700"
                >
                  <UserIcon className="w-4 h-4 text-[#0D6EFD]" /> Profil & Pengaturan
                </button>
                <button
                  onClick={() => {
                    setUserDropdownOpen(false);
                    onLogout();
                  }}
                  className="w-full text-left p-2 rounded-xl hover:bg-rose-50 text-rose-600 font-semibold flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" /> Keluar (Logout)
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Container Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Navigation */}
        <aside
          className={`bg-[#1e2d3b] text-white w-64 shrink-0 transition-all duration-300 flex flex-col justify-between overflow-y-auto shadow-xl ${
            sidebarOpen ? 'ml-0' : '-ml-64'
          }`}
        >
          <div className="space-y-4">
            {/* Sidebar Header Block */}
            <div className="p-5 flex items-center gap-3 border-b border-gray-700/80 bg-[#16212c]">
              <div className="w-10 h-10 bg-[#0D6EFD] rounded-lg flex items-center justify-center font-bold text-xl text-white shadow">
                U
              </div>
              <div className="leading-tight">
                <h1 className="font-bold text-sm tracking-wide uppercase text-white">LSP UNINDRA</h1>
                <p className="text-[10px] text-gray-400">Professional System</p>
              </div>
            </div>

            {/* Sidebar User Info Card */}
            <div className="px-4">
              <div className="bg-[#16212c] rounded-xl p-3 border border-gray-700/50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0D6EFD] text-white font-bold flex items-center justify-center text-xs shadow">
                  {user.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white truncate">{user.name}</p>
                  <span className="inline-block text-[9px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80 uppercase">
                    {user.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Sidebar Menu List */}
            <nav className="px-3 space-y-1 text-xs pb-4">
              <div className="px-3 py-1.5 text-[10px] uppercase text-gray-500 font-bold tracking-wider">Main Menu</div>
              
              {/* Dashboard Menu */}
              <button
                onClick={() => onSelectMenu('dashboard')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold transition-all ${
                  activeMenu === 'dashboard'
                    ? 'bg-[#0D6EFD] text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard Utama</span>
              </button>

              {/* Ujian Online (CBT) Main Button */}
              <button
                onClick={() => onSelectMenu('ujian-online')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition-all ${
                  activeMenu === 'ujian-online'
                    ? 'bg-[#0D6EFD] text-white shadow-md'
                    : 'text-emerald-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Laptop className="w-4 h-4 text-emerald-400" />
                <span className="flex items-center gap-1.5">
                  Ujian Online (CBT)
                  <span className="bg-emerald-500/30 text-emerald-300 text-[9px] font-bold px-1.5 py-0.2 rounded border border-emerald-400/40">
                    LIVE
                  </span>
                </span>
              </button>

              {/* Master Data Collapsible Submenu */}
              <div className="pt-2">
                <button
                  onClick={() => toggleSubmenu('master')}
                  className="w-full flex items-center justify-between px-3 py-1.5 text-gray-500 hover:text-white font-bold uppercase tracking-wider text-[10px]"
                >
                  <span className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-blue-400" /> Master Data
                  </span>
                  {openSubmenus.master ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                </button>

                {openSubmenus.master && (
                  <div className="ml-2 pl-3 border-l border-gray-700/60 space-y-1 mt-1">
                    {masterDataSubmenus.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => onSelectMenu(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-[11px] transition-colors ${
                          activeMenu === sub.id
                            ? 'bg-[#0D6EFD] text-white font-bold'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Pelaksanaan Sertifikasi Submenu */}
              <div className="pt-2">
                <button
                  onClick={() => toggleSubmenu('pelaksanaan')}
                  className="w-full flex items-center justify-between px-3 py-1.5 text-gray-500 hover:text-white font-bold uppercase tracking-wider text-[10px]"
                >
                  <span className="flex items-center gap-2">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-400" /> Pelaksanaan Sertifikasi
                  </span>
                  {openSubmenus.pelaksanaan ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                </button>

                {openSubmenus.pelaksanaan && (
                  <div className="ml-2 pl-3 border-l border-gray-700/60 space-y-1 mt-1">
                    {pelaksanaanSubmenus.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => onSelectMenu(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-[11px] transition-colors ${
                          activeMenu === sub.id
                            ? 'bg-[#0D6EFD] text-white font-bold'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Sertifikat Menu */}
              <button
                onClick={() => onSelectMenu('sertifikat')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold transition-all mt-2 ${
                  activeMenu === 'sertifikat'
                    ? 'bg-[#0D6EFD] text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <CertificateIcon className="w-4 h-4 text-amber-400" />
                <span>Penerbitan Sertifikat</span>
              </button>

              {/* Laporan Menu */}
              <button
                onClick={() => onSelectMenu('laporan')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold transition-all ${
                  activeMenu === 'laporan'
                    ? 'bg-[#0D6EFD] text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <BarChart3 className="w-4 h-4 text-sky-400" />
                <span>Laporan & Rekapitulasi</span>
              </button>

              {/* Pengaturan Menu */}
              <button
                onClick={() => onSelectMenu('pengaturan')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold transition-all ${
                  activeMenu === 'pengaturan'
                    ? 'bg-[#0D6EFD] text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Settings className="w-4 h-4 text-gray-400" />
                <span>Pengaturan Sistem</span>
              </button>
            </nav>
          </div>

          <div className="p-4 bg-[#16212c] text-xs text-center border-t border-gray-700/80">
            <p className="opacity-60 text-[11px] text-gray-400">&copy; 2026 LSP UNINDRA • BNSP RI</p>
          </div>
        </aside>

        {/* Content View Container */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#F8F9FA]">
          {children}
        </main>
      </div>
    </div>
  );
};
