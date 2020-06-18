const express = require('express');

const UserRoutes = require('./routes/UserRoutes');
const MarketRoutes = require('./routes/MarketRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const MarketProductRoutes = require('./routes/MarketProductRoutes');
const SessionRoutes = require('./routes/SessionRoutes');

const routes = express.Router();

routes.use(UserRoutes);
routes.use(MarketRoutes);
routes.use(ProductRoutes);
routes.use(MarketProductRoutes);
routes.use(SessionRoutes);

module.exports = routes;
