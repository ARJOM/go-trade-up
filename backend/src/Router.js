const express = require('express');

const UserRoutes = require('./routes/UserRoutes');
const MarketRoutes = require('./routes/MarketRoutes');

const routes = express.Router();

routes.use(UserRoutes);
routes.use(MarketRoutes);

module.exports = routes;
