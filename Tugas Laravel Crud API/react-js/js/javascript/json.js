document.querySelector("#klik").addEventListener("click",tampil);

function tampil() {
    let url = "javascript/tblmenu.json";
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let output = "<h1>DATA MENU</h1> <table><th>Menu</th> <th>Harga</th><th>Warna</th>";
            data.forEach(element => {
                output += `<tr>
                    <td>${element.menu}</td>
                    <td>${element.harga}</td>
                    <td>${element.warna[0]}</td>
                </tr>`;
            });
            output += "</table>";
            document.querySelector("#isi").innerHTML= output;
        })
    
    
}

// let tblmenu = [

// {

//     "idmenu" : 21,
//     "idkategori" : 39,
//     "menu" : "Fanta",
//     "harga" : 4000,
//     "warna" : ["Merah","oranye","biru"],
//     "stok" : true,
//     "keterangan" : null

// },
// {

//     "idmenu" : 23,
//     "idkategori" : 39,
//     "menu" : "Pepsi",
//     "harga" : 5000,
//     "warna" : ["hitam","hijau","biru"],
//     "stok" : true,
//     "keterangan" : null

// },
// {

//     "idmenu" : 22,
//     "idkategori" : 39,
//     "menu" : "Coca-cola",
//     "harga" : 4000,
//     "warna" : ["hitam","biru"],
//     "stok" : true,
//     "keterangan" : null

// }

// ]

// console.log(tblmenu[0].menu);