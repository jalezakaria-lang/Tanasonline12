// State Aplikasi
const state = {
  currentPage: 'landing', // 'landing' atau 'generator'
  
  // Data Surat Tugas & SPD
  namaInstansi: 'PEMERINTAH KOTA MALANG',
  unitKerja: 'DINAS KOMUNIKASI DAN INFORMATIKA',
  alamatInstansi: 'Jl. Tugu No. 1, Malang, Jawa Timur',
  nomorSurat: '090 / 1234 / 35.73.100 / 2026',
  namaPegawai: 'Budi Santoso, S.Kom.',
  nipPegawai: '19850712 201001 1 005',
  pangkatGol: 'Penata / III/c',
  jabatan: 'Pranata Komputer Ahli Muda',
  maksudTugas: 'Melakukan Koordinasi dan Konsultasi Sistem Pemerintahan Berbasis Elektronik (SPBE)',
  tujuan: 'Dinas Kominfo Provinsi Jawa Timur, Surabaya',
  tglBerangkat: '2026-09-01',
  tglKembali: '2026-09-03',
  lamaTugas: '3 (tiga) hari',
  alatAngkut: 'Kendaraan Dinas / Mobil',
  bebanAnggaran: 'APBD TA 2026',
  kotaTanggal: 'Malang, 26 Agustus 2026',
  jabatanPenandatangan: 'Kepala Dinas Kominfo',
  namaPenandatangan: 'Dr. Ir. H. Ahmad Fauzi, M.T.',
  nipPenandatangan: '19700315 199503 1 002'
};

// Router Utama
function renderApp() {
  if (state.currentPage === 'landing') {
    renderLandingPage();
  } else {
    renderGeneratorPage();
  }
}

// 1. TAMPILAN HALAMAN DEPAN
function renderLandingPage() {
  const appNode = document.getElementById('app');
  appNode.innerHTML = `
    <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2 cursor-pointer" onclick="navigateTo('landing')">
          <div class="bg-blue-600 text-white p-2 rounded-lg font-bold text-xs tracking-wider">GS</div>
          <span class="font-bold text-lg text-slate-900 tracking-tight">GeneratorSurat</span>
        </div>
        <button onclick="navigateTo('generator')" class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
          Buat Surat
        </button>
      </div>
    </header>

    <main class="flex-grow">
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6 border border-blue-100">
          <span>✨ Solusi Administrasi Otomatis</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Buat Surat Tugas & SPD Resmi <br class="hidden sm:inline"/> Dalam Hitungan Detik
        </h1>
        <p class="max-w-2xl mx-auto text-base md:text-lg text-slate-600 mb-8">
          Platform pembuat dokumen instansi otomatis. Isi formulir interaktif, pratinjau langsung, dan unduh PDF siap cetak.
        </p>
        <button onclick="navigateTo('generator')" class="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition duration-200">
          Mulai Buat Surat Tugas & SPD &rarr;
        </button>
      </section>
    </main>

    <footer class="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
      <p>&copy; 2026 Generator Surat Otomatis.</p>
    </footer>
  `;
}

