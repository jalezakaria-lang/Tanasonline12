// State Utama Aplikasi
const state = {
  currentPage: 'landing', // 'landing' | 'dashboard' | 'generator'
  
  // Data Riwayat Penugasan (Dummy / Initial Data)
  riwayatPenugasan: [
    {
      id: 'SPD-001',
      namaPegawai: 'Budi Santoso, S.Kom.',
      maksudTugas: 'Koordinasi SPBE Provinsi',
      tujuan: 'Surabaya',
      tglBerangkat: '2026-09-01',
      tglKembali: '2026-09-03',
      status: 'Selesai'
    },
    {
      id: 'SPD-002',
      namaPegawai: 'Siti Aminah, M.T.',
      maksudTugas: 'Bimtek Keamanan Siber',
      tujuan: 'Jakarta',
      tglBerangkat: '2026-09-10',
      tglKembali: '2026-09-12',
      status: 'Berjalan'
    }
  ],

  // Form Data Generator Aktif
  formData: {
    namaInstansi: 'PEMERINTAH KOTA MALANG',
    unitKerja: 'DINAS KOMUNIKASI DAN INFORMATIKA',
    alamatInstansi: 'Jl. Tugu No. 1, Malang, Jawa Timur',
    nomorSurat: '090 / 1234 / 35.73.100 / 2026',
    namaPegawai: '',
    nipPegawai: '',
    pangkatGol: '',
    jabatan: '',
    maksudTugas: '',
    tujuan: '',
    tglBerangkat: '',
    tglKembali: '',
    lamaTugas: '',
    alatAngkut: 'Kendaraan Dinas',
    bebanAnggaran: 'APBD TA 2026',
    kotaTanggal: 'Malang, 26 Agustus 2026',
    jabatanPenandatangan: 'Kepala Dinas Kominfo',
    namaPenandatangan: 'Dr. Ir. H. Ahmad Fauzi, M.T.',
    nipPenandatangan: '19700315 199503 1 002'
  }
};

// Router Utama
function renderApp() {
  const appNode = document.getElementById('app');
  if (state.currentPage === 'landing') {
    renderLandingPage(appNode);
  } else if (state.currentPage === 'dashboard') {
    renderDashboardPage(appNode);
  } else if (state.currentPage === 'generator') {
    renderGeneratorPage(appNode);
  }
}

function navigateTo(page) {
  state.currentPage = page;
  renderApp();
}

// 1. HALAMAN DEPAN (LANDING PAGE)
function renderLandingPage(container) {
  container.innerHTML = `
    <header class="bg-white border-b sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2 cursor-pointer" onclick="navigateTo('landing')">
          <div class="bg-blue-600 text-white p-2 rounded-lg font-bold text-xs">GS</div>
          <span class="font-bold text-lg text-slate-900">GeneratorSurat</span>
        </div>
        <div class="flex gap-3">
          <button onclick="navigateTo('dashboard')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-lg transition">Dashboard</button>
          <button onclick="buatPenugasanBaru()" class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">+ Buat Penugasan</button>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-20 text-center">
      <span class="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">Sistem Manajerial Perjalanan Dinas</span>
      <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">Kelola & Buat Surat Penugasan <br/>Dalam Satu Dashboard</h1>
      <p class="text-slate-600 max-w-2xl mx-auto mb-8 text-base">Pantau riwayat penugasan pegawai, buat Surat Tugas dan SPD resmi tanpa perlu edit template manual.</p>
      <div class="flex gap-4 justify-center">
        <button onclick="buatPenugasanBaru()" class="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition">Buat Penugasan Baru</button>
        <button onclick="navigateTo('dashboard')" class="px-8 py-3.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition">Buka Dashboard</button>
      </div>
    </main>
  `;
}

