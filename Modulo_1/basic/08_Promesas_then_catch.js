//Promesas

function promesa(bandera) {
    return new Promise((resolve,reject)=> {
        if (bandera) {
            setTimeout(() => {
                resolve("Peticion resuelta");
            }, 3000);
        } else {
            setTimeout(() => {
                reject("La operacion fallo")
            }, 2000);
            
        }
    })
    }

//promesa(false)
//.then((resultado) => {
//console.log("Respuesta positiva",resultado)
//})
//.catch((error) => {
  //  console.log("Error",error);
//})
var segundaPromesa = () => new Promise((resolve,reject)=>{
    if (bandera) {
        setTimeout(() => {
            resolve("Peticion resuelta");
        }, 3000);
    } else {
        setTimeout(() => {
            reject("La operacion fallo")
        }, 2000);
        
    }
})

segundaPromesa(true)
.then((respuesta)=>{
    console.log(respuesta);
})
.catch((error)=>{
console.log(error);
})

promesa(true)
.then((respuesta)=>{
    console.log(respuesta)
    return segundaPromesa(true)//Compras del cliente
})
.then((respuesta)=>{ //Respuesta de la segunda promesa
    console.log(respuesta);
})
.catch((error)=>{
    console.log(error)
})