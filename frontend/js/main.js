// =============================================================
// main.js — Logic UI umum TemuIn
// Cakupan: dropdown filter gedung/kategori di index.html,
// toggle tab "Menemukan" / "Kehilangan" di lapor.html.
//
// Catatan: file ini masih kerangka dasar untuk Progress 2.
// Logic pemanggilan API (GET /api/items) akan ditambahkan
// setelah backend siap.
// =============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Toggle tab Menemukan / Kehilangan (lapor.html)
  const tabMenemukan = document.getElementById("tab-menemukan");
  const tabKehilangan = document.getElementById("tab-kehilangan");

  if (tabMenemukan && tabKehilangan) {
    tabMenemukan.addEventListener("click", () => {
      tabMenemukan.classList.add("active");
      tabKehilangan.classList.remove("active");
    });

    tabKehilangan.addEventListener("click", () => {
      tabKehilangan.classList.add("active");
      tabMenemukan.classList.remove("active");
    });
  }
});
