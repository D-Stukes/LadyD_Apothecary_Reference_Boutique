function listAllProducts(req, res) {
  res.render('index', {
  products: res.locals.products
 })
}

function listOneProduct(req, res) {
  res.render('show', {
  product: res.locals.product
 })
}

function addOneProduct(req, res) {
  res.render('add', {
  product: res.locals.product
 })
  .redirect('/index');
}

// function viewAddedProduct(req, res) {
//   res.redirect('/index');
// }

module.exports = {
  listAllProducts,
  listOneProduct,
  addOneProduct
  // viewAddedProduct
}

  // (req, res) => {
  //   console.log( res.locals.products, 'res.locals.products');
  //   res.render('/index', {products:res.locals.products});
  //}
  // );
