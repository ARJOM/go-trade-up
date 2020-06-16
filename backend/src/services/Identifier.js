const crypto = require('crypto');

module.exports = {
    newId(){
        return crypto.randomBytes(4).toString('HEX');
    }
};
