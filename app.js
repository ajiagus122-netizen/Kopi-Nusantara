// Modul 6 JavaScript Dasar
const menu = [
    { nama: "Kopi Wamena", harga: 18000 },
    { nama: "Kopi Susu", harga: 20000 },
    { nama: "Teh Tarik", harga: 15000 }
];

function hitungTotal(harga, jumlah) {
    let total = harga * jumlah;
    if (jumlah >= 5) {
        total = total * 0.9; // diskon 10%
    }
    return total;
}

// Modul 7 DOM dan Event (Form Pemesanan)
const pilihMenu = document.getElementById("menu");
const jumlahInput = document.getElementById("jumlah");
const totalEl = document.getElementById("total");

function updateTotal() {
    if (pilihMenu && jumlahInput && totalEl) {
        const hasil = hitungTotal(Number(pilihMenu.value), Number(jumlahInput.value));
        totalEl.textContent = "Rp" + hasil;
    }
}

if (pilihMenu) pilihMenu.addEventListener("change", updateTotal);
if (jumlahInput) jumlahInput.addEventListener("input", updateTotal);

// Pencarian di admin/pesanan.html
const cari = document.getElementById("cari");
if (cari) {
    cari.addEventListener("input", function () {
        const kata = this.value.toLowerCase();
        document.querySelectorAll("tbody tr").forEach(function (baris) {
            baris.style.display = baris.textContent.toLowerCase().includes(kata) ? "" : "none";
        });
    });
}

// Tombol Selesai di Pesanan Admin
document.querySelectorAll(".btn-selesai").forEach(function (tombol) {
    tombol.addEventListener("click", function () {
        const baris = this.closest("tr");
        baris.querySelector(".status").textContent = "Selesai";
        baris.classList.add("selesai");
    });
});

// Modul 8 Validasi Form Pesan
const formPesan = document.getElementById("formPesan");
if (formPesan) {
    formPesan.addEventListener("submit", function (e) {
        e.preventDefault();
        const nama = document.getElementById("nama").value.trim();
        const hp = document.getElementById("hp").value.trim();
        let valid = true;

        document.getElementById("errNama").textContent = "";
        document.getElementById("errHp").textContent = "";
        document.getElementById("pesanSukses").textContent = "";

        if (nama.length < 3) {
            document.getElementById("errNama").textContent = "Nama minimal 3 huruf.";
            valid = false;
        }
        if (!/^08[0-9]{8,11}$/.test(hp)) {
            document.getElementById("errHp").textContent = "No. HP harus diawali 08 dan berisi 10-13 angka.";
            valid = false;
        }
        if (valid) {
            document.getElementById("pesanSukses").textContent = "Terima kasih " + nama + ", pesanan Anda diterima.";
        }
    });
}

// Validasi Form Tambah Menu
const formMenu = document.getElementById("formMenu");
if (formMenu) {
    formMenu.addEventListener("submit", function (e) {
        e.preventDefault();
        const namaMenu = document.getElementById("namaMenu").value.trim();
        const kategori = document.getElementById("kategoriMenu").value;
        const harga = Number(document.getElementById("hargaMenu").value);
        let valid = true;

        document.getElementById("errNamaMenu").textContent = "";
        document.getElementById("errKategori").textContent = "";
        document.getElementById("errHarga").textContent = "";
        document.getElementById("menuSukses").textContent = "";

        if (namaMenu === "") {
            document.getElementById("errNamaMenu").textContent = "Nama menu wajib diisi.";
            valid = false;
        }
        if (kategori === "") {
            document.getElementById("errKategori").textContent = "Kategori wajib dipilih.";
            valid = false;
        }
        if (harga < 5000) {
            document.getElementById("errHarga").textContent = "Harga minimal 5000.";
            valid = false;
        }
        if (valid) {
            document.getElementById("menuSukses").textContent = "Menu baru berhasil disimpan!";
        }
    });
}
