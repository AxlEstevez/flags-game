// --------------------------------------------------------
// Archivo: main.js
// Objetivo: Métodos para lograr un juego de banderas.
// Fecha de inicio: S.01.02.2020.
// Fecha de entrega: L.17.02.2020
// Autor: Axl Estevez, Matricula: 2163070980.
//   <axlestevez@hotmail.com>
// --------------------------------------------------------


function comenzar(continente, cantidad){
    var continent = document.getElementById(continente).value;
    var banderas = document.getElementById(cantidad).value;
    var esconder = document.getElementById("contedor-menu");
    var tablero = document.getElementById("tablero");
    esconder.style.display = "none";
    tablero.style.display = "block";
    comenzarJuego(continent,banderas);

}

function menu() {
    var esconder = document.getElementById("contedor-menu");
    var tablero = document.getElementById("tablero");
    esconder.style.display = "block";
    tablero.style.display = "none";
}

function comenzarJuego(continente,noBanderas) {
    switch (continente) {
        case "America":
            // Código aquí
            // --------------------------------------------
            // código de prueba.
            alert("se despliega " +  noBanderas + " banderas de America");
            break;
        case "Asia":
            // Código aquí
            // --------------------------------------------
            // código de prueba.
            alert("se despliega " +  noBanderas + " banderas de Asia");
            break;
        case "Africa":
            // Código aquí
            // --------------------------------------------
            // código de prueba.
            alert("se despliega " +  noBanderas + " banderas de Africa");
            break;
        case "Europa":
            // Código aquí
            // --------------------------------------------
            // código de prueba.
            alert("se despliega " +  noBanderas + " banderas de Europa");
            break;
        case "Oceania":
            // Código aquí
            // --------------------------------------------
            // código de prueba.
            alert("se despliega " +  noBanderas + " banderas de Oceania");
            break;
        default:
            alert("Selecciona una de las opciones");
            
            break;
    }
}