// inporta as funcionalidades do express 
const express = require('express');
const {errors} = require('celebrate');
// arquivo onde as rotas ficaram
const routes = require('./routes');

const cors = require('cors');

// varialve que armazena a minha aplicação
const app = express();

app.use(cors());
// Tem de ficar antes de todas as requisições 
// Ele pega a requisição de JSON em algo entendivel pelo javaScript
app.use(express.json());

app.use(routes);

app.use(errors());

// aplicação está ouvindo a porta '3333' -> para acessar em localhost:3333
//app.listen(3333);
module.exports = app;