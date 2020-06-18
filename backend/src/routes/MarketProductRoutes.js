const express = require('express');

const MarketProductController = require('../controllers/MarketProductController');

const verifyAuth = require('../services/verifyAuth');

const routes = express.Router();

routes.get('/markets/:market/products', verifyAuth, MarketProductController.index);

module.exports = routes;
