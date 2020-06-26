const express = require('express');

const PublicationController = require('../controllers/PublicationController');

const verifyAdmin = require('../services/verifyAdmin');

const routes = express.Router();

routes.post('/publications', verifyAdmin, PublicationController.create);
routes.get('/publications', PublicationController.index);

module.exports = routes;
