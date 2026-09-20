// =============================================================
// itemController.js — CRUD E-Katalog Barang Temuan
// & Filtering Gedung/Kategori
// TODO: hubungkan ke model Item.js dan database asli.
// =============================================================

// GET /api/items
exports.getAllItems = (req, res) => {
  const { gedung, kategori } = req.query;
  // TODO: query database, filter berdasarkan gedung & kategori
  res.json({ message: "TODO: getAllItems", filters: { gedung, kategori } });
};

// GET /api/items/:id
exports.getItemById = (req, res) => {
  const { id } = req.params;
  // TODO: query database berdasarkan id
  res.json({ message: "TODO: getItemById", id });
};
