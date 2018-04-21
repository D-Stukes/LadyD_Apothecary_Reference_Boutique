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



module.exports = {
  listAllProducts
  // listOneProduct
}

  // (req, res) => {
  //   console.log( res.locals.products, 'res.locals.products');
  //   res.render('/index', {products:res.locals.products});
  //}
  // );
