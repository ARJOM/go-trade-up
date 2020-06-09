const connection = require('../database/Connection');

module.exports ={
    
    async create(req, res){
        const {email, user_name, password } = req.body;

            const user = await connection('users').insert({
                email,
                user_name,
                password
            })
            .catch(err=>console.log({procedimento: 'Listar Usuários', Status: 'Erro ao tentar Listar', Error: err}))
            
            return res.json(`Usuário criado com sucesso!`)
        
    },

    async index(req, res){

        const users = await connection('users').select('*')
        .catch(err=>console.log({procedimento: 'Listar Usuários', Status: 'Erro ao tentar Listar', Error: err}))
        
        return res.json(users)

    }
}