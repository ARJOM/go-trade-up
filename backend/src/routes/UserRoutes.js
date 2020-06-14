const express = require('express');

const UserController = require('../controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.put('/users/:email', UserController.update);
routes.get('/users/:email', UserController.read);

module.exports = routes;
