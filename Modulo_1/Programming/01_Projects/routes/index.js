//traemos el paquete
const { Router } = require ('express');

//Inicalizamos router
const router  =Router()

//creacion de los endpoint

router
.get("/",(request,res) => {
  res.send("Hola mundo con ExpressJs");
})

.get("/saludo",(req,res)=> {
  const { query }=req;
  res.json({
    saludo:`Hola soy ${query.nombre} ${query.apellido }` ,
  });
})


.get("/saludo/:nombre",(req,res)=> {
  const {params}=req; 

  //const nombre =req.params.nombre
  res.json({
      nombre: params.nombre,
  });
});

//Exportamos las rutas
module.exports.RouterIndex = router;


//module= {
    //exports: {
    //    RouterIndex:router
  //  }
//}
