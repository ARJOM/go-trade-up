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

    async index(req, res){

        const users = await connection('markets')
            .join('users', 'users.email', 'markets.email')
            .select('*')
            .catch(err=>console.log({procedimento: 'Listar Comércios', Status: 'Erro ao tentar Listar', Error: err}));

        return res.json(users);
    }
};
