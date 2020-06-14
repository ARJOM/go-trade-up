const express = require('express');

const MarketController = require('../controllers/MarketController');

const routes = express.Router();

routes.post('/markets', MarketController.create);
routes.get('/markets', MarketController.index);
routes.put('/markets/:email', MarketController.update);
routes.get('/markets/:email', MarketController.read);
routes.delete('/markets/:email', MarketController.delete);

module.exports = routes;
