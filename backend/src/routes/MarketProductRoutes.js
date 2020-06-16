const express = require('express');

const MarketProductController = require('../controllers/MarketProductController');

const routes = express.Router();

routes.get('/markets/:market/products', MarketProductController.index);

module.exports = routes;
