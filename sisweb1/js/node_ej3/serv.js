const http = require('http');
const url = require('url');

const dictionary = [
  "casa", "perro", "gato", "árbol", "libro", "sol", "luna", "agua", "fuego", "tierra",
  "auto", "amigo", "flor", "nube", "montaña", "playa", "mar", "ciudad", "río", "cielo",
  "niño", "niña", "comida", "agua", "fuego", "tierra", "viento", "pájaro", "pez", "bosque",
  "camino", "puerta", "ventana", "silla", "mesa", "zapato", "sombrero", "reloj", "manzana", "plátano"
];

function getRandomWords(num) {
  let words = [];
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    words.push(dictionary[randomIndex]);
  }
  return words.join('');
}

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const numWords = parseInt(queryObject.x) || 1;

  const password = getRandomWords(numWords);

  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`<h1>Contraseña aleatoria: ${password}</h1>`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
