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

  // Helper 1: Tampilkan Pesan Error di Bawah Input Spesifik
  const tampilkanError = (inputId, pesan) => {
    const inputElem = document.getElementById(inputId);
    if (!inputElem) return;

    const formGroup = inputElem.closest(".form-group");
    if (!formGroup) return;

    let errorElem = formGroup.querySelector(".pesan-error");
    if (!errorElem) {
      errorElem = document.createElement("small");
      errorElem.className = "pesan-error";
      errorElem.style.color = "var(--color-error, #dc3545)";
      errorElem.style.fontSize = "0.85rem";
      errorElem.style.marginTop = "4px";
      errorElem.style.display = "block";
      formGroup.appendChild(errorElem);
    }

    errorElem.innerText = pesan;
    inputElem.classList.add("is-invalid");
  };

  // Helper 2: Hapus Pesan Error
  const hapusError = (inputId) => {
    const inputElem = document.getElementById(inputId);
    if (!inputElem) return;

    const formGroup = inputElem.closest(".form-group");
    if (!formGroup) return;

    const errorElem = formGroup.querySelector(".pesan-error");
    if (errorElem) {
      errorElem.remove();
    }
    inputElem.classList.remove("is-invalid");
  };

  // Helper 3: Tampilkan Pesan Sukses UI Banner
  const tampilkanPesanSuksesUI = () => {
    let alertSukses = document.getElementById("alert-sukses-lapor");
    if (!alertSukses) {
      alertSukses = document.createElement("div");
      alertSukses.id = "alert-sukses-lapor";
      alertSukses.style.backgroundColor = "#d4edda";
      alertSukses.style.color = "#155724";
      alertSukses.style.border = "1px solid #c3e6cb";
      alertSukses.style.padding = "12px 16px";
      alertSukses.style.borderRadius = "8px";
      alertSukses.style.marginBottom = "20px";
      alertSukses.style.fontWeight = "bold";
      alertSukses.style.textAlign = "center";
      
      // Sisipkan pesan sukses di atas form
      formLapor.parentNode.insertBefore(alertSukses, formLapor);
    }

    alertSukses.innerText = "Laporan berhasil dikirim! Terima kasih telah berkontribusi.";
    alertSukses.style.display = "block";

    // Otomatis hilangkan banner sukses setelah 5 detik
    setTimeout(() => {
      alertSukses.style.display = "none";
    }, 5000);
  };

  // Bersihkan error secara real-time saat ada perubahan masukan
  const allInputs = formLapor.querySelectorAll("input, select, textarea");
  allInputs.forEach((input) => {
    input.addEventListener("input", () => hapusError(input.id));
    input.addEventListener("change", () => hapusError(input.id));
  });

  // Handle Form Submission
  formLapor.addEventListener("submit", (event) => {
    event.preventDefault(); // [P3-08] Mencegah reload halaman
    let isValid = true;

    // -------------------------------------------------------------
    // Aturan 1: Mandatory Field Check / trim()
    // -------------------------------------------------------------
    const namaBarang = document.getElementById("nama-barang");
    const namaValue = namaBarang ? namaBarang.value.trim() : "";

    if (!namaValue) {
      tampilkanError("nama-barang", "Nama barang wajib diisi.");
      isValid = false;
    } else if (namaValue.length < 3) {
      // -----------------------------------------------------------
      // Aturan 2: Minimum Length Check (minlength)
      // -----------------------------------------------------------
      tampilkanError("nama-barang", "Nama barang minimal 3 karakter.");
      isValid = false;
    } else {
      hapusError("nama-barang");
    }

    // -------------------------------------------------------------
    // Aturan 3: Format Email Valid via RegEx
    // -------------------------------------------------------------
    const emailPelapor = document.getElementById("email-pelapor");
    const emailValue = emailPelapor ? emailPelapor.value.trim() : "";
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
      tampilkanError("email-pelapor", "Email pelapor wajib diisi.");
      isValid = false;
    } else if (!emailRegEx.test(emailValue)) {
      tampilkanError("email-pelapor", "Format email tidak valid (contoh: user@student.upi.edu).");
      isValid = false;
    } else {
      hapusError("email-pelapor");
    }

    // Validasi Dropdown (Kategori & Lokasi)
    const kategori = document.getElementById("kategori");
    if (kategori && !kategori.value) {
      tampilkanError("kategori", "Silakan pilih kategori barang.");
      isValid = false;
    } else if (kategori) {
      hapusError("kategori");
    }

    const lokasiGedung = document.getElementById("lokasi-gedung");
    if (lokasiGedung && !lokasiGedung.value) {
      tampilkanError("lokasi-gedung", "Silakan pilih lokasi gedung.");
      isValid = false;
    } else if (lokasiGedung) {
      hapusError("lokasi-gedung");
    }

    // -------------------------------------------------------------
    // Aturan 4: Match Kuis Verifikasi (Khusus Tab Menemukan)
    // -------------------------------------------------------------
    const inputPertanyaan = document.getElementById("pertanyaan-kuis");
    const panelKuis = inputPertanyaan ? inputPertanyaan.closest(".card-panel") : null;
    const isKuisVisible = panelKuis && panelKuis.style.display !== "none";

    if (isKuisVisible) {
      const pertanyaan = inputPertanyaan ? inputPertanyaan.value.trim() : "";
      const jawaban = document.getElementById("jawaban-benar") ? document.getElementById("jawaban-benar").value.trim() : "";

      if (!pertanyaan) {
        tampilkanError("pertanyaan-kuis", "Pertanyaan kuis wajib diisi.");
        isValid = false;
      } else if (pertanyaan.length < 5) {
        tampilkanError("pertanyaan-kuis", "Pertanyaan kuis minimal 5 karakter.");
        isValid = false;
      } else {
        hapusError("pertanyaan-kuis");
      }

      if (!jawaban) {
        tampilkanError("jawaban-benar", "Jawaban benar wajib diisi.");
        isValid = false;
      } else {
        hapusError("jawaban-benar");
      }
    }

    // Jika seluruh validasi lolos
    if (isValid) {
      tampilkanPesanSuksesUI(); // Tampilkan UI Sukses tanpa reload
      formLapor.reset();        // [P3-08] Reset seluruh isi form
    }
  });
});