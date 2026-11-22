# Kesepakatan Tim

## Penyimpanan

| Jenis file | Disimpan di |
|------------|-------------|
| Kode (HTML, CSS, JS) | GitHub |
| Foto final yang dipakai website | GitHub, folder `assets/images` |
| Foto mentah dan bahan riset | Google Drive |
| Laporan Word dan slide | Google Drive |
| Sitemap dan wireframe | Figma, ekspor PDF ke Drive |
| Daftar bug | GitHub Issues |

## Aturan GitHub

- Jangan commit langsung ke `main` untuk kode. Satu orang, satu branch, satu halaman (contoh: `fitur/halaman-kuliner`).
- Dokumen kecil di `docs/` dan README boleh langsung ke `main` oleh koordinator, dengan memberi tahu di grup.
- Sebelum mulai bekerja, jalankan `git pull`.
- Pull request ditinjau koordinator sebelum di-merge.
- Awalan pesan commit: `feat:` (fitur atau halaman baru), `fix:` (perbaikan bug), `style:` (perubahan CSS), `docs:` (dokumentasi), `content:` (teks atau gambar).
- Commit kecil dan sering, minimal 3-4 kali per orang per minggu mulai tahap 4.
- Jangan mengubah file milik orang lain tanpa memberi tahu. Perubahan navbar, footer, atau CSS global diminta lewat Issue ke koordinator.
- Email Git harus sama dengan email akun GitHub.

## Aturan kode

- Tanpa inline style dan inline script. Script dimuat dengan atribut `defer`.
- Kebab-case untuk file dan class, camelCase untuk variabel JavaScript.
- `index.html` di root. Halaman lain di folder `html/` dan memanggil CSS dan JS dengan awalan `../`.
- CSS dan JS dipisah per halaman. `style.css` dan `script.js` hanya untuk bagian global.
- Foto dikecilkan sebelum di-commit, diberi nama kebab-case, dan punya teks alt.
- Teks ditulis ulang dengan kata sendiri. Foto milik sendiri atau berlisensi bebas, dan sumber dicatat.

## Laporan dan jurnal

- Gaya sitasi: APA 7th edition.
- Jurnal terbit maksimal 5 tahun terakhir (2021-2026). Total 15 jurnal.
- Pengelola daftar pustaka: Naufal.
- Bagian laporan diserahkan paling lambat 13 Des dengan nama file seragam, contoh: `Bab4-Implementasi-Kuliner-Dhan.docx`.

## Komunikasi

- Pesan di grup dibalas maksimal 24 jam.
- Kendala disampaikan sejak dini, bukan di hari tenggat.
- Kalau ada yang tidak bisa mengerjakan tugasnya: diingatkan di grup, dibicarakan di rapat, lalu tugas dialihkan atau dibantu anggota lain.
- Keputusan penting dicatat di notulen, bukan hanya di chat.
