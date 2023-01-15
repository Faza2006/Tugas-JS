let Isi = document.querySelector("#isi");
Isi.innerHTML="<h1>Soto</h1>" + "<p>deskiripsi soto</p>" + '<img src="https://www.bing.com/th?id=OSK.66fee3ad2c06bf359656ec3d3b0355dc&w=188&h=132&c=7&o=6&dpr=2&pid=SANGAM" alt=""></img>';
Isi.innerHTML= "<h1>Soto</h1>";
Isi.innerHTML= "<p>deskiripsi rawon</p>" ;
Isi.innerHTML= '<img src="https://www.bing.com/th?id=OSK.66fee3ad2c06bf359656ec3d3b0355dc&w=188&h=132&c=7&o=6&dpr=2&pid=SANGAM" alt=""></img>';

// let table = document.querySelector("#table");
// table.innerHTML= "<table>"
//             + "<thead><tr><th>Nomor</th></tr></thead>"
//             + "<tbody>"
//             + "<tr><td>1</td></tr>"
//             + "<tr><td>2</td></tr>"
//             + "<tr><td>3</td></tr>"
//             + "<tr><td>4</td></tr>"
//             + "<tr><td>5</td></tr>"
//             +"</tbody>"
//             +"</table>"

let table = document.querySelector("#table");
table.innerHTML ="<table><thead><tr><th>Nomor</th></tr></thead><tbody>";
// table.innerHTML = "<tr><td>1</td></tr>"
// table.innerHTML += "<tr><td>2</td></tr>"
// table.innerHTML += "<tr><td>3</td></tr>"



for (let index = 0; index <32 ; index++) {
    table.innerHTML += "<tr><td>"+ index +"</td></tr>";

}
table.innerHTML += "</tbody></table>";

// for (let i = 0; i < 10; i++) {
//     // const element = array[i];
//     document.querySelector("#paragraf").innerHTML += "<h1>"+ i +"</h1><br>";
// }