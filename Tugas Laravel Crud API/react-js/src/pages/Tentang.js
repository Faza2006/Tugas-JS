import React, { useState } from 'react';

function Tentang() {
    
    const [count, setCount] = useState(0);

    function tambah(){
        setCount(count+1)
    }

    function kurang() {
        if (count > 0) {
            setCount(count-1)
        }
    }

    return (
    <div className="App">
        <h1>Tentang @unknown counter : {count}</h1>
        <p>isi Tentang @unknown</p>
        <button type="button" onClick={tambah} className="btn btn-success">Tambah</button>
        <button type="button" onClick={kurang} className="btn btn-danger">Kurang</button>
    </div>
    );
}

export default Tentang;