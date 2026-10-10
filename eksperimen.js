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