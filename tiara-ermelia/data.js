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
	element.textContent = "Selamat Sidang Kolokium";
});

// Nama Panggilan
namaCover.textContent = 'Halo, Tiara';

// Nama Lengkap
namaLengkap.forEach(function(element) {
	element.textContent = "Tiara Ermelia Kotto";
});

// Nama Gelar
namaGelar.forEach(function(element) {
	element.textContent = "S.E";
});

// Program Studi
prodi.textContent = 'Prodi Ekonomi Islam';


// Foto Cover dan Header
fotoCoverHeader.forEach(function(element) {
	element.style.backgroundImage = 'url(../tiara-ermelia/tiara3.jpeg)';
	element.style.backgroundPosition = 'center';
	element.style.backgroundSize = 'cover';
});

// Foto bingkai
fotoBingkai.style.backgroundImage = 'url(../tiara-ermelia/tiaraa.jpeg)';
fotoBingkai.style.backgroundPosition = 'center';
fotoBingkai.style.backgroundSize = 'cover';


// Foto Sempro
fotoSempro.forEach(function(element) {
	element.style.backgroundImage = 'url(../tiara-ermelia/tiara1.jpeg)';
	element.style.backgroundPosition = 'center';
	element.style.backgroundSize = 'cover';
});

// Tanggal Sempro
tanggalSempro.textContent = '25 Juli 2023';

// Teks Sempro
teksSempro.textContent = 'Chill bangett sih, walaupun deg degan kebangun dari jam 3 pagi.. orang pertama dipanggil dari 11 orangg, tapi setelah itu gabut nungguin 10 orang lagi selesai.';




// Foto Kompri
fotoKompri.forEach(function(element) {
	element.style.backgroundImage = 'url(../tiara-ermelia/tiara2.jpeg)';
	element.style.backgroundPosition = 'center';
	element.style.backgroundSize = 'cover';
});

// Tanggal Kompri
tanggalKompri.textContent = '25 Juli 2023';
// Teks Kompri
teksKompri.textContent = 'Fase fase kompri itu moment paling menegangkan dari pada semhas dan sidangg, sampe harus ngulang lagi perkara 1 mata kuliah :(';





// Foto Sidang
fotoSidang.forEach(function(element) {
	element.style.backgroundImage = 'url(../tiara-ermelia/(tiara3.jpeg)';
	element.style.backgroundPosition = 'center';
	element.style.backgroundSize = 'cover';
});

// Tanggal Kompri
tanggalSidang.textContent = '25 Juli 2023';

// Teks Sempro
teksSidang.textContent = 'Beneran gaada panik sedikitpunn, Chill bangett sampe ngomong “udah gitu doang” hahaha';





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
