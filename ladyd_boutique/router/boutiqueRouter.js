const express = require('express');
const boutiqueRouter = express.Router();
const boutiqueViewController = require('../controllers/viewController.js');
const boutiqueController = require('../controllers/boutiqueController.js');

function showError(err, req, res, next) {
  res.status(500).json({
    status: 'error',
    message: err.message
  });
}

//defining routes

boutiqueRouter.route('/')
.get(boutiqueController.getAllProducts, boutiqueViewController.listAllProducts, showError)
.post(boutiqueController.createProduct, boutiqueViewController.addOneProduct);

boutiqueRouter.get('/new', boutiqueViewController.addOneProduct);


boutiqueRouter.route('/:id')
.get(boutiqueController.getOneProduct, boutiqueViewController.listOneProduct)
.put(boutiqueController.updateProduct)
.delete(boutiqueController.destroyProduct);


module.exports = boutiqueRouter;


// boutiqueRouter.get('/', boutiqueController.getAllProducts);
// boutiqueRouter.post('/', boutiqueController.createProduct);
// boutiqueRouter.get('/:id', boutiqueController.getOneProduct);
// boutiqueRouter.put('/:id', boutiqueController.updateProduct);
// boutiqueRouter.delete('/:id', boutiqueController.destroyProduct);
