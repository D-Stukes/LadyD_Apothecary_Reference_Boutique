\c ladyd_apothecary_reference_boutique

-- removing any previous records and start the id sequence back to 1
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS products CASCADE;

-- creating boutique tables
CREATE TABLE categories(id SERIAL PRIMARY KEY, type VARCHAR(255));
CREATE TABLE products(id SERIAL PRIMARY KEY, product_name VARCHAR(255), description VARCHAR(255), price INT, category_id INT REFERENCES categories(id), image_url TEXT
);

-- adding in categories data
INSERT INTO categories
  (type)
VALUES
  ('soap'),
  ('oil'),
  ('food'),
  ('supplement');

-- adding in products data
INSERT INTO products
  (product_name, description, price, category_id, image_url)
VALUES
  ('Pine-Tar bar', 'antseptic cleanser', 5.00,  1, './public/images/herbal-bouquet.jpg'),
  ('Lavender bar', 'fragrant bar', 7.00, 1, './public/images/herbal-bouquet.jpg'),
  ('Olive Oil', 'Cardiovascular support', 15.00, 2, './public/images/herbal-bouquet.jpg'),
  ('Broccoli Rabe','Eliminates nausea', 4.00, 3, './public/images/herbal-bouquet.jpg'),
  ('Tea Tree Oil', 'Posesses antifungul and antiseptic properties', 9.00, 2, './public/images/herbal-bouquet.jpg'),
  ('Ginger', 'Increases circulation', 6.50, 3, './public/images/herbal-bouquet.jpg'),
  ('Chamomile bar', 'Calming aromatherapy', 5.00, 1, './public/images/herbal-bouquet.jpg'),
  ('Shea Butter bar', 'Moisturizes and conditions skin', 3.00, 1, './public/images/herbal-bouquet.jpg'),
  ('Cayenne Pepper', 'Increases metabolism', 2.00,  3, './public/images/herbal-bouquet.jpg'),
  ('Clove Oil', 'Antiseptic and aromatic', 11.99, 2, './public/images/herbal-bouquet.jpg'),
  ('Raw Cacao Powder','Provides excellent circulation support', 18.00, 3, './public/images/herbal-bouquet.jpg'),
  ('Maca Powder', 'Balances hormones', 13.00, 3, './public/images/herbal-bouquet.jpg'),
  ('Raw vitamin C', 'Supplies the body with antioxidants and fights cellular rusting', 25.00, 4, './public/images/herbal-bouquet.jpg'),
  ('Probiotics', 'Restores good bacteria in gut', 30.00, 4, './public/images/herbal-bouquet.jpg'),
  ('Ubiquinol', 'Supports a healthy heart', 15.00, 4, './public/images/herbal-bouquet.jpg');
