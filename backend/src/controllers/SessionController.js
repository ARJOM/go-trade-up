const connection = require('../database/Connection');
const jwt = require('jsonwebtoken');
const PasswordEncrypt = require('../services/PasswordEncrypt');
const SECRET = require('../config/SecretJwt');

module.exports = {
    async create (req, res) {
        const { email, password } = req.body;
        const cryptPassword = PasswordEncrypt.passwordEncrypt(password);
        await connection('users').where({email: email, password: cryptPassword}).select('*').first()
            .then( element => {
                if (element) {
                    const token = jwt.sign({email}, SECRET, {
                        expiresIn: 604800 // expires in 5min
                    });
                    return res.json({auth: true, token: token});
                }
                return res.status(400).json({message: 'Login inválido!'});
            })
            .catch(err => res.status(400).json({message: 'Login inválido!'}));
    }
};
