const express = require('express');

const UserRouter = require('./routes/UserRoutes')

const routes = express.Router();

routes.use(UserRouter);

module.exports = routes;
