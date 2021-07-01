//traemos el paquete
const { Router } = require('express');
const data = require('../data.json');
const { User } = require('../lib/Schema/User');
//Inicalizamos router
const router = Router()
const{DataValidator} = require("../middlewares/DataValidator");
//creacion de los endpoint
router
  .get("/", (req, res) => {
    res.send('Hola mundo ocn express');
  })
  .get("/saludo", DataValidator("query", User), (req, res) => {
    const { query } = req;
    res.json({
      saludo: `Hola soy ${query.nombre} ${query.apellido}`,
    });
  })
  .get("/saludo/:nombre", (req, res) => {
    const { params } = req;
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