// 2. TAMPILAN HALAMAN GENERATOR
function renderGeneratorPage() {
  const appNode = document.getElementById('app');
  appNode.innerHTML = `
    <!-- Top Bar Navigation -->
    <div class="max-w-[1600px] mx-auto mb-4 flex items-center justify-between no-print">
      <button onclick="navigateTo('landing')" class="text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1">
        &larr; Kembali ke Halaman Depan
      </button>
      <span class="text-xs text-slate-500">Mode Editor Surat Tugas & SPD</span>
    </div>

    <div class="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Form Input (Kiri) -->
      <div class="lg:col-span-5 bg-white p-6 rounded-xl shadow-md h-fit no-print">
        <h1 class="text-xl font-bold text-slate-800 mb-4 pb-2 border-b">Form Data Surat</h1>
        <form id="mainForm" onsubmit="return false;" class="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          
          <div class="bg-slate-50 p-3 rounded-lg border">
            <h2 class="text-xs font-bold text-slate-500 uppercase mb-2">Instansi & Surat</h2>
            <div class="grid grid-cols-1 gap-2 text-xs">
              <input type="text" id="inputNamaInstansi" value="${state.namaInstansi}" placeholder="Nama Instansi" class="p-1.5 border rounded" />
              <input type="text" id="inputUnitKerja" value="${state.unitKerja}" placeholder="Unit Kerja" class="p-1.5 border rounded" />
              <input type="text" id="inputNomorSurat" value="${state.nomorSurat}" placeholder="Nomor Surat" class="p-1.5 border rounded font-mono" />
            </div>
          </div>

          <div class="bg-slate-50 p-3 rounded-lg border">
            <h2 class="text-xs font-bold text-slate-500 uppercase mb-2">Pegawai</h2>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <input type="text" id="inputNamaPegawai" value="${state.namaPegawai}" placeholder="Nama Pegawai" class="col-span-2 p-1.5 border rounded" />
              <input type="text" id="inputNipPegawai" value="${state.nipPegawai}" placeholder="NIP" class="p-1.5 border rounded" />
              <input type="text" id="inputPangkatGol" value="${state.pangkatGol}" placeholder="Pangkat/Gol" class="p-1.5 border rounded" />
              <input type="text" id="inputJabatan" value="${state.jabatan}" placeholder="Jabatan" class="col-span-2 p-1.5 border rounded" />
            </div>
          </div>

          <div class="bg-slate-50 p-3 rounded-lg border">
            <h2 class="text-xs font-bold text-slate-500 uppercase mb-2">Detail Perjalanan Dinas</h2>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <textarea id="inputMaksudTugas" rows="2" class="col-span-2 p-1.5 border rounded" placeholder="Maksud Tugas">${state.maksudTugas}</textarea>
              <input type="text" id="inputTujuan" value="${state.tujuan}" placeholder="Tujuan" class="col-span-2 p-1.5 border rounded" />
              <input type="date" id="inputTglBerangkat" value="${state.tglBerangkat}" class="p-1.5 border rounded" />
              <input type="date" id="inputTglKembali" value="${state.tglKembali}" class="p-1.5 border rounded" />
            </div>
          </div>

        </form>

        <div class="mt-4 flex gap-2 border-t pt-4">
          <button id="btnPdf" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-xs font-bold">Unduh PDF</button>
          <button id="btnPrint" class="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded text-xs font-bold">Cetak</button>
        </div>
      </div>

      <!-- Live Preview (Kanan) -->
      <div class="lg:col-span-7 flex flex-col items-center">
        <div id="paper" class="bg-white w-full max-w-[210mm] min-h-[297mm] p-8 md:p-12 shadow-2xl border text-black font-serif text-xs leading-normal">
          <!-- Rendered via renderPreview() -->
        </div>
      </div>
    </div>
  `;

  attachEvents();
  renderPreview();
}

// Navigasi Halaman
function navigateTo(page) {
  state.currentPage = page;
  renderApp();
}

function attachEvents() {
  const keys = ['NamaInstansi', 'UnitKerja', 'NomorSurat', 'NamaPegawai', 'NipPegawai', 'PangkatGol', 'Jabatan', 'MaksudTugas', 'Tujuan', 'TglBerangkat', 'TglKembali'];
  keys.forEach(key => {
    const el = document.getElementById(`input${key}`);
    if (el) {
      el.addEventListener('input', (e) => {
        const stateKey = key.charAt(0).toLowerCase() + key.slice(1);
        state[stateKey] = e.target.value;
        renderPreview();
      });
    }
  });

  document.getElementById('btnPdf').addEventListener('click', downloadPDF);
  document.getElementById('btnPrint').addEventListener('click', () => window.print());
}

function renderPreview() {
  const paper = document.getElementById('paper');
  paper.innerHTML = `
    <div class="text-center border-b-4 border-double border-black pb-2 mb-4">
      <h3 class="font-bold text-sm uppercase">${state.namaInstansi}</h3>
      <h2 class="font-bold text-base uppercase">${state.unitKerja}</h2>
    </div>
    <div class="text-center mb-6">
      <h1 class="font-bold text-sm underline uppercase">SURAT TUGAS</h1>
      <p class="text-xs">Nomor: ${state.nomorSurat}</p>
    </div>
    <p class="mb-3">Memberi Tugas Kepada:</p>
    <table class="w-full mb-4 ml-4 text-xs">
      <tr><td class="w-28 py-0.5">Nama</td><td>: <b>${state.namaPegawai}</b></td></tr>
      <tr><td class="py-0.5">NIP</td><td>: ${state.nipPegawai}</td></tr>
      <tr><td class="py-0.5">Jabatan</td><td>: ${state.jabatan}</td></tr>
    </table>
    <p class="mb-2">Untuk: ${state.maksudTugas} ke <b>${state.tujuan}</b>.</p>
  `;
}

function downloadPDF() {
  const element = document.getElementById('paper');
  html2pdf().from(element).save(`Surat_Tugas_${state.namaPegawai}.pdf`);
}

document.addEventListener('DOMContentLoaded', renderApp);
