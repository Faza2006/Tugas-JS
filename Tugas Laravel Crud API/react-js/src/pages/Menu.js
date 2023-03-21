import React, { useState } from 'react';
import Tabel from "./Tabel";

function Menu() {
    const titel = "Daftar Menu Restoran"
    const [menus,setMenu]=useState(

        [

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
        ]

    )


    return (
    <div className="App">
        <Tabel menu={menus} titel={titel}/>
        <Tabel menu={menus.filter((data)=>(data.idkategori===1))} titel="Menu Makanan"/>
    </div>
    );
}

export default Menu;