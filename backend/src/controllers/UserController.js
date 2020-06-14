const connection = require('../database/Connection');

module.exports ={
    
    async create(req, res){
        const {email, user_name, password } = req.body;

            const exist = await connection('users').where('email', email).select('email').first();
            

            if(exist){
                if(exist.email == email){
                    return res.json("Email já cadastrado! ")
                }
            }
           


            const user = await connection('users').insert({
                email,
                user_name,
                password
            })
            .catch(err=>res.json({procedimento: 'Criar Usuário', Status: 'Erro ao tentar Criar', Error: err}))
        
            return res.json(`Usuário cadastrado com sucesso!`)
        
    },

    async index(req, res){

        const users = await connection('users').select('*')
        .catch(err=>res.json({procedimento: 'Listar Usuários', Status: 'Erro ao tentar Listar', Error: err}))
        
        return res.json(users)

    }
}