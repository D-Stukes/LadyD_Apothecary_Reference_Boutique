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
  // .redirect('index');
}

// function viewAddedProduct(req, res) {
//   res.redirect('index');
// }


function editOneProduct(req, res) {
  res.render('edit', {
  product: res.locals.product
 })
}


module.exports = {
  listAllProducts,
  listOneProduct,
  addOneProduct,
  editOneProduct
  // viewAddedProduct
}

  // (req, res) => {
  //   console.log( res.locals.products, 'res.locals.products');
  //   res.render('/index', {products:res.locals.products});
  //}
  // );
