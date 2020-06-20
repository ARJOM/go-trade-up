const express = require('express');

const MarketController = require('../controllers/MarketController');

const routes = express.Router();

routes.post('/markets', MarketController.create);
routes.get('/markets', MarketController.index);

module.exports = routes;
