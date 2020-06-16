const connection = require('../database/Connection');

module.exports = {
    async index(req, res) {
        const { market } = req.params;

        const products = await connection('products').where({market: market}).select('*')
            .catch(err => res.json({procedimento: 'Listar produtos por comerciante', Status: 'Erro ao tentar listar', Error: err}));

        return res.json(products);
    }
};
