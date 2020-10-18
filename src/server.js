// importar dependencia
const express = require("express");
const path = require("path");


// iniciando do express
const server = express()
server

  //utilizando os arquivos estáticos
  .use(express.static("public"))

  // configurar template engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  // criar uma rota
  .get("/", (request, response) => {
    return response.render('index')
  })

// ligar o servidor
server.listen(5500);