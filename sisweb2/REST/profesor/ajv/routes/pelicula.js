const express = require('express');
const router = express.Router();
const database = require('../database');
const ajv = require('../schemas');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { user: req.session.user});
});

router.post('/', async function(req, res) {
  const pelicula = req.body;
  const validatePelicula = ajv.getSchema('pelicula');
  if (validatePelicula(pelicula)){
    database.peliculas.addPelicula(pelicula);
    res.status(201);
  } else {
    console.log(validatePelicula.errors);
    res.status(422);
  }
  res.send(validatePelicula.errors);
});

module.exports = router;
