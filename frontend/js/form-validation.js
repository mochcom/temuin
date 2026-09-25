// =============================================================
// form-validation.js — Validasi Formulir Lapor Cepat
// Tujuan: memastikan input wajib (nama barang, lokasi gedung,
// pertanyaan & jawaban kuis) terisi sebelum dikirim, sesuai
// target "kurang dari 1 menit" pengisian.
//
// TODO (backend siap): ganti alert dengan pemanggilan
// POST /api/report dan penanganan respons.
// =============================================================

// =============================================================
// P3-07: Pengambilalihan Validasi JS Manual (form-validation.js)
// =============================================================

// =============================================================
// P3-07: Validasi Form JS Manual (Penyesuaian Mandatory Field)
// =============================================================

document.addEventListener("DOMContentLoaded", () => {
  const formLapor = document.getElementById("form-lapor");
  if (!formLapor) return;

  const tampilkanError = (inputId, pesan) => {
    const inputElem = document.getElementById(inputId);
    if (!inputElem) return;

    const formGroup = inputElem.closest(".form-group");
    if (!formGroup) return;

    let errorElem = formGroup.querySelector(".pesan-error");
    if (!errorElem) {
      errorElem = document.createElement("small");
      errorElem.className = "pesan-error";
      errorElem.style.color = "#dc3545";
      errorElem.style.fontSize = "0.85rem";
      errorElem.style.marginTop = "4px";
      errorElem.style.display = "block";
      formGroup.appendChild(errorElem);
    }

    errorElem.innerText = pesan;
    inputElem.classList.add("is-invalid");
  };

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

  // Bersihkan error secara real-time saat pengguna melakukan koreksi
  const allInputs = formLapor.querySelectorAll("input, select, textarea");
  allInputs.forEach((input) => {
    input.addEventListener("input", () => hapusError(input.id));
    input.addEventListener("change", () => hapusError(input.id));
  });

  formLapor.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    // 1. Validasi Nama Barang (Wajib, Min 3 Karakter)
    const namaBarang = document.getElementById("nama-barang");
    if (namaBarang) {
      if (!namaBarang.value.trim()) {
        tampilkanError("nama-barang", "Nama barang wajib diisi.");
        isValid = false;
      } else if (namaBarang.value.trim().length < 3) {
        tampilkanError("nama-barang", "Nama barang minimal 3 karakter.");
        isValid = false;
      } else {
        hapusError("nama-barang");
      }
    }

    // 2. Validasi Email Pelapor (Wajib, Format Email)
    const emailPelapor = document.getElementById("email-pelapor");
    if (emailPelapor) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPelapor.value.trim()) {
        tampilkanError("email-pelapor", "Email pelapor wajib diisi.");
        isValid = false;
      } else if (!emailPattern.test(emailPelapor.value.trim())) {
        tampilkanError("email-pelapor", "Format email tidak valid (contoh: user@student.upi.edu).");
        isValid = false;
      } else {
        hapusError("email-pelapor");
      }
    }

    // 3. Validasi Kategori (Wajib)
    const kategori = document.getElementById("kategori");
    if (kategori) {
      if (!kategori.value) {
        tampilkanError("kategori", "Silakan pilih kategori barang.");
        isValid = false;
      } else {
        hapusError("kategori");
      }
    }

    // 4. Validasi Lokasi Gedung (Wajib)
    const lokasiGedung = document.getElementById("lokasi-gedung");
    if (lokasiGedung) {
      if (!lokasiGedung.value) {
        tampilkanError("lokasi-gedung", "Silakan pilih lokasi gedung.");
        isValid = false;
      } else {
        hapusError("lokasi-gedung");
      }
    }

    // 5. Validasi Deskripsi Tambahan (OPSIONAL - Hanya jika diisi, min 10 karakter)
    const deskripsi = document.getElementById("deskripsi-barang");
    if (deskripsi && deskripsi.value.trim() !== "") {
      if (deskripsi.value.trim().length < 10) {
        tampilkanError("deskripsi-barang", "Jika diisi, deskripsi minimal 10 karakter.");
        isValid = false;
      } else {
        hapusError("deskripsi-barang");
      }
    } else if (deskripsi) {
      hapusError("deskripsi-barang");
    }

    // 6. Validasi Kuis Verifikasi (WAJIB - Hanya jika tab Menemukan aktif)
    const inputPertanyaan = document.getElementById("pertanyaan-kuis");
    const panelKuis = inputPertanyaan ? inputPertanyaan.closest(".card-panel") : null;
    const isKuisVisible = panelKuis && panelKuis.style.display !== "none";

    if (isKuisVisible) {
      const pertanyaanKuis = document.getElementById("pertanyaan-kuis");
      if (pertanyaanKuis) {
        if (!pertanyaanKuis.value.trim()) {
          tampilkanError("pertanyaan-kuis", "Pertanyaan kuis wajib diisi.");
          isValid = false;
        } else {
          hapusError("pertanyaan-kuis");
        }
      }

      const jawabanBenar = document.getElementById("jawaban-benar");
      if (jawabanBenar) {
        if (!jawabanBenar.value.trim()) {
          tampilkanError("jawaban-benar", "Jawaban benar wajib diisi.");
          isValid = false;
        } else {
          hapusError("jawaban-benar");
        }
      }
    }

    // Hasil Eksekusi Form
    if (isValid) {
      alert("Laporan berhasil dikirim!");
      formLapor.reset();
    }
  });
});
