//concat
var numeros =[1,2,3,4,5];
var nuevosNumeros = numeros.concat([6,7,8,9,0])
//console.log(numeros);
//console.log(nuevosNumeros);

//Join
var nombre =["d","i","a","n","a",]
//console.log(nombre.join(";"));

//Slice
//console.log(nombre.slice(2));

//Index Of
//console.log(nombre.indexOf("n"));

//last index of

//console.log(nombre.lastIndexOf("i"));

//Reverse
//console.log(nombre.reverse());


//Sort

var numerosDesordenados =[3,4,6,7,8,0,1,2,5,9]
//console.log(numerosDesordenados.sort());

//Shift

//console.log(numerosDesordenados.shift());

//Pop

//console.log(numerosDesordenados.pop());


//Push
numerosDesordenados.push(1012)
//console.log(numerosDesordenados);

var pares = [2,4,6,8,10]
///console.log(pares.map((elemento)=> elemento + 1));

//CONSUTA DE ARREGLOS
//1.- every 
const array = [0,6,9,11,3,2]
const trabajo = array.every(num => num > 4);
console.log(trabajo)

//2.- some
var nume = array.some(num => num > 4);
console.log(nume); 

//3.- for each
array.forEach(numeros => {
console.log(numeros)
});

//4.- includes
console.log(array.includes(70));

// 5.- Array-OF
var n1 = Array.of(9,0,1,7,3,6,2);
console.log(n1);
