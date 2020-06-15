const express = require('express');

const ProductController = require('../controllers/ProductController');

const routes = express.Router();

routes.post('/products', ProductController.create);
routes.get('/products', ProductController.index);
routes.put('/products/:market/:product_name', ProductController.update);
routes.get('/markets/:market/:product_name', ProductController.read);
routes.delete('/markets/:market/:product_name', ProductController.delete);

module.exports = routes;
