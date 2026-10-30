// Ambil elemen form dan alert
const form = document.getElementById('formKontak');
const alertSukses = document.getElementById('alertSukses');

// Jalankan saat tombol Kirim ditekan
form.addEventListener('submit', function (event) {
  event.preventDefault(); // cegah halaman reload

  if (form.checkValidity()) {
    // Semua input valid: tampilkan alert, kosongkan form
    alertSukses.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
  } else {
    // Ada input tidak valid: tampilkan pesan error Bootstrap
    alertSukses.classList.add('d-none');
    form.classList.add('was-validated');
  }
});
