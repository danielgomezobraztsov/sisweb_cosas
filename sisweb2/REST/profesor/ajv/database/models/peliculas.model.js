const bcrypt = require('bcrypt');

peliculas = {};

peliculas.data = {};

peliculas.addPelicula = async function(pelicula){
    peliculas.data[pelicula.title] = pelicula;
}

module.exports = peliculas;