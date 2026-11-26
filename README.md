# Warisan Budaya Melayu Kepulauan Riau

Website pengenalan budaya Melayu Kepulauan Riau untuk generasi muda, pelajar, mahasiswa, dan wisatawan.
Proyek akhir mata kuliah Perancangan Web (INF11115), Teknik Informatika,
Universitas Maritim Raja Ali Haji, 2026.

🔗 **Live preview:** (isi setelah deploy GitHub Pages)

## Tujuan
Website ini bertujuan memperkenalkan dan melestarikan warisan budaya Melayu Kepulauan Riau, mencakup sejarah dan tokoh, tempat bersejarah, seni pertunjukan, kuliner, serta bahasa dan pantun, sebagai media edukasi bagi generasi muda, mahasiswa, dan wisatawan.

## Pengguna
- Generasi Z, pelajar, mahasiswa, dan peneliti
- Wisatawan lokal dan mancanegara
- Masyarakat umum dan perantau

## Tim

| No | Nama | NIM | Halaman koding | Tugas tambahan |
|----|------|-----|----------------|----------------|
| 1 | M. Naufal Abdurrafi | 2501020014 | Beranda dan fondasi kode | Koordinator, penyunting laporan |
| 2 | Akhdan Dana Diaksa | 2501020048 | Kuliner | Desainer Figma, slide presentasi |
| 3 | Fery Febrian | 2501020049 | Bahasa dan pantun | Penguji |
| 4 | Bagas Argasaputra | 2501020036 | Sejarah dan tokoh | Analis kebutuhan dan survei |
| 5 | Mohammad Alfin Faris Adz Dzikkri | 2501020032 | Tempat bersejarah | Penguji |
| 6 | Gina Mulandari | 2501020039 | Seni pertunjukan | Desainer Figma |
| 7 | Thara De Seniamarcahanda | 2501020037 | Kuis dan form saran | Analis kebutuhan dan survei |

Dosen pengampu: Berta Erwin SLAM, S.T., M.Kom. dan Rifaldi Herikson, M.Kom.

## Fitur
Daftar fitur dapat berubah setelah hasil survei dan analisis kebutuhan.

- [ ] Navigasi responsif dengan menu hamburger (Beranda)
- [ ] Halaman kategori budaya (6 halaman)
- [ ] Popup foto pada galeri (Kuliner)
- [ ] Pantun acak (Bahasa dan pantun)
- [ ] Accordion atau "baca selengkapnya" (Sejarah dan tokoh)
- [ ] Pencarian atau urutan daftar (Tempat bersejarah)
- [ ] Filter kategori (Seni pertunjukan)
- [ ] Kuis berskor (Kuis)
- [ ] Form saran dengan validasi (Kuis dan form saran)

Centang saat fitur selesai.

## Teknologi
HTML, CSS, dan JavaScript murni. Desain di Figma. Dikelola dengan Git dan GitHub.

## Struktur File
```
warisan-budaya-melayu/
├── index.html              # beranda
├── html/                   # halaman lainnya
│   ├── kuliner.html
│   ├── bahasa-pantun.html
│   ├── sejarah-tokoh.html
│   ├── tempat-bersejarah.html
│   ├── seni-pertunjukan.html
│   └── kuis.html
├── css/
│   ├── style.css           # gaya global (variabel warna, navbar, footer)
│   └── kuliner.css, ...    # satu file CSS per halaman
├── js/
│   ├── script.js           # fungsi global (menu hamburger)
│   └── kuliner.js, ...     # satu file JS per halaman
├── assets/
│   └── images/             # foto dan gambar
├── docs/                   # analisis kebutuhan, jadwal, kesepakatan, kontribusi
└── README.md
```

## Cara Menjalankan
1. Clone repo: `git clone https://github.com/naufalabdurrafi/warisan-budaya-melayu.git`
2. Buka folder proyek.
3. Buka `index.html` di browser (atau gunakan ekstensi Live Server di VS Code).

Tidak perlu instalasi tambahan karena proyek ini tidak memakai framework atau library.

## Aturan Pengembangan
- Penamaan file dan class memakai kebab-case, variabel JavaScript memakai camelCase.
- Tanpa inline style dan inline script.
- Setiap halaman memuat `style.css` (global) lalu CSS halamannya sendiri. Contoh di `html/kuliner.html`:
  ```html
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/kuliner.css">
  <script src="../js/script.js" defer></script>
  <script src="../js/kuliner.js" defer></script>
  ```
- Satu halaman HTML dikerjakan satu orang. Perubahan di navbar, footer, atau CSS global diminta lewat Issue ke koordinator.
- Commit dengan awalan `feat:`, `fix:`, `style:`, `docs:`, atau `content:`.
- Kerja di branch masing-masing, lalu gabungkan lewat pull request yang ditinjau koordinator.

## Sumber Konten
Daftar sumber teks dan foto (diisi bertahap oleh tiap anggota untuk halamannya).

## Dokumen Perancangan
- [Analisis kebutuhan](docs/analisis-kebutuhan.md)
- [Kontribusi tim](docs/kontribusi.md)
- [Sitemap dan wireframe] ([tambahkan tautan Figma](https://www.figma.com/design/KQbnFEPJpNIjmKpY6u2cTF/Web-Warisan-Budaya-KEPRI?node-id=0-1&t=nQxGjCYnHrFdNzQG-1))
