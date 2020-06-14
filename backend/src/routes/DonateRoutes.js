const express = require('express');

const DonateController = require('../controllers/DonateController');

const routes = express.Router();

routes.post('/donation', DonateController.create);
routes.get('/donation', DonateController.index);

module.exports = routes;
