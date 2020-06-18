const express = require('express');

const PublicationController = require('../controllers/PublicationController');

const verifyAuth = require('../services/verifyAuth');

const routes = express.Router();

routes.post('/publications', verifyAuth, PublicationController.create);
routes.get('/publications', PublicationController.index);

module.exports = routes;
