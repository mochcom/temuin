// =============================================================
// Item.js — Schema Data Barang
// Field: nama, kategori, gedung (lokasi penemuan), foto, status
// (ditemukan/diklaim), waktu dilaporkan.
// TODO: implementasikan sesuai ORM/driver database pilihan tim.
// =============================================================

module.exports = {
  fields: {
    id: "string",
    nama: "string",
    kategori: "string", // Elektronik | Aksesoris | Dompet | Dokumen
    gedung: "string",
    deskripsi: "string",
    fotoUrl: "string",
    status: "string", // "ditemukan" | "diklaim"
    createdAt: "date",
  },
};
