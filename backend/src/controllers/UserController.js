const connection = require('../database/Connection');
const PasswordEncrypt = require('../services/PasswordEncrypt');

module.exports ={

    async create(req, res){
        const {email, user_name, password } = req.body;

            const exist = await connection('users').where('email', email).select('email').first();

            if(exist){
                if(exist.email === email){
                    return res.json("Email já cadastrado! ")
                }
            }

            const user = await connection('users').insert({
                email,
                user_name,
                password: PasswordEncrypt.passwordEncrypt(password)
            })
            .catch(err=>{
              return res.json({procedimento: 'Criar Usuários', Status: 'Erro ao tentar criar', Error: err}, 400);
            });

            return res.json(`Usuário criado com sucesso!`);

    },

    async update(req, res){
        const { email } = req.params;
        const { user_name, password } = req.body;

        const user = await connection('users')
            .where({email: email})
            .update({
                user_name,
                password: PasswordEncrypt.passwordEncrypt(password)
            })
            .catch(err=>{
              return res.json({procedimento: 'Atualizar Usuários', Status: 'Erro ao tentar atualizar', Error: err}, 400);
            });

        return res.json('Usuário atualizado com sucesso');
    },

    async read(req, res){
        const { email } = req.params;

        await connection('users').where('email', email).select('*').first()
            .then(user => res.send(user))
            .catch(err => res.send({procedimento: 'Ler Usuário', Status: 'Erro ao tentar Ler', Error: err}, 400));

    },

    async delete(req, res){
        const { email } = req.params;

        await connection('users').where('email', email).del()
            .then(() => res.json("Usuário removido com sucesso"))
            .catch(err => res.json({procedimento: 'Remover Usuário', Status: 'Erro ao tentar Remover', Error: err}, 400));

    },

    async index(req, res){

        const users = await connection('users').select('*')
        .catch(err=>res.json({procedimento: 'Listar Usuários', Status: 'Erro ao tentar Listar', Error: err}, 400));
        return res.json(users)
    }
};
