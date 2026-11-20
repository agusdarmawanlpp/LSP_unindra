import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  Phone,
  User,
  Menu,
  X,
  LogIn,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: string) => void;
  activeSection?: string;
  onOpenLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenLogin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', id: 'beranda' },
    { label: 'Profil', id: 'profil' },
    { label: 'Skema Sertifikasi', id: 'skema' },
    { label: 'Jadwal Uji', id: 'jadwal' },
    { label: 'Asesor', id: 'asesor' },
    { label: 'Berita', id: 'berita' },
    { label: 'Galeri', id: 'galeri' },
    { label: 'Kontak', id: 'kontak' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Top Banner Bar */}
      <div className="bg-[#1e2d3b] text-white text-xs py-2 px-4 border-b border-gray-700/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <strong>LSP P1 UNINDRA</strong> - Terlisensi BNSP No. LISP-1829-ID
            </span>
            <span className="hidden sm:inline-block text-gray-600">|</span>
            <span className="hidden sm:flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              Universitas Indraprasta PGRI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#verify-cert"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('verify-cert');
              }}
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold text-emerald-400"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              Verifikasi Sertifikat Online
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300">Call Center: (021) 7818718</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('beranda')}
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-[#0D6EFD] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-0.5 border-2 border-white">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-gray-900 group-hover:text-[#0D6EFD] transition-colors">
                  LSP UNINDRA
                </span>
                <span className="bg-blue-50 text-[#0D6EFD] text-[10px] font-bold px-1.5 py-0.5 rounded border border-blue-200">
                  BNSP
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Lembaga Sertifikasi Profesi PGRI
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#0D6EFD] hover:bg-blue-50/80 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onNavigate('skema')}
              className="px-4 py-2.5 text-sm font-semibold text-[#0D6EFD] bg-blue-50 hover:bg-blue-100/80 rounded-xl transition-colors border border-blue-200/80 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#0D6EFD]" />
              Daftar Sertifikasi
            </button>
            <button
              onClick={onOpenLogin}
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#0D6EFD] hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Login Sistem
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenLogin}
              className="p-2 text-sm text-blue-600 bg-blue-50 rounded-lg font-medium flex items-center gap-1"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 mb-2 border-b border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('skema');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-blue-700 bg-blue-50 rounded-xl border border-blue-200"
            >
              Daftar Sertifikasi
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-md"
            >
              Login Sistem Informasi
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
