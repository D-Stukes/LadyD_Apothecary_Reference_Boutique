//import configuration information
const dbBoutique = require('../config/boutiqueConnection');

function listAllProducts() {
  const healthyPromise = dbBoutique.any
  ('SELECT * FROM products');
  return healthyPromise;
}

function listOneProduct(id) {
  const healthyPromise = dbBoutique.one(
    `SELECT * FROM products
    WHERE id = $1
    `, id
  );
  return heatlhyPromise;
}

function addProduct(product) {
  const healthyPromise = dbBoutique.one(
    `INSERT INTO products (product_name, description, price, category_id)
    VALUES ($/product_name/, $/description/, $/price/, $/category_id/)
    RETURNING *
    `, product
  );
  return healthyPromise;
}

function updateProduct(product) {
  const healthyPromise = dbBoutique.one(`
    UPDATE products
    SET content = $/product_name/, $/description/, $/price/, $/category_id/
    WHERE id = $/id/
    RETURNING *
    `, product
  );
  return healthyPromise;
}

function destroyProduct(id) {
  const healthyPromise = dbBoutique.none(`
    DELETE FROM product WHERE id = $1
    `, id
  );
  return healthyPromise
}



module.exports = {
listAllProducts,
listOneProduct,
addProduct,
updateProduct,
destroyProduct

}