// 2. HALAMAN DASHBOARD
function renderDashboardPage(container) {
  const totalPenugasan = state.riwayatPenugasan.length;
  
  container.innerHTML = `
    <div class="min-h-screen bg-slate-50">
      <!-- Topbar Dashboard -->
      <header class="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2 cursor-pointer" onclick="navigateTo('landing')">
          <div class="bg-blue-600 text-white p-2 rounded-lg font-bold text-xs">GS</div>
          <span class="font-bold text-lg">Dashboard Penugasan</span>
        </div>
        <button onclick="buatPenugasanBaru()" class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-lg shadow transition">
          + Penugasan Baru
        </button>
      </header>

      <main class="max-w-7xl mx-auto p-6">
        <!-- Stat Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p class="text-xs font-semibold text-slate-500 uppercase">Total Surat Diterbitkan</p>
            <p class="text-3xl font-extrabold text-slate-900 mt-2">${totalPenugasan}</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p class="text-xs font-semibold text-slate-500 uppercase">Tugas Aktif/Berjalan</p>
            <p class="text-3xl font-extrabold text-blue-600 mt-2">1</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p class="text-xs font-semibold text-slate-500 uppercase">Selesai</p>
            <p class="text-3xl font-extrabold text-emerald-600 mt-2">${totalPenugasan - 1}</p>
          </div>
        </div>

        <!-- Tabel Riwayat Penugasan -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="p-4 border-b border-slate-100 flex justify-between items-center">
            <h2 class="font-bold text-slate-800">Daftar Penugasan Terbaru</h2>
            <button onclick="buatPenugasanBaru()" class="text-xs font-semibold text-blue-600 hover:underline">+ Buat Baru</button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm text-slate-600">
              <thead class="bg-slate-50 text-slate-700 uppercase text-xs font-bold border-b">
                <tr>
                  <th class="p-4">ID / No. Surat</th>
                  <th class="p-4">Nama Pegawai</th>
                  <th class="p-4">Maksud Tugas</th>
                  <th class="p-4">Tujuan</th>
                  <th class="p-4">Tanggal</th>
                  <th class="p-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${state.riwayatPenugasan.map(item => `
                  <tr class="hover:bg-slate-50">
                    <td class="p-4 font-mono font-medium text-slate-900">${item.id}</td>
                    <td class="p-4 font-semibold text-slate-800">${item.namaPegawai}</td>
                    <td class="p-4">${item.maksudTugas}</td>
                    <td class="p-4">${item.tujuan}</td>
                    <td class="p-4 text-xs">${item.tglBerangkat} s/d ${item.tglKembali}</td>
                    <td class="p-4 text-center">
                      <button onclick="editPenugasan('${item.id}')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-3 py-1.5 rounded font-medium">Edit / Cetak</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  `;
}

// 3. HALAMAN GENERATOR (EDITOR SURAT)
function renderGeneratorPage(container) {
  const d = state.formData;
  container.innerHTML = `
    <div class="max-w-[1600px] mx-auto p-4">
      <div class="mb-4 flex justify-between items-center no-print">
        <button onclick="navigateTo('dashboard')" class="text-sm font-semibold text-slate-600 hover:text-slate-900">
          &larr; Kembali ke Dashboard
        </button>
        <span class="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Mode Edit Surat Tugas & SPD</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Form Penugasan -->
        <div class="lg:col-span-5 bg-white p-6 rounded-xl shadow-md h-fit no-print">
          <h2 class="text-lg font-bold text-slate-800 mb-4 pb-2 border-b">Form Penugasan</h2>
          <form onsubmit="return false;" class="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            
            <div class="bg-slate-50 p-3 rounded-lg border">
              <h3 class="text-xs font-bold text-slate-500 uppercase mb-2">Data Pegawai Ditugaskan</h3>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <input type="text" id="inputNamaPegawai" value="${d.namaPegawai}" placeholder="Nama Pegawai & Gelar" class="col-span-2 p-2 border rounded" />
                <input type="text" id="inputNipPegawai" value="${d.nipPegawai}" placeholder="NIP / NIK" class="p-2 border rounded" />
                <input type="text" id="inputPangkatGol" value="${d.pangkatGol}" placeholder="Pangkat / Golongan" class="p-2 border rounded" />
                <input type="text" id="inputJabatan" value="${d.jabatan}" placeholder="Jabatan" class="col-span-2 p-2 border rounded" />
              </div>
            </div>

            <div class="bg-slate-50 p-3 rounded-lg border">
              <h3 class="text-xs font-bold text-slate-500 uppercase mb-2">Detail Perjalanan</h3>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <textarea id="inputMaksudTugas" rows="2" placeholder="Maksud Perjalanan Dinas" class="col-span-2 p-2 border rounded">${d.maksudTugas}</textarea>
                <input type="text" id="inputTujuan" value="${d.tujuan}" placeholder="Kota / Tempat Tujuan" class="col-span-2 p-2 border rounded" />
                <div>
                  <label class="block text-[10px] text-slate-500">Tgl Berangkat</label>
                  <input type="date" id="inputTglBerangkat" value="${d.tglBerangkat}" class="w-full p-2 border rounded" />
                </div>
                <div>
                  <label class="block text-[10px] text-slate-500">Tgl Kembali</label>
                  <input type="date" id="inputTglKembali" value="${d.tglKembali}" class="w-full p-2 border rounded" />
                </div>
                <input type="text" id="inputLamaTugas" value="${d.lamaTugas}" placeholder="Lama Tugas (misal: 3 Hari)" class="col-span-2 p-2 border rounded" />
              </div>
            </div>

          </form>

          <div class="mt-6 flex gap-2 border-t pt-4">
            <button onclick="simpanKeRiwayat()" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded text-xs font-bold">Simpan ke Dashboard</button>
            <button onclick="downloadPDF()" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-xs font-bold">Unduh PDF</button>
          </div>
        </div>

        <!-- Document Live Preview -->
        <div class="lg:col-span-7 flex justify-center">
          <div id="paper" class="bg-white w-full max-w-[210mm] min-h-[297mm] p-10 shadow-2xl border text-black font-serif text-xs leading-normal">
            <!-- Dynamic Content -->
          </div>
        </div>
      </div>
    </div>
  `;

  attachGeneratorEvents();
  renderPreview();
}

// LOGIKA PENUGASAN BARU & SIMPAN
function buatPenugasanBaru() {
  // Reset form data untuk penugasan baru
  state.formData = {
    ...state.formData,
    nomorSurat: `090 / ${Math.floor(1000 + Math.random() * 9000)} / 35.73.100 / 2026`,
    namaPegawai: '',
    nipPegawai: '',
    pangkatGol: '',
    jabatan: '',
    maksudTugas: '',
    tujuan: '',
    tglBerangkat: '',
    tglKembali: '',
    lamaTugas: ''
  };
  navigateTo('generator');
}

function simpanKeRiwayat() {
  if (!state.formData.namaPegawai) {
    alert('Harap isi nama pegawai terlebih dahulu!');
    return;
  }

  const newItem = {
    id: state.formData.nomorSurat.split('/')[1] ? `SPD-${state.formData.nomorSurat.split('/')[1].trim()}` : 'SPD-NEW',
    namaPegawai: state.formData.namaPegawai,
    maksudTugas: state.formData.maksudTugas || '-',
    tujuan: state.formData.tujuan || '-',
    tglBerangkat: state.formData.tglBerangkat || '-',
    tglKembali: state.formData.tglKembali || '-',
    status: 'Berjalan'
  };

  state.riwayatPenugasan.unshift(newItem);
  alert('Penugasan berhasil disimpan ke dashboard!');
  navigateTo('dashboard');
}

function editPenugasan(id) {
  const item = state.riwayatPenugasan.find(r => r.id === id);
  if (item) {
    state.formData.namaPegawai = item.namaPegawai;
    state.formData.maksudTugas = item.maksudTugas;
    state.formData.tujuan = item.tujuan;
    state.formData.tglBerangkat = item.tglBerangkat;
    state.formData.tglKembali = item.tglKembali;
    navigateTo('generator');
  }
}

function attachGeneratorEvents() {
  const fields = ['NamaPegawai', 'NipPegawai', 'PangkatGol', 'Jabatan', 'MaksudTugas', 'Tujuan', 'TglBerangkat', 'TglKembali', 'LamaTugas'];
  fields.forEach(f => {
    const el = document.getElementById(`input${f}`);
    if (el) {
      el.addEventListener('input', (e) => {
        const key = f.charAt(0).toLowerCase() + f.slice(1);
        state.formData[key] = e.target.value;
        renderPreview();
      });
    }
  });
}

function renderPreview() {
  const paper = document.getElementById('paper');
  const d = state.formData;

  paper.innerHTML = `
    <div class="text-center border-b-4 border-double border-black pb-2 mb-4">
      <h3 class="font-bold text-sm uppercase">${d.namaInstansi}</h3>
      <h2 class="font-bold text-base uppercase">${d.unitKerja}</h2>
    </div>
    <div class="text-center mb-6">
      <h1 class="font-bold text-sm underline uppercase">SURAT TUGAS</h1>
      <p class="text-xs">Nomor: ${d.nomorSurat}</p>
    </div>
    <p class="mb-3">Yang bertanda tangan di bawah ini memberi tugas kepada:</p>
    <table class="w-full mb-4 ml-4 text-xs">
      <tr><td class="w-28 py-0.5">Nama</td><td>: <b>${d.namaPegawai || '[Nama Pegawai]'}</b></td></tr>
      <tr><td class="py-0.5">NIP</td><td>: ${d.nipPegawai || '-'}</td></tr>
      <tr><td class="py-0.5">Jabatan</td><td>: ${d.jabatan || '-'}</td></tr>
    </table>
    <p class="mb-4">Untuk melaksanakan tugas <b>${d.maksudTugas || '[Maksud Tugas]'}</b> ke <b>${d.tujuan || '[Tujuan]'}</b> selama ${d.lamaTugas || '[Lama Tugas]'}.</p>
    <div class="mt-12 flex justify-end">
      <div class="text-center w-56">
        <p>${d.kotaTanggal}</p>
        <p class="font-bold mb-12">${d.jabatanPenandatangan}</p>
        <p class="font-bold underline">${d.namaPenandatangan}</p>
      </div>
    </div>
  `;
}

function downloadPDF() {
  const element = document.getElementById('paper');
  html2pdf().from(element).save(`Surat_Tugas_${state.formData.namaPegawai || 'Dokumen'}.pdf`);
}

document.addEventListener('DOMContentLoaded', renderApp);
