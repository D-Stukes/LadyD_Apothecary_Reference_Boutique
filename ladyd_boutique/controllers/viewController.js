//displaying view for listing all items in products table
function listAllProducts(req, res) {
  res.render('products/indexlist', {
  products: res.locals.products
 })
}
//displaying view for listing one item in products table via id entered by client in route /products/id
function listOneProduct(req, res) {
  res.render('products/show', {
  product: res.locals.product
 })
}

//displaying view for creating one product and adding it to products table
function addOneProduct(req, res) {
  res.render('products/add', {
  products: res.locals.product
 })
}

//redirecting to list of products after new product is added
function viewAddedProduct(req, res) {
  res.redirect('/products');
}

//displaying view for updating one item in products table
function editOneProduct(req, res) {
  product = res.locals.product;
  res.render('products/edit', {
  product: res.locals.product
 })
}


module.exports = {
  listAllProducts,
  listOneProduct,
  addOneProduct,
  editOneProduct,
  viewAddedProduct
}


