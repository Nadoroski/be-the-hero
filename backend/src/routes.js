const express = require ('express');

const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const connection = require('./database/connection')

const routes = express.Router();

/**
 * Rota / Recurso - associado a uma tabela no banco/algum tipo de entidade
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Quando queremos buscar uma informação do back-end;
  * POST: Quando queremos criar uma informação no back-end;
  * PUT: Quando queremos alterar uma informação no back-end;
  * DELETE: Quando queremos deletar uma informação no back-end;
  * 
  */

  /**
   * Tipos de parametros:
   * 
   * Query Params: Parametros que nós enviamos dentro da nossa URL após "?" usado para (Filtros,paginação,etc);
   * Route Params: São parametros utilizados para identificar recursos;
   * Request Body: Corpo da requisição, utilizado para criar ou atualizar recursos;
   */

/**
 * SQL: MySQL, SQLite,PostgreSQL, Oracle, Microsoft SQL Server;
 * NoSQL: MongoDB, CouchDB, etc;
 */

/**
 * Driver: SELECT * FROM users ;
 * Query Builder: table('users').select('*').where()
 */

// criando rota raiz do node
// criando uma função, sempre precisa passar dois parametros
// routes.post('/users/', (request, response) => {
//     // os parametros via query
//     //const params = request.query;
//     // os parametros via route "app.get('/users/:id',"
//     //const params = request.params;

//     const params = request.body;
//     console.log(params);
//     return response.json({
//         evento:'Semana OmniStack 11.0',
//         aluno : 'Carlos Eduardo',
//     });
// });

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs',  OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;