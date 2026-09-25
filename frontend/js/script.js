// =========================================================
// P3-02: Seleksi Elemen UI Utama (Multi-halaman Safe)
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("--- Status Seleksi DOM (P3-02) ---");

  // 1. Seleksi Elemen Global (Ada di hampir semua halaman)
  // - Menggunakan querySelector & querySelectorAll
  const navbar = document.querySelector(".navbar");
  const footerLinks = document.querySelectorAll(".footer-links a");

  console.log("1. Navbar (querySelector):", navbar);
  console.log("2. Footer Links (querySelectorAll):", footerLinks);

  // 2. Seleksi Elemen Khusus Halaman Utam (index.html)
  // - Menggunakan getElementById & querySelector
  const itemsCounter = document.getElementById("items-count");
  const allItemCards = document.querySelectorAll(".item-card");

  if (itemsCounter) {
    console.log("3. Counter Items - index.html (getElementById):", itemsCounter);
    console.log("4. Daftar Cards - index.html (querySelectorAll):", allItemCards);
  }

  // 3. Seleksi Elemen Khusus Halaman Form (lapor.html)
  // - Menggunakan getElementById
  const reportForm = document.getElementById("form-lapor");

  if (reportForm) {
    console.log("5. Form Lapor - lapor.html (getElementById):", reportForm);
  }
});