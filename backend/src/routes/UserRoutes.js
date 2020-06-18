const express = require('express');

const UserController = require('../controllers/UserController');

const verifyAuth = require('../services/verifyAuth');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.put('/users/:email', verifyAuth, UserController.update);
routes.get('/users/:email', verifyAuth, UserController.read);
routes.delete('/users/:email', verifyAuth, UserController.delete);

module.exports = routes;
