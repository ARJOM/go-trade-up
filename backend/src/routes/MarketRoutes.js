const express = require('express');

const MarketController = require('../controllers/MarketController');

const verifyAuth = require('../services/verifyAuth');

const routes = express.Router();

routes.post('/markets', MarketController.create);
routes.get('/markets', MarketController.index);
routes.put('/markets/:email', verifyAuth, MarketController.update);
routes.get('/markets/:email', verifyAuth, MarketController.read);
routes.delete('/markets/:email', verifyAuth, MarketController.delete);

module.exports = routes;
