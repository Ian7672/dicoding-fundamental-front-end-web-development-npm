# Notes App - Submission Dicoding

## 📝 Deskripsi Aplikasi
Aplikasi Notes ini dikembangkan sebagai proyek submission untuk kelas ["Fundamental Front-End Web Development"](https://www.dicoding.com/academies/163) di Dicoding. Aplikasi web ini memungkinkan pengguna untuk membuat, mengelola, dan mengarsipkan catatan secara efisien dengan antarmuka yang modern dan intuitif.

## ✨ Fitur Utama
- **Manajemen Catatan Lengkap**:
  - ✅ Membuat catatan baru dengan judul dan konten
  - 📋 Menampilkan daftar catatan aktif & terarsip
  - 🗂️ Mengarsipkan/mengaktifkan kembali catatan
  - 🗑️ Menghapus catatan dengan konfirmasi

- **Pengalaman Pengguna**:
  - ⏳ Loading indicator untuk operasi async
  - 💫 Notifikasi interaktif dengan SweetAlert2
  - 📱 Desain responsif untuk berbagai perangkat

## 🛠 Teknologi yang Digunakan
- **Frontend Modern**:
  - Web Components untuk reusable UI
  - Fetch API untuk komunikasi backend
  - JavaScript Modules (ES6+)

- **Libraries Pendukung**:
  - SweetAlert2 untuk notifikasi
  - Custom CSS untuk styling

## 📂 Struktur Proyek
```
notes_project/
├── package.json              # File konfigurasi npm (isi dependency, script npm, dll)
├── webpack.common.js         # Konfigurasi Webpack umum (dipakai oleh dev & prod)
├── webpack.dev.js            # Konfigurasi Webpack khusus untuk development (hot reload, sourcemap, dsb)
├── webpack.prod.js           # Konfigurasi Webpack khusus untuk production (minify, optimize)
│
├── dist/                     # Folder hasil build, siap upload/deploy
│   ├── index.html            # File HTML hasil dari proses build
│   └── main.bundle.js        # File JavaScript hasil bundling dari Webpack
│
├── src/                      # Folder kode sumber utama (belum dibundling)
│   ├── index.html            # Template HTML utama proyek (dipakai saat build)
│   ├── index.js              # Entry point JavaScript, tempat program dimulai
│   ├── style.css             # File CSS utama untuk styling halaman
│
│   └── components/           # Folder komponen JavaScript modular (gaya Web Component)
│       ├── api.js            # File berisi fungsi pemanggilan API (mungkin pakai fetch)
│       ├── InputNotes.js     # Komponen input untuk mencatat atau menambahkan note
│       ├── LoadingIndicator.js # Komponen loading (misal animasi saat fetch data)
│       └── NoteForm.js       # Komponen formulir untuk input note

```

## 🔧 Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Ian7672/dicoding-fundamental-front-end-web-development-npm.git
   cd dicoding-fundamental-front-end-web-development-npm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Create production build:
   ```bash
   npm run build
   ```

## ✅ Submission Criteria

This project meets all requirements for Dicoding's Fundamental Front-End Web Development course:

1. **npm Implementation**:
   - Proper package.json configuration
   - Development and production scripts
   - Modern module system

2. **Code Quality**:
   - ES6+ syntax (Classes, Arrow Functions)
   - Separation of concerns
   - Consistent code style

3. **Core Functionality**:
   - Complete CRUD operations
   - Data persistence
   - Responsive design

4. **User Experience**:
   - Intuitive interface
   - Visual feedback
   - Accessibility considerations

## 🚀 Cara Penggunaan
1. **Menambahkan Catatan**:
   - Isi form "Create New Note"
   - Tekan tombol submit

2. **Mengelola Catatan**:
   - Klik tombol archive/unarchive untuk mengubah status
   - Klik tombol delete untuk menghapus (akan muncul konfirmasi)

3. **Melihat Catatan**:
   - Daftar catatan terbagi dalam dua bagian:
     - Active Notes
     - Archived Notes

## 🔗 Link Penting
🔗 [Kelas Dicoding](https://www.dicoding.com/academies/163)  
🔗 [Demo Aplikasi](https://your-demo-link.com)  
🔗 [Repository GitHub](https://github.com/yourusername/dicoding-fundamental-front-end-web-development-npm)

Dikembangkan dengan ❤️ oleh Ian7672 untuk [Dicoding Indonesia](https://www.dicoding.com)