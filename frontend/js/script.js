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

// =========================================================
// Responsive Hamburger Menu Toggle
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navActions = document.getElementById("nav-actions");

  if (hamburgerBtn && navActions) {
    hamburgerBtn.addEventListener("click", () => {
      // Toggle class 'active' pada tombol & menu
      hamburgerBtn.classList.toggle("active");
      navActions.classList.toggle("active");

      // Cetak status di Console DevTools
      const isOpen = navActions.classList.contains("active");
      console.log(`[P3-03] Status Menu Mobile: ${isOpen ? "Terbuka" : "Tertutup"}`);
    });
  }
});

// =========================================================
// P3-04: Dynamic Counter & Search Filter
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-barang");
  const itemsCounter = document.getElementById("items-count");
  const itemCards = document.querySelectorAll(".item-card");

  // Mencegah form reload saat menekan Enter pada input pencarian
  if (searchInput) {
    const searchForm = searchInput.closest("form");
    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    }
  }

  // Fungsi memperbarui angka counter barang
  const updateItemsCount = () => {
    let visibleCount = 0;
    itemCards.forEach((card) => {
      if (card.style.display !== "none") {
        visibleCount++;
      }
    });

    if (itemsCounter) {
      itemsCounter.innerText = visibleCount;
    }
  };

  // Hitungan awal saat pertama kali dimuat
  if (itemsCounter && itemCards.length > 0) {
    updateItemsCount();
  }

  // Event Input Real-Time
  if (searchInput && itemCards.length > 0) {
    searchInput.addEventListener("input", (e) => {
      const keyword = e.target.value.toLowerCase().trim();

      itemCards.forEach((card) => {
        // Mengambil seluruh teks di dalam card agar pasti kecocokannya
        const cardContent = card.textContent.toLowerCase();

        if (cardContent.includes(keyword)) {
          card.style.display = ""; // Tampilkan kembali kartu
        } else {
          card.style.display = "none"; // Sembunyikan kartu
        }
      });

      // Update angka counter
      updateItemsCount();
      console.log(`[P3-04] Keyword: "${keyword}" | Kartu Tampil: ${itemsCounter ? itemsCounter.innerText : 0}`);
    });
  }
});