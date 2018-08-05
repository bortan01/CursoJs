///clase 11
//var persona = {
//  nombre: "Boris",
//  apellido: "Miranda",
//  direccion : {
//      pais : "El Salvador",
//      ciudad : "Verapaz",
//      edificio : {
//          ubicacion : "Centro"
//      }
//  }
//};
//console.log(persona.direccion);
//persona.direccion.zipCode = "dde323";
//console.log(persona.direccion);
//console.log(persona.direccion.edificio.ubicacion);
////guardando en una variable para mejorar accesibilidad
//var edificio = persona.direccion.edificio;
//console.log(edificio.ubicacion)


//clase 12
//var a = 30;
//function primeraFuncion (){
//    var a = 20;
//    console.log( a);
//}
//primeraFuncion();

//clase 13
//function imprimir (nombre,apellido){
// 
//    apellido = apellido || "xxx"; //si no esta definido el valor sera xxx
//    console.log(nombre, apellido);
//}
//imprimir("BORIS", "MIRANDA");


//// clase 14

//function obtenerAleatorio (){
//    return Math.random();
//}
//var aleatorio = obtenerAleatorio(); 
//console.log(aleatorio + 10);
//
//function booleano (){
//    if (obtenerAleatorio()>0.5) {
//        return true;
//    }else {
//        return false;
//    }
//}
//console.log(booleano());
//
//function crearPersona (nombre,apellido){
//    return {
//      nombre : nombre,
//      apellido : apellido
//    };
//}
//var persona = crearPersona("Maria", "Paz");
//console.log(persona);
//
//function creaFuncion(){
//    return function (){
//      console.log("Mecrearion")  ;
//    };
//}
//var nuevaFuncion = creaFuncion();
//nuevaFuncion();

//clase 15