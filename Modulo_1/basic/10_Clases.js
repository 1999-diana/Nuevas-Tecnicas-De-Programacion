//como se hacia antes

function Rectangulo(base,altura) {
this.base =base;
this.altura=altura;
}

Rectangulo.prototype.calcularArea= function() {
    return this.base * this.altura
}

var rectangulo =new Rectangulo(6,3)
console.log(rectangulo.calcularArea());
console.log(rectangulo.base)

//Declaracion de clases

class Rectangulo2 {
constructor(base,altura) {
    this.base = base
    this.altura = altura
}
calcularArea () {
    return this.base * this.altura
}
}
var rectangulo2 =new Rectangulo2(6,3)
console.log(rectangulo2.calcularArea());

/*

DEBER

*/
// Clase Persona

class Persona {

    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido  = apellido
        this.edad = edad
    }

    static combinar (nomb, apellid) {
        return `Mi nombre es: ${nomb} ${apellid}`
    }
// implementar getters, setter y realizar una implementacion.
    get mpersona(){
        return `Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} año(s)`;
    }

    set nuevaEntidad(mpersona){
        const arreglo = mpersona.split(' ');
        this.nombre = arreglo[0];  
        this.apellido = arreglo[1]; 
        this.edad = arreglo[2];
    }

    getpersona(){
        return `Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} año(s)`;
    }
}
//get-set
var perso = new PERSONA("Diana","Loachamin",21)
console.log(perso.mpersona)
perso.nuevaEntidad = "katherine Tito 20"
console.log(perso.mpersona)
//metodo estatico
console.log (Persona.combinar('Catalina','Pinta'));

//implementacion metodos estaticos - Clase Punto, Function distancia
class Punto {
    constructor ( x , y ){
    this.x = x;
    this.y = y;
    }

    static distancia ( a , b) {
    const ax = a.x - b.x;
    const ay = a.y - b.y;

      return Math.sqrt ( ax * dx + ay * dy );
    }
}

const p0 = new Punto(2, 2);
const p1 = new Punto(9, 9);

console.log (Punto.distancia(p0, p1));


//Construir Clase Persona y estudiante, extender Estudiante con Persona
class Estudiante extends Persona{
    getpersona(){
        console.log(this.nombre + ' APRENDE Codigo libre');
    }
}

var lista = new Estudiante("DIANA");
lista.getpersona();
