// Abdullah Mufid, Data Kedai, 10-10-2026
// Membuat objek kedai :
const kedai = {
  nama: "Kedai Kopi Puncak Rindu",
  pemilik: "Very Irawan",
  kota: "Yogyakarta",
  tahunBerdiri: 2020,
  sedangBuka: true,
  nomorWhatsApp: "0895329949427",
  website: null,
  jamOperasional: {buka: "08:00", tutup: "22:00"}
};
// Membuat Array menu :
const menu = [
    {nama: "sate ayam", harga: 25000,kategori: "makanan",stok: 1000, tersedia: true},
    {nama: "es teh manis", harga: 5000,kategori: "minuman",stok: 1000, tersedia: true},
    {nama: "sate kambing", harga: 30000,kategori: "makanan",stok: 1500, tersedia: false},
    {nama: "es jeruk", harga: 5000,kategori: "minuman",stok: 1000, tersedia: true},
    {nama: "ayam bakar",harga: 35000,kategori: "makanan",stok: 100, tersedia: true},
    {nama: "sate kelinci", harga: 27000,kategori: "makanan",stok: 0, tersedia: false},
];
// Membuat Array transaksi :
const transaksi = [
    {object: "sate ayam", kode: "STA-000", pelanggan: "Ani", sudahMember: "true", uangBayar: 50000, catatan: "sedikit pedas", pesanan: { indeksMenu: 0, jumlah: 2 }},
    {object: "sate kambing", kode: "STK-002", pelanggan: "Adi", sudahMember: "false", uangBayar: 30000, catatan:"", pesanan: { indeksMenu: 2, jumlah: 1 }},
    {object: "ayam bakar", kode: "AYB-004", pelanggan: "Ali", sudahMember: "true", uangBayar: 10000, catatan: "sedikit kering", pesanan: { indeksMenu: 4, jumlah: 1 }}
];
// Cetak ke console :
console.log(kedai.nama);
console.log(kedai["kota"]);
console.log(kedai.jamOperasional.tutup);
console.log(menu[0].nama);
console.log(menu[5].nama);
console.log(transaksi[2].pelanggan);
console.log(menu[4].pesanan);
console.log(kedai.tahunBerdiri);
console.log(kedai.sedangBuka);
console.log(kedai.website);
console.log(kedai.jamOperasional);
console.log(kedai.menu);
console.log(transaksi[0].catatan);

// Membuat variabel catatankasir :
let catatankasir;
console.log(catatankasir); // Output: undefined

// Menjawab pertanyaan dari Bagian 2 :

// 1. Karena nomor telepon dapat memiliki angka nol di awal dan bisa mengandung karakter lain seperti tanda plus (+) untuk kode negara. Jika disimpan sebagai number, angka nol di awal akan hilang dan format nomor telepon bisa berubah.
// 2. Karena kedai belum memiliki website. Sedangkan catatanKasir dibiarkan tanpa nilai (undefined) karena belum ada catatan yang dibuat oleh kasir pada saat itu.
// 3. Hasil menu[6] akan menjadi undefined karena indeks array dimulai dari 0 hingga 5, untuk 6 item. Karena indeks 6 berada di luar batas array.
// 4. Hasil typeof menu adalah "object" karena dalam JavaScript, array adalah tipe data khusus dari objek. Meskipun terlihat seperti daftar, array tetap dianggap sebagai objek.
// 5. Karena menu berisi daftar item yang bisa diakses melalui indeks, sedangkan kedai dibuat sebagai object karena memiliki properti yang berbeda-beda (nama, pemilik, kota, dll.) yang lebih cocok disimpan dalam format key-value.
