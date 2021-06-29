//traemos el paquete
const { Router } = require ('express');
const { User } = require('../lib/Schema/User');
const { DataValidator } = require('../middlewares/DataValidator');

//Inicalizamos router
const router  =Router()


//creacion de los endpoint

router
.get("/",(req,res) => {
  res.send("Hola mundo con ExpressJS");
})


.get("/saludo", DataValidator("query", User), (req, res) => {
  const { query } = req;
  res.json({
    saludo: `Hola soy ${query.nombre} ${query.apellido}`,
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
