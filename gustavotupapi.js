
// comentarios de una linea

/*
comentario
de
varias
lineas
*/
// var miVariableVar = "un valor"
// miVariableVar = "otro valor"
//console.log( miVariableVar )

//let miNombre ="Gustavo Adolfo Peralta Pascual"
//miNombre = 18
//console.log(miNombre)



//let nombre = "gustavo"
//nombre = 30
//console.log(nombre)

//let noombre;
//let usuario;/


//var userName;
//userName = "leo";
//var userName;
//userName = "mamon";
//console.log(userName)

//  ejercicios 2 dia

//const nombre = 'Gustavo'
//console.log(nombre.length - 1)





/* Colocar el resultado después de cada // */
/*
const nombre = 'JS'
let apellido

console.log(`Hola ${1}`) // Hola 1
console.log(`Hola ${'nombre'}`) // Hola nombre
console.log(`Hola ${nombre}`) // Hola JS

console.log('Una cadena de texto'[4]) // c
console.log('Una cadena de texto'[0]) //U

console.log('LasQuinceLetras'.length) //15

console.log(1 / 0) //undefined
console.log(1 / 'dos') //nan
*/

// DIA 3
/*
    // ¿Cual es el resultado de las siguiten expresiones?

    console.log(1 + 2 + '3') //33 porque no importa si tiene comillas no lo va a tomar como string
    console.log(1 + 2 + '3' + 4) //334  igual
    console.log(10 + 4 - 2 * 5) //4  se empieza por una multi siempre si esq ay
    console.log(11 % 4) //3
    console.log(10 ** 2) //100
    
*/
/*
let a = 1
let b = 1

const c = ++a
const d = b++

console.log(a) //2
console.log(b) //2
console.log(c) //2
console.log(d) //1
*/

// dia 4
//Truthy / Falsy
//Es el valor de verdad asociado a los datos cuando son evaluados en contextos booleanos
/*
    Falsy: Son considerados falsos
    -false
    -0
    -null
    -undefined
    -NaN
    -""

    Truthy: Son considerados verdaderos
    -" "
    -"false"
    -"0"
    - -100
    -[]
    -{}
*/
// tarea moral
// ¿Cuáles son los valores de 'e' y 'f' después del código a continuación?
/*
let e = 2
const f = 1 + (e *= 2)
console.log(e) // 2 * 2 = 4
console.log(f) // 1 + (2 * 2) = 1 + 4 = 5

// ¿Cuál es el valor de 'g' después del código a continuación?
let g = 3
g += 5
console.log(g) // 3 = 3 + 5 = 8

// ¿Cuál es el valor de cada comparación después del código a continuación?

console.log(5 > 4) // true
console.log('banco' < 'barco') // true
console.log(80 >= 15) // true
console.log(500 <= 100) // false
console.log(undefined == null) // true
console.log('2' > '12') // true
console.log(0 === 1) // false
console.log(1 !== 0) // true
console.log(undefined === null) // false

// 
/*
    Crea una variable donde almacenes una frase cualquiera. 
    Crea una segunda variable donde se almacene un dato booleano. Será true 
    en caso de que la ultima letra de la frase sea "a" o "o",
    en caso contrario, almacenara un false

    let nombre;
    let vf;


*/

/*
    Crea una variable donde almacenes un numero cualquiera. 
    Crea una segunda variable donde se almacene un dato booleano. Será true 
    en caso de que el número se encuentre dentro del rango: ( 5, 15 ] 
    ( 5 no se considera dentro del rango, 15 sí )
    
    const numero = 30 
    // const esMayor = 5 < numero // numero > 5
    // const esMayorigual15 = numero <= 15
    const perteneceRango = (5<numero) && (numero <= 15)
    console.log( "El numero pertenece al rango: ${ perteneceRango}")

    


*/

// lunes 4 semana 2
 
