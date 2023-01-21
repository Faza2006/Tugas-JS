let tampil = document.querySelector("#belajar");

// zodiak(2,30);


function zodiac() {
    let bulan = document.getElementsByName("bulan")[0].value;
    let tanggal = document.getElementsByName("tanggal")[0].value;

    let hasil = "invalid";
    if (bulan > 0 && bulan < 13 && tanggal > 0 && tanggal < 32) {
        hasil = "zodiak belum dibuat";
        if (bulan == 1) {
            hasil = "Capricorn";
            if (tanggal > 21 && tanggal < 32) {
                hasil = "Aquarius";
            }
        }

        if (bulan == 2) {
            hasil = "Aquarius";
            if (tanggal > 18 && tanggal < 29) {
                hasil = "Pisces";
            }
        }

        if (bulan == 3) {
            hasil = "Pisces";
            if (tanggal > 18 && tanggal < 32) {
                hasil = "Aries";
            }
        }

        if (bulan == 4) {
            hasil = "Aries";
            if (tanggal > 18 && tanggal < 31) {
                hasil = "Taurus";
            }
        }
    // console.log(hasil);

    tampil.innerHTML=hasil;
}
}

// ini PR dikumpulkan Minggu
// function lulus(nilai) 

function lulus() {
    let nilai = document.getElementById("nilai").value;
    if (nilai >= 0 && nilai <= 100) {
        if (nilai >= 80) {
            tampil.innerHTML= "LULUS";
        } else {
            tampil.innerHTML= "GAGAL";
        }
    } 
}

// function terbilang(angka) 
function konversi() {
let angka = document.getElementById("number").value;
function terbilang(angka) {
        
        var bilne=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];
        if(angka < 12){
            return bilne[angka];
        }else if(angka < 20){
            return terbilang(angka-10)+" belas";
        }else if(angka < 100){
            return terbilang(Math.floor(angka/10))+" puluh "+terbilang(angka%10);
        }else if(angka < 200){
            return "seratus "+terbilang(angka-100);
        }else if(angka < 1000){
            return terbilang(Math.floor(angka/100))+" ratus "+terbilang(angka%100);
        }else if(angka < 2000){
            return "seribu "+terbilang(angka-1000);
        }else if(angka < 1000000){
            return terbilang(Math.floor(angka/1000))+" ribu "+terbilang(angka%1000);
        }else if(angka < 1000000000){
            return terbilang(Math.floor(angka/1000000))+" juta "+terbilang(angka%1000000);
        }else if(angka < 1000000000000){
            return terbilang(Math.floor(angka/1000000000))+" milyar "+terbilang(angka%1000000000);
        }else if(angka < 1000000000000000){
            return terbilang(Math.floor(angka/1000000000000))+" trilyun "+terbilang(angka%1000000000000);
        }
    }
    tampil.innerHTML= terbilang(angka);
}

// function prima(bilangan) {
    function prima() {
        let num = document.getElementById("angka").value;
    let pembagi = 0;
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            pembagi++;
        }
    }
    if (pembagi == 2) {
        tampil.innerHTML = "Prima";
    } else {
        tampil.innerHTML = "Bukan Prima";
    }
}
// }

// console.log(terbilang(20));
// lulus(80);
// zodiak(11, 23);
// console.log(prima(3));