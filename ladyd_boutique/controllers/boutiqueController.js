const boutiqueModels = require('../models/boutiqueFunctions');
const boutiqueRouter = require('express').Router();


function getAllProducts(req, res, next) {
  console.log('Listing all items in Product Table');
  boutiqueModels.listAllProducts()
  .then(data => {
    console.log('There are  ' + data.length + ' items in the Products table. ');
    res.locals.products = data;
    console.log(res.locals.products);
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOneProduct(req, res, next){
console.log(req.params);
  boutiqueModels.listOneProduct(req.params.id)
  .then(data => {
    console.log("this is data:", data);
    // res.json({
    //   status: 'ok',
    //   product: data
    // });
    res.locals.product = data;
    next();
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
    next(err);
  })
}

function createProduct(req, res, next){
console.log(req.body);
  boutiqueModels.addProduct(req.body)
  .then(data => {
    console.log(data);
    // res.json({
    //   status: 'ok',
    //   product: data
    // })
    next();
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
    next(err);
  })
}

function updateProduct(req, res, next){
 req.body.id = req.params.id;
  console.log('this is req.body in update:', req.body);
  boutiqueModels.updateProduct(req.body)
  .then(data => {
    console.log("this is data in update:", data);
    res.redirect(`/products`)
    // res.json({
    //   status: 'ok',
    //   product: data
    // })
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
    // res.json({
    //   status: 'ok',
    //   message: `Deleted product item with id ${req.params.id}`
    // });
        res.redirect(`/products`)
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
