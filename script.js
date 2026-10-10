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