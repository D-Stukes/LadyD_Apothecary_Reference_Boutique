const boutiqueModels = require('../models/boutiqueFunctions');

const boutiqueRouter = require('express').Router();

function getAllProducts(req, res, next) {
  console.log('Listing all items in Product Table');
  boutiqueModels.listAllProducts()
  .then(data => {
    console.log('There are  ' + data.length + ' items in the Products table. ');
    res.locals.products = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOneProduct(req, res){
console.log(req.params);
  boutiqueModels.listOneProduct(req.params.id)
  .then(data => {
    console.log(data);
    res.json({
      status: 'ok',
      product: data
    });
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  })
}

function createProduct(req, res){
console.log(req.body);
  boutiqueModels.addProduct(req.body)
  .then(data => {
    console.log(data);
    res.json({
      status: 'ok',
      product: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })

  })
}

function updateProduct(req, res){
 req.body.id = req.params.id;
  console.log(req.body);
  boutiqueModels.updateProduct(req.body)
  .then(data => {
    console.log(data);
    res.json({
      status: 'ok',
      product: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  })
}

function destroyProduct(req, res){
  console.log(req.params);
  boutiqueModels.destroyProduct(req.params.id)
  .then(() => {
    console.log(data);
    res.json({
      status: 'ok',
      message: `Deleted product item with id ${req.params.id}`
    });
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  })
}

function showError(err, req, res, next) {
  res.status(500).json({
    status: 'error',
    message: err.message
  });
}

module.exports = {
getAllProducts,
getOneProduct,
createProduct,
updateProduct,
destroyProduct,
showError

}
