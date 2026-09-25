// =============================================================
// main.js — Logic UI umum TemuIn
// Cakupan: dropdown filter gedung/kategori di index.html,
// toggle tab "Menemukan" / "Kehilangan" di lapor.html.
//
// Catatan: file ini masih kerangka dasar untuk Progress 2.
// Logic pemanggilan API (GET /api/items) akan ditambahkan
// setelah backend siap.
// =============================================================

// =============================================================
// main.js — Logic UI umum TemuIn
// Cakupan: dropdown filter gedung/kategori di index.html,
// toggle tab "Menemukan" / "Kehilangan" & panel kuis di lapor.html.
// =============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Toggle tab Menemukan / Kehilangan & Panel Kuis (lapor.html)
  const tabMenemukan = document.getElementById("tab-menemukan");
  const tabKehilangan = document.getElementById("tab-kehilangan");
  const inputPertanyaan = document.getElementById("pertanyaan-kuis");

  // Helper untuk mendapatkan elemen pembungkus kuis verifikasi
  const getPanelKuis = () => {
    if (inputPertanyaan) {
      return inputPertanyaan.closest(".card-panel") || document.getElementById("panel-kuis");
    }
    return document.getElementById("panel-kuis");
  };

  if (tabMenemukan && tabKehilangan) {
    // Event Klik Tab Menemukan
    tabMenemukan.addEventListener("click", () => {
      tabMenemukan.classList.add("active");
      tabKehilangan.classList.remove("active");

      const panel = getPanelKuis();
      if (panel) {
        panel.style.setProperty("display", "block", "important");
      }

      // Aktifkan kembali atribut required untuk input kuis
      const inputs = panel ? panel.querySelectorAll("input") : [];
      inputs.forEach((input) => input.setAttribute("required", "true"));
    });

    // Event Klik Tab Kehilangan
    tabKehilangan.addEventListener("click", () => {
      tabKehilangan.classList.add("active");
      tabMenemukan.classList.remove("active");

      const panel = getPanelKuis();
      if (panel) {
        panel.style.setProperty("display", "none", "important");
      }

      // Hapus atribut required agar form bisa disubmit tanpa isi kuis
      const inputs = panel ? panel.querySelectorAll("input") : [];
      inputs.forEach((input) => input.removeAttribute("required"));
    });
  }
});
