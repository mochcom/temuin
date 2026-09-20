// =============================================================
// Quiz.js — Schema Pertanyaan & Jawaban Kuis Verifikasi Rahasia
// Relasi: satu Item memiliki satu Quiz (1:1).
// TODO: implementasikan sesuai ORM/driver database pilihan tim.
// =============================================================

module.exports = {
  fields: {
    id: "string",
    itemId: "string", // relasi ke Item.id
    pertanyaan: "string",
    jawabanBenar: "string", // sebaiknya disimpan ter-hash
  },
};
