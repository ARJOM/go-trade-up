const md5 = require('md5');

module.exports = {
    passwordEncrypt(password){
        return md5(password)
    }
};
