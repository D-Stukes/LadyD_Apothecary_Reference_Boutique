\c ladyd_apothecary_reference_boutique

-- removing any previous records and start the id sequence back to 1
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS products CASCADE;

-- creating boutique tables
CREATE TABLE categories(id SERIAL PRIMARY KEY, type VARCHAR(255));
CREATE TABLE products(id SERIAL PRIMARY KEY, product_name VARCHAR(255), description VARCHAR(255), price INT, category_id INT REFERENCES categories(id));

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
  (product_name, description, price, category_id)
VALUES
  ('Pine-Tar bar', 'antseptic cleanser', 5.00,  1),
  ('Lavender bar', 'fragrant bar', 7.00, 1),
  ('Olive Oil', 'Cardiovascular support', 15.00, 2),
  ('Broccoli Rabe','Eliminates nausea', 4.00, 3),
  ('Tea Tree Oil', 'Posesses antifungul and antiseptic properties', 9.00, 2),
  ('Ginger', 'Increases circulation', 6.50, 3),
  ('Chamomile bar', 'Calming aromatherapy', 5.00, 1),
  ('Shea Butter bar', 'Moisturizes and conditions skin', 3.00, 1),
  ('Cayenne Pepper', 'Increases metabolism', 2.00,  3),
  ('Clove Oil', 'Antiseptic and aromatic', 11.99, 2),
  ('Raw Cacao Powder','Provides excellent circulation support', 18.00, 3),
  ('Maca Powder', 'Balances hormones', 13.00, 3),
  ('Raw vitamin C', 'Supplies the body with antioxidants and fights cellular rusting', 25.00, 4),
  ('Probiotics', 'Restores good bacteria in gut', 30.00, 4),
  ('Ubiquinol', 'Supports a healthy heart', 15.00, 4);
