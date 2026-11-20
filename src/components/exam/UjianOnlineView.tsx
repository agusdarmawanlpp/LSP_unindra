import React, { useState, useEffect } from 'react';
import {
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Award,
  BookOpen,
  FileCheck,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  BarChart2,
  Users,
  Eye,
  RotateCcw,
  Sparkles,
  Search,
  CheckSquare,
  Square,
  XCircle,
  GraduationCap
} from 'lucide-react';

interface Question {
  id: number;
  unitKode: string;
  unitJudul: string;
  pertanyaan: string;
  pilihan: { key: string; text: string }[];
  kunciJawaban: string;
  penjelasan: string;
}

interface ExamScheme {
  id: string;
  kodeSkema: string;
  namaSkema: string;
  kategori: string;
  durasiMenit: number;
  jumlahSoal: number;
  passingGrade: number;
  deskripsi: string;
  questions: Question[];
}

const MOCK_EXAM_SCHEMES: ExamScheme[] = [
  {
    id: 'EXAM-WEB-01',
    kodeSkema: 'SKM-2026-WEB-01',
    namaSkema: 'Junior Web Developer (Pemrogram Web Muda)',
    kategori: 'Teknologi Informasi & Rekayasa Perangkat Lunak',
    durasiMenit: 60,
    jumlahSoal: 10,
    passingGrade: 75,
    deskripsi: 'Ujian teori dan studi kasus berbasis SKKNI bidang pemrograman web modern, HTML5, CSS3, JavaScript, dan keamanan aplikasi web.',
    questions: [
      {
        id: 1,
        unitKode: 'J.620100.005.01',
        unitJudul: 'Mengimplementasikan User Interface Aplikasi Web',
        pertanyaan: 'Dalam arsitektur React modern, manakah pendekatan yang paling tepat untuk mengelola state global tanpa menyebabkan re-render yang tidak perlu pada komponen anak?',
        pilihan: [
          { key: 'A', text: 'Menggunakan global window variable di setiap handler' },
          { key: 'B', text: 'Menggunakan React Context API dengan kombinasi useMemo / React.memo atau state management library terkontrol' },
          { key: 'C', text: 'Menyimpan seluruh state di dalam DOM innerHTML' },
          { key: 'D', text: 'Menggunakan setTimeout berulang untuk menyelaraskan nilai komponen' }
        ],
        kunciJawaban: 'B',
        penjelasan: 'React Context API bersama memoization (React.memo / useMemo) mengoptimalkan re-render subtree secara efektif.'
      },
      {
        id: 2,
        unitKode: 'J.620100.017.02',
        unitJudul: 'Mengimplementasikan Keamanan Kode Aplikasi Web',
        pertanyaan: 'Manakah tindakan pencegahan utama untuk melindungi endpoint API dari serangan Cross-Site Scripting (XSS) dan SQL Injection?',
        pilihan: [
          { key: 'A', text: 'Hanya menggunakan protokol HTTP biasa tanpa SSL' },
          { key: 'B', text: 'Sanitasi dan validasi input pengguna di sisi server serta menggunakan Parameterized Queries / ORM' },
          { key: 'C', text: 'Menyimpan API Key rahasia di dalam tag HTML client-side' },
          { key: 'D', text: 'Mengabaikan header Content-Security-Policy' }
        ],
        kunciJawaban: 'B',
        penjelasan: 'Validasi input, sanitasi string, dan parameterized queries mencegah injeksi malicious script maupun SQL payloads.'
      },
      {
        id: 3,
        unitKode: 'J.620100.009.01',
        unitJudul: 'Menggunakan Struktur Data & Algoritma Pemrograman',
        pertanyaan: 'Metode mana yang memiliki kompleksitas waktu rata-rata O(n log n) untuk mengurutkan larik data besar pada JavaScript/TypeScript?',
        pilihan: [
          { key: 'A', text: 'Bubble Sort' },
          { key: 'B', text: 'Quick Sort / Merge Sort (Timsort)' },
          { key: 'C', text: 'Linear Search' },
          { key: 'D', text: 'Selection Sort' }
        ],
        kunciJawaban: 'B',
        penjelasan: 'Algorithm Quick/Merge Sort membagi data secara rekursif sehingga efisiensinya mencapai O(n log n).'
      },
      {
        id: 4,
        unitKode: 'J.620100.005.01',
        unitJudul: 'Mengimplementasikan User Interface Aplikasi Web',
        pertanyaan: 'Atribut HTML5 mana yang wajib disertakan pada elemen <img> untuk mendukung aksesibilitas (Web Accessibility Standard)?',
        pilihan: [
          { key: 'A', text: 'rel="noopener"' },
          { key: 'B', text: 'alt="Deskripsi Alternatif Gambaran Visual"' },
          { key: 'C', text: 'target="_blank"' },
          { key: 'D', text: 'download="image.jpg"' }
        ],
        kunciJawaban: 'B',
        penjelasan: 'Atribut alt menyediakan deskripsi tekstual bagi screen reader pendukung disabilitas visual.'
      },
      {
        id: 5,
        unitKode: 'J.620100.010.01',
        unitJudul: 'Menerapkan Perintah Eksekusi Basis Data',
        pertanyaan: 'Perintah SQL mana yang digunakan untuk memperbarui baris data tertentu dalam tabel tanpa menghapus baris lainnya?',
        pilihan: [
          { key: 'A', text: 'ALTER TABLE' },
          { key: 'B', text: 'UPDATE nama_tabel SET kolom = nilai WHERE kondisi' },
          { key: 'C', text: 'DROP TABLE' },
          { key: 'D', text: 'INSERT INTO' }
        ],
        kunciJawaban: 'B',
        penjelasan: 'Perintah UPDATE digunakan untuk memperbarui record yang sudah ada berdasarkan klausa WHERE.'
      },
      {
        id: 6,
        unitKode: 'J.620100.017.02',
        unitJudul: 'Mengimplementasikan Keamanan Kode Aplikasi Web',
        pertanyaan: 'Prinsip utama pengelolaan kunci rahasia (Secret API Keys) pada aplikasi full-stack adalah:',
        pilihan: [
          { key: 'A', text: 'Menuliskan kunci rahasia secara hardcode di file client React' },
          { key: 'B', text: 'Menyimpan di Environment Variable di server (.env) dan tidak mengirimkannya ke browser' },
          { key: 'C', text: 'Mengunggah file .env ke public repository GitHub' },
          { key: 'D', text: 'Menyimpan di localStorage browser tanpa enkripsi' }
        ],
        kunciJawaban: 'B',
        penjelasan: 'Kunci rahasia API harus tetap berada di environment server demi keamanan dan mencegah eksposur publik.'
      },
      {
        id: 7,
        unitKode: 'J.620100.005.01',
        unitJudul: 'Mengimplementasikan User Interface Aplikasi Web',
        pertanyaan: 'Dalam CSS Flexbox, properti mana yang mengatur perataan elemen sepanjang sumbu utama (main axis)?',
        pilihan: [
          { key: 'A', text: 'align-items' },
          { key: 'B', text: 'justify-content' },
          { key: 'C', text: 'flex-direction' },
          { key: 'D', text: 'grid-template-columns' }
        ],
        kunciJawaban: 'B',
        penjelasan: 'justify-content mendistribusikan ruang antar elemen di sepanjang main axis Flexbox.'
      },
      {
        id: 8,
        unitKode: 'J.620100.009.01',
        unitJudul: 'Menggunakan Struktur Data & Algoritma Pemrograman',
        pertanyaan: 'Manakah HTTP Status Code yang menandakan bahwa request berhasil diproses oleh server backend (OK)?',
        pilihan: [
          { key: 'A', text: '404 Not Found' },
          { key: 'B', text: '500 Internal Server Error' },
          { key: 'C', text: '200 OK' },
          { key: 'D', text: '403 Forbidden' }
        ],
        kunciJawaban: 'C',
        penjelasan: 'Status Code 200 OK menandakan bahwa permintaan HTTP berhasil dipenuhi oleh server.'
      },
      {
        id: 9,
        unitKode: 'J.620100.017.02',
        unitJudul: 'Mengimplementasikan Keamanan Kode Aplikasi Web',
        pertanyaan: 'Mekanisme otentikasi stateless yang umum digunakan dalam RESTful API menggunakan token tertandatangan digital adalah:',
        pilihan: [
          { key: 'A', text: 'JSON Web Token (JWT)' },
          { key: 'B', text: 'HTTP Basic Auth plain text' },
          { key: 'C', text: 'FTP Anonymous Access' },
          { key: 'D', text: 'Cookie Session ID tanpa HTTPS' }
        ],
        kunciJawaban: 'A',
        penjelasan: 'JWT membawa klaim otentikasi yang terenkripsi/tertanda digital secara stateless.'
      },
      {
        id: 10,
        unitKode: 'J.620100.010.01',
        unitJudul: 'Menerapkan Perintah Eksekusi Basis Data',
        pertanyaan: 'Apa tujuan utama dari penggunaan Indexing pada kolom tabel basis data relational?',
        pilihan: [
          { key: 'A', text: 'Menambah ukuran file database menjadi lebih besar' },
          { key: 'B', text: 'Mempercepat kecepatan pencarian data (SELECT Query) pada kolom yang sering di-filter' },
          { key: 'C', text: 'Menghapus tabel otomatis secara periodik' },
          { key: 'D', text: 'Mengubah format teks menjadi huruf kapital' }
        ],
        kunciJawaban: 'B',
        penjelasan: 'Index mempercepat operasi pencarian SELECT dengan membuat struktur pencarian B-Tree/Hash.'
      }
    ]
  },
  {
    id: 'EXAM-SYS-02',
    kodeSkema: 'SKM-2026-SYS-02',
    namaSkema: 'Administrator Jaringan & Sistem Informasi',
    kategori: 'Infrastruktur Jaringan & Cloud',
    durasiMenit: 45,
    jumlahSoal: 5,
    passingGrade: 80,
    deskripsi: 'Ujian komprehensif menguji konfigurasi subnetting IP, firewall security, DNS management, dan monitoring jaringan.',
    questions: [
      {
        id: 1,
        unitKode: 'J.611000.001.01',
        unitJudul: 'Merancang Pengalamatan Jaringan (IP Subnetting)',
        pertanyaan: 'Berapa jumlah alamat IP host yang valid yang dapat digunakan pada subnet berkisar /24?',
        pilihan: [
          { key: 'A', text: '256 host' },
          { key: 'B', text: '254 host' },
          { key: 'C', text: '128 host' },
          { key: 'D', text: '512 host' }
        ],
        kunciJawaban: 'B',
        penjelasan: 'Subnet /24 memiliki 256 total IP, minus 1 Network IP dan 1 Broadcast IP = 254 Usable Hosts.'
      },
      {
        id: 2,
        unitKode: 'J.611000.005.02',
        unitJudul: 'Konfigurasi Firewall & Router Security',
        pertanyaan: 'Port default yang digunakan oleh protokol SSH untuk enkripsi remote administration adalah:',
        pilihan: [
          { key: 'A', text: 'Port 80' },
          { key: 'B', text: 'Port 21' },
          { key: 'C', text: 'Port 22' },
          { key: 'D', text: 'Port 443' }
        ],
        kunciJawaban: 'C',
        penjelasan: 'Port 22 adalah port standar untuk lalu lintas data Secure Shell (SSH).'
      },
      {
        id: 3,
        unitKode: 'J.611000.001.01',
        unitJudul: 'Merancang Pengalamatan Jaringan (IP Subnetting)',
        pertanyaan: 'Perintah terminal Linux untuk memeriksa ketersediaan dan latency koneksi host tujuan adalah:',
        pilihan: [
          { key: 'A', text: 'ping <ip_address>' },
          { key: 'B', text: 'chmod 777' },
          { key: 'C', text: 'cat /etc/passwd' },
          { key: 'D', text: 'mkdir test' }
        ],
        kunciJawaban: 'A',
        penjelasan: 'Ping menggunakan protokol ICMP Echo Request untuk menguji keterjangkauan host.'
      },
      {
        id: 4,
        unitKode: 'J.611000.005.02',
        unitJudul: 'Konfigurasi Firewall & Router Security',
        pertanyaan: 'Protokol mana yang memetakan nama domain ramah manusia (seperti unindra.ac.id) menjadi alamat IP numeric?',
        pilihan: [
          { key: 'A', text: 'DHCP' },
          { key: 'B', text: 'DNS (Domain Name System)' },
          { key: 'C', text: 'SMTP' },
          { key: 'D', text: 'SNMP' }
        ],
        kunciJawaban: 'B',
        penjelasan: 'DNS menerjemahkan hostname domain menjadi IP Address.'
      },
      {
        id: 5,
        unitKode: 'J.611000.005.02',
        unitJudul: 'Konfigurasi Firewall & Router Security',
        pertanyaan: 'Layanan yang mengalokasikan IP address secara otomatis kepada perangkat klien di dalam jaringan dinamakan:',
        pilihan: [
          { key: 'A', text: 'DHCP Server' },
          { key: 'B', text: 'FTP Server' },
          { key: 'C', text: 'NAT Gateway' },
          { key: 'D', text: 'VLAN Tag' }
        ],
        kunciJawaban: 'A',
        penjelasan: 'DHCP (Dynamic Host Configuration Protocol) mengonfigurasi IP otomatis untuk client.'
      }
    ]
  }
];

