const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

//const connection = knex(configuration.development);
const connection = knex(config);

// o module exports é utilizado sempre para exportar o arquivos da pasta raiz para outra pasta
module.exports = connection;