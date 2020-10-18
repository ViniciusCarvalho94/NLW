// importar dependencia
const express = require('express');

// iniciando do express
const server = express();

// criar rota
server.get('/', () => {
    console.log('oi')
})

// ligar o servidor
server.listen(5500)