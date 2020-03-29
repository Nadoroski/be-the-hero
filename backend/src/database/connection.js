const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

// o module exports é utilizado sempre para exportar o arquivos da pasta raiz para outra pasta
module.exports = connection;