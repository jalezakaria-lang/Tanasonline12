function initLandingPage() {
  const appNode = document.getElementById('app');
  appNode.innerHTML = `
    <!-- Header / Navbar -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="bg-blue-600 text-white p-2 rounded-lg font-bold text-xs tracking-wider">GS</div>
          <span class="font-bold text-lg text-slate-900 tracking-tight">GeneratorSurat</span>
        </div>
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#fitur" class="hover:text-blue-600 transition">Fitur</a>
          <a href="#layanan" class="hover:text-blue-600 transition">Layanan Surat</a>
          <a href="#tentang" class="hover:text-blue-600 transition">Tentang</a>
        </nav>
        <button onclick="alert('Fitur login/register dapat ditambahkan di sini')" class="text-sm font-semibold text-blue-600 hover:text-blue-700">
          Masuk
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="flex-grow">
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6 border border-blue-100">
          <span>✨ Solusi Administrasi Otomatis</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Buat Surat Tugas & SPD Resmi <br class="hidden sm:inline"/> Dalam Hitungan Detik
        </h1>
        <p class="max-w-2xl mx-auto text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
          Platform pembuat dokumen instansi dan kantor secara otomatis. Cukup isi formulir interaktif, pratinjau hasilnya secara langsung, dan unduh format PDF siap cetak.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onclick="alert('Navigasi ke halaman generator surat')" class="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition duration-200">
            Mulai Buat Surat Now
          </button>
          <a href="#layanan" class="w-full sm:w-auto px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition duration-200">
            Lihat Format Surat
          </a>
        </div>
      </section>

      <!-- Grid Cards Layanan -->
      <section id="layanan" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900">Pilih Jenis Dokumen</h2>
          <p class="text-slate-600 mt-2 text-sm">Dokumen terstruktur sesuai dengan format baku instansi dan perusahaan</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">📄</div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Surat Tugas & SPD</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">
              Paket lengkap Surat Perintah Tugas dan Surat Perjalanan Dinas (SPD) multi-halaman otomatis.
            </p>
            <span class="text-xs font-semibold text-blue-600 group-hover:underline">Siap Digunakan &rarr;</span>
          </div>

          <!-- Card 2 -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">💼</div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Surat Keterangan Kerja</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">
              Dokumen verifikasi masa kerja karyawan aktif untuk perbankan atau kebutuhan administrasi lain.
            </p>
            <span class="text-xs font-semibold text-slate-400">Segera Hadir</span>
          </div>

          <!-- Card 3 -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">✉️</div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Surat Izin / Permohonan</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">
              Format baku untuk pengajuan izin ketidakhadiran, cuti, atau permohonan magang instansi.
            </p>
            <span class="text-xs font-semibold text-slate-400">Segera Hadir</span>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-500">
      <div class="max-w-7xl mx-auto px-4">
        <p>&copy; 2026 Generator Surat Otomatis. Seluruh hak cipta dilindungi.</p>
      </div>
    </footer>
  `;
}

document.addEventListener('DOMContentLoaded', initLandingPage);