//Crear una funcion que reciba un nombre como parametro, en caso de que no se le asigne valor al parametro 
// al momento de llamar a la función, tendra que trabajar con un valor default. 
// La funcion se encargara de mostrar en la terminal un mensajee de bienvenida, personalizado 
//    function agregar( hola){}
    
//    let asaj = 13 - 6;
//    console.log(´hola mano $(asaj) que tal´)
   
// const frase = " esta es una frase "
// console.log(frase.lastIndexOf("e"))

// ejercicio martes 7

//Escribir una funcion que reciba una frase y retorne la frase pero con la ultima palabra modificada. La ultima palabra se reemplazara con la palabra "gato"

//"Esta es una frase" --> "Esta es una gato"

// function qtal (cd){
    // let pp = hola.lastIndexOf( " " )
    
// }


// arreglos
/*const usuario = {
    nombre : "Brenda",
    edad : 27,
    vacunacionCompleta: true,
    pasatiempos: [ "Leer", "Piano" ],
    mascota : [{
        nombre: "Canela",
        especie: "Gato"
    },
    {
        nombre: "Juno",
        especie: "Gato"
    },
    {
        nombre: "Aurora",
        especie: "Gato"
    }],
    bandaFavorita : {
        nombre : "Iron Maiden"
    }
}

console.log(usuario)
 console.log(usuario["pasatiempos"][1])

    

    // ¿cual es la edad del ultimo usuario del arreglo de Usuario?
     

    // let arregloUsuarios = [ { nombre: "Edison", edad: 65  }, { nombre: "Jean", edad: 18 }, { nombre: "Ebed", edad: 20 }  ]

    // console.log(arregloUsuarios.length[-1])

    // dia miercolses segunda semana dia 7


    /* 
MANIPULACIONES BASICAS DE OBJETOS
    const objeto = {
        propiedad : valor,
        key: value,
        clave: valorDeLaClave
    }
    ¡IMPORTANTE! en los objetos no existen los indices ni el concepto de orden 
*/
/*
const user = {
    nombre : "Fulanito Sanchez",
    edad: 30,
}
const banda = {
    nombre : "Nightwish",
    formacion: 1996,
    pais : "Finlandia",
    activo: true,
    genero: "Metal Sinfonico",
    integrantes : [ "Toumas Holopainen", "Emppu Vuorinen", "Troy Donockley", "Kai Hatho", "Floor Jansen"],
    discografia : [
        {
            nombre: "Angels Fall First",
            lanzamiento: 1997
        },
        {
            nombre: "Oceanborn",
            lanzamiento: 1998
        },
        {
            nombre: "Wishmaster",
            lanzamiento: 2000
        },
        {
            nombre: "Century Child",
            lanzamiento: 2002
        },
        {
            nombre: "Angels Fall First",
            lanzamiento: 1997
        },
        {
            nombre: "Once",
            lanzamiento: 2004
        },
        {
            nombre: "Dark Passion Play",
            lanzamiento: 2007
        },
        {
            nombre: "Imaginaerum",
            lanzamiento: 2011
        },
        {
            nombre: "Endless Forms Most Beauttiful",
            lanzamiento: 2015
        },
        {
            nombre: "Human :||: Nature",
            lanzamiento: 2020
        }
    ],
    vocalistaActual : "Tarja Turunen"
}//  1.  ¿Cuantos integrantes tiene la banda?
//  2.  ¿Cuál es el nombre del tercer disco de la banda?
//  3.  ¿En que año se lanzo el ultimo disco?
/*
    console.log(banda.integrantes.length) 
    console.log(banda[2].nombre)
    console.log(banda.discografia[banda.discografia.length - 1 ].lanzamiento)

*/
     
// ACCEDER A UNA PROPIEDAD
    // objeto.propiedad
    // objeto["propiedad"]
    
