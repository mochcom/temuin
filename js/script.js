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

  const searchInput = document.getElementById("search-barang");
  const itemsCounter = document.getElementById("items-count");
  const itemCards = document.querySelectorAll(".item-card");

  // 1. Mencegah Form Search Reload Halaman
  if (searchInput) {
    const searchForm = searchInput.closest("form");
    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    }
  }

  // 2. Fungsi Memperbarui Jumlah Barang yang Tampil
  const updateItemsCount = () => {
    let visibleCount = 0;
    itemCards.forEach((card) => {
      if (card.style.display !== "none") {
        visibleCount++;
      }
    });

    if (itemsCounter) {
      itemsCounter.textContent = `${visibleCount} barang`;
    }
  };

  // 3. Event Listener Pencarian Real-Time
  if (searchInput && itemCards.length > 0) {
    searchInput.addEventListener("input", (e) => {
      const keyword = e.target.value.toLowerCase().trim();

      itemCards.forEach((card) => {
        // Ambil teks judul barang atau teks di dalam kartu
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(keyword)) {
          card.style.display = ""; // Tampilkan kartu jika cocok
        } else {
          card.style.display = "none"; // Sembunyikan kartu jika tidak cocok
        }
      });

      // Update angka pada counter
      updateItemsCount();
    });
  }
});