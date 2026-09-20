// =============================================================
// modal-kuis.js — Logic Pop-up Kuis Verifikasi
// Cakupan: menangkap submit form kuis, memanggil
// POST /api/claim/verify, menampilkan hasil (valid/tidak valid).
//
// TODO (backend siap): ganti fetch di bawah dengan endpoint asli.
// =============================================================

document.addEventListener("DOMContentLoaded", () => {
  const formKuis = document.getElementById("form-kuis-verifikasi");
  if (!formKuis) return;

  formKuis.addEventListener("submit", (event) => {
    event.preventDefault();

    // TODO: ganti dengan pemanggilan API asli, contoh:
    // const res = await fetch("/api/claim/verify", { method: "POST", ... });

    // Sementara: redirect statis ke halaman lokasi pengambilan
    window.location.href = "lokasi-pengambilan.html";
  });
});
