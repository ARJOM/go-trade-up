const express = require('express');

const ProductController = require('../controllers/ProductController');
const verifyAuth = require('../services/verifyAuth');

const routes = express.Router();

routes.post('/products', ProductController.create);
routes.get('/products', ProductController.index);
routes.put('/products/:id', verifyAuth, ProductController.update);
routes.get('/products/:id', verifyAuth, ProductController.read);
routes.delete('/markets/:id', verifyAuth, ProductController.delete);

module.exports = routes;
