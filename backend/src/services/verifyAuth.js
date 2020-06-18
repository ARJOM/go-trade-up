const jwt = require('jsonwebtoken');
const SECRET = require('../config/SecretJwt');


function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];

    if (!token) return res.status(401).json({ auth: false, message: 'Token não enviado.' });

    jwt.verify(token, SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar token.' });

        req.user_email = decoded.id;
        next();
    });
}
