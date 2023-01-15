
zodiak(2,30);
function zodiak(bln,tgl) {
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "zodiak belum dibuat";
        if (bln == 1) {
            hasil = "Capricorn";
            if (tgl > 21 && tgl < 32) {
                hasil = "Aquarius";
            }
        }

        if (bln == 2) {
            hasil = "Aquarius";
            if (tgl > 18 && tgl < 29) {
                hasil = "Pisces";
            }
        }

        if (bln == 3) {
            hasil = "Pisces";
            if (tgl > 18 && tgl < 32) {
                hasil = "Aries";
            }
        }

        if (bln == 4) {
            hasil = "Aries";
            if (tgl > 18 && tgl < 31) {
                hasil = "Taurus";
            }
        }
    console.log(hasil);
}
}

// ini PR dikumpulkan Minggu
// function lulus(nilai) 

function lulus(nilai) {
    if (nilai >= 0 && nilai <= 100) {
        if (nilai >= 80) {
            console.log('LULUS');
        } else {
            console.log("GK LULUS");
        }
    } 
}

// function terbilang(angka) 

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

// function prima(bilangan) {
    function prima(num) {
    let pembagi = 0;
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            pembagi++;
        }
    }
    if (pembagi == 2) {
        return "Prima";
    } else {
        return "Bukan Prima";
    }
}
// }

console.log(terbilang(20));
lulus(80);
zodiak(11, 23);
console.log(prima(3));

