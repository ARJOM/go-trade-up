const express = require('express');

const DonateController = require('../controllers/DonateController');

const verifyAuth = require('../services/verifyAuth');

const routes = express.Router();

routes.post('/donation', verifyAuth, DonateController.create);
routes.get('/donation', DonateController.index);

module.exports = routes;
