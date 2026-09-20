// =============================================================
// claimController.js — Logic Evaluasi Kuis Verifikasi Jawaban
// & Akses Lokasi Pengambilan
// TODO: cocokkan jawaban dengan utils/quizValidator.js,
// catat hasil ke model ClaimLog.js.
// =============================================================

// POST /api/claim/verify
exports.verifyClaim = (req, res) => {
  const { itemId, jawaban } = req.body;
  // TODO: ambil jawaban benar dari Quiz.js, cocokkan via quizValidator.js
  // jika valid -> kembalikan detail Building.js (lokasi pengambilan)
  res.json({ message: "TODO: verifyClaim", itemId, jawaban });
};
