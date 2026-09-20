// =============================================================
// reportController.js — Logic Formulir Lapor Cepat
// (Handling data laporan baru dari lapor.html)
// TODO: simpan ke model Item.js + Quiz.js, proses upload foto
// lewat uploadMiddleware.js.
// =============================================================

// POST /api/report
exports.createReport = (req, res) => {
  const { namaBarang, kategori, gedung, pertanyaanKuis, jawabanBenar } = req.body;
  // TODO: validasi input, simpan ke database
  res.status(201).json({
    message: "TODO: createReport",
    data: { namaBarang, kategori, gedung, pertanyaanKuis, jawabanBenar },
  });
};
