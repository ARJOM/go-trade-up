const connection = require('../database/Connection');

module.exports= {
    async create(req, res) {
        const { market, product_name, price, photo, description } = req.body;

        const product = { market, product_name, price, photo, description };

        await connection('products').insert(product)
            .then(() => res.json('Produto cadastrado'))
            .catch(err => res.json({procedimento: 'Criar Produto', Status: 'Erro ao tentar criar', Error: err}, 400));
    },

    async update(req, res) {
        const { market } = req.params;
        const { product_name, price, photo, description } = req.body;

        const product = { product_name, price, photo, description };

        await connection('products')
            .where({market: market})
            .update({product})
            .then(() => res.json("Produto atualizado com sucesso!"))
            .catch(err => res.json({procedimento: "Editar produto", Status: "Falha parcial", Erro: err}, 400));

    },

    async read(req, res) {
        const { market, product_name } = req.params;

        await connection('products').where({market, product_name}).select('*').first()
            .then(product => res.json(product))
            .catch(err => res.json({procedimento: 'Ler produto', Status: 'Erro ao tentar Ler', Error: err}, 400));

    },

    async delete(req, res) {
        const { market, product_name } = req.params;

        await connection('products').where({market, product_name}).del()
            .then(() => res.json("Produto removido com sucesso"))
            .catch(err => res.json({procedimento: 'Remover produto', Status: 'Erro ao tentar Remover', Error: err}, 400));
    },


    async index(req, res) {

        const products = await connection('products')
            .select('*')
            .catch(err=>res.json({procedimento: 'Listar Produtos', Status: 'Erro ao tentar Listar', Error: err}));

        return res.json(products);
    }
};
