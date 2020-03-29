const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request,response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs); 
    },

    async create(request,response) {
    // tem os campos que são cadastrados para que o usuario não mande nada a mais
    const {name, email, whatsapp, city, uf} = request.body;

    // faz o id para login da ong
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });
    
    return response.json({ id });
    }
}