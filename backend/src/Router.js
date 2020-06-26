const express = require('express');

const UserRoutes = require('./routes/UserRoutes');
const MarketRoutes = require('./routes/MarketRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const MarketProductRoutes = require('./routes/MarketProductRoutes');
const SessionRoutes = require('./routes/SessionRoutes');
const DonateRoutes = require('./routes/DonateRoutes');
const PublicationsRoutes = require('./routes/PublicationsRoutes');


const routes = express.Router();

routes.use(UserRoutes);
routes.use(MarketRoutes);
routes.use(ProductRoutes);
routes.use(MarketProductRoutes);
routes.use(SessionRoutes);
routes.use(DonateRoutes);
routes.use(PublicationsRoutes);

module.exports = routes;
