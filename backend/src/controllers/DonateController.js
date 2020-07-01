const connection = require('../database/Connection');
const crypto = require('crypto');


module.exports ={
    async create(req, res){
        const {description} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');


        const donate = await connection('donations').insert({
            id,
            description,
        }).catch(err=>{
            return res.json({procedimento: 'Realizar Doação', Status: 'Erro ao doar!', Error: err});
          });
  

        return res.json('Doação Realizada com Sucesso!')

    },

    async index(req, res){
        
        const donates = await connection('donations').select('*').catch(err=>{
            return res.json({procedimento: 'Listar doações', Status: 'Erro ao tentar listar', Error: err});
          });
  

        return res.json(donates)
    }
}