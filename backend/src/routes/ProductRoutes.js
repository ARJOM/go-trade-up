const express = require('express');

const ProductController = require('../controllers/ProductController');

const routes = express.Router();

routes.post('/products', ProductController.create);
routes.get('/products', ProductController.index);
routes.put('/products/:id', ProductController.update);
routes.get('/products/:id', ProductController.read);
routes.delete('/markets/:id', ProductController.delete);

module.exports = routes;
