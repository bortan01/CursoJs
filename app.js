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

//function a(){
//   console.log("funcion a ") ;
// }
// a();
// a.nombre = "Maria";
// a.direccion = {
//     pais : "El Salvador",
//     ciudad : "San Verapaz"
// };

//clase 16
//var persona = {
//  nombre : "Maria",
//  apellido : "Dubon",
//  imprimirNombre : function (){
//      console.log("hola " + this.nombre);
//  },
//  direccion : {
//      pais : "Costa Rica",
//      obtenerPais : function() {
//          var self = this;
//          function nuevaDireccion (){
//              console.log(self);
//              console.log("la direccion es en "+ self.pais);
//          }
//            nuevaDireccion();
//      }
//  }
//};
//persona.imprimirNombre();
//persona.direccion.obtenerPais(); 

//clase 17
//function Persona (){
//    this.nombre = "Boris";
//    this.apellido = "miranda"; 
//    this.edad = 20;
//    console.log("cosa");
//    this.nombreCompleto = function (){
//        return this.nombre + " "+ this.apellido;
//    };
//}
//var juan = new Persona();
//console.log(juan);
//console.log(juan.edad);
//console.log(juan.nombreCompleto());

//clase 18
//function Jugador (nombre){
//    this.nombre = nombre ;
//    this.pv = 100;
//    this.sp = 100;
//    
//    //this.curar = fu
//    this.curar = function (jugadorObjetivo){
//        this.sp-=40 ;
//        jugadorObjetivo.pv+= 20; 
//    };
//}
//var gandalf = new Jugador("gandalf");
//var legolas = new Jugador("legolas");
//
//console.log(gandalf);
//console.log(legolas);
//
//gandalf.curar(legolas);
//console.log(gandalf);
//console.log(legolas);

//clase 19
//function Persona(){
//    this.nombre = "Fernando";
//    this.apellido = "Miranda";
//    this.edad = 12;
//    
//}
//Persona.prototype.imprimirInfo = function (){
//     console.log(this.nombre + " " + this.apellido +"(" +this.edad+")");
//    
//};
//var fer = new Persona();
//fer.imprimirInfo(); 