// DEBER
const {Router} = require('express');
const data = require('../data.json');

const router = Router();

router
.get("/users", (req, res) => {

    data.map((persona) => {
        persona.first_name = persona.first_name.toUpperCase();
        persona.last_name = persona.last_name.toUpperCase();

        return persona;

    })

    res.json({
        msg: "Usuarios",
        body:[data]
    })
    res.end();
})
    .get("/users-query",(req, res) => {

        const { query: {id} } = req;
    
        var filtrarID = data.filter((persona) => persona.id == id);

        if (id == null){
            res.json({
                msg: "Usuarios",
                body:[data]
            })
        }else{

            res.json({
                msg: "Usuarios filtrados por ID",
                body:[filtrarID]
            })

        }
        res.end();
    })
    .get('/users-params/:apellido', (req, res) => {

        const { params: {apellido} } = req;
        var filtrarNombre = data.filter((persona) => persona.last_name == apellido);

        var traermail = filtrarNombre.map((miMail) => {
            return miMail.email;
        })

        var bandera = false;

        data.forEach(persona => {
            if(persona.last_name == apellido){
                bandera = true;
            }
        });

        if (bandera === true) {
            
            res.json({
                msg: "Usuarios filtrados por el apellido",
                body:[traermail]
            })

        } else {
            res.json({
                msg: `El Apellido ${apellido}  no existe en nuestra base de datos`,
                body:[]
            })
        }

        res.json(filtrarNombre);

        res.end()
    });

//Exportamos las rutas
module.exports.RouterIndex = router;
