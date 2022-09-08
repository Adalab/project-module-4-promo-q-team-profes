const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

const server = express();
server.use(cors());
server.use(express.json({
    limit: "10mb"
}));
server.set("view engine", "ejs");

const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost${serverPort}`);
})


//servidor de ficheros estáticos
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

const staticServerPathStyles = "./src/public-css";
server.use(express.static(staticServerPathStyles));



//hoy lo guardo en un listado -- luego lo guardo en BD
const savedCard = [];

//endpoint Crear la tarjeta
server.post("/card", (req, res) => {

    console.log(req.body);

    //validar la información del body
    if (req.body.palette === "" && req.body.name === "") {
        const responseError = {
            success: false,
            error: "Falta un parámetro"
        }
        res.json(responseError);
    } else {
        //crear la tarjeta y almacenar:bd
        const newCard = {
            id: uuidv4(),
            ...req.body
        }
        savedCard.push(newCard);

        //enviar la respuesta
        const responseSuccess = {
            cardURL: `http://localhost:4000/card/${newCard.id}`,
            success: true
        }
        console.log(responseSuccess);
        res.json(responseSuccess);

    }
});

//endpoint "Devolver la tarjeta"
server.get("/card/:id", (req, res) => {
    const userCard = savedCard.find(card => card.id === req.params.id);
    res.render("card", userCard)
});

