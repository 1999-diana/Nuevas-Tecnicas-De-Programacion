// Funciones declarativas
//Con  con retorno de valores
function saludar(){
    return "Hola soy Diana Loachamin";
}
var resultado = saludar()
//console.log(resultado);
//console.log(saludar());

//funciones void o vacias
function saludar2(){
    //console.log("Hola soy Diana");
}
saludar2()

//funciones con parametros
function saludarConParametros(nombre, apellido){
return `Hola me presento soy ${nombre} ${apellido}`
}
//console.log(saludarConParametros("Diana", "Loachamin"));

// funciones con parametros por defecto
function saludoConProfesion(nombre2="Persona", profesion="Diseñador en software"){
return `Hola ${nombre2} mi profesion es ${profesion}`
}
//console.log(saludoConProfesion("katherine", "Desarrollador de software"));




// Funciones expresivas - Funciones anonimas
//las funciones expresivas son almacenadas en variables y no nesecitan del parametro dunction
var saludoConEdad = function(nombre3, edad){
    return `Hola soy ${nombre3} y tengo ${edad} años`
}
//console.log(saludoConEdad("Diana", 22));

// Arrow functions - Funciones flecha

var saludoConApellido = (nombre, apellido) => `Hola me llamo ${nombre} ${apellido}`

var suma = (num1,num2) =>num1+num2 
//console.log(saludoConApellido("Diana", "Loachamin"));
//console.log(suma(2,3));

//funciones como parametrso de otras funciones

function saludoConFunciones(nombre,cb) {
    return cb(nombre)
}
var miSaludo = saludoConFunciones("Diana",function(nombre){
return `Hola soy ${nombre} `
})

var miSaludo2 = saludoConFunciones("Diana",(nombre) => `Hola soy ${nombre} `)
//console.log(miSaludo2);

//setTimeout(() =>{
    //console.log("Hola mundo");
//}.3000);

//setInterval(() =>{
    //console.log("Hola mundo");
//},2000);