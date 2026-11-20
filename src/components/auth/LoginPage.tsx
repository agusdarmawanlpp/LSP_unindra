import React, { useState } from 'react';
import { Award, Lock, User, Eye, EyeOff, ShieldCheck, ArrowLeft, CheckCircle2, KeyRound } from 'lucide-react';
import { Role, User as UserType } from '../../types';

interface LoginPageProps {
  onLoginSuccess: (user: UserType) => void;
  onBackToLanding: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLoginSuccess,
  onBackToLanding
}) => {
  const [selectedRole, setSelectedRole] = useState<Role>('admin');
  const [username, setUsername] = useState<string>('admin.lsp');
  const [password, setPassword] = useState<string>('password123');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const demoAccounts = {
    admin: {
      id: 'USR-ADM-01',
      name: 'Administrator LSP',
      username: 'admin.lsp',
      email: 'admin.lsp@unindra.ac.id',
      role: 'admin' as Role,
      npmNidn: '10928371'
    },
    asesor: {
      id: 'USR-ASR-01',
      name: 'Dr. Ir. Hendra Saputra, M.T.',
      username: 'hendra.asesor',
      email: 'hendra.saputra@unindra.ac.id',
      role: 'asesor' as Role,
      npmNidn: 'MET.000.002938 2021'
    },
    asesi: {
      id: 'USR-ASI-01',
      name: 'Rizky Pratama Kurniawan',
      username: '202243500123',
      email: 'rizky.pratama@unindra.ac.id',
      role: 'asesi' as Role,
      npmNidn: '202243500123',
      prodi: 'Teknik Informatika (S1)'
    }
  };

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setErrorMsg('');
    if (role === 'admin') {
      setUsername('admin.lsp');
      setPassword('password123');
    } else if (role === 'asesor') {
      setUsername('hendra.asesor');
      setPassword('password123');
    } else {
      setUsername('202243500123');
      setPassword('password123');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMsg('Username/NPM dan password wajib diisi');
      return;
    }

    const matchedUser = demoAccounts[selectedRole as keyof typeof demoAccounts] || demoAccounts.admin;
    onLoginSuccess(matchedUser);
  };

  return (
    <div className="min-h-screen bg-[#1e2d3b] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0D6EFD]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        {/* Back Link */}
        <button
          onClick={onBackToLanding}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Portal Beranda
        </button>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 space-y-6">
          {/* Header Branding */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#0D6EFD] text-white flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Sistem Informasi LSP
            </h2>
            <p className="text-xs text-gray-500">
              Lembaga Sertifikasi Profesi Universitas Indraprasta PGRI
            </p>
          </div>

          {/* Role Preset Switcher */}
          <div className="bg-gray-100 p-1 rounded-2xl grid grid-cols-3 gap-1">
            <button
              type="button"
              onClick={() => handleRoleSelect('admin')}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                selectedRole === 'admin'
                  ? 'bg-[#0D6EFD] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Admin / Mgt
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelect('asesor')}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                selectedRole === 'asesor'
                  ? 'bg-[#0D6EFD] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Asesor Penguji
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelect('asesi')}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                selectedRole === 'asesi'
                  ? 'bg-[#0D6EFD] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Asesi / Peserta
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium rounded-xl">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {selectedRole === 'asesi' ? 'NPM / Username' : selectedRole === 'asesor' ? 'NIDN / No Reg MET / Username' : 'Username Administrator'}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username atau NPM/NIDN"
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0D6EFD] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Kata Sandi (Password)
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  className="w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0D6EFD] focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-[#0D6EFD] focus:ring-[#0D6EFD]"
                />
                Ingat Saya (Remember Me)
              </label>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Silakan hubungi Sekretariat LSP UNINDRA via email lsp@unindra.ac.id untuk reset kata sandi.'); }} className="text-[#0D6EFD] hover:underline font-semibold">
                Lupa Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs font-bold text-white bg-[#0D6EFD] hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4" />
              Masuk Sistem {selectedRole === 'admin' ? 'Administrator' : selectedRole === 'asesor' ? 'Asesor' : 'Asesi'}
            </button>
          </form>

          {/* Quick Demo Fill Info Box */}
          <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl text-[11px] text-blue-900 space-y-1">
            <p className="font-bold flex items-center gap-1 text-blue-800">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Mode Demo Aktif:
            </p>
            <p className="text-blue-700">
              Menampilkan preset role: <strong>{selectedRole.toUpperCase()}</strong> ({demoAccounts[selectedRole as keyof typeof demoAccounts].name}). Klik tombol masuk untuk membuka dashboard!
            </p>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-slate-400 mt-6">
          © 2026 Lembaga Sertifikasi Profesi Universitas Indraprasta PGRI
        </p>
      </div>
    </div>
  );
};
