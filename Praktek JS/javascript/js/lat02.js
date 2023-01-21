// document.querySelector("#paragraf").innerHTML="saya belajar javascript";

// document.querySelector("#content").innerHTML="<h1>Ganti Isi</h1>";

let tanggal=21;
let bulan = 4;
let hasil = "salah";
if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan < 13) {
    hasil = "Zodiak Belum Dibuat";
    if (bulan == 1) {
        hasil = "Capricorn";
        if (tanggal > 20) {
            hasil = "Aquarius";
        }

    }
    if (bulan == 2) {
        hasil = "Aquarius";
        if (tanggal > 20) {
            hasil = "Pisces";
        }

    }
    if (bulan == 3) {
        hasil = "Pisces";
        if (tanggal > 20) {
            hasil = "Aries";
        }

    }
    if (bulan == 4) {
        hasil = "Aries";
        if (tanggal > 20) {
            hasil = "Taurus";
        }

    }
    if (bulan == 5) {
        hasil = "Taurus";
        if (tanggal > 20) {

        }
        hasil = "Gemini";
    }
    if (bulan == 6) {
        hasil = "Gemini";
        if (tanggal > 20) {
            hasil = "Cancer";
        }

    }
    if (bulan == 7) {
        hasil = "Cancer";
        if (tanggal > 20) {
            hasil = "Leo";
        }

    }
    if (bulan == 8) {
        hasil = "Leo";
        if (tanggal > 20) {
            hasil = "Virgo";
        }

    }
    if (bulan == 9) {
        hasil = "Virgo";
        if (tanggal < 20) {
            hasil = "Libra";
        }

    }
    if (bulan == 10) {
        hasil = ":Libra";
        if (tanggal > 20) {
            hasil = "Scorpio";
        }

    }
    if (bulan == 11) {
        hasil = "Scorpio";
        if (tanggal > 20) {
            hasil = "Sagittarius";
        }

    }
    if (bulan == 12) {
        hasil = "Sagittarius";
        if (tanggal > 20) {
            hasil = "Capricorn";
        }

    }
}

// console.log(hasil);
// document.querySelector("#content").innerHTML=`<h1>${hasil}<h1>`;