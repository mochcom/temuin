// =============================================================
// quizValidator.js — Utility pencocokan jawaban kuis verifikasi
// Tujuan: mencegah klaim palsu dengan mencocokkan jawaban
// pengguna terhadap jawaban rahasia yang disimpan pelapor.
// =============================================================

/**
 * Mencocokkan jawaban pengguna dengan jawaban benar.
 * Case-insensitive & mengabaikan spasi berlebih.
 * @param {string} jawabanUser
 * @param {string} jawabanBenar
 * @returns {boolean}
 */
function isAnswerValid(jawabanUser, jawabanBenar) {
  if (!jawabanUser || !jawabanBenar) return false;
  const normalize = (str) => str.trim().toLowerCase();
  return normalize(jawabanUser) === normalize(jawabanBenar);
}

module.exports = { isAnswerValid };
