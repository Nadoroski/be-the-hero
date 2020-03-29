const express = require ('express');
const { celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const connection = require('./database/connection')

const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
   [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
   })
}) ,OngController.create);

routes.get('/profile', celebrate({
   [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
   }).unknown()
}),ProfileController.index);

routes.get('/incidents', celebrate({
   [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
   })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
   [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
   })
}), IncidentController.delete);

module.exports = routes;


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
// })