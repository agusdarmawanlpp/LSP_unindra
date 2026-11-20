import React from 'react';
import {
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Globe,
  Facebook,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white tracking-tight">LSP UNINDRA</h3>
                <p className="text-xs text-blue-400 font-medium">Lembaga Sertifikasi Profesi P1</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Lembaga Sertifikasi Profesi Universitas Indraprasta PGRI yang terlisensi oleh Badan Nasional Sertifikasi Profesi (BNSP) untuk memastikan kompetensi lulusan sesuai standar SKKNI & Industri.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Lisensi BNSP No: LISP-1829-ID
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-400 flex items-center justify-center transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 hover:text-white text-slate-400 flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 hover:text-white text-slate-400 flex items-center justify-center transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-500 hover:text-white text-slate-400 flex items-center justify-center transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base border-b border-slate-800 pb-2">Navigasi Utama</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#profil" onClick={() => onNavigate?.('profil')} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-blue-500">›</span> Profil LSP & Visi Misi
                </a>
              </li>
              <li>
                <a href="#skema" onClick={() => onNavigate?.('skema')} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-blue-500">›</span> Skema Sertifikasi Kompetensi
                </a>
              </li>
              <li>
                <a href="#jadwal" onClick={() => onNavigate?.('jadwal')} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-blue-500">›</span> Jadwal Uji Kompetensi
                </a>
              </li>
              <li>
                <a href="#asesor" onClick={() => onNavigate?.('asesor')} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-blue-500">›</span> Daftar Asesor Terlisensi
                </a>
              </li>
              <li>
                <a href="#verify" onClick={() => onNavigate?.('verify-cert')} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Verifikasi E-Sertifikat
                </a>
              </li>
              <li>
                <a href="https://unindra.ac.id" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2 text-slate-400">
                  <ExternalLink className="w-3.5 h-3.5" /> Portal Universitas Indraprasta PGRI
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base border-b border-slate-800 pb-2">Sekretariat LSP</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Kampus A UNINDRA:</strong><br />
                  Jl. Nangka No.58C, Tanjung Barat, Jagakarsa, Jakarta Selatan 12530
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Kampus B UNINDRA:</strong><br />
                  Jl. Raya Tengah No.80, Gedong, Pasar Rebo, Jakarta Timur 13760
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>(021) 7818718 / WA: +62 812-9876-5432</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>lsp@unindra.ac.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Senin - Sabtu: 08.00 - 16.00 WIB</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Google Maps Frame */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base border-b border-slate-800 pb-2">Lokasi Sekretariat TUK</h4>
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-md bg-slate-800 h-44 relative">
              <iframe
                title="Google Maps LSP UNINDRA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.48512398457!2d106.8378903!3d-6.3312012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed1e8f3a38cd%3A0x8e833f443b235f3f!2sUniversitas%20Indraprasta%20PGRI%20(UNINDRA)%20Kampus%20A!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-slate-400">
              TUK Utama terletak di Laboratorium Komputer FTIK Kampus A UNINDRA.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-3">
          <p>© 2026 LSP UNINDRA - Lembaga Sertifikasi Profesi Universitas Indraprasta PGRI. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-200">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-200">Syarat & Ketentuan</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-200">Standard Operasional BNSP</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
