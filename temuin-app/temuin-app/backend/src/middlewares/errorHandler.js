// =============================================================
// errorHandler.js — Middleware Handling Error Respon API
// =============================================================

module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Terjadi kesalahan pada server.",
  });
};
