// 5.1 Tebak

// Tebakan: "55"
// Hasil asli: "55"  ✔
// Penjelasan: Angka 5 diubah secara otomatis menjadi string karena bertemu dengan operator '+' dan string "5", sehingga digabungkan menjadi teks "55".
console.log(5 + "5");
// Tebakan: "6"
// Hasil asli: "6"  ✔
// Penjelasan: String "10" diubah menjadi angka 10, lalu dikurangi dengan 4.
console.log("10" - 4);
// Tebakan: "20"
// Hasil asli: "20"  ✔
// Penjelasan: String "10" dan "2" diubah menjadi angka 10 dan 2, lalu dikalikan.
console.log("10" * "2");
// Tebakan: "string"
// Hasil asli: "string"  ✔
// Penjelasan: Operasi penjumlahan antara string "5" dan angka 5 menghasilkan string "55".
console.log(typeof ("5" + 5));
// Tebakan: "1"
// Hasil asli: "1"  ✔
// Penjelasan: Sisa pembagian 9 oleh 4 adalah 1.
console.log(9 % 4);
// Tebakan: "25"
// Hasil asli: "25"  ✔
// Penjelasan: Operasi eksponensial antara 2 dan 3, lalu dipangkatkan 2.
console.log((2 + 3) ** 2);
// Tebakan: "2.5"
// Hasil asli: "2.5"  ✔
// Penjelasan: Pembagian 10 oleh 4 menghasilkan desimal.
console.log(10 / 4);
// Tebakan: "Infinity"
// Hasil asli: "Infinity"  ✔
// Penjelasan: Pembagian angka oleh nol menghasilkan Infinity.
console.log(1 / 0);
// Tebakan: "NaN"
// Hasil asli: "NaN"  ✔
// Penjelasan: Perkalian string "abc" dengan angka 2 menghasilkan Not-a-Number.
console.log("abc" * 2);
// Tebakan: "number"
// Hasil asli: "number"  ✔
// Penjelasan: Tipe data dari NaN adalah number.
console.log(typeof NaN);
// Tebakan: "false"
// Hasil asli: "false"  ✔
// Penjelasan: Operasi logika AND antara dua kondisi yang salah, lalu OR dengan kondisi yang benar.
console.log((5 > 3 && 2 > 4) || 1 === 1);
// Tebakan: "true"
// Hasil asli: "true"  ✔
// Penjelasan: Operasi logika NOT pada true dan false.
console.log(!true || !false);
// Tebakan: "true"
// Hasil asli: "true"  ✔
// Penjelasan: Perbandingan tipe data string dan number, serta perbandingan tipe data yang berbeda.
console.log("5" == 5 && "5" !== 5);
// Tebakan: "false"
// Hasil asli: "false"  ✔
// Penjelasan: Perbandingan tipe data array dan object.
console.log(typeof [] === typeof {});
// Tebakan: "50"
// Hasil asli: "50"  ✔
// Penjelasan: Mengakses elemen array berdasarkan indeks dan menjumlahkan nilai-nilai tersebut.
console.log([10, 20, 30][1] + [10, 20, 30][2]);

// 5.2 Eksperimen var dan let

// --- BUKTI 1: Perilaku di dalam Blok { } (Scope) ---
 if (true) {
    var namaVar = "Halo, saya pakai var!";
    let namaLet = "Halo, saya pakai let!";
}

// Variabel var berhasil dibaca dari luar blok
console.log(namaVar); // Output: "Halo, saya pakai var!"

// Variabel let TIDAK BISA dibaca dari luar blok (jika diaktifkan akan error)
// console.log(namaLet); 
// Pesan Error jika diaktifkan: ReferenceError: namaLet is not defined

// --- BUKTI 2: Deklarasi Ulang dengan Nama yang Sama ---
var kotaAsal = "Yogyakarta";
var kotaAsal = "Jakarta"; // Berhasil dideklarasikan ulang tanpa error!
console.log(kotaAsal); // Output: "Jakarta"

let statusAktif = true;
// let statusAktif = false; // Jika diaktifkan, ini akan menyebabkan error!
// Pesan Error jika diaktifkan: SyntaxError: Identifier 'statusAktif' has already been declared

// 5.3 Jelaskan

