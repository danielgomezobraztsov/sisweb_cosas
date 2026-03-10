const database = {};

database.peliculas = require('./models/peliculas.model');

function initializeDB(){
    console.log("Base de datos inicializada");
}

initializeDB();
module.exports = database;