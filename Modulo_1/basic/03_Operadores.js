// Asignacion
//=

//  Comparacion
/*
==
===

console.log(2 ==2);
console.log(2 === '2');
console.log(2 == '2');
*/
/*
!=
console.log(2 != 3);
*/
/*
>
<
>=
<=
*/

//oeparadores de asignacion compuestos

/*
+= / x = x + y
-= / x= x - y
*=
/=
%=
var numero = 3
numero -= 2;
console.log(numero);
 */

 //operadores aritmeticos
/*
+
-
*
/
%
 */

//Desestructurar objetos
var persona = { nombre:"Diana",apellido:"Loachamin" , edad:21,viajes:{destino1:"Colombia",destino2:"Mexico"}
};

var { nombre:nombre2 ,apellido,viajes: {destino1} }=persona;


console.log(persona);
console.log(nombre2); 
console.log(apellido); 
console.log(destino1); 


