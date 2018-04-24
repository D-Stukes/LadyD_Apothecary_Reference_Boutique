//import configuration information
const dbBoutique = require('../config/boutiqueConnection');

//lists entire products table when root path is entered local:3000/ , index.ejs is rendered
function listAllProducts() {
  const healthyPromise = dbBoutique.any
  ('SELECT * FROM products');
  return healthyPromise;
}

//lists one item based on id number entered after root route local:3000/id
function listOneProduct(id) {
  const healthyPromise = dbBoutique.one(
    `SELECT * FROM products
    WHERE id = $1
    `, id
  );
  return healthyPromise;
}

//adds an item to the product table using /new route; renders add.ejs form, then submit button triggers POST request
function addProduct(product) {
  const healthyPromise = dbBoutique.one(
    `INSERT INTO products (product_name, description, price, category_id)
    VALUES ($/product_name/, $/description/, $/price/, $/category_id/)
    RETURNING *
    `, product
  );
  return healthyPromise;
}


//updates one item based on id number entered after root route local:3000/id
function updateProduct(product) {
  const healthyPromise = dbBoutique.one(`
    UPDATE products
    SET product_name = $/product_name/, description = $/description/, price = $/price/, category_id = $/category_id/, image_url = $/image_url/
    WHERE id = $/id/
    RETURNING *
    `, product
  );
  return healthyPromise;
}
//deletes one item from products table based on id number entered after root route local:3000/id
function destroyProduct(id) {
  const healthyPromise = dbBoutique.none(`
    DELETE FROM products WHERE id = $1
    `, id
  );
  return healthyPromise
}


//exporting all functions to make them available where required
module.exports = {
listAllProducts,
listOneProduct,
addProduct,
updateProduct,
destroyProduct

}