// 1. Kenapa 5 + "5" dan "10" - 4 hasilnya berbeda jenis?
//    - "5 + '5'" hasilnya adalah teks (string) "55". Kenapa? Karena tanda '+' dipakai untuk penggabungan teks (concatenation). Ketika angka 5 bertemu dengan string "5", JavaScript otomatis mengubah angka 5 menjadi string lalu menggabungkannya.
//    - "'10' - 4" hasilnya adalah angka (number) 6. Kenapa? Karena tanda '-' hanya digunakan untuk operasi matematika. JavaScript otomatis mengubah string "10" menjadi angka 10, lalu menguranginya dengan 4.

// 2. - Artinya: NaN adalah singkatan dari "Not a Number" (Bukan Angka). Ini muncul ketika kita mencoba melakukan operasi matematika yang hasilnya tidak valid (contoh: "abc" * 2).
//    - Kenapa tipenya "number"?: Secara aturan standar bahasa pemrograman JavaScript (mengikuti standar internasional IEEE 754 untuk angka komputer), NaN secara teknis tetap dikategorikan sebagai tipe data angka (number) yang sedang dalam kondisi gagal atau tidak terdefinisi nilainya.

// 3. Langkah 1: Cek kurung siku/prioritas operator (&& dikerjakan lebih dulu sebelum ||).
//    - Bagian kiri (&&): (5 > 3) bernilai true, sedangkan (2 > 4) bernilai false. Maka (true && false) menghasilkan FALSE.
//    - Bagian kanan: (1 === 1) bernilai TRUE.
//    Langkah 2: Selesaikan operasi OR (||).
//    - Hasil dari langkah 1 menjadi: (false || true).
//    - Karena salah satu benar, maka hasil akhirnya adalah TRUE.

// 4. - Karena array di JavaScript sebenarnya adalah jenis khusus dari object, maka 'typeof []' mengembalikan "object".
//    - Cara membedakannya di dalam kode adalah dengan menggunakan method khusus bawaan JavaScript, yaitu: Array.isArray(namaVariabel). 
//      Contoh: Array.isArray([1, 2, 3]) akan menghasilkan true, sedangkan Array.isArray({nama: "Budi"}) akan menghasilkan false.

// 5. - Statement 1 (Deklarasi & Inisialisasi): let hasil = 5 + 10;
//       Expression di dalamnya: 
//        - 5 (nilai: 5)
//        - 10 (nilai: 10)
//        - 5 + 10 (nilai: 15)
//        - hasil = 5 + 10 (nilai: 15)
//    - Statement 2 (Pemanggilan fungsi): console.log(hasil * 2);
//      * Expression di dalamnya:
//        - hasil (nilai: 15)
//        - 2 (nilai: 2)
//        - hasil * 2 (nilai: 30)
//        - console.log(hasil * 2) (nilai: undefined, karena fungsi console.log tidak mengembalikan nilai)

// 6. - File eksperimen.js biasanya dijalankan di dalam lingkungan mesin lokal komputer atau server melalui perintah terminal Node.js (contoh: node eksperimen.js).
//    - Bedanya dengan browser: Kalau di browser, JavaScript dieksekusi oleh mesin browser (seperti V8 di Chrome) untuk merender halaman web. Sedangkan Node.js adalah lingkungan runtime yang memungkinkan kita menjalankan JavaScript di luar browser (langsung di komputer).
//    - Kenapa pakai let dan const?: Karena let dan const adalah standar modern JavaScript (ES6) yang jauh lebih aman. Mereka mencegah variabel tidak sengaja bocor ke luar blok kode dan mencegah deklarasi nama ganda yang bisa memicu bug tersembunyi.
 
// 7. - Kasus 1 (Blok Scope): Variabel yang dibuat pakai 'var' di dalam kurung kurawal '{ }' tetap bisa dipanggil dari luar blok (bocor). Sedangkan 'let' terkurung ketat di dalam blok dan akan error (ReferenceError) jika dipanggil dari luar.
//    - Kasus 2 (Deklarasi Ulang): Variabel 'var' mengizinkan kita membuat ulang nama variabel yang sama persis berkali-kali tanpa protes. Sedangkan 'let' melarang keras dan langsung memunculkan error (SyntaxError) jika ada nama variabel kembar di ruang lingkup yang sama.

// 8. - Contoh nyata: Bayangkan kita membuat variabel 'let totalHarga = 0;' di luar, lalu di dalam perulangan 'for' (blok kode kecil) kita tidak sengaja memakai 'var totalHarga = 50000;' untuk menghitung diskon produk. 
//    - Karena sifat 'var' yang bisa bocor dan menimpa variabel di luarnya, nilai 'totalHarga' utama di luar perulangan akan ikut berubah rusak tanpa kita sadari, membuat total tagihan seluruh belanjaan pelanggan jadi salah total!