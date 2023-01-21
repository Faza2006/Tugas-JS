function perkali(a, b) {
    return a * b;
}
console.log(perkali(2, 2));

let kali = (a, b) => a * b;

console.log(kali(4, 2));

let zodiac = () => {
    let bulan = document.getElementsByName("bulan")[0].value;
    let tanggal = document.getElementsByName("tanggal")[0].value;
    let hasil = "invalid";
    if (bulan > 0 && bulan < 13 && tanggal > 0 && tanggal < 32) {
        if (bulan == 1 && tanggal < 32) {
            hasil = "capricorn";
            if (tanggal > 21) {
                hasil = "aquarius";
            }
        }
        if (bulan == 2 && tanggal < 30) {
            hasil = "aquarius";
            if (tanggal > 18) {
                hasil = "pisces";
            }
            
        }
        if (bulan == 3 && tanggal < 32) {
            hasil = "pisces";
            if (tanggal > 21) {
                hasil = "aries";
            }
        }
        if (bulan == 4 && tanggal < 31) {
            hasil = "aries";
            if (tanggal > 21 ) {
                hasil = "taurus";
            }
        }
        if (bulan == 5 && tanggal < 32) {
            hasil = "taurus";
            if (tanggal > 20) {
                hasil = 'gemmini';
            }
        }
        if (bulan == 6 && tanggal < 31) {
            hasil = "gemini";
            if (tanggal > 20) {
                hasil = 'cancer';
            }
        }
        if (bulan == 7 && tanggal < 32) {
            hasil = "cancer";
            if (tanggal > 20) {
                hasil = 'leo';
            }
        }
        if (bulan == 8 && tanggal < 32) {
            hasil = "leo";
            if (tanggal > 20) {
                hasil = 'virgo';
            }
        }
        if (bulan == 9 && tanggal < 31) {
            hasil = "virgo";
            if (tanggal > 20) {
                hasil = 'libra';
            } 
        }
        if (bulan == 10&& tanggal < 32) {
            hasil = "libra";
            if (tanggal > 20) {
                hasil = 'scorpio';
            }
        }
        if (bulan == 11 && tanggal < 31) {
            hasil = "scorpio";
            if (tanggal > 20) {
                hasil = 'sagitarius';
            }
        }
        if (bulan == 12 && tanggal < 32) {
            hasil = "sagitarius";
            if (tanggal > 20) {
                hasil = 'capricorn'
            } 
        }
    }
    document.querySelector('#belajar').innerHTML = hasil;
}

console.log(zodiac(1, 4));

let lulus = () => {
    let nilai = document.getElementById('nilai').value;
    hasil = nilai > 0 && nilai <= 100 ? nilai > 80 ? "lulus" : "gagal" : "invalid";
    document.querySelector('#belajar').innerHTML = hasil;
}


console.log(lulus(76));

let convert = () => {
    let angka = document.getElementById("angka").value;
    let terbilang = (angka) => {

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

    document.querySelector('#belajar').innerHTML = terbilang(angka);
    
}

let prima = () => {
    let num = document.getElementById("number").value;
    let bagi = 0;
    for (let i = 1; i < num; i++) {
        num % i == 0 ? bagi++ : null;
    }
    bagi == 1 ? document.querySelector('#belajar').innerHTML = "Prima" : document.querySelector('#belajar').innerHTML = "Bukan Prima";
}
console.log(terbilang(761));