export const UjianOnlineView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'daftar' | 'ujian' | 'hasil' | 'proctor'>('daftar');
  const [selectedScheme, setSelectedScheme] = useState<ExamScheme>(MOCK_EXAM_SCHEMES[0]);
  
  // Test Session States
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(3600);
  const [isExamRunning, setIsExamRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  // Proctoring Simulation State
  const [webcamActive, setWebcamActive] = useState<boolean>(true);
  const [cheatWarningCount, setCheatWarningCount] = useState<number>(0);

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isExamRunning && timeLeftSeconds > 0 && !isFinished) {
      timer = setInterval(() => {
        setTimeLeftSeconds((prev) => {
          if (prev <= 1) {
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isExamRunning, timeLeftSeconds, isFinished]);

  const handleStartExam = (scheme: ExamScheme) => {
    setSelectedScheme(scheme);
    setCurrentQuestionIdx(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setTimeLeftSeconds(scheme.durasiMenit * 60);
    setIsExamRunning(true);
    setIsFinished(false);
    setActiveTab('ujian');
  };

  const handleSelectAnswer = (questionId: number, optionKey: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey
    }));
  };

  const toggleFlagQuestion = (questionId: number) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleFinishExam = () => {
    setIsExamRunning(false);
    setIsFinished(true);
    setShowConfirmModal(false);
    setActiveTab('hasil');
  };

  // Score Calculation
  const calculateScore = () => {
    let correct = 0;
    selectedScheme.questions.forEach((q) => {
      if (userAnswers[q.id] === q.kunciJawaban) {
        correct++;
      }
    });
    const total = selectedScheme.questions.length;
    const finalScore = Math.round((correct / total) * 100);
    const passed = finalScore >= selectedScheme.passingGrade;
    return { correct, total, finalScore, passed };
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const scoreResult = calculateScore();

  return (
    <div className="space-y-6 font-sans">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1e2d3b] via-[#16212c] to-[#0D6EFD] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="bg-blue-500/30 text-blue-200 border border-blue-400/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Computer-Based Test (CBT)
              </span>
              <span className="bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                BNSP Standard
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Sistem Ujian Kompetensi Online LSP UNINDRA
            </h1>
            <p className="text-xs text-gray-300 max-w-2xl">
              Modul pengujian mandiri berbasis komputer untuk menguji pengetahuan (Knowledge Assessment) sesuai unit-unit standar SKKNI secara proctored dan transparan.
            </p>
          </div>

          {/* Tab Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('daftar')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'daftar'
                  ? 'bg-white text-[#0D6EFD] shadow-sm'
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" /> Pilih Skema Ujian
            </button>
            {isExamRunning && (
              <button
                onClick={() => setActiveTab('ujian')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 animate-pulse ${
                  activeTab === 'ujian'
                    ? 'bg-[#0D6EFD] text-white shadow-sm'
                    : 'bg-amber-500 text-white'
                }`}
              >
                <Clock className="w-3.5 h-3.5" /> Ujian Sedang Berlangsung ({formatTime(timeLeftSeconds)})
              </button>
            )}
            {isFinished && (
              <button
                onClick={() => setActiveTab('hasil')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'hasil'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5" /> Hasil & Skor Ujian
              </button>
            )}
            <button
              onClick={() => setActiveTab('proctor')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'proctor'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <Users className="w-3.5 h-3.5" /> Monitoring Asesor (Proctoring)
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: DAFTAR SKEMA UJIAN */}
      {activeTab === 'daftar' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm">
            <div>
              <h2 className="text-base font-bold text-gray-900">Daftar Paket Ujian Kompetensi Tersedia</h2>
              <p className="text-xs text-gray-500">Pilih skema sertifikasi yang telah diajukan pada APL-01 untuk memulai ujian CBT online.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 font-medium">Status Koneksi Proctoring:</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Siap Dikoneksikan
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_EXAM_SCHEMES.map((scheme) => (
              <div
                key={scheme.id}
                className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-blue-50 text-[#0D6EFD] text-[11px] font-bold rounded-lg border border-blue-100">
                      {scheme.kodeSkema}
                    </span>
                    <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" /> {scheme.durasiMenit} Menit
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-gray-900 group-hover:text-[#0D6EFD] transition-colors">
                      {scheme.namaSkema}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">{scheme.kategori}</p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
                    {scheme.deskripsi}
                  </p>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                    <div className="p-2 bg-blue-50/50 rounded-xl border border-blue-100">
                      <span className="block text-gray-500 text-[10px] font-semibold">Jumlah Soal</span>
                      <strong className="text-gray-900 text-sm font-bold">{scheme.jumlahSoal} Butir</strong>
                    </div>
                    <div className="p-2 bg-amber-50/50 rounded-xl border border-amber-100">
                      <span className="block text-gray-500 text-[10px] font-semibold">Passing Grade</span>
                      <strong className="text-amber-700 text-sm font-bold">{scheme.passingGrade} / 100</strong>
                    </div>
                    <div className="p-2 bg-emerald-50/50 rounded-xl border border-emerald-100">
                      <span className="block text-gray-500 text-[10px] font-semibold">Format Ujian</span>
                      <strong className="text-emerald-700 text-sm font-bold">Pilihan Ganda MUK</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldAlert className="w-4 h-4 text-gray-400" />
                    <span>Perlengkapan: Kamera & Browser Terbuka</span>
                  </div>
                  <button
                    onClick={() => handleStartExam(scheme)}
                    className="px-5 py-2.5 bg-[#0D6EFD] hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md shadow-blue-500/10 transition-all flex items-center gap-1.5"
                  >
                    Mulai Ujian Now <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Tata Tertib Box */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 text-xs space-y-2 text-amber-900">
            <h4 className="font-bold flex items-center gap-2 text-sm text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-600" /> Petunjuk & Rules Ujian Kompetensi Online:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-amber-800 font-medium">
              <li>Pastikan koneksi internet stabil sebelum menekan tombol Mulai Ujian.</li>
              <li>Sistem proctoring otomatis merekam durasi dan mendeteksi perpindahan tab browser.</li>
              <li>Waktu ujian berjalan terus setelah tombol &quot;Mulai Ujian Now&quot; diklik.</li>
              <li>Nilai akhir akan langsung dikalkulasikan dan menjadi rujukan pada formulir rekomendasi Asesor (FR.MAPA.02 & FR.AK.01).</li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 2: MODE UJIAN SEDANG BERLANGSUNG */}
      {activeTab === 'ujian' && isExamRunning && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Question Box */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm space-y-6">
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-[#0D6EFD] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                    Soal No. {currentQuestionIdx + 1} dari {selectedScheme.questions.length}
                  </span>
                  <span className="ml-2 text-xs text-gray-500 font-medium">
                    Unit SKKNI: {selectedScheme.questions[currentQuestionIdx].unitKode}
                  </span>
                </div>

                <button
                  onClick={() => toggleFlagQuestion(selectedScheme.questions[currentQuestionIdx].id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    flaggedQuestions[selectedScheme.questions[currentQuestionIdx].id]
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-800'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  {flaggedQuestions[selectedScheme.questions[currentQuestionIdx].id]
                    ? 'Ditandai Ragu-ragu'
                    : 'Tandai Ragu-ragu'}
                </button>
              </div>

              {/* Unit Title */}
              <p className="text-xs font-semibold text-gray-500 italic">
                {selectedScheme.questions[currentQuestionIdx].unitJudul}
              </p>

              {/* Question Text */}
              <h3 className="text-base font-bold text-gray-900 leading-relaxed">
                {selectedScheme.questions[currentQuestionIdx].pertanyaan}
              </h3>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {selectedScheme.questions[currentQuestionIdx].pilihan.map((opt) => {
                  const qId = selectedScheme.questions[currentQuestionIdx].id;
                  const isSelected = userAnswers[qId] === opt.key;
                  return (
                    <div
                      key={opt.key}
                      onClick={() => handleSelectAnswer(qId, opt.key)}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-3.5 ${
                        isSelected
                          ? 'border-[#0D6EFD] bg-blue-50/60 shadow-sm'
                          : 'border-gray-200/80 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#0D6EFD] text-white shadow-sm'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {opt.key}
                      </div>
                      <span className={`text-xs font-medium ${isSelected ? 'text-gray-900 font-bold' : 'text-gray-700'}`}>
                        {opt.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Question Navigation Controls */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <button
                  disabled={currentQuestionIdx === 0}
                  onClick={() => setCurrentQuestionIdx((prev) => prev - 1)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs disabled:opacity-40 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Soal Sebelumnya
                </button>

                {currentQuestionIdx === selectedScheme.questions.length - 1 ? (
                  <button
                    onClick={() => setShowConfirmModal(true)}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-4 h-4" /> Selesaikan Ujian Now
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQuestionIdx((prev) => prev + 1)}
                    className="px-5 py-2.5 bg-[#0D6EFD] hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5"
                  >
                    Soal Selanjutnya <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Timer & Question Palette */}
          <div className="space-y-4">
            {/* Timer Box */}
            <div className={`p-4 rounded-2xl border text-center shadow-sm ${
              timeLeftSeconds < 300
                ? 'bg-rose-50 border-rose-200 text-rose-900 animate-pulse'
                : 'bg-white border-gray-200 text-gray-900'
            }`}>
              <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Sisa Waktu Ujian</span>
              <div className="text-3xl font-black font-mono tracking-tight my-1 text-[#0D6EFD]">
                {formatTime(timeLeftSeconds)}
              </div>
              <p className="text-[10px] text-gray-500">Waktu berjalan otomatis hingga submit.</p>
            </div>

            {/* Question Palette Grid */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-sm space-y-3">
              <h4 className="font-bold text-xs text-gray-900 border-b border-gray-100 pb-2">
                Navigasi Soal Ujian ({Object.keys(userAnswers).length} / {selectedScheme.questions.length} Dijawab)
              </h4>

              <div className="grid grid-cols-5 gap-2">
                {selectedScheme.questions.map((q, idx) => {
                  const isAns = !!userAnswers[q.id];
                  const isFlag = !!flaggedQuestions[q.id];
                  const isCurr = currentQuestionIdx === idx;

                  let btnStyle = 'bg-gray-100 text-gray-700 border-gray-200';
                  if (isAns) btnStyle = 'bg-emerald-600 text-white border-emerald-700 font-bold';
                  if (isFlag) btnStyle = 'bg-amber-500 text-white border-amber-600 font-bold';
                  if (isCurr) btnStyle += ' ring-2 ring-[#0D6EFD] ring-offset-2';

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIdx(idx)}
                      className={`h-9 rounded-lg text-xs font-bold transition-all flex items-center justify-center border ${btnStyle}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-gray-100 space-y-1.5 text-[10px] font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-emerald-600" /> Sudah Dijawab
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-amber-500" /> Ragu-ragu
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-gray-200 border border-gray-300" /> Belum Dijawab
                </div>
              </div>

              <button
                onClick={() => setShowConfirmModal(true)}
                className="w-full mt-2 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition-colors shadow"
              >
                Kirim Jawaban Ujian
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: HASIL UJIAN & SCORECARD */}
      {activeTab === 'hasil' && isFinished && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-3xl border border-gray-200/80 p-8 shadow-xl text-center space-y-6">
            {/* Recommendation Banner */}
            <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center text-white shadow-lg ${
              scoreResult.passed ? 'bg-emerald-600 shadow-emerald-500/20' : 'bg-rose-600 shadow-rose-500/20'
            }`}>
              {scoreResult.passed ? <Award className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
            </div>

            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                scoreResult.passed ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
              }`}>
                {scoreResult.passed ? 'REKOMENDASI: KOMPETEN (K)' : 'REKOMENDASI: BELUM KOMPETEN (BK)'}
              </span>
              <h2 className="text-2xl font-black text-gray-900 mt-2">
                Hasil Ujian Teori CBT: {selectedScheme.namaSkema}
              </h2>
              <p className="text-xs text-gray-500 max-w-lg mx-auto mt-1">
                Nilai ujian otomatis terekam dalam sistem LSP UNINDRA dan diteruskan ke form FR.MAPA.02 & Keputusan Asesmen.
              </p>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-[11px] font-semibold text-gray-500 uppercase">Skor Akhir Ujian</span>
                <p className="text-3xl font-black text-[#0D6EFD]">{scoreResult.finalScore} / 100</p>
                <p className="text-[10px] text-gray-400">Passing Grade: {selectedScheme.passingGrade}</p>
              </div>

              <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100">
                <span className="text-[11px] font-semibold text-emerald-700 uppercase">Jawaban Benar</span>
                <p className="text-3xl font-black text-emerald-700">{scoreResult.correct} <span className="text-xs font-normal text-emerald-600">dari {scoreResult.total} soal</span></p>
                <p className="text-[10px] text-emerald-600 font-medium">Akurasi {Math.round((scoreResult.correct / scoreResult.total) * 100)}%</p>
              </div>

              <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100">
                <span className="text-[11px] font-semibold text-blue-700 uppercase">Status Verifikasi</span>
                <p className="text-base font-bold text-blue-900 mt-1">Terverifikasi Auto-Grading</p>
                <p className="text-[10px] text-blue-600">ID Sesi: EXAM-LSP-{Math.floor(100000 + Math.random() * 900000)}</p>
              </div>
            </div>

            {/* Detailed Questions Diagnostic */}
            <div className="text-left space-y-3 pt-4 border-t border-gray-100">
              <h3 className="font-bold text-sm text-gray-900">Pembahasan & Analisis Jawaban Per Unit SKKNI</h3>
              <div className="space-y-3">
                {selectedScheme.questions.map((q, idx) => {
                  const userAns = userAnswers[q.id];
                  const isCorrect = userAns === q.kunciJawaban;
                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-2xl border text-xs space-y-2 ${
                        isCorrect ? 'bg-emerald-50/30 border-emerald-200/80' : 'bg-rose-50/30 border-rose-200/80'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span className="text-gray-900">Soal {idx + 1} - [{q.unitKode}]</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                          isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {isCorrect ? 'Benar (+10)' : `Salah (Jawaban Anda: ${userAns || 'Kosong'}, Kunci: ${q.kunciJawaban})`}
                        </span>
                      </div>
                      <p className="text-gray-800 font-medium">{q.pertanyaan}</p>
                      <p className="text-[11px] text-gray-600 italic bg-white/80 p-2 rounded-xl border border-gray-200/50">
                        <strong>Penjelasan MUK:</strong> {q.penjelasan}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => handleStartExam(selectedScheme)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" /> Ulangi Simulasi Ujian
              </button>
              <button
                onClick={() => setActiveTab('daftar')}
                className="px-5 py-2.5 bg-[#0D6EFD] hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                Kembali ke Daftar Ujian
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PROCTORING & MONITORING ASESOR */}
      {activeTab === 'proctor' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#0D6EFD]" /> Monitoring Real-time Ujian CBT (Asesor Dashboard)
                </h2>
                <p className="text-xs text-gray-500">Pantau aktivitas peserta ujian online secara langsung untuk mencegah kecurangan (Anti-Cheat Surveillance).</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-50 text-[#0D6EFD] font-bold text-xs rounded-full border border-blue-100">
                  12 Peserta Sedang Aktif Ujian
                </span>
              </div>
            </div>

            {/* Monitoring Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-600 font-bold border-b border-gray-200">
                  <tr>
                    <th className="p-3">Asesi / NPM</th>
                    <th className="p-3">Skema Sertifikasi</th>
                    <th className="p-3">Waktu Tersisa</th>
                    <th className="p-3">Progres Soal</th>
                    <th className="p-3">Status Kamera Proctor</th>
                    <th className="p-3">Pelanggaran Tab</th>
                    <th className="p-3 text-right">Aksi Asesor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/60">
                    <td className="p-3 font-bold text-gray-900">
                      Rizky Pratama Kurniawan
                      <span className="block text-[10px] text-gray-500 font-normal">NPM: 202243500123</span>
                    </td>
                    <td className="p-3 text-gray-700">Junior Web Developer</td>
                    <td className="p-3 font-mono font-bold text-blue-700">42:15 Min</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[80%]" />
                        </div>
                        <span className="font-bold text-[11px]">8/10</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-bold text-[10px] rounded border border-emerald-200 flex items-center gap-1 w-fit">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" /> Kamera Aktif
                      </span>
                    </td>
                    <td className="p-3 font-bold text-emerald-700">0 Peringatan</td>
                    <td className="p-3 text-right">
                      <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg text-[11px]">
                        Lihat Layar
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50/60">
                    <td className="p-3 font-bold text-gray-900">
                      Siti Nurhaliza
                      <span className="block text-[10px] text-gray-500 font-normal">NPM: 202243500889</span>
                    </td>
                    <td className="p-3 text-gray-700">Junior Web Developer</td>
                    <td className="p-3 font-mono font-bold text-blue-700">18:04 Min</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[100%]" />
                        </div>
                        <span className="font-bold text-[11px]">10/10</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-bold text-[10px] rounded border border-emerald-200 flex items-center gap-1 w-fit">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" /> Kamera Aktif
                      </span>
                    </td>
                    <td className="p-3 font-bold text-emerald-700">0 Peringatan</td>
                    <td className="p-3 text-right">
                      <button className="px-3 py-1 bg-[#0D6EFD] text-white font-bold rounded-lg text-[11px]">
                        Review Nilai
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50/60">
                    <td className="p-3 font-bold text-gray-900">
                      Budi Santoso
                      <span className="block text-[10px] text-gray-500 font-normal">NPM: 202243500412</span>
                    </td>
                    <td className="p-3 text-gray-700">Administrator Jaringan</td>
                    <td className="p-3 font-mono font-bold text-blue-700">35:50 Min</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[40%]" />
                        </div>
                        <span className="font-bold text-[11px]">2/5</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-rose-50 text-rose-700 font-bold text-[10px] rounded border border-rose-200 flex items-center gap-1 w-fit">
                        Kamera Terputus
                      </span>
                    </td>
                    <td className="p-3 font-bold text-rose-600">2 Peringatan</td>
                    <td className="p-3 text-right">
                      <button className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg text-[11px]">
                        Tegur Peserta
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMATION SUBMIT MODAL */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 text-[#0D6EFD] rounded-2xl flex items-center justify-center mx-auto">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-gray-900">Kirim Jawaban Ujian Kompetensi?</h3>
              <p className="text-xs text-gray-500">
                Anda telah menjawab <strong>{Object.keys(userAnswers).length}</strong> dari <strong>{selectedScheme.questions.length}</strong> butir soal. Setelah dikirim, Anda tidak dapat mengubah jawaban kembali.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="w-1/2 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs transition-colors"
              >
                Batal & Cek Lagi
              </button>
              <button
                onClick={handleFinishExam}
                className="w-1/2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-md transition-all"
              >
                Ya, Selesaikan Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
