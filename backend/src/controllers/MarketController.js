const connection = require('../database/Connection');

module.exports ={
    async create(req, res){
        const {email, user_name, password, phone, uf, city, address } = req.body;

        const user = await connection('users').insert({
            email,
            user_name,
            password
        }).catch(err=>console.log({procedimento: 'Criar Usuários', Status: 'Erro ao tentar criar', Error: err}));

        const market = await connection('markets').insert({
            email,
            phone,
            uf,
            city,
            address
        }).catch(err=>console.log({procedimento: 'Criar Comércio', Status: 'Erro ao tentar criar', Error: err}));

        return res.json(`Mercado criado com sucesso!`)
    },

    async index(req, res){

        const users = await connection('markets')
            .join('users', 'users.email', 'markets.email')
            .select('*')
            .catch(err=>console.log({procedimento: 'Listar Comércios', Status: 'Erro ao tentar Listar', Error: err}));

        return res.json(users);
    }
};