/*
MODIFICAR UNA PROPIEDAD
    objeto.propiedad = "Nuevo valor"
    objeto["propiedad"] = "Nuevo valor"
*/
/*
AGREGAR UNA NUEVA PROPIEDAD
    objeto.nuevaPropiedad = valorInicial
    objeto["nuevaPropiedad"] = valorInicial
    selloDiscografico: "Nuclear Blast Records"
*/
/*
ELIMINAR UNA PROPIEDAD
    delete objeto.propiedad
    delete objeto["propiedad"]
*/
/*
-----------ESTRUCTURAS DE CONTROL-------------
Permiten manipular el flujo de ejecucion del codigo 
CICLOS  
Nos permiten repetir un bloque de codigo mientras la condicion evaluada se mantenga verdadera
Repetir acciones n cantidad de veces
    ->for
    ->while 
    ->do... while
Cada vuelta o ejecucion de un ciclo se conoce como "Iteración"
CONDICIONALES
Nos permiten ejecutar diferentes acciones derivado de alguna condicion
    ->if
    ->else... if
    ->operador ternario
    
*/
//  jueves 7 del 7
/*
//  cont años = [18,4,15,6,12]
function ordenar(usuario){
    return usuario.sort(function(a,b){
        return a.edad - b.edad // dos return porq cada uno va a cada lado
    })
}

console.log(ordenar(usuario))
*/
const años = [18,4,15,6,12]
function ordenar(usuario){
    return usuario.sort(function(a,b){
        return a.edad - b.edad // dos return porq cada uno va a cada lado
    })
}
 console.log(años)

//  viernes 8 segunda semana
/*
let edad = 30
if (18<=edad){
    console.log()
}

 */
/*
 switch(grande){
    case "chico";
    console.log("tu total es de $ 20 pesos, gracias por su compra! ")
    break
    case "mediano";
    console.log("tu total es de $ 35 pesos, gracias por su compra")
    break
    case "grande";
    console.log("tu total es de $50 pesos,gracias por su compra")

    default
    console.log("lo sentimos,no manejamos ese tamaño de bebida")
     break
 }
*/
// ejercicios viernes
// Crea una función que reciba como parámetro un string con un nombre del mes y bebe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido".




   //Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.// Crea una función que reciba como parámetro un string con un nombre del mes y bebe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido".

    


//Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.
 
     function determinarEstacion( mes ){
        if(mes === "Marzo"|| mes === "Abril"|| mes === "Mayo"){
            return "Primavera"

        }
     }


    


/*
     switch(mes){
        case "Marzo":
        case "Abril":
        case "Mayo":
            return "Primavera"
            break;
        case "Junio":
        case "Julio":
        case " Agosto":
            return "Verano"
            break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
            return "Otoño"
            break;
        case "Diciembre":
        case "Enero":
        case " Febrero":
            return
     }
     */

// 2
function evaluarNumero( numero ){
    if( numero > 10 ){
        return numero
    }else{
        return numero * 2
    }
}


// 3
//Generar una funcion que reciba dos parametros, una cadena de texto y una palabra. La funcion debe de devolver true si la palabra se encuentrra dentro de lla cadena de texto, false si no se encuentra. 
//No debe de ser case sensitive

// "Tengo un GATO" "gato" -> true
//sin utilizar includes, match, search



//miercoles 20

function palabra(rambo,palabra){
     rambo = rambo.toLowecase()

     palabra = palabra.toLowecase()

     let texto = rambo.split( " " )

     for(let word of texto){

        if(word === palabra){

            return true

        }
     }
     return false
}
 console.log(palabra( "tengo un GATO", "ajolote" ) )






 function hola (hatho,xd2){
   const nuevoxd = hatho.concat(xd)
   let suma = 0
   for( let num of nuevoxd){
    if( num % 2 !==0 ) suma += num
   }
   return suma
 }
  

function nose (hatho,xd2){
 const nuevo = [...hatho, ...xd2]
 let contador = 0
 for( let num of nuevo){
    if( num % 2 !== 0){
        contador++
    }
 }
 return contador
}






































































