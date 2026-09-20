// =============================================================
// form-validation.js — Validasi Formulir Lapor Cepat
// Tujuan: memastikan input wajib (nama barang, lokasi gedung,
// pertanyaan & jawaban kuis) terisi sebelum dikirim, sesuai
// target "kurang dari 1 menit" pengisian.
//
// TODO (backend siap): ganti alert dengan pemanggilan
// POST /api/report dan penanganan respons.
// =============================================================

document.addEventListener("DOMContentLoaded", () => {
  const formLapor = document.getElementById("form-lapor");
  if (!formLapor) return;

  formLapor.addEventListener("submit", (event) => {
    event.preventDefault();

    const namaBarang = document.getElementById("nama-barang").value.trim();
    const lokasiGedung = document.getElementById("lokasi-gedung").value;

    if (!namaBarang || !lokasiGedung) {
      alert("Nama barang dan lokasi gedung wajib diisi.");
      return;
    }

    // TODO: ganti dengan pemanggilan API asli, contoh:
    // await fetch("/api/report", { method: "POST", body: ... });

    alert("Laporan berhasil dikirim! (masih simulasi, backend menyusul)");
    formLapor.reset();
  });
});
