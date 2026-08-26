// Mengubah teks dengan ID
var namaCover = document.getElementById('nama');
var fotoCoverHeader = document.querySelectorAll(".foto-cover-header");
var namaLengkap = document.querySelectorAll(".nama-lengkap");
var fotoHeader = document.getElementById('foto-header');
var sidangApa = document.querySelectorAll(".sidang-apa");
var fotoBingkai = document.getElementById('foto-bingkai');
var prodi = document.getElementById('prodi');
var fotoSempro = document.querySelectorAll(".foto-sempro");
var fotoKompri = document.querySelectorAll(".foto-kompri");
var fotoSidang = document.querySelectorAll(".foto-sidang");
var namaGelar = document.querySelectorAll(".gelar");
var teksSempro = document.getElementById('teks-sempro');
var teksKompri = document.getElementById('teks-kompri');
var teksSidang = document.getElementById('teks-sidang');
var tanggalSempro = document.getElementById('tanggal-sempro');
var tanggalKompri = document.getElementById('tanggal-kompri');
var tanggalSidang = document.getElementById('tanggal-sidang');


// Program Studi
sidangApa.forEach(function(element) {
	element.textContent = "Selamat Sidang Tesis";
});

// Nama Panggilan
namaCover.textContent = 'Halo, Mustika';

// Nama Lengkap
namaLengkap.forEach(function(element) {
	element.textContent = "Nur Mustika Syahputri";
});

// Nama Gelar
namaGelar.forEach(function(element) {
	element.textContent = "S.M, M.Akun";
});

// Program Studi
prodi.textContent = 'Prodi Magister Akuntansi Syariah';


// Foto Cover dan Header
fotoCoverHeader.forEach(function(element) {
	element.style.backgroundImage = 'url(../nur-mustika-syahputri/mustika0.jpeg)';
	element.style.backgroundPosition = 'center';
	element.style.backgroundSize = 'cover';
});

// Foto bingkai
fotoBingkai.style.backgroundImage = 'url(../nur-mustika-syahputri/mustika0.jpeg)';
fotoBingkai.style.backgroundPosition = 'center';
fotoBingkai.style.backgroundSize = 'cover';


// Foto Sempro
fotoSempro.forEach(function(element) {
	element.style.backgroundImage = 'url(../nur-mustika-syahputri/mustika2.jpeg)';
	element.style.backgroundPosition = 'center';
	element.style.backgroundSize = 'cover';
});

// Tanggal Sempro
tanggalSempro.textContent = '11 Mei 2026';

// Teks Sempro
teksSempro.textContent = 'Alhamdulillah, langkah awal akhirnya dimulai. Sempat terpontal-panting mengerjakan proposal karena melihat teman-teman sudah mulai duluan. Masa kamu mau kalah? 😆';




// Foto Kompri
fotoKompri.forEach(function(element) {
	element.style.backgroundImage = 'url(../nur-mustika-syahputri/mustika1.jpeg)';
	element.style.backgroundPosition = 'center';
	element.style.backgroundSize = 'cover';
});

// Tanggal Kompri
tanggalKompri.textContent = '30 Juli 2026';
// Teks Kompri
teksKompri.textContent = 'Mencari dan menguji data sampai menguras pikiran dan jiwa raga. Walaupun sempat bikin jantungan, Alhamdulillah akhirnya selesai juga! 😮‍💨';





// Foto Sidang
fotoSidang.forEach(function(element) {
	element.style.backgroundImage = 'url(../nur-mustika-syahputri/mustika0.jpeg)';
	element.style.backgroundPosition = 'center';
	element.style.backgroundSize = 'cover';
});

// Tanggal Sidang
tanggalSidang.textContent = '27 Agustus 2026';

// Teks Sidang
teksSidang.textContent = 'Dari Sempro, Semhas, hingga akhirnya Sidang. Satu per satu tahap sudah kamu lewati. Selamat, Mustika. Akhirnya sampai juga di titik ini. 🤍';





document.addEventListener("DOMContentLoaded", function() {
	// Mengambil elemen-elemen dengan class "sidang-apa" dan "nama-lengkap"
	var sidangApa = document.querySelectorAll(".sidang-apa");
	var namaLengkap = document.querySelectorAll(".nama-lengkap");

	// Mengambil teks dari elemen pertama dengan class "sidang-apa" dan "nama-lengkap"
	var judulSidang = sidangApa[0].textContent;
	var nama = namaLengkap[0].textContent;

	// Mengganti isi elemen <title> dengan teks yang diambil
	document.title = judulSidang + " " + nama;

});

// Mengambil elemen dengan class "nama-lengkap" dan "gelar"
var namaLengkap = document.querySelector(".nama-lengkap");
var namaGelar = document.querySelector(".gelar");

// Mengambil teks dari elemen-elemen tersebut
var namaLengkapText = namaLengkap.textContent;
var gelarText = namaGelar.textContent;

// Menggabungkan "Nama Lengkap" dan "Gelar"
var namaLengkapDanGelar = namaLengkapText + ", " + gelarText;

// Menampilkan teks yang telah digabungkan dalam elemen dengan class "nama-lengkap-dan-gelar"
var namaLengkapDanGelarElemen = document.querySelector(".nama-lengkap-dan-gelar");
namaLengkapDanGelarElemen.textContent = namaLengkapDanGelar;
