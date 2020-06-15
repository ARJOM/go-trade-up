const express = require('express');

const PublicationController = require('../controllers/PublicationController');

const routes = express.Router();

routes.post('/publications', PublicationController.create);
routes.get('/publications', PublicationController.index);

module.exports = routes;
