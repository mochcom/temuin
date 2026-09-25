// =========================================================
// P3-02: Seleksi Elemen UI Utama (Multi-halaman Safe)
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navActions = document.getElementById("nav-actions");

  if (hamburgerBtn && navActions) {
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Mencegah event mentok/terganggu
      hamburgerBtn.classList.toggle("active");
      navActions.classList.toggle("active");

      const isOpen = navActions.classList.contains("active");
      console.log(`[P3-03] Status Menu Mobile: ${isOpen ? "Terbuka" : "Tertutup"}`);
    });

    // Tutup dropdown otomatis jika pengguna mengklik area luar menu
    document.addEventListener("click", (e) => {
      if (!hamburgerBtn.contains(e.target) && !navActions.contains(e.target)) {
        hamburgerBtn.classList.remove("active");
        navActions.classList.remove("active");
      }
    });
  } else {
    console.warn("Elemen #hamburger-btn atau #nav-actions tidak ditemukan di halaman ini.");
  }
});