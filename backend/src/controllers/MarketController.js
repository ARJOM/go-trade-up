const connection = require('../database/Connection');

module.exports ={
    async create(req, res){
        const {email, user_name, password, phone, uf, city, address } = req.body;

        const user = { email, user_name, password };

        const market = { email, phone, uf, city, address };

        // Cria usuário
        await connection('users').insert(user)
            .then(async () =>{
                // Se bem sucedido cria comércio
                await connection('markets').insert(market)
                    .then(() => {
                        // Se bem sucedido retorna uma mensagem
                        return res.json(`Mercado criado com sucesso!`);
                    })
                    .catch( async (err) => {
                        // Se falhar remove usuário criado
                        await connection('users').where('email', email).del();
                        return res.json({procedimento: 'Criar Comércio', Status: 'Erro ao tentar criar', Error: err}, 400);
                    });
                }
            )
            // Se falhar exibe mensagem de erro
            .catch(err=> {
                return res.json({procedimento: 'Criar Comércio', Status: 'Erro ao tentar criar', Error: err}, 400);
            });
    },

    async update(req, res){
        const { email } = req.params;
        const { user_name, password, phone, uf, city, address } = req.body;

        const user = { user_name, password };

        const market = { phone, uf, city, address };

        await connection('users')
            .where({email: email})
            .update({user})
            .then(async () => {
                await connection('markets')
                    .where({email: email})
                    .update({market})
                    .then(() => res.json("Comerciante atualizado com sucesso!"))
                    .catch(err => res.json({procedimento: "Editar comerciante", Status: "Falha parcial", Erro: err}, 400))
            })
            .catch(err=>{
                return res.json({procedimento: 'Editar comerciante', Status: 'Erro ao tentar atualizar', Error: err}, 400);
            });
    },

    async read(req, res){
        const { email } = req.params;

        await connection('markets')
            .join('users', 'users.email', 'markets.email')
            .where('email', email).select('*').first()
            .then(market => res.json(market))
            .catch(err => res.json({procedimento: 'Ler comerciante', Status: 'Erro ao tentar Ler', Error: err}, 400));

    },

    async delete(req, res){
        const { email } = req.params;

        await connection('markets').where('email', email).del()
            .then( async () => {
                await connection('users').where('email', email).del()
                .then(() => res.json("Comerciante removido com sucesso"))
            })
            .catch(err => res.json({procedimento: 'Remover Usuário', Status: 'Erro ao tentar Remover', Error: err}, 400));

    },

    async index(req, res){

        const users = await connection('markets')
            .join('users', 'users.email', 'markets.email')
            .select('*')
            .catch(err=>res.json({procedimento: 'Listar Comércios', Status: 'Erro ao tentar Listar', Error: err}));

        return res.json(users);
    }
};
