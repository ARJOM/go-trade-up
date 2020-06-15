const express = require('express');

const UserRoutes = require('./routes/UserRoutes');
const MarketRoutes = require('./routes/MarketRoutes');
const ProductRoutes = require('./routes/ProductRoutes');

const routes = express.Router();

routes.use(UserRoutes);
routes.use(MarketRoutes);
routes.use(ProductRoutes);

module.exports = routes;
