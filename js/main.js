// --------------------------------------------------------
// Archivo: main.js
// Objetivo: Métodos para lograr un juego de banderas.
// Fecha de inicio: S.01.02.2020.
// Fecha de entrega: L.17.02.2020
// Autor: Axl Estevez, Matricula: 2163070980.
//   <axlestevez@hotmail.com>
// --------------------------------------------------------

// --------------------------------------------------------
// Constantes
var botonRegresar = document.createElement('input');
// --------------------------------------------------------

// --------------------------------------------------------
// Las variables total representan el total de imagenes
// contenidas por carpeta.
// --------------------------------------------------------
var totalPaisesAmerica = 45;
var totalPaisesAsia = 51;
var totalPaisesAfrica = 59;
var totalPaisesEuropa = 58;
var totalPaisesOceania = 20;
// --------------------------------------------------------
// Variables que tendran cargadas las imagenes por
// continente.
// --------------------------------------------------------
var america = [];
var asia = [];
var africa = [];
var europa = [];
var oceania = [];
// --------------------------------------------------------
// Las siguientes variables contendran los nombres de los
// países por cada continente.
// --------------------------------------------------------
var paisesAmerica = ['puerto rico','nicaragua','salvador',
    'republica dominicana','hawaii','jamaica','honduras',
    'uruguay','guatemala','panama','ecuador','chile',
    'venezuela','colombia','argentina','peru','anguilla',
    'islas caiman','aruba','antigua y barbuda','bonaire',
    'barbados','bermuda','belice','cuba','costa rica',
    'bolivia','islas galapagos','martinica','santa lucia',
    'dominica','estado unidos','san vicente y las granadias',
    'san eustaquio','san cristobal y nieves','granada',
    'groelandia','bahamas','surinam','canada','curazao',
    'trinidad y tobago','mexico','haiti','brasil'];
var paisesAsia = [];
var paisesAfrica = [];
var paisesEuropa = [];
var paisesOceania = [];
// --------------------------------------------------------

// --------------------------------------------------------
// Métodos / funciones
// --------------------------------------------------------

// --------------------------------------------------------
// Método/función : inicializaAmerica.
// Parámetros: Ninguno.
// Retorna: Nada.
// Objetivo: Llenar el array america con imagenes.
// --------------------------------------------------------
function inicializaAmerica() {
    var texto;

    for(var i = 0; i < totalPaisesAmerica; i++){
        texto = ('images/America/' + i + ".png");
        america[i] = cargaImagen(texto);
    }
}
// fin de Método/función.
// --------------------------------------------------------

// --------------------------------------------------------
// Método/función: cargaImagen.
// Parámetros: nombre, recibe el nombre o ruta de la imagen
// que se pretende cargar.
// Retorna: Un objeto Image.
// Objetivo: Crea un objeto de tipo Image(imagen) con el
// fin de poder manipular ciertos atributos.
// --------------------------------------------------------
function cargaImagen(nombre) {
    var imagen = new Image();
    imagen.src = nombre;
    imagen.className = "icon-tablero";

    return imagen;
}
// Fin de Método/función.
// --------------------------------------------------------

// --------------------------------------------------------
// Método/función: cargaJuego.
// Parámetros: noBanderas, arreglo, tablero
// Retorna: -
// Objetivo: obtener un número finito de objetos de manera 
// aleatoria de un arreglo dado.
// --------------------------------------------------------
function cargaBanderas(noBanderas, array,tablero) {
    var i = 0;
    while(i < noBanderas){
        var posicion = Math.floor(Math.random()*totalPaisesAmerica);
        tablero.appendChild(array[posicion]);
        console.log(posicion + "" + array[posicion].src);
        i++;
    }
    botonRegresar.setAttribute('type','button');
    botonRegresar.setAttribute('value','Regresar');
    botonRegresar.setAttribute('onclick','menu();');
    tablero.appendChild(botonRegresar);
}
// fin Método / Función
// --------------------------------------------------------

// --------------------------------------------------------
// Método/función: start.
// Parámetros: continente, cantidad
// Retorna: nada
// Objetivo: Inicia el juego. Manda a llamar a todas las 
// funciones necesarias para poder jugar el juego.
// --------------------------------------------------------
function start(continente, cantidad){
    var continent = document.getElementById(continente).value;
    var banderas = document.getElementById(cantidad).value;
    var esconder = document.getElementById("contedor-menu");
    var tablero = document.getElementById("tablero");
    var box = document.getElementById("box");
    box.style.display = "block";
    esconder.style.display = "none";
    tablero.style.display = "block";
    menuJuego(continent,banderas);
   
}
// fin Método / Función
// --------------------------------------------------------

// --------------------------------------------------------
// Método/función: menuJuego.
// Parámetros: continente, noBanderas
// Retorna: nada
// Objetivo: Verifica que es lo que el usuario pretende
// jugar y de acuerdo a eso lanza lo necesario.
// --------------------------------------------------------
function menuJuego(continente,noBanderas) {
    var tablero = document.getElementById("tablero");
    switch (continente) {
        case "America":
            inicializaAmerica();
            cargaBanderas(noBanderas,america,tablero);
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
// fin Método / Función
// --------------------------------------------------------

// --------------------------------------------------------
// Método/función: menu.
// Parámetros: ninguno
// Retorna: nada
// Objetivo: Es una fución auxiliar para ocultar o mostrar
// elementos en el html.
// --------------------------------------------------------
function menu() {
    var esconder = document.getElementById("contedor-menu");
    var tablero = document.getElementById("tablero");
    var box = document.getElementById("box");
    esconder.style.display = "block";
    tablero.style.display = "none";
    box.style.display = "none"; 
}
// fin Método / Función
// --------------------------------------------------------

// fin del archivo.
// --------------------------------------------------------