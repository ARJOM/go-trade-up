const connection = require('../database/Connection');
const crypto = require('crypto');
module.exports = {

      async create(req, res){
        const {description} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        const inserir = await connection('publications').insert({
            id,
            description
        })
        .catch(err=>{
          return res.json({procedimento: 'Criar Publicação', Status: 'Erro ao tentar criar', Error: err});
        });


        return res.json({procedimento: 'Realiza Publicação', Status:'Publicado com Sucesso!', Inf: `Id da pub: ${id}`})
    },

    async index(req, res){

        const pubs = await connection('publications').select('*').catch(err=>{
            return res.json({procedimento: 'Listar Publicações',
            Status: 'Erro ao listar publicações: ', Error: err});
        });

        return res.json(pubs)
    }
}
