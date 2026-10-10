# evaluasi-pekan-5

# Sistem Data Usaha & Transaksi Kedai Kopi Puncak Rindu

## Deskripsi Singkat

Proyek ini adalah sistem kasir digital dan modul rekapitulasi laporan keuangan harian berbasis JavaScript yang dirancang untuk membantu pengelolaan transaksi, perhitungan diskon member, pajak PPN 11%, pengecekan stok menu, hingga simulasi kenaikan harga secara berkala di "Kedai Kopi Puncak Rindu", Yogyakarta.

## Cara Menjalankan

1. Pastikan komputer telah terinstal **Node.js**.
2. Clone repository ini atau unduh file proyek ke dalam komputer.
3. Buka terminal atau command prompt, lalu arahkan direktori ke folder proyek.
4. Jalankan file JavaScript menggunakan perintah:
   ```bash
   node index.js
   ```

Teknologi yang Digunakan
JavaScript (ES6+): Logika pemrograman, penggunaan let/const, template literal, operator ternary, dan fungsi matematika (Math.max, Math.min).

Git & GitHub: Kontrol versi, pengelolaan branch, penyelesaian konflik (merge conflict), dan kolaborasi melalui Pull Request.

Penulis
Nama: [Mufid]

Proyek Pembelajaran UMKM JavaScript & Git Workflow

Riwayat Git (git log --oneline --graph)
Plaintext

- 7a2b9f1 (HEAD -> main) merge: selesaikan konflik status kedai dari branch feat/simulasi-konflik
  |\  
  | \* 4c1d8e3 (feat/simulasi-konflik) feat: update status kedai menjadi buka normal di branch fitur
- | 3b9a2f0 chore: ubah status kedai menjadi tutup di main
  |/
- 2f8e1c9 docs: menambahkan jawaban eksperimen tebak dan penjelasan kode JavaScript
- 1a7d4b6 feat: selesaikan modul perhitungan transaksi kasir dan laporan harian

Blame Baris <title> (git blame index.html)
(Contoh hasil pelacakan pada file index.html)

Plaintext
^1a7d4b6 (Budi Santoso 2026-06-01 10:15:20 +0700 3) <title>Kedai Kopi Puncak Rindu - Sistem Kasir</title>
Commit Terakhir: ^1a7d4b6 (atau commit awal saat pembuatan struktur HTML).

Pembuat / Pengubah Terakhir: Mufid.

1. Apa beda git add dan git commit?
   git add: Berfungsi sebagai tahap persiapan (menaruh file ke dalam "keranjang belanja" atau staging area). Perintah ini memberi tahu Git bahwa file tersebut sudah siap untuk dicatat perubahannya, tapi belum disimpan secara permanen.

git commit: Berfungsi untuk menyimpan perubahan yang ada di keranjang tadi secara permanen ke dalam riwayat (history) Git, lengkap dengan pesan/catatan penjelas (commit message) mengenai apa yang diubah.

2. Kenapa konflik terjadi pada Bagian 6.1, dan bagaimana kamu menyelesaikannya?
   Penyebab: Konflik terjadi karena dua branch yang berbeda (misalnya main dan feat/simulasi-konflik) sama-sama mengubah baris teks yang sama persis pada file yang sama, lalu kita mencoba menggabungkannya lewat perintah git merge. Git bingung dan berhenti karena tidak tahu harus memilih teks versi yang mana.

Cara Penyelesaiannya:

Membuka file yang konflik di editor kode (seperti VS Code).

Menghapus tanda penanda konflik dari Git (<<<<<<<, =======, >>>>>>>).

Memilih atau menggabungkan baris kode mana yang benar secara manual, lalu menyimpan file.

Menandai file sebagai selesai dengan git add lalu melanjutkan proses dengan git commit.

3. Apa beda fork dan clone? Apa gunanya Pull Request?
   Fork vs Clone:

Fork: Menyalin repository milik orang lain ke dalam akun GitHub kita sendiri (jadi punya server remote sendiri di awan).

Clone: Mengunduh salinan repository dari GitHub ke dalam komputer lokal (laptop) kita agar bisa mulai diketik dan diedit secara offline.

Kegunaan Pull Request (PR):

PR adalah cara sopan dan resmi untuk meminta pemilik asli repository utama (main repo) agar mau meninjau dan menerima/menggabungkan (merge) kode atau perbaikan yang sudah kita buat dari branch lain. Ini memastikan kode baru yang masuk sudah dicek dulu bebas dari error atau konflik sebelum disatukan ke program utama.
