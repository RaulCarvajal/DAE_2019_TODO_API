const bodyParser = require('body-parser');
const express = require('express');
const wagner = require('wagner-core');

require('./models/model')(wagner);

//Importar Router
const tareasRouter = require('./routers/tareas.router')(wagner);

// Configurando servidor express
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/tareas",tareasRouter);

//Config http server
const server = require('http').Server(app);
const port = 3003;

//Server listening
server.listen(process.env.PORT || port);
console.log(`Running on port ${port}`);