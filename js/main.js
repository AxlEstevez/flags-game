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
var totalPaisesAsia = 45;
var totalPaisesAfrica = 56;
var totalPaisesEuropa = 57;
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
// fin arreglo america
// --------------------------------------------------------
var paisesAsia = ['oman','irak','libano','qatar','birmania',
    'pakistan','japon','kazajistan','corea del norte',
    'siria','jordania','corea del sur','malasia','arabia saudita',
    'israel','iran','emiratos arabes unidos','laos','filipinas',
    'taiwan','butan','brunei','barein','turquia','armenia',
    'afganistan','azerbaiyan','banglades','camboya','singapur',
    'vietnam','palestina','kuwait','tailandia','turkmenistan',
    'Kirguistán','india','uzbekistan','timor oriental',
    'maldivas','tayikistan','sri lanka','nepal','mongolia',
    'china'];
// fin arreglo asia
// --------------------------------------------------------
var paisesAfrica = ['etiopia','tanzania','mozambique','uganda',
    'nigeria','tunez','zambia','namibia','mauricio','kenia',
    'sudafrica','egipto','marruecos','islas canario',
    'comoras','republica centroafricana','chad','cabo verder',
    'benin','burundi','camerun','burkina faso','angola',
    'argelia','botsuana','sierra leona','seychelles','guinea',
    'gambia','sudan del sur','somalilandia','mauritania',
    'gabon','togo','somalia','santo Tome y príncipe',
    'niger','mali','guinea-bisau','eritrea','yibuti','liberia',
    'yemen','sudan','libia','esuatini','congo','guinea ecuatorial',
    'zimbabue','ruanda','lesoto','costa de marfiñ','malaui',
    'madagascar','ghana','senegal'];
// fin arreglo africa
// --------------------------------------------------------
var paisesEuropa = ['eslovenia','italia','malta','gales',
    'luxemburgo','lituania','chipre','letonia','serbia',
    'escocia','islandia','monaco','españa','eslovaquia',
    'rumania','finlandia','hungria','belgica','noruega',
    'chequia','ucrania','alemania','irlanda','grecia',
    'dinamarca','suecia','francia','indonecia','corcega',
    'suiza','islas baleares','andorra','aland','polonia',
    'bielorusia','bosnia','albania','pais vasco','azerbaiyan',
    'croacia','bulgaria','islas feroe','kosovo','inglaterra',
    'portugal','austria','el vaticano','holanda','san marino',
    'liechtenstein','macedonia','rusia','montenegro',
    'moldiva','madeira','estonia','reino unido'];
// fin arreglo de europa
// --------------------------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// Métodos / funciones
// --------------------------------------------------------

// --------------------------------------------------------
// Método/función : inicializaAmerica.
// Parámetros: Ninguno.
// Retorna: Nada.
// Objetivo: Llenar el array América con imagenes.
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
// Método/función : inicializaAsia
// Parámetros: Ninguno.
// Retorna: Nada.
// Objetivo: Llenar el array Asia con imagenes.
// --------------------------------------------------------
function inicializaAsia() {
    var texto;

    for(var i = 0; i < totalPaisesAsia; i++){
        texto = ('images/Asia/' + i + ".png");
        asia[i] = cargaImagen(texto);
    }
}
// fin de Método/función.
// --------------------------------------------------------

// --------------------------------------------------------
// Método/función : inicializaAfrica
// Parámetros: Ninguno.
// Retorna: Nada.
// Objetivo: Llenar el array Africa con imagenes.
// --------------------------------------------------------
function inicializaAfrica() {
    var texto;

    for(var i = 0; i < totalPaisesAfrica; i++){
        texto = ('images/Africa/' + i + ".png");
        africa[i] = cargaImagen(texto);
    }
}
// fin de Método/función.
// --------------------------------------------------------

// --------------------------------------------------------
// Método/función : inicializaAfrica
// Parámetros: Ninguno.
// Retorna: Nada.
// Objetivo: Llenar el array Africa con imagenes.
// --------------------------------------------------------
function inicializaEuropa() {
    var texto;

    for(var i = 0; i < totalPaisesEuropa; i++){
        texto = ('images/Europa/' + i + ".png");
        europa[i] = cargaImagen(texto);
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
// Método/función: creaAleatorios.
// Parámetros: Array[]
// Retorna: numero
// Objetivo: Genera numeros aleatorios sin repeticiones
// --------------------------------------------------------
function creaAleatorios(lista,limite,pais){
    var elementoNuevo = Math.floor(Math.random()*(0,pais));
    if (lista.length == 0) {
        return elementoNuevo;
    }
    else{
        for(var i = 0; i < lista.length;i++){
            if(busca(lista,elementoNuevo)){
                return creaAleatorios(lista,limite,pais);
            }
            else{
                return elementoNuevo;
            }
        }
    }
}
// --------------------------------------------------------

// --------------------------------------------------------
// Método/función: busca.
// Parámetros: arreglo , item
// Retorna: true o flase
// Objetivo: busca un item dentro de un arreglo, si lo
// encuentra retorna true, si no retorna false.
// --------------------------------------------------------
function busca(A,item){
    var bandera = false;
    for(var i = 0; i < A.length; i++){
        if(item == A[i]){
            bandera = true;
        }
    }
    return bandera;
}
// --------------------------------------------------------

// --------------------------------------------------------
// Método: creaListaAleatoria
// parametro: limite, pais
// retorna: lista de numeros aleatorios
// Objetivo: crear una lista con números aleatorios que se
// usaran para accesar alaeatoriamente a las posiciones de
// un arreglo determinado.
function creaListaAleatoria(limite,pais){
    var listaAleatoria = [];

    for(var i = 0; i < limite;i++){
        var item = creaAleatorios(listaAleatoria,limite,pais);
        listaAleatoria[i] = item;
    }
    return listaAleatoria;
}
// --------------------------------------------------------
// Método/función: cargaJuego.
// Parámetros: noBanderas, arreglo, tablero
// Retorna: -
// Objetivo: obtener un número finito de objetos de manera 
// aleatoria de un arreglo dado.
// --------------------------------------------------------
function cargaBanderas(noBanderas, array,tablero,pais) {
    var i = 0;
    var aux = creaListaAleatoria(noBanderas,pais);
    while(i < noBanderas){
        var posicion = aux[i];
        tablero.appendChild(array[posicion]);
        console.log(posicion + " " + array[posicion].src);
        i++;
    }
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
            cargaBanderas(noBanderas,america,tablero,totalPaisesAmerica);
            break;
        case "Asia":
            inicializaAsia();
            cargaBanderas(noBanderas,asia,tablero,totalPaisesAsia);
            break;
        case "Africa":
            inicializaAfrica();
            cargaBanderas(noBanderas,africa,tablero,totalPaisesAfrica);
            break;
        case "Europa":
            inicializaEuropa();
            cargaBanderas(noBanderas,europa,tablero,totalPaisesEuropa);
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