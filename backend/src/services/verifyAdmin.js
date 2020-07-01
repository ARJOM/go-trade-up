const jwt = require('jsonwebtoken');
const SECRET = require('../config/SecretJwt');

module.exports = function verifyAdmin(req, res, next) {
    const token = req.headers['x-access-token'];

    if (!token) return res.status(401).json({ auth: false, message: 'Token não enviado.' });

    jwt.verify(token, SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar token.' });

        if (decoded.email!=='admin@gotradeup.com'){
            return res.status(403).json({auth: false, message: 'Permissão negada'});
        }

        req.user_email = decoded.email;
        next();
    });
};
