// =============================================================
// ClaimLog.js — Schema History Status Klaim & Verifikasi
// TODO: implementasikan sesuai ORM/driver database pilihan tim.
// =============================================================

module.exports = {
  fields: {
    id: "string",
    itemId: "string",   // relasi ke Item.id
    status: "string",   // "pending" | "valid" | "ditolak"
    attemptedAt: "date",
  },
};
