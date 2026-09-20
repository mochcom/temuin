// =============================================================
// Building.js — Schema Master Data Lokasi Gedung Kampus & Pos Satpam
// TODO: implementasikan sesuai ORM/driver database pilihan tim.
// =============================================================

module.exports = {
  fields: {
    id: "string",
    namaGedung: "string",       // cth: "Perpustakaan Pusat"
    lokasiPosSatpam: "string",  // cth: "Pos Satpam Lantai 1"
    jamOperasional: "string",   // cth: "07.00 - 20.00 WIB"
  },
};
