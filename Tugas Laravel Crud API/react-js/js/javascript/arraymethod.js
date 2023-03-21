// Array -> string, number, objek, function, campuran

let nilai = [
    {nama:"budi", ipa:98, bahasa:70, matematika:80},
    {nama:"joni", ipa:60, bahasa:85, matematika:80},
    {nama:"tejo", ipa:70, bahasa:70, matematika:95},
    {nama:"syafi", ipa:100, bahasa:100, matematika:100},
];

let nama = ["budi","joni","tejo","syafi"];
// nama.push("ani","ina");

// console.log(nama.shift());

// nama.unshift("rizki","alex");

// console.log(nama.slice(0,3));

let mapel = ["ipa","bahasa","matematika"];

// console.log(nama.concat(mapel));

// console.log(nama.concat(["ips","pkn","sejarah"]));

// console.log(nama.splice(5,2));

// console.log(nama.pop());

// console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < array.length; index++) {
//     console.log =(nama[index]);
    
// }

// nama.forEach(function (a) {
//     console.log(a);
// })

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a);
//     }
// })

// console.log(nilai);

// nilai.filter((a) => 
// a.ipa > 80 && a.matematika > 70  ? console.log(a.nama) : null
// );

// let siswa = nilai.map(function (a) {
//     return a.nama;
// })

// let siswa = nilai.map((a) => [a.nama, a.ipa, a.bahasa]);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function (a,b) {
//     return (a = a + b.ipa);
// },0);

let hasil = nilai.reduce((a,b) => (a+= b.bahasa),0 );

console.log(hasil);
