let tblmenu = [
        {
        idmenu:32, 
        idkategori:50, 
        menu:"Nasi Kebully", 
        gambar:"Nasikebully.jpg",
        harga:15000,
        },
        {
        idmenu:33, 
        idkategori:50, 
        menu:"Nasi Padang", 
        gambar:"Nasipadang.jpg",
        harga:16000,
        },
        {
        idmenu:34, 
        idkategori:50, 
        menu:"Nasi Pecel", 
        gambar:"Nasipecel.jpg",
        harga:10000,
        },
        {
        idmenu:22, 
        idkategori:39, 
        menu:"Coca-cola", 
        gambar:"coca-cola.jpg",
        harga:5000,
        },
        {
        idmenu:23, 
        idkategori:39, 
        menu:"Pepsi", 
        gambar:"Pepsi.jpg",
        harga:5000,
        },
        {
        idmenu:39, 
        idkategori:40, 
        menu:"Sate Kelapa", 
        gambar:"sate-bumbu-kelapa.jpg",
        harga:5000,
        },
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
    <div class="image">
        <img src="Image/${kolom.gambar}" alt="">
    </div>

    <div class="titel">
        <h2>${kolom.menu}</h2>
    </div>
    
    <div class="harga">
        <h2>Rp. ${kolom.harga} </h2>
    </div> 

    <div class="btn-beli">
            <button data-idmenu=${kolom.idmenu}>Beli</button>
            </div>

    </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let cart = [];

let btnbeli = document.querySelectorAll(".btn-beli > button");

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function(a) {
            if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })

    };
}

// console.log(cart);
