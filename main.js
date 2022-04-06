const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express(); //create the server app

server.use(cors());
server.use(express.json());


//Endpoints
server.get("/", function(request, response){

    response.send({
        message: "Everything is OK",
        data: null,
        code: "success"
    });


})






server.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`))