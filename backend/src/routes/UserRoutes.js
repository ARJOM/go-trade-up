const express = require('express');

const UserController = require('../controllers/UserController');

const routes = express.Routes();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

module.exports = routes;