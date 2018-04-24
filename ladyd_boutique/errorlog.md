18:11 $ psql -f seeds.sql -d postgres
psql:seeds.sql:2: NOTICE:  table "categories" does not exist, skipping
DROP TABLE
psql:seeds.sql:3: NOTICE:  table "products" does not exist, skipping
DROP TABLE
psql:seeds.sql:36: ERROR:  syntax error at or near ";"
LINE 1: ...LE categories(id SERIAL PRIMARY KEY, type_name VARCHAR(255);
                                                                      ^
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:11 $ psql -f seeds.sql -d postgres
psql:seeds.sql:2: NOTICE:  table "categories" does not exist, skipping
DROP TABLE
psql:seeds.sql:3: NOTICE:  table "products" does not exist, skipping
DROP TABLE
psql:seeds.sql:36: ERROR:  syntax error at or near ";"
LINE 1: ...LE categories(id SERIAL PRIMARY KEY, type_name VARCHAR(255);
                                                                      ^
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:12 $ psql -f seeds.sql -d postgres
psql:seeds.sql:2: NOTICE:  table "categories" does not exist, skipping
DROP TABLE
psql:seeds.sql:3: NOTICE:  table "products" does not exist, skipping
DROP TABLE
psql:seeds.sql:36: ERROR:  syntax error at or near ";"
LINE 1: ...E TABLE categories(id SERIAL PRIMARY KEY, type VARCHAR(255);
                                                                      ^
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:17 $ psql -f seeds.sql -d postgres
psql:seeds.sql:2: NOTICE:  table "categories" does not exist, skipping
DROP TABLE
psql:seeds.sql:3: NOTICE:  table "products" does not exist, skipping
DROP TABLE
psql:seeds.sql:36: ERROR:  syntax error at or near ";"
LINE 1: ...E TABLE categories(id SERIAL PRIMARY KEY, type VARCHAR(255);
                                                                      ^
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:22 $ ls
errorlog.md seeds.sql
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:26 $ psql -f seeds.sql -d postgres
psql:seeds.sql:2: NOTICE:  table "categories" does not exist, skipping
DROP TABLE
psql:seeds.sql:3: NOTICE:  table "products" does not exist, skipping
DROP TABLE
psql:seeds.sql:36: ERROR:  syntax error at or near ";"
LINE 1: ...E TABLE categories(id SERIAL PRIMARY KEY, type VARCHAR(255);
                                                                      ^
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:27 $ psql -f seed.sql
seed.sql: No such file or directory
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:29 $ psql -f seeds.sql
psql:seeds.sql:2: NOTICE:  table "categories" does not exist, skipping
DROP TABLE
psql:seeds.sql:3: NOTICE:  table "products" does not exist, skipping
DROP TABLE
psql:seeds.sql:36: ERROR:  syntax error at or near ";"
LINE 1: ...E TABLE categories(id SERIAL PRIMARY KEY, type VARCHAR(255);
                                                                      ^
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:29 $ psql
psql (10.3)
Type "help" for help.

student_23=# \d
Did not find any relations.
student_23=# \l
                                                  List of databases
                Name                 |   Owner    | Encoding |   Collate   |    Ctype    |     Access privileges     
-------------------------------------+------------+----------+-------------+-------------+---------------------------
 carmen                              | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 cheese_db                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 flashcards_dev                      | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 hogwarts_crud                       | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 hogwarts_crud_test                  | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 ladyd_apothecary_reference_boutique | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 movies_lab_db                       | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 musicdb                             | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 n64                                 | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 pizza_dev                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 postgres                            | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 quotes_db                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 student_23                          | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 template0                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/student_23            +
                                     |            |          |             |             | student_23=CTc/student_23
 template1                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/student_23            +
                                     |            |          |             |             | student_23=CTc/student_23
 todo_db                             | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 wdi                                 | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
(17 rows)

student_23=# \c ladyd_apothecary_reference_boutique 
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
ladyd_apothecary_reference_boutique=# \d
Did not find any relations.
ladyd_apothecary_reference_boutique=# \q
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:30 $ ls
errorlog.md seeds.sql
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:30 $ psql -f seeds.sql -d postgres
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
psql:seeds.sql:4: NOTICE:  table "categories" does not exist, skipping
DROP TABLE
psql:seeds.sql:5: NOTICE:  table "products" does not exist, skipping
DROP TABLE
psql:seeds.sql:38: ERROR:  syntax error at or near ";"
LINE 1: ...E TABLE categories(id SERIAL PRIMARY KEY, type VARCHAR(255);
                                                                      ^
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:31 $ psql -f seeds.sql -d postgres
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
psql:seeds.sql:4: NOTICE:  table "categories" does not exist, skipping
DROP TABLE
psql:seeds.sql:5: NOTICE:  table "products" does not exist, skipping
DROP TABLE
psql:seeds.sql:38: ERROR:  syntax error at or near ";"
LINE 1: ...E TABLE categories(id SERIAL PRIMARY KEY, type VARCHAR(255);
                                                                      ^
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:32 $ \d
-bash: d: command not found
✘-127 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:32 $ psql -f seeds.sql -d postgres
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
psql:seeds.sql:4: NOTICE:  table "categories" does not exist, skipping
DROP TABLE
psql:seeds.sql:5: NOTICE:  table "products" does not exist, skipping
DROP TABLE
psql:seeds.sql:39: ERROR:  syntax error at or near ";"
LINE 1: ...E TABLE categories(id SERIAL PRIMARY KEY, type VARCHAR(255);
                                                                      ^
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:33 $ psql -f seeds.sql -d postgres
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
psql:seeds.sql:4: NOTICE:  table "categories" does not exist, skipping
DROP TABLE
psql:seeds.sql:5: NOTICE:  table "products" does not exist, skipping
DROP TABLE
CREATE TABLE
CREATE TABLE
INSERT 0 4
INSERT 0 15
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:35 $ psql -f seeds.sql -d postgres
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
psql:seeds.sql:4: NOTICE:  table "categories" does not exist, skipping
DROP TABLE
psql:seeds.sql:5: NOTICE:  table "products" does not exist, skipping
DROP TABLE
CREATE TABLE
CREATE TABLE
INSERT 0 4
INSERT 0 15

Last login: Wed Apr 18 16:45:05 on ttys002
 GA General Assembly  Web Development Immersive 
------------------------------------------
git version 2.16.2
Homebrew 1.5.14 Homebrew/homebrew-core (git revision 4e691; last commit 2018-04-05)
ruby 2.5.0p0 (2017-12-25 revision 61468) [x86_64-darwin15]
node v6.11.3
psql (PostgreSQL) 10.3
------------------------------------------
Last login: Wed Apr 18 16:45:05 on ttys002
 GA General Assembly  Web Development Immersive 
------------------------------------------
git version 2.16.2
Homebrew 1.5.14 Homebrew/homebrew-core (git revision 4e691; last commit 2018-04-05)
ruby 2.5.0p0 (2017-12-25 revision 61468) [x86_64-darwin15]
node v6.11.3
psql (PostgreSQL) 10.3
------------------------------------------
type unwelcome to remove this message
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:33 $ psql
psql (10.3)
Type "help" for help.

student_23=# \c ladyd_apothecary_reference_boutique 
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
ladyd_apothecary_reference_boutique=# \d
Did not find any relations.
ladyd_apothecary_reference_boutique=# \d
                 List of relations
 Schema |       Name        |   Type   |   Owner    
--------+-------------------+----------+------------
 public | categories        | table    | student_23
 public | categories_id_seq | sequence | student_23
 public | products          | table    | student_23
 public | products_id_seq   | sequence | student_23
(4 rows)

ladyd_apothecary_reference_boutique=# select * from cat
categories         categories_id_seq  
ladyd_apothecary_reference_boutique=# select * from categories;
 id |    type    
----+------------
  1 | soap
  2 | oil
  3 | food
  4 | supplement
(4 rows)

ladyd_apothecary_reference_boutique=# select * from products;
 id |    item_name     |                           description                           | price | item_type 
----+------------------+-----------------------------------------------------------------+-------+-----------
  1 | Pine-Tar bar     | antseptic cleanser                                              |     5 |         1
  2 | Lavender bar     | fragrant bar                                                    |     7 |         1
  3 | Olive Oil        | Cardiovascular support                                          |    15 |         2
  4 | Broccoli Rabe    | Eliminates nausea                                               |     4 |         3
  5 | Tea Tree Oil     | Posesses antifungul and antiseptic properties                   |     9 |         2
  6 | Ginger           | Increases circulation                                           |     7 |         3
  7 | Chamomile bar    | Calming aromatherapy                                            |     5 |         1
  8 | Shea Butter bar  | Moisturizes and conditions skin                                 |     3 |         1
  9 | Cayenne Pepper   | Increases metabolism                                            |     2 |         3
 10 | Clove Oil        | Antiseptic and aromatic                                         |    12 |         2
 11 | Raw Cacao Powder | Provides excellent circulation support                          |    18 |         3
 12 | Maca Powder      | Balances hormones                                               |    13 |         3
 13 | Raw vitamin C    | Supplies the body with antioxidants and fights cellular rusting |    25 |         4
 14 | Probiotics       | Restores good bacteria in gut                                   |    30 |         4
 15 | Ubiquinol        | Supports a healthy heart                                        |    15 |         4
(15 rows)

ladyd_apothecary_reference_boutique=# \q
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 1…4] 
18:36 $ psql
psql (10.3)
Type "help" for help.

student_23=# drop database ladyd_apothecary_reference_boutique
student_23-# ;
DROP DATABASE
student_23=# create database ladyd_apothecary_reference_boutique;
CREATE DATABASE
student_23=# \c ladyd_apothecary_reference_boutique 
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
ladyd_apothecary_reference_boutique=# select * from products;
 id |   product_name   |                           description                           | price | category_id 
----+------------------+-----------------------------------------------------------------+-------+-------------
  1 | Pine-Tar bar     | antseptic cleanser                                              |     5 |           1
  2 | Lavender bar     | fragrant bar                                                    |     7 |           1
  3 | Olive Oil        | Cardiovascular support                                          |    15 |           2
  4 | Broccoli Rabe    | Eliminates nausea                                               |     4 |           3
  5 | Tea Tree Oil     | Posesses antifungul and antiseptic properties                   |     9 |           2
  6 | Ginger           | Increases circulation                                           |     7 |           3
  7 | Chamomile bar    | Calming aromatherapy                                            |     5 |           1
  8 | Shea Butter bar  | Moisturizes and conditions skin                                 |     3 |           1
  9 | Cayenne Pepper   | Increases metabolism                                            |     2 |           3
 10 | Clove Oil        | Antiseptic and aromatic                                         |    12 |           2
 11 | Raw Cacao Powder | Provides excellent circulation support                          |    18 |           3
 12 | Maca Powder      | Balances hormones                                               |    13 |           3
 13 | Raw vitamin C    | Supplies the body with antioxidants and fights cellular rusting |    25 |           4
 14 | Probiotics       | Restores good bacteria in gut                                   |    30 |           4
 15 | Ubiquinol        | Supports a healthy heart                                        |    15 |           4
(15 rows)

ladyd_apothecary_reference_boutique=# select * from cate
categories         categories_id_seq  
ladyd_apothecary_reference_boutique=# select * from categories;
 id |    type    
----+------------
  1 | soap
  2 | oil
  3 | food
  4 | supplement
(4 rows)

ladyd_apothecary_reference_boutique=# select * from products inner join cat
categories         categories_id_seq  
ladyd_apothecary_reference_boutique=# select * from products inner join categories on products.category_id=categories.id limit 1;
 id | product_name |    description     | price | category_id | id | type 
----+--------------+--------------------+-------+-------------+----+------
  1 | Pine-Tar bar | antseptic cleanser |     5 |           1 |  1 | soap
(1 row)

ladyd_apothecary_reference_boutique=# select products.product_name, categories.type from products inner join categories on products.category_id=categories.id limit 2;
 product_name | type 
--------------+------
 Pine-Tar bar | soap
 Lavender bar | soap
(2 rows)

ladyd_apothecary_reference_boutique=# select products.product_name, categories.type from products inner join categories on products.category_id=categories.id;
   product_name   |    type    
------------------+------------
 Shea Butter bar  | soap
 Chamomile bar    | soap
 Lavender bar     | soap
 Pine-Tar bar     | soap
 Clove Oil        | oil
 Tea Tree Oil     | oil
 Olive Oil        | oil
 Maca Powder      | food
 Raw Cacao Powder | food
 Cayenne Pepper   | food
 Ginger           | food
 Broccoli Rabe    | food
 Ubiquinol        | supplement
 Probiotics       | supplement
 Raw vitamin C    | supplement
(15 rows)

ladyd_apothecary_reference_boutique=# select products.product_name, categories.type from products inner join categories on products.category_id=categories.id order by categories.type asc;
   product_name   |    type    
------------------+------------
 Raw Cacao Powder | food
 Cayenne Pepper   | food
 Ginger           | food
 Broccoli Rabe    | food
 Maca Powder      | food
 Tea Tree Oil     | oil
 Olive Oil        | oil
 Clove Oil        | oil
 Shea Butter bar  | soap
 Chamomile bar    | soap
 Lavender bar     | soap
 Pine-Tar bar     | soap
 Ubiquinol        | supplement
 Probiotics       | supplement
 Raw vitamin C    | supplement
(15 rows)

ladyd_apothecary_reference_boutique=# select products.product_name, categories.type from products inner join categories on products.category_id=categories.id where categories.type = food;
ERROR:  column "food" does not exist
LINE 1: ...ucts.category_id=categories.id where categories.type = food;
                                                                  ^
ladyd_apothecary_reference_boutique=# select products.product_name, categories.type from products inner join categories on products.category_id=categories.id where categories.type = 'food';
   product_name   | type 
------------------+------
 Broccoli Rabe    | food
 Ginger           | food
 Cayenne Pepper   | food
 Raw Cacao Powder | food
 Maca Powder      | food
(5 rows)

ladyd_apothecary_reference_boutique=# select *, categories.type from products inner join categories on products.category_id=categories.id;
 id |   product_name   |                           description                           | price | category_id | id |    type    |    type    
----+------------------+-----------------------------------------------------------------+-------+-------------+----+------------+------------
  8 | Shea Butter bar  | Moisturizes and conditions skin                                 |     3 |           1 |  1 | soap       | soap
  7 | Chamomile bar    | Calming aromatherapy                                            |     5 |           1 |  1 | soap       | soap
  2 | Lavender bar     | fragrant bar                                                    |     7 |           1 |  1 | soap       | soap
  1 | Pine-Tar bar     | antseptic cleanser                                              |     5 |           1 |  1 | soap       | soap
 10 | Clove Oil        | Antiseptic and aromatic                                         |    12 |           2 |  2 | oil        | oil
  5 | Tea Tree Oil     | Posesses antifungul and antiseptic properties                   |     9 |           2 |  2 | oil        | oil
  3 | Olive Oil        | Cardiovascular support                                          |    15 |           2 |  2 | oil        | oil
 12 | Maca Powder      | Balances hormones                                               |    13 |           3 |  3 | food       | food
 11 | Raw Cacao Powder | Provides excellent circulation support                          |    18 |           3 |  3 | food       | food
  9 | Cayenne Pepper   | Increases metabolism                                            |     2 |           3 |  3 | food       | food
  6 | Ginger           | Increases circulation                                           |     7 |           3 |  3 | food       | food
  4 | Broccoli Rabe    | Eliminates nausea                                               |     4 |           3 |  3 | food       | food
 15 | Ubiquinol        | Supports a healthy heart                                        |    15 |           4 |  4 | supplement | supplement
 14 | Probiotics       | Restores good bacteria in gut                                   |    30 |           4 |  4 | supplement | supplement
 13 | Raw vitamin C    | Supplies the body with antioxidants and fights cellular rusting |    25 |           4 |  4 | supplement | supplement
(15 rows)
ladyd_apothecary_reference_boutique=# 
--
✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·4|✔] 
22:00 $ git push origin master
fatal: unable to access 'https://github.com/Lady-D/LadyD_Apothecary_Reference_Boutique.git/': Could not resolve host: github.com
✘-128 ~/wdi/unit02/projects/ladyd_boutique [master ↑·4|✔] 
22:02 $ cd ..
✔ ~/wdi/unit02/projects [master ↑·4|✔] 
22:02 $ git push origin master
fatal: unable to access 'https://github.com/Lady-D/LadyD_Apothecary_Reference_Boutique.git/': Could not resolve host: github.com
✘-128 ~/wdi/unit02/projects [master ↑·4|✔] 
22:02 $ 
--
GET / 304 21.898 ms - -
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    id: 1,
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 2,
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7,
    category_id: 1 },
  anonymous {
    id: 3,
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15,
    category_id: 2 },
  anonymous {
    id: 4,
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4,
    category_id: 3 },
  anonymous {
    id: 5,
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9,
    category_id: 2 },
  anonymous {
    id: 6,
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7,
    category_id: 3 },
  anonymous {
    id: 7,
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 8,
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3,
    category_id: 1 },
  anonymous {
    id: 9,
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2,
    category_id: 3 },
  anonymous {
    id: 10,
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12,
    category_id: 2 },
  anonymous {
    id: 11,
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18,
    category_id: 3 },
  anonymous {
    id: 12,
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13,
    category_id: 3 },
  anonymous {
    id: 13,
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25,
    category_id: 4 },
  anonymous {
    id: 14,
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30,
    category_id: 4 },
  anonymous {
    id: 15,
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15,
    category_id: 4 } ] 'res.locals.products'
GET /products 500 63.504 ms - 1196
Error: Failed to lookup view "products/index" in views directory "/Users/student_23/wdi/unit02/projects/ladyd_boutique/views"
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:580:17)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at boutiqueRouter.get (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:12:9)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at boutiqueModels.listAllProducts.then.data (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:11:5)
    at process._tickCallback (internal/process/next_tick.js:109:7)
--
rs
[nodemon] starting `node server.js`
[Function: listProducts]
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
[Function: listProducts]
Listening on port 3000
rs
[nodemon] starting `node server.js`
[Function: listProducts]
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET / 500 22.556 ms - 1899
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/index.ejs:8
    6| 
    7| 
 >> 8|   <%products.forEach((products) => { %>
    9|   <div class="products">
    10|    <h5>
    11|    <%=products.product_name%>

Cannot read property 'forEach' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:15)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at app.get (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:25:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET / 500 16.304 ms - 1899
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/index.ejs:8
    6| 
    7| 
 >> 8|   <%products.forEach((products) => { %>
    9|   <div class="products">
    10|    <h5>
    11|    <%=products.product_name%>

Cannot read property 'forEach' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:15)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at app.get (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:25:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
GET / 500 6.252 ms - 1899
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/index.ejs:8
    6| 
    7| 
 >> 8|   <%products.forEach((products) => { %>
    9|   <div class="products">
    10|    <h5>
    11|    <%=products.product_name%>

Cannot read property 'forEach' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:15)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at app.get (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:25:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
GET / 500 2.196 ms - 1899
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/index.ejs:8
    6| 
    7| 
 >> 8|   <%products.forEach((products) => { %>
    9|   <div class="products">
    10|    <h5>
    11|    <%=products.product_name%>

Cannot read property 'forEach' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:15)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at app.get (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:25:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
GET / 500 1.563 ms - 1899
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/index.ejs:8
    6| 
    7| 
 >> 8|   <%products.forEach((products) => { %>
    9|   <div class="products">
    10|    <h5>
    11|    <%=products.product_name%>

Cannot read property 'forEach' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:15)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at app.get (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:25:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
GET /favicon.ico 404 1.571 ms - 150
GET / 200 6.913 ms - 95
GET / 200 2.004 ms - 94
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET / 200 14.755 ms - 208
GET / 200 3.206 ms - 138
GET / 200 2.459 ms - 128
GET / 200 1.284 ms - 218
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:17
  listOneProduct;
  ^^^^^^^^^^^^^^

SyntaxError: Unexpected identifier
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:3:32)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202
        throw new Error(msg);
        ^

Error: Route.get() requires a callback function but got a [object Object]
    at Route.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202:15)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:10:2)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:11
.post(boutiqueController.createProduct);
^

SyntaxError: Unexpected token .
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:11
.post(boutiqueController.createProduct);
^

SyntaxError: Unexpected token .
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:11
.post(boutiqueController.createProduct);
^

SyntaxError: Unexpected token .
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:11
.post(boutiqueController.createProduct);
^

SyntaxError: Unexpected token .
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:11
.post(boutiqueController.createProduct);
^

SyntaxError: Unexpected token .
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:11
.post(boutiqueController.createProduct);
^

SyntaxError: Unexpected token .
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:11
.post(boutiqueController.createProduct);
^

SyntaxError: Unexpected token .
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET / 404 11.345 ms - 139
GET / 404 2.510 ms - 139
Listing all items in Product Table
There are  15 items in the Products table. 
GET /products 200 35.039 ms - 1174
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET / 200 9.862 ms - 2
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  15 items in the Products table. 
GET / 200 42.060 ms - 1174
Listing all items in Product Table
There are  15 items in the Products table. 
GET / 304 14.853 ms - -
Listing all items in Product Table
There are  15 items in the Products table. 
GET / 304 4.182 ms - -
Listing all items in Product Table
There are  15 items in the Products table. 
GET / 304 8.004 ms - -
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:10
    console.log(res.locals.products
                           ^^^^^^^^

SyntaxError: missing ) after argument list
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:5:28)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    id: 1,
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 2,
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7,
    category_id: 1 },
  anonymous {
    id: 3,
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15,
    category_id: 2 },
  anonymous {
    id: 4,
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4,
    category_id: 3 },
  anonymous {
    id: 5,
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9,
    category_id: 2 },
  anonymous {
    id: 6,
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7,
    category_id: 3 },
  anonymous {
    id: 7,
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 8,
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3,
    category_id: 1 },
  anonymous {
    id: 9,
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2,
    category_id: 3 },
  anonymous {
    id: 10,
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12,
    category_id: 2 },
  anonymous {
    id: 11,
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18,
    category_id: 3 },
  anonymous {
    id: 12,
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13,
    category_id: 3 },
  anonymous {
    id: 13,
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25,
    category_id: 4 },
  anonymous {
    id: 14,
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30,
    category_id: 4 },
  anonymous {
    id: 15,
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15,
    category_id: 4 } ]
GET / 304 51.634 ms - -
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    id: 1,
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 2,
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7,
    category_id: 1 },
  anonymous {
    id: 3,
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15,
    category_id: 2 },
  anonymous {
    id: 4,
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4,
    category_id: 3 },
  anonymous {
    id: 5,
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9,
    category_id: 2 },
  anonymous {
    id: 6,
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7,
    category_id: 3 },
  anonymous {
    id: 7,
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 8,
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3,
    category_id: 1 },
  anonymous {
    id: 9,
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2,
    category_id: 3 },
  anonymous {
    id: 10,
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12,
    category_id: 2 },
  anonymous {
    id: 11,
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18,
    category_id: 3 },
  anonymous {
    id: 12,
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13,
    category_id: 3 },
  anonymous {
    id: 13,
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25,
    category_id: 4 },
  anonymous {
    id: 14,
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30,
    category_id: 4 },
  anonymous {
    id: 15,
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15,
    category_id: 4 } ]
GET / 200 17.699 ms - 949
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    id: 1,
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 2,
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7,
    category_id: 1 },
  anonymous {
    id: 3,
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15,
    category_id: 2 },
  anonymous {
    id: 4,
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4,
    category_id: 3 },
  anonymous {
    id: 5,
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9,
    category_id: 2 },
  anonymous {
    id: 6,
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7,
    category_id: 3 },
  anonymous {
    id: 7,
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 8,
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3,
    category_id: 1 },
  anonymous {
    id: 9,
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2,
    category_id: 3 },
  anonymous {
    id: 10,
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12,
    category_id: 2 },
  anonymous {
    id: 11,
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18,
    category_id: 3 },
  anonymous {
    id: 12,
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13,
    category_id: 3 },
  anonymous {
    id: 13,
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25,
    category_id: 4 },
  anonymous {
    id: 14,
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30,
    category_id: 4 },
  anonymous {
    id: 15,
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15,
    category_id: 4 } ]
GET / 304 5.479 ms - -
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    id: 1,
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 2,
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7,
    category_id: 1 },
  anonymous {
    id: 3,
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15,
    category_id: 2 },
  anonymous {
    id: 4,
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4,
    category_id: 3 },
  anonymous {
    id: 5,
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9,
    category_id: 2 },
  anonymous {
    id: 6,
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7,
    category_id: 3 },
  anonymous {
    id: 7,
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 8,
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3,
    category_id: 1 },
  anonymous {
    id: 9,
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2,
    category_id: 3 },
  anonymous {
    id: 10,
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12,
    category_id: 2 },
  anonymous {
    id: 11,
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18,
    category_id: 3 },
  anonymous {
    id: 12,
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13,
    category_id: 3 },
  anonymous {
    id: 13,
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25,
    category_id: 4 },
  anonymous {
    id: 14,
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30,
    category_id: 4 },
  anonymous {
    id: 15,
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15,
    category_id: 4 } ]
GET / 200 12.311 ms - 3411
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 8…3] 
00:30 $ git add -A
✔ ~/wdi/unit02/projects/ladyd_boutique [master|●11] 
00:41 $ git commit -m "first route only -tested and working along with corresponding indes-ejs view-- all others commented out for now"
[master c9200b0] first route only -tested and working along with corresponding indes-ejs view-- all others commented out for now
 Committer: student_23 <student_23@robsanchez.home>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 11 files changed, 324 insertions(+), 116 deletions(-)
 rewrite ladyd_boutique/controllers/boutiqueController.js (77%)
 create mode 100644 ladyd_boutique/controllers/test-holding-file
 create mode 100644 ladyd_boutique/controllers/viewController.js
 delete mode 100644 ladyd_boutique/views/products.ejs
 create mode 100644 ladyd_boutique/views/show.ejs
✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|✔] 
Last login: Fri Apr 20 14:26:57 on ttys008
 GA General Assembly  Web Development Immersive 
------------------------------------------
git version 2.16.2
Homebrew 1.5.14 Homebrew/homebrew-core (git revision 4e691; last commit 2018-04-05)
ruby 2.5.0p0 (2017-12-25 revision 61468) [x86_64-darwin15]
node v6.11.3
psql (PostgreSQL) 10.3
------------------------------------------
type unwelcome to remove this message
✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|✚ 3] 
12:51 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:23
.delete(boutiqueController.destroyProduct);
^

SyntaxError: Unexpected token .
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202
        throw new Error(msg);
        ^

Error: Route.get() requires a callback function but got a [object Undefined]
    at Route.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202:15)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:21:2)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202
        throw new Error(msg);
        ^

Error: Route.get() requires a callback function but got a [object Undefined]
    at Route.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202:15)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:21:2)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202
        throw new Error(msg);
        ^

Error: Route.get() requires a callback function but got a [object Undefined]
    at Route.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202:15)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:21:2)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202
        throw new Error(msg);
        ^

Error: Route.get() requires a callback function but got a [object Undefined]
    at Route.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202:15)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:21:2)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202
        throw new Error(msg);
        ^

Error: Route.get() requires a callback function but got a [object Undefined]
    at Route.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202:15)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:21:2)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:103
getOneProduct,
^^^^^^^^^^^^^

SyntaxError: Unexpected identifier
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:4:28)
[nodemon] app crashed - waiting for file changes before starting...
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|✚ 7] 
13:45 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:103
getOneProduct,
^^^^^^^^^^^^^

SyntaxError: Unexpected identifier
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:4:28)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:103
getOneProduct,
^^^^^^^^^^^^^

SyntaxError: Unexpected identifier
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:4:28)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:104
createProduct,
^

ReferenceError: createProduct is not defined
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:104:1)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:4:28)
    at Module._compile (module.js:570:32)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '1' }
GET /1 500 20.627 ms - 1530
ReferenceError: heatlhyPromise is not defined
    at Object.listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/models/boutiqueFunctions.js:16:10)
    at getOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:20:18)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at /Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:281:22
    at param (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:354:14)
    at param (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:365:14)
    at Function.process_params (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:410:3)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '1' }
GET /1 500 22.054 ms - 1530
ReferenceError: heatlhyPromise is not defined
    at Object.listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/models/boutiqueFunctions.js:16:10)
    at getOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:20:18)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at /Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:281:22
    at param (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:354:14)
    at param (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:365:14)
    at Function.process_params (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:410:3)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET / 304 55.553 ms - -
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    id: 1,
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 2,
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7,
    category_id: 1 },
  anonymous {
    id: 3,
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15,
    category_id: 2 },
  anonymous {
    id: 4,
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4,
    category_id: 3 },
  anonymous {
    id: 5,
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9,
    category_id: 2 },
  anonymous {
    id: 6,
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7,
    category_id: 3 },
  anonymous {
    id: 7,
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5,
    category_id: 1 },
  anonymous {
    id: 8,
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3,
    category_id: 1 },
  anonymous {
    id: 9,
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2,
    category_id: 3 },
  anonymous {
    id: 10,
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12,
    category_id: 2 },
  anonymous {
    id: 11,
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18,
    category_id: 3 },
  anonymous {
    id: 12,
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13,
    category_id: 3 },
  anonymous {
    id: 13,
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25,
    category_id: 4 },
  anonymous {
    id: 14,
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30,
    category_id: 4 },
  anonymous {
    id: 15,
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15,
    category_id: 4 } ]
GET / 200 47.396 ms - 3411
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET / 200 47.889 ms - 2820
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET / 200 14.841 ms - 1174
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET / 200 9.074 ms - 2820
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET / 304 48.151 ms - -
{ id: '1' }
GET /1 500 9.364 ms - 1531
ReferenceError: heatlhyPromises is not defined
    at Object.listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/models/boutiqueFunctions.js:16:10)
    at getOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:20:18)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at /Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:281:22
    at param (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:354:14)
    at param (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:365:14)
    at Function.process_params (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:410:3)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '1' }
anonymous {
  id: 1,
  product_name: 'Pine-Tar bar',
  description: 'antseptic cleanser',
  price: 5,
  category_id: 1 }
GET /1 200 39.445 ms - 125
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/show.ejs:5
    3| 
    4| 
 >> 5| <%products.forEach((product) => { %>
    6|   <div class="product">
    7|    <h5>
    8|    <%=JSON.stringify(product)%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '1' }
anonymous {
  id: 1,
  product_name: 'Pine-Tar bar',
  description: 'antseptic cleanser',
  price: 5,
  category_id: 1 }
GET /1 304 37.861 ms - -
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/show.ejs:5
    3| 
    4| 
 >> 5| <%products.forEach((product) => { %>
    6|   <div class="product">
    7|    <h5>
    8|    <%=JSON.stringify(product)%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '1' }
anonymous {
  id: 1,
  product_name: 'Pine-Tar bar',
  description: 'antseptic cleanser',
  price: 5,
  category_id: 1 }
GET /1 200 14.388 ms - 125
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/show.ejs:5
    3| 
    4| 
 >> 5| <%products.forEach((product) => { %>
    6|   <div class="product">
    7|    <h5>
    8|    <%=JSON.stringify(product)%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '15' }
DELETE /15 500 16.487 ms - 50
{ id: '14' }
DELETE /14 500 3.588 ms - 50
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '1' }
anonymous {
  id: 1,
  product_name: 'Pine-Tar bar',
  description: 'antseptic cleanser',
  price: 5,
  category_id: 1 }
GET /1 304 37.167 ms - -
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/show.ejs:5
    3| 
    4| 
 >> 5| <%products.forEach((product) => { %>
    6|   <div class="product">
    7|    <h5>
    8|    <%=JSON.stringify(product)%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '14' }
DELETE /14 200 5.590 ms - 59
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000

{ id: 'products' }
GET /products 500 43.005 ms - 77
error: invalid input syntax for integer: "products"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
GET /products/14' 404 2.990 ms - 155
Listing all items in Product Table
There are  13 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 } ]
GET / 200 30.381 ms - 2460
{ id: '6' }
anonymous {
  id: 6,
  product_name: 'Ginger',
  description: 'Increases circulation',
  price: 7,
  category_id: 3 }
GET /6 200 12.176 ms - 122
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/show.ejs:5
    3| 
    4| 
 >> 5| <%products.forEach((product) => { %>
    6|   <div class="product">
    7|    <h5>
    8|    <%=JSON.stringify(product)%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE :::3000
    at Object.exports._errnoException (util.js:1020:11)
    at exports._exceptionWithHostPort (util.js:1043:20)
    at Server._listen2 (net.js:1258:14)
    at listen (net.js:1294:10)
    at Server.listen (net.js:1390:5)
    at EventEmitter.listen (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:31:5)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:29
  viewAddedProduct
  ^

ReferenceError: viewAddedProduct is not defined
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:29:3)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:3:32)
    at Module._compile (module.js:570:32)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE :::3000
    at Object.exports._errnoException (util.js:1020:11)
    at exports._exceptionWithHostPort (util.js:1043:20)
    at Server._listen2 (net.js:1258:14)
    at listen (net.js:1294:10)
    at Server.listen (net.js:1390:5)
    at EventEmitter.listen (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:31:5)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE :::3000
    at Object.exports._errnoException (util.js:1020:11)
    at exports._exceptionWithHostPort (util.js:1043:20)
    at Server._listen2 (net.js:1258:14)
    at listen (net.js:1294:10)
    at Server.listen (net.js:1390:5)
    at EventEmitter.listen (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:31:5)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  13 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 } ]
GET / 304 88.834 ms - -
{}
GET /new 500 7.694 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
{ id: 'products' }
GET /products 500 10.245 ms - 77
error: invalid input syntax for integer: "products"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: '1' }
anonymous {
  id: 1,
  product_name: 'Pine-Tar bar',
  description: 'antseptic cleanser',
  price: 5,
  category_id: 1 }
GET /1 304 11.207 ms - -
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/show.ejs:5
    3| 
    4| 
 >> 5| <%products.forEach((product) => { %>
    6|   <div class="product">
    7|    <h5>
    8|    <%=JSON.stringify(product)%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:20
.get(boutiqueController.createProduct, boutiqueViewController.addOneProduct);
^

SyntaxError: Unexpected token .
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:20
.get(
^

SyntaxError: Unexpected token .
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:11:24)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '1' }
anonymous {
  id: 1,
  product_name: 'Pine-Tar bar',
  description: 'antseptic cleanser',
  price: 5,
  category_id: 1 }
GET /1 304 39.254 ms - -
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/show.ejs:5
    3| 
    4| 
 >> 5| <%products.forEach((product) => { %>
    6|   <div class="product">
    7|    <h5>
    8|    <%=JSON.stringify(product)%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{}
GET /new 500 4.682 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE :::3000
    at Object.exports._errnoException (util.js:1020:11)
    at exports._exceptionWithHostPort (util.js:1043:20)
    at Server._listen2 (net.js:1258:14)
    at listen (net.js:1294:10)
    at Server.listen (net.js:1390:5)
    at EventEmitter.listen (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:31:5)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE :::3000
    at Object.exports._errnoException (util.js:1020:11)
    at exports._exceptionWithHostPort (util.js:1043:20)
    at Server._listen2 (net.js:1258:14)
    at listen (net.js:1294:10)
    at Server.listen (net.js:1390:5)
    at EventEmitter.listen (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:31:5)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
[nodemon] app crashed - waiting for file changes before starting...
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|✚ 7…2] 
15:54 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
{}
GET /new 500 31.472 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{}
GET /new 500 29.427 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
{}
GET /new 500 4.998 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|✚ 7…2] 
15:55 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
{}
GET /new 500 28.499 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
{}
GET /new 500 2.813 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{}
GET /new 500 31.639 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
Listing all items in Product Table
There are  13 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 } ]
GET / 304 19.579 ms - -
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{}
GET /new 500 34.452 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
{ id: 'news' }
GET /news 500 7.983 ms - 73
error: invalid input syntax for integer: "news"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
Listing all items in Product Table
There are  13 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 } ]
GET / 304 15.173 ms - -
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{}
GET /new 500 32.603 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /new 200 16.062 ms - 1624
TypeError: Cannot read property 'redirect' of undefined
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:17:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at /Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:275:10)
    at Function.handle (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:174:3)
    at router (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:47:12)
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|✚ 7…2] 
15:59 $ git add -A
✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|●9] 
15:59 $ git commit -m all crud functions tested successfully - except update which was not tested yet - ejs forms also render"
> git commit -m "all crud functions tested successfully - except update which was not tested yet - ejs forms also render"
> 
> \q
> 
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|●9✚ 1] 
16:38 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
GET /new 200 21.822 ms - 1736
TypeError: Cannot read property 'redirect' of undefined
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:17:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at /Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:275:10)
    at Function.handle (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:174:3)
    at router (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:47:12)
{ 'product_name ': 'Rose HIp',
  description: 'herbal flower',
  price: '10.00',
  category_id: '4' }
POST / 500 60.571 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /new 200 18.308 ms - 1738
{ 'product_name ': 'Black Walnut Oil',
  description: 'antiseptic ',
  price: '15.00',
  category_id: '2' }
POST / 500 49.845 ms - 69
Error: Property 'product_name' doesn't exist.
    at query.replace.name (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:163:19)
    at RegExp.[Symbol.replace] (native)
    at RegExp.[Symbol.replace] (native)
    at String.replace (native)
    at Object.object (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:143:22)
    at Object.$formatQuery [as formatQuery] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/formatting.js:304:29)
    at Database.$query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:133:40)
    at Database.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:259:23)
    at config.$npm.connect.pool.then.db (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/database.js:326:42)
    at process._tickCallback (internal/process/next_tick.js:109:7)
Listing all items in Product Table
There are  13 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 } ]
GET / 304 20.504 ms - -

^C✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|●9✚ 2] 
03:05 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  13 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 } ]
GET / 304 53.300 ms - -
GET /new 200 2.823 ms - 1736
{ product_name: 'Black Walnut Oil',
  description: 'antiseptic ',
  price: '15.00',
  category_id: '2' }
POST / 500 97.984 ms - 74
error: invalid input syntax for integer: "15.00"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
GET /new 200 1.195 ms - 1742
{ product_name: 'Black Walnut Oil',
  description: 'antiseptic ',
  price: '15',
  category_id: '2' }
anonymous {
  id: 16,
  product_name: 'Black Walnut Oil',
  description: 'antiseptic ',
  price: 15,
  category_id: 2 }
POST / 200 37.995 ms - 124
Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:356:11)
    at ServerResponse.header (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:767:10)
    at ServerResponse.send (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:170:12)
    at done (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1004:10)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:257:5)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
Listing all items in Product Table
There are  14 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Black Walnut Oil',
    description: 'antiseptic ',
    price: 15 } ]
GET / 200 11.077 ms - 2631
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  14 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Black Walnut Oil',
    description: 'antiseptic ',
    price: 15 } ]
GET / 304 55.846 ms - -
GET /new 304 3.342 ms - -
TypeError: Cannot read property 'redirect' of undefined
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:17:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at /Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:275:10)
    at Function.handle (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:174:3)
    at router (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:47:12)
{ product_name: 'Organic Pomegranate Juice',
  description: 'improves circulation and clears veins, arteries',
  price: '7',
  category_id: '3' }
anonymous {
  id: 17,
  product_name: 'Organic Pomegranate Juice',
  description: 'improves circulation and clears veins, arteries',
  price: 7,
  category_id: 3 }
POST / 200 42.922 ms - 168
--Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:356:11)
    at ServerResponse.header (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:767:10)
    at ServerResponse.send (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:170:12)
    at done (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1004:10)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:257:5)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
TypeError: Cannot read property 'redirect' of undefined
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:17:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at boutiqueModels.addProduct.then.data (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:47:5)
    at process._tickCallback (internal/process/next_tick.js:109:7)



^C✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|●9✚ 2] 
03:05 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  13 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 } ]
GET / 304 53.300 ms - -
GET /new 200 2.823 ms - 1736
{ product_name: 'Black Walnut Oil',
  description: 'antiseptic ',
  price: '15.00',
  category_id: '2' }
POST / 500 97.984 ms - 74
error: invalid input syntax for integer: "15.00"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
GET /new 200 1.195 ms - 1742
{ product_name: 'Black Walnut Oil',
  description: 'antiseptic ',
  price: '15',
  category_id: '2' }
anonymous {
  id: 16,
  product_name: 'Black Walnut Oil',
  description: 'antiseptic ',
  price: 15,
  category_id: 2 }
POST / 200 37.995 ms - 124
Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:356:11)
    at ServerResponse.header (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:767:10)
    at ServerResponse.send (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:170:12)
    at done (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1004:10)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:257:5)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
Listing all items in Product Table
There are  14 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Black Walnut Oil',
    description: 'antiseptic ',
    price: 15 } ]
GET / 200 11.077 ms - 2631
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  14 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Black Walnut Oil',
    description: 'antiseptic ',
    price: 15 } ]
GET / 304 55.846 ms - -
GET /new 304 3.342 ms - -
TypeError: Cannot read property 'redirect' of undefined
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:17:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at /Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:275:10)
    at Function.handle (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:174:3)
    at router (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:47:12)
{ product_name: 'Organic Pomegranate Juice',
  description: 'improves circulation and clears veins, arteries',
  price: '7',
  category_id: '3' }
anonymous {
  id: 17,
  product_name: 'Organic Pomegranate Juice',
  description: 'improves circulation and clears veins, arteries',
  price: 7,
  category_id: 3 }
POST / 200 42.922 ms - 168
Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:356:11)
    at ServerResponse.header (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:767:10)
    at ServerResponse.send (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:170:12)
    at done (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1004:10)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:257:5)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
TypeError: Cannot read property 'redirect' of undefined
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:17:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at boutiqueModels.addProduct.then.data (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:47:5)
    at process._tickCallback (internal/process/next_tick.js:109:7)
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|●9✚ 1] 
03:15 $ git add -A
✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·1|●9] 
03:15 $ git commit -m "fixed error - able to use form to create a new product entry"
[master 602fc9f] fixed error - able to use form to create a new product entry
 Committer: student_23 <student_23@robsanchez.home>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 9 files changed, 2845 insertions(+), 122 deletions(-)
 rewrite ladyd_boutique/controllers/boutiqueController.js (78%)
 create mode 100644 ladyd_boutique/testForm.html
 create mode 100644 ladyd_boutique/views/add.ejs
✔ ~/wdi/unit02/projects/ladyd_boutique [master ↑·2|✔] 
03:16 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /new 304 18.196 ms - -
TypeError: Cannot read property 'redirect' of undefined
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:17:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at /Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:275:10)
    at Function.handle (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:174:3)
    at router (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:47:12)
{ product_name: 'Spikenard Oil',
  description: 'Aromatherapy',
  price: '15',
  category_id: '2' }
anonymous {
  id: 18,
  product_name: 'Spikenard Oil',
  description: 'Aromatherapy',
  price: 15,
  category_id: 2 }
POST / 200 60.877 ms - 122
Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:356:11)
    at ServerResponse.header (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:767:10)
    at ServerResponse.send (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:170:12)
    at done (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1004:10)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:257:5)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
TypeError: Cannot read property 'redirect' of undefined
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:17:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at boutiqueModels.addProduct.then.data (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:47:5)
    at process._tickCallback (internal/process/next_tick.js:109:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202
        throw new Error(msg);
        ^

Error: Route.get() requires a callback function but got a [object Undefined]
    at Route.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202:15)
    at Function.proto.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:510:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:19:16)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202
        throw new Error(msg);
        ^

Error: Route.get() requires a callback function but got a [object Undefined]
    at Route.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:202:15)
    at Function.proto.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:510:19)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:19:16)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /new 500 23.516 ms - -
Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:356:11)
    at ServerResponse.header (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:767:10)
    at ServerResponse.json (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:264:10)
    at showError (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:7:19)
    at Layer.handle_error (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:71:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:135:13)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:97:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:17:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ product_name: 'Olive Leaf Extract',
  description: 'Supports immune system',
  price: '12',
  category_id: '4' }
anonymous {
  id: 19,
  product_name: 'Olive Leaf Extract',
  description: 'Supports immune system',
  price: 12,
  category_id: 4 }
POST / 200 60.906 ms - 137
Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:356:11)
    at ServerResponse.header (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:767:10)
    at ServerResponse.send (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:170:12)
    at done (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1004:10)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:257:5)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '1' }
anonymous {
  id: 1,
  product_name: 'Pine-Tar bar',
  description: 'antseptic cleanser',
  price: 5,
  category_id: 1 }
GET /1 304 53.596 ms - -
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/show.ejs:5
    3| 
    4| 
 >> 5| <%products.forEach((product) => { %>
    6|   <div class="product">
    7|    <h5>
    8|    <%=JSON.stringify(product)%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '12' }
anonymous {
  id: 12,
  product_name: 'Maca Powder',
  description: 'Balances hormones',
  price: 13,
  category_id: 3 }
GET /12 200 4.768 ms - 125
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/show.ejs:5
    3| 
    4| 
 >> 5| <%products.forEach((product) => { %>
    6|   <div class="product">
    7|    <h5>
    8|    <%=JSON.stringify(product)%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '12' }
PUT /12 500 12.376 ms - 69
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '12' }
PUT /12 500 31.136 ms - 69

^C


   ╭─────────────────────────────────────╮
   │                                     │
   │   Update available 5.6.0 → 5.8.0    │
   │     Run npm i -g npm to update      │
   │                                     │
   ╰─────────────────────────────────────╯



✘-1 ~/wdi/unit02/projects/ladyd_boutique [master ↑·2|✚ 3…1] 
15:48 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master ↑·2|✚ 3…1] 
15:48 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '15' }
GET /15 500 45.965 ms - 63
QueryResultError: 0
    at QueryResultError.Error (native)
    at new QueryResultError (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/errors/queryResult.js:131:24)
    at Query.ctx.db.client.query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:209:41)
    at Query.handleReadyForQuery (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/query.js:126:10)
    at Connection.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/client.js:163:19)
    at emitOne (events.js:96:13)
    at Connection.emit (events.js:188:7)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:117:12)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
Listing all items in Product Table
There are  17 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Black Walnut Oil',
    description: 'antiseptic ',
    price: 15 },
  anonymous {
    product_name: 'Organic Pomegranate Juice',
    description: 'improves circulation and clears veins, arteries',
    price: 7 },
  anonymous {
    product_name: 'Spikenard Oil',
    description: 'Aromatherapy',
    price: 15 },
  anonymous {
    product_name: 'Olive Leaf Extract',
    description: 'Supports immune system',
    price: 12 } ]
GET / 200 29.171 ms - 3199
{ id: '12' }
anonymous {
  id: 12,
  product_name: 'Maca Powder',
  description: 'Balances hormones',
  price: 13,
  category_id: 3 }
GET /12 200 9.444 ms - 125
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/show.ejs:5
    3| 
    4| 
 >> 5| <%products.forEach((product) => { %>
    6|   <div class="product">
    7|    <h5>
    8|    <%=JSON.stringify(product)%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '12' }
PUT /12 500 11.045 ms - 69
Last login: Mon Apr 23 16:51:26 on ttys005
 GA General Assembly  Web Development Immersive 
------------------------------------------
git version 2.16.2
Homebrew 1.5.14 Homebrew/homebrew-core (git revision 4e691; last commit 2018-04-05)
ruby 2.5.0p0 (2017-12-25 revision 61468) [x86_64-darwin15]
node v6.11.3
psql (PostgreSQL) 10.3
------------------------------------------
type unwelcome to remove this message
✔ ~ 
18:34 $ cd wdi
✔ ~/wdi 
18:34 $ cd unit02
✔ ~/wdi/unit02 
18:35 $ ls
hw                           lessons
internet-fundamentals-lesson projects
labs
✔ ~/wdi/unit02 
18:36 $ cd projects
✔ ~/wdi/unit02/projects [master|✚ 20…39] 
18:37 $ ls
UPDATEDv2 User Story Board_MVP_and_Relational_Database_Map.2.pdf
ladyd_boutique
✔ ~/wdi/unit02/projects [master|✚ 20…39] 
18:38 $ npm run dev
npm ERR! path /Users/student_23/wdi/unit02/projects/package.json
npm ERR! code ENOENT
npm ERR! errno -2
npm ERR! syscall open
npm ERR! enoent ENOENT: no such file or directory, open '/Users/student_23/wdi/unit02/projects/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/student_23/.npm/_logs/2018-04-23T22_39_11_878Z-debug.log
✘-254 ~/wdi/unit02/projects [master|✚ 20…39] 
18:39 $ ls
UPDATEDv2 User Story Board_MVP_and_Relational_Database_Map.2.pdf
ladyd_boutique
✔ ~/wdi/unit02/projects [master|✚ 20…39] 
18:39 $ ls
UPDATEDv2 User Story Board_MVP_and_Relational_Database_Map.2.pdf
ladyd_boutique
✔ ~/wdi/unit02/projects [master|✚ 20…39] 
18:39 $ cd ladyd_boutique/
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:39 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
GET / 500 24.522 ms - 1642
SyntaxError: Unexpected token ) in /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/index.ejs while compiling ejs

If the above error is not helpful, you may want to try EJS-Lint:
https://github.com/RyanZim/EJS-Lint
    at Object.compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12)
    at Object.compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:388:16)
    at handleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:212:18)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:16)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at app.get (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:28:7)
psql -f seeds.sql -d postgres

^C^C
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:46 $ psql -f seeds.sql-d
seeds.sql-d: No such file or directory
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:46 $ psql -f db/seeds.sql-d
db/seeds.sql-d: No such file or directory
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:47 $ psql -f /db/seeds.sql-d
/db/seeds.sql-d: No such file or directory
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:47 $ psql -f db/seeds.sql-d
db/seeds.sql-d: No such file or directory
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:53 $ psql -f db/seeds.sql -d
psql: option requires an argument -- d
Try "psql --help" for more information.
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:57 $ psql -f db/seeds.sql --d
psql: option `--d' requires an argument
Try "psql --help" for more information.
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:58 $ psql -f db/seeds.sql
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
psql:db/seeds.sql:4: NOTICE:  drop cascades to constraint products_category_id_fkey on table products
DROP TABLE
DROP TABLE
CREATE TABLE
CREATE TABLE
INSERT 0 4
INSERT 0 15
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:02 $ \l
-bash: l: command not found
✘-127 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:03 $ psql postgres -d
psql: option requires an argument -- d
Try "psql --help" for more information.
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:03 $ psql -d postgres
psql (10.3)
Type "help" for help.

postgres=# \l
                                                  List of databases
                Name                 |   Owner    | Encoding |   Collate   |    Ctype    |     Access privileges     
-------------------------------------+------------+----------+-------------+-------------+---------------------------
 carmen                              | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 cheese_db                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 flashcards_dev                      | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 hogwarts_crud                       | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 hogwarts_crud_test                  | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 ladyd_apothecary_reference_boutique | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 movies_lab_db                       | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 musicdb                             | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 n64                                 | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 pizza_dev                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 postgres                            | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 quotes_db                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 student_23                          | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 template0                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/student_23            +
                                     |            |          |             |             | student_23=CTc/student_23
 template1                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/student_23            +
                                     |            |          |             |             | student_23=CTc/student_23
 todo_db                             | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 wdi                                 | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
(17 rows)

postgres=# \d
                   List of relations
 Schema |         Name          |   Type   |   Owner    
--------+-----------------------+----------+------------
 public | cheeses               | table    | student_23
 public | cheeses_cheese_id_seq | sequence | student_23
 public | houses                | table    | student_23
 public | houses_id_seq         | sequence | student_23
 public | students              | table    | student_23
 public | students_id_seq       | sequence | student_23
(6 rows)

postgres=# SELECT * FROM ladyd_apothecary_reference_boutique
postgres-# 
postgres-# ;
ERROR:  relation "ladyd_apothecary_reference_boutique" does not exist
LINE 1: SELECT * FROM ladyd_apothecary_reference_boutique
                      ^
postgres=# \q
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:05 $ \c ladyd_apothecary_reference_boutique
-bash: c: command not found
✘-127 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:06 $ psql -d postgres
psql (10.3)
Type "help" for help.

postgres=# \c ladyd_apothecary_reference_boutique
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
ladyd_apothecary_reference_boutique=# SELECT * FROM ladyd_apothecary_reference_boutique
;
ERROR:  relation "ladyd_apothecary_reference_boutique" does not exist
LINE 1: SELECT * FROM ladyd_apothecary_reference_boutique
                      ^
ladyd_apothecary_reference_boutique=# SELECT * FROM products;
 id |   product_name   |                           description                           | price | category_id |             image_url              
----+------------------+-----------------------------------------------------------------+-------+-------------+------------------------------------
  1 | Pine-Tar bar     | antseptic cleanser                                              |     5 |           1 | ./public/images/herbal-bouquet.jpg
  2 | Lavender bar     | fragrant bar                                                    |     7 |           1 | ./public/images/herbal-bouquet.jpg
  3 | Olive Oil        | Cardiovascular support                                          |    15 |           2 | ./public/images/herbal-bouquet.jpg
  4 | Broccoli Rabe    | Eliminates nausea                                               |     4 |           3 | ./public/images/herbal-bouquet.jpg
  5 | Tea Tree Oil     | Posesses antifungul and antiseptic properties                   |     9 |           2 | ./public/images/herbal-bouquet.jpg
  6 | Ginger           | Increases circulation                                           |     7 |           3 | ./public/images/herbal-bouquet.jpg
  7 | Chamomile bar    | Calming aromatherapy                                            |     5 |           1 | ./public/images/herbal-bouquet.jpg
  8 | Shea Butter bar  | Moisturizes and conditions skin                                 |     3 |           1 | ./public/images/herbal-bouquet.jpg
  9 | Cayenne Pepper   | Increases metabolism                                            |     2 |           3 | ./public/images/herbal-bouquet.jpg
 10 | Clove Oil        | Antiseptic and aromatic                                         |    12 |           2 | ./public/images/herbal-bouquet.jpg
 11 | Raw Cacao Powder | Provides excellent circulation support                          |    18 |           3 | ./public/images/herbal-bouquet.jpg
 12 | Maca Powder      | Balances hormones                                               |    13 |           3 | ./public/images/herbal-bouquet.jpg
 13 | Raw vitamin C    | Supplies the body with antioxidants and fights cellular rusting |    25 |           4 | ./public/images/herbal-bouquet.jpg
 14 | Probiotics       | Restores good bacteria in gut                                   |    30 |           4 | ./public/images/herbal-bouquet.jpg
 15 | Ubiquinol        | Supports a healthy heart                                        |    15 |           4 | ./public/images/herbal-bouquet.jpg
(15 rows)

ladyd_apothecary_reference_boutique=# ^C
ladyd_apothecary_reference_boutique=# ^C
ladyd_apothecary_reference_boutique=# \q
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:08 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
GET / 200 19.365 ms - 387
GET /css.css 304 4.083 ms - -
GET /images/flowers-herbs.jpg 304 1.325 ms - -
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET /products 200 33.932 ms - 4066
GET /css.css 304 0.363 ms - -
GET / 304 0.879 ms - -
GET /css.css 304 0.278 ms - -
GET /images/flowers-herbs.jpg 304 0.664 ms - -
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET /products 304 13.902 ms - -
GET /css.css 304 0.322 ms - -
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3 200 5.772 ms - 176
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: 'new' }
GET /products/new 500 10.943 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'edit' }
GET /products/edit 500 8.985 ms - 73
error: invalid input syntax for integer: "edit"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: '1' }
anonymous {
  id: 1,
  product_name: 'Pine-Tar bar',
  description: 'antseptic cleanser',
  price: 5,
  category_id: 1,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/1/edit 200 4.584 ms - 174
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:34:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: 'new' }
GET /products/new 500 12.604 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'delete' }
GET /products/delete 500 9.890 ms - 75
error: invalid input syntax for integer: "delete"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
GET /new 404 2.314 ms - 142
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /new 404 11.398 ms - 142
{ id: 'new' }
GET /products/new 500 31.636 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 32.969 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:57 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 32.782 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 36.814 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET /products/ 200 44.085 ms - 4066
GET /css.css 304 5.554 ms - -
{ id: 'add' }
GET /products/add 500 14.327 ms - 72
error: invalid input syntax for integer: "add"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
GET /products/products/add 404 2.428 ms - 160
{ id: 'products' }
GET /products/products 500 8.295 ms - 77
error: invalid input syntax for integer: "products"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
GET /products/products/new 404 0.992 ms - 160
GET / 304 2.068 ms - -
GET /css.css 304 0.446 ms - -
GET /images/flowers-herbs.jpg 304 0.483 ms - -
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET /products 304 10.569 ms - -
GET /css.css 304 0.393 ms - -
{ id: 'new' }
GET /products/new 500 12.251 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 32.700 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'new' }
GET /products/new 500 4.392 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/path-to-regexp/index.js:63
  path = ('^' + path + (strict ? '' : path[path.length - 1] === '/' ? '?' : '/?'))
                                               ^

TypeError: Cannot read property 'length' of undefined
    at pathtoRegexp (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/path-to-regexp/index.js:63:48)
    at new Layer (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:45:17)
    at Function.route (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:494:15)
    at Function.proto.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:509:22)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:20:2)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 34.486 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'new' }
GET /products/new 500 3.422 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 34.010 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 34.252 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'new' }
GET /products/new 500 4.272 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'new' }
GET /products/new 500 9.334 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'new' }
GET /products/new 500 2.982 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 34.608 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
20:12 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 35.664 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 404 9.614 ms - 151
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 500 14.667 ms - 1645
Error: Failed to lookup view "product/add" in views directory "/Users/student_23/wdi/unit02/projects/ladyd_boutique/views"
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:580:17)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at renderAddForm (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:28:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at /Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:275:10)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 500 19.178 ms - 2324
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/add.ejs:42
    40|             <!-- Creating product drop-down list-->
    41|               <select name="product.id">
 >> 42|                 <% products.forEach((product) => { %>
    43|                   <option value="<%=product.id%>"><%=product.product_name%></option>
    44|                 <% }) %>
    45|               </select>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:8)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at renderAddForm (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:28:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 500 18.770 ms - 2324
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/add.ejs:42
    40|             <!-- Creating product drop-down list-->
    41|               <select name="product.id">
 >> 42|                 <% products.forEach((product) => { %>
    43|                   <option value="<%=product.id%>"><%=product.product_name%></option>
    44|                 <% }) %>
    45|               </select>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:8)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:21:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 500 19.827 ms - 2348
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/add.ejs:42
    40|             <!-- Creating product drop-down list-->
    41|               <select name="product.id">
 >> 42|                 <% products.forEach((product) => { %>
    43|                   <option value="<%=product.id%>"><%=product.product_name%></option>
    44|                 <% }) %>
    45|               </select>

Cannot read property 'forEach' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:16)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:21:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
GET /products/new 500 3.977 ms - 2363
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/add.ejs:42
    40|             <!-- Creating product drop-down list-->
    41|             <!--   <select name="product.id">
 >> 42|                 <% products.forEach((product) => { %>
    43|                   <option value="<%=product.id%>"><%=product.product_name%></option>
    44|                 <% }) %>
    45|               </select> -->

Cannot read property 'forEach' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:16)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:21:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
rs
[nodemon] starting `node server.js`
Listening on port 3000
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
20:25 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 500 20.621 ms - 2363
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/add.ejs:42
    40|             <!-- Creating product drop-down list-->
    41|             <!--   <select name="product.id">
 >> 42|                 <% products.forEach((product) => { %>
    43|                   <option value="<%=product.id%>"><%=product.product_name%></option>
    44|                 <% }) %>
    45|               </select> -->

Cannot read property 'forEach' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:16)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:21:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
GET /products/new 200 6.768 ms - 2032
GET /css/css.css 404 2.175 ms - 150
{ product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: '3',
  category_id: '4',
  image_url: 'testing' }
anonymous {
  id: 16,
  product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: 3,
  category_id: 4,
  image_url: null }
POST /products 200 62.188 ms - 157
Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:356:11)
    at ServerResponse.header (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:767:10)
    at ServerResponse.send (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:170:12)
    at done (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1004:10)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:257:5)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
{ product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: '3',
  category_id: '4',
  image_url: 'testing' }
anonymous {
  id: 17,
  product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: 3,
  category_id: 4,
  image_url: null }
POST /products 200 14.621 ms - 157
Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:356:11)
    at ServerResponse.header (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:767:10)
    at ServerResponse.send (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:170:12)
    at done (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1004:10)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:257:5)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: '3',
  category_id: '4',
  image_url: 'testing' }
anonymous {
  id: 18,
  product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: 3,
  category_id: 4,
  image_url: null }
POST /products 200 71.796 ms - 2032
GET /css/css.css 404 7.772 ms - 150
{ product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: '3',
  category_id: '4',
  image_url: 'dkfjls' }
anonymous {
  id: 19,
  product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: null }
POST /products 200 24.822 ms - 2032
GET /css/css.css 404 2.922 ms - 150
{ product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: '3',
  category_id: '4',
  image_url: 'dkfjls' }
anonymous {
  id: 20,
  product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: null }
POST /products 200 11.326 ms - 2032
GET /css/css.css 404 0.586 ms - 150
Listing all items in Product Table
There are  20 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 } ]
GET /products 200 12.590 ms - 5290
GET /css.css 304 2.245 ms - -
Listing all items in Product Table
There are  20 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 } ]
GET /products 304 11.745 ms - -
GET /css.css 304 0.506 ms - -
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 304 24.060 ms - -
GET /css/css.css 404 3.293 ms - 150
{ product_name: 'fkskfk',
  description: 'kfjsldkj',
  price: '4',
  category_id: '4',
  image_url: '' }
anonymous {
  id: 21,
  product_name: 'fkskfk',
  description: 'kfjsldkj',
  price: 4,
  category_id: 4,
  image_url: null }
POST /products 302 55.236 ms - 54
GET /index 404 1.379 ms - 144
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 304 15.375 ms - -
GET /css/css.css 404 6.601 ms - 150
{ product_name: 'fskfh',
  description: 'dfjsdj',
  price: '4',
  category_id: '4',
  image_url: '' }
anonymous {
  id: 22,
  product_name: 'fskfh',
  description: 'dfjsdj',
  price: 4,
  category_id: 4,
  image_url: null }
POST /products 302 59.024 ms - 62
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 } ]
GET /products 200 11.912 ms - 5713
GET /css.css 304 2.610 ms - -
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/edit 500 24.611 ms - 2309
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 200 37.267 ms - 176
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 37.151 ms - -
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
20:48 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 36.686 ms - -
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 500 50.098 ms - 2309
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 500 37.627 ms - 73
TypeError: Cannot set property 'product' of undefined
    at boutiqueModels.listOneProduct.then.data (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:28:23)
    at process._tickCallback (internal/process/next_tick.js:109:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 500 49.729 ms - 2309
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 500 48.640 ms - 2546
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:20
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />
 >> 20|             <input name="description" type="text" value="<%description%>" />
    21|             <input name="price" type="number" value="<%price%>" />
    22|             <input name="category_id" type="number" value="<%number%>" >
    23|             <input name="image_url" type="text" value="<%image_url%>" >

description is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:17:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 200 18.164 ms - 1615
GET /css/css.css 404 2.264 ms - 150
{ product_name: 'Extra Virgin Olive Oil',
  description: 'Cardiovascular support',
  price: '18',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
PUT /products/3?_method=PUT 500 30.790 ms - 83
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 45.340 ms - -
GET /css/css.css 404 4.979 ms - 150
{ product_name: 'extra virgin Olive Oil',
  description: 'Cardiovascular support',
  price: '15',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
PUT /products/3?_method=PUT 500 25.419 ms - 83
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 49.587 ms - -
GET /css/css.css 404 4.902 ms - 150
{ product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: '15',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
PUT /products/3?_method=PUT 500 26.626 ms - 83
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 44.448 ms - -
GET /css/css.css 404 4.847 ms - 150
this is req.body in update: { product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: '15',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
PUT /products/3?_method=PUT 500 27.350 ms - 83
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 45.873 ms - -
GET /css/css.css 404 3.828 ms - 150
this is req.body in update: { product_name: 'Olive Oil',
  description: 'Cardiovascular ',
  price: '15',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
PUT /products/3?_method=PUT 500 32.599 ms - 76
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 49.454 ms - -
GET /css/css.css 404 4.514 ms - 150
this is req.body in update: { product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: '15',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
this is data in update: anonymous {
  id: 3,
  product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
PUT /products/3?_method=PUT 302 31.848 ms - 66
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3 500 7.206 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3 500 14.258 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 } ]
GET /products/ 200 12.417 ms - 5716
GET /css.css 304 3.530 ms - -
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 } ]
GET /products/ 304 45.775 ms - -
GET /css.css 304 3.721 ms - -
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 } ]
GET /products/ 304 13.940 ms - -
GET /css.css 304 0.470 ms - -
{ id: '12' }
this is data: anonymous {
  id: 12,
  product_name: 'Maca Powder',
  description: 'Balances hormones',
  price: 13,
  category_id: 3,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/12/edit 200 12.134 ms - 1613
GET /css/css.css 404 3.327 ms - 150
{ id: '18' }
this is data: anonymous {
  id: 18,
  product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: 3,
  category_id: 4,
  image_url: null }
GET /products/18/edit 200 3.251 ms - 1594
GET /css/css.css 404 0.812 ms - 150
{ id: '20' }
this is data: anonymous {
  id: 20,
  product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: null }
GET /products/20/edit 200 9.384 ms - 1568
GET /css/css.css 404 0.529 ms - 150
this is req.body in update: { product_name: 'jhkfkseksfkhelllo',
  description: 'dkfjlsd',
  price: '3',
  category_id: '4',
  image_url: '',
  id: '20' }
this is data in update: anonymous {
  id: 20,
  product_name: 'jhkfkseksfkhelllo',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: '' }
PUT /products/20?_method=PUT 302 34.443 ms - 62
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'jhkfkseksfkhelllo',
    description: 'dkfjlsd',
    price: 3 } ]
GET /products 200 5.307 ms - 5734
GET /css.css 304 0.263 ms - -
{ id: '21' }
this is data: anonymous {
  id: 21,
  product_name: 'fkskfk',
  description: 'kfjsldkj',
  price: 4,
  category_id: 4,
  image_url: null }
GET /products/21 500 16.562 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '20' }
this is data: anonymous {
  id: 20,
  product_name: 'jhkfkseksfkhelllo',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: '' }
GET /products/20 500 11.245 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '19' }
this is data: anonymous {
  id: 19,
  product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: null }
GET /products/19 500 19.335 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'jhkfkseksfkhelllo',
    description: 'dkfjlsd',
    price: 3 } ]
GET /products/ 200 17.744 ms - 5734
GET /css.css 304 5.395 ms - -
{ id: '15' }
this is data: anonymous {
  id: 15,
  product_name: 'Ubiquinol',
  description: 'Supports a healthy heart',
  price: 15,
  category_id: 4,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/15 500 6.387 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
GET /product/15 404 0.949 ms - 149
GET /products15 404 0.709 ms - 149

^C^C
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
21:14 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
Last login: Mon Apr 23 16:51:26 on ttys005
 GA General Assembly  Web Development Immersive 
------------------------------------------
git version 2.16.2
Homebrew 1.5.14 Homebrew/homebrew-core (git revision 4e691; last commit 2018-04-05)
ruby 2.5.0p0 (2017-12-25 revision 61468) [x86_64-darwin15]
node v6.11.3
psql (PostgreSQL) 10.3
------------------------------------------
type unwelcome to remove this message
✔ ~ 
18:34 $ cd wdi
✔ ~/wdi 
18:34 $ cd unit02
✔ ~/wdi/unit02 
18:35 $ ls
hw                           lessons
internet-fundamentals-lesson projects
labs
✔ ~/wdi/unit02 
18:36 $ cd projects
✔ ~/wdi/unit02/projects [master|✚ 20…39] 
18:37 $ ls
UPDATEDv2 User Story Board_MVP_and_Relational_Database_Map.2.pdf
ladyd_boutique
✔ ~/wdi/unit02/projects [master|✚ 20…39] 
18:38 $ npm run dev
npm ERR! path /Users/student_23/wdi/unit02/projects/package.json
npm ERR! code ENOENT
npm ERR! errno -2
npm ERR! syscall open
npm ERR! enoent ENOENT: no such file or directory, open '/Users/student_23/wdi/unit02/projects/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/student_23/.npm/_logs/2018-04-23T22_39_11_878Z-debug.log
✘-254 ~/wdi/unit02/projects [master|✚ 20…39] 
18:39 $ ls
UPDATEDv2 User Story Board_MVP_and_Relational_Database_Map.2.pdf
ladyd_boutique
✔ ~/wdi/unit02/projects [master|✚ 20…39] 
18:39 $ ls
UPDATEDv2 User Story Board_MVP_and_Relational_Database_Map.2.pdf
ladyd_boutique
✔ ~/wdi/unit02/projects [master|✚ 20…39] 
18:39 $ cd ladyd_boutique/
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:39 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
GET / 500 24.522 ms - 1642
SyntaxError: Unexpected token ) in /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/index.ejs while compiling ejs

If the above error is not helpful, you may want to try EJS-Lint:
https://github.com/RyanZim/EJS-Lint
    at Object.compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12)
    at Object.compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:388:16)
    at handleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:212:18)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:16)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at app.get (/Users/student_23/wdi/unit02/projects/ladyd_boutique/server.js:28:7)
psql -f seeds.sql -d postgres

^C^C
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:46 $ psql -f seeds.sql-d
seeds.sql-d: No such file or directory
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:46 $ psql -f db/seeds.sql-d
db/seeds.sql-d: No such file or directory
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:47 $ psql -f /db/seeds.sql-d
/db/seeds.sql-d: No such file or directory
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:47 $ psql -f db/seeds.sql-d
db/seeds.sql-d: No such file or directory
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:53 $ psql -f db/seeds.sql -d
psql: option requires an argument -- d
Try "psql --help" for more information.
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:57 $ psql -f db/seeds.sql --d
psql: option `--d' requires an argument
Try "psql --help" for more information.
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
18:58 $ psql -f db/seeds.sql
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
psql:db/seeds.sql:4: NOTICE:  drop cascades to constraint products_category_id_fkey on table products
DROP TABLE
DROP TABLE
CREATE TABLE
CREATE TABLE
INSERT 0 4
INSERT 0 15
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:02 $ \l
-bash: l: command not found
✘-127 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:03 $ psql postgres -d
psql: option requires an argument -- d
Try "psql --help" for more information.
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:03 $ psql -d postgres
psql (10.3)
Type "help" for help.

postgres=# \l
                                                  List of databases
                Name                 |   Owner    | Encoding |   Collate   |    Ctype    |     Access privileges     
-------------------------------------+------------+----------+-------------+-------------+---------------------------
 carmen                              | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 cheese_db                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 flashcards_dev                      | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 hogwarts_crud                       | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 hogwarts_crud_test                  | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 ladyd_apothecary_reference_boutique | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 movies_lab_db                       | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 musicdb                             | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 n64                                 | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 pizza_dev                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 postgres                            | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 quotes_db                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 student_23                          | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 template0                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/student_23            +
                                     |            |          |             |             | student_23=CTc/student_23
 template1                           | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/student_23            +
                                     |            |          |             |             | student_23=CTc/student_23
 todo_db                             | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 wdi                                 | student_23 | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
(17 rows)

postgres=# \d
                   List of relations
 Schema |         Name          |   Type   |   Owner    
--------+-----------------------+----------+------------
 public | cheeses               | table    | student_23
 public | cheeses_cheese_id_seq | sequence | student_23
 public | houses                | table    | student_23
 public | houses_id_seq         | sequence | student_23
 public | students              | table    | student_23
 public | students_id_seq       | sequence | student_23
(6 rows)

postgres=# SELECT * FROM ladyd_apothecary_reference_boutique
postgres-# 
postgres-# ;
ERROR:  relation "ladyd_apothecary_reference_boutique" does not exist
LINE 1: SELECT * FROM ladyd_apothecary_reference_boutique
                      ^
postgres=# \q
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:05 $ \c ladyd_apothecary_reference_boutique
-bash: c: command not found
✘-127 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:06 $ psql -d postgres
psql (10.3)
Type "help" for help.

postgres=# \c ladyd_apothecary_reference_boutique
You are now connected to database "ladyd_apothecary_reference_boutique" as user "student_23".
ladyd_apothecary_reference_boutique=# SELECT * FROM ladyd_apothecary_reference_boutique
;
ERROR:  relation "ladyd_apothecary_reference_boutique" does not exist
LINE 1: SELECT * FROM ladyd_apothecary_reference_boutique
                      ^
ladyd_apothecary_reference_boutique=# SELECT * FROM products;
 id |   product_name   |                           description                           | price | category_id |             image_url              
----+------------------+-----------------------------------------------------------------+-------+-------------+------------------------------------
  1 | Pine-Tar bar     | antseptic cleanser                                              |     5 |           1 | ./public/images/herbal-bouquet.jpg
  2 | Lavender bar     | fragrant bar                                                    |     7 |           1 | ./public/images/herbal-bouquet.jpg
  3 | Olive Oil        | Cardiovascular support                                          |    15 |           2 | ./public/images/herbal-bouquet.jpg
  4 | Broccoli Rabe    | Eliminates nausea                                               |     4 |           3 | ./public/images/herbal-bouquet.jpg
  5 | Tea Tree Oil     | Posesses antifungul and antiseptic properties                   |     9 |           2 | ./public/images/herbal-bouquet.jpg
  6 | Ginger           | Increases circulation                                           |     7 |           3 | ./public/images/herbal-bouquet.jpg
  7 | Chamomile bar    | Calming aromatherapy                                            |     5 |           1 | ./public/images/herbal-bouquet.jpg
  8 | Shea Butter bar  | Moisturizes and conditions skin                                 |     3 |           1 | ./public/images/herbal-bouquet.jpg
  9 | Cayenne Pepper   | Increases metabolism                                            |     2 |           3 | ./public/images/herbal-bouquet.jpg
 10 | Clove Oil        | Antiseptic and aromatic                                         |    12 |           2 | ./public/images/herbal-bouquet.jpg
 11 | Raw Cacao Powder | Provides excellent circulation support                          |    18 |           3 | ./public/images/herbal-bouquet.jpg
 12 | Maca Powder      | Balances hormones                                               |    13 |           3 | ./public/images/herbal-bouquet.jpg
 13 | Raw vitamin C    | Supplies the body with antioxidants and fights cellular rusting |    25 |           4 | ./public/images/herbal-bouquet.jpg
 14 | Probiotics       | Restores good bacteria in gut                                   |    30 |           4 | ./public/images/herbal-bouquet.jpg
 15 | Ubiquinol        | Supports a healthy heart                                        |    15 |           4 | ./public/images/herbal-bouquet.jpg
(15 rows)

ladyd_apothecary_reference_boutique=# ^C
ladyd_apothecary_reference_boutique=# ^C
ladyd_apothecary_reference_boutique=# \q
✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:08 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
GET / 200 19.365 ms - 387
GET /css.css 304 4.083 ms - -
GET /images/flowers-herbs.jpg 304 1.325 ms - -
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET /products 200 33.932 ms - 4066
GET /css.css 304 0.363 ms - -
GET / 304 0.879 ms - -
GET /css.css 304 0.278 ms - -
GET /images/flowers-herbs.jpg 304 0.664 ms - -
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET /products 304 13.902 ms - -
GET /css.css 304 0.322 ms - -
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3 200 5.772 ms - 176
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: 'new' }
GET /products/new 500 10.943 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'edit' }
GET /products/edit 500 8.985 ms - 73
error: invalid input syntax for integer: "edit"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: '1' }
anonymous {
  id: 1,
  product_name: 'Pine-Tar bar',
  description: 'antseptic cleanser',
  price: 5,
  category_id: 1,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/1/edit 200 4.584 ms - 174
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:34:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: 'new' }
GET /products/new 500 12.604 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'delete' }
GET /products/delete 500 9.890 ms - 75
error: invalid input syntax for integer: "delete"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
GET /new 404 2.314 ms - 142
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /new 404 11.398 ms - 142
{ id: 'new' }
GET /products/new 500 31.636 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 32.969 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
19:57 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 32.782 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 36.814 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET /products/ 200 44.085 ms - 4066
GET /css.css 304 5.554 ms - -
{ id: 'add' }
GET /products/add 500 14.327 ms - 72
error: invalid input syntax for integer: "add"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
GET /products/products/add 404 2.428 ms - 160
{ id: 'products' }
GET /products/products 500 8.295 ms - 77
error: invalid input syntax for integer: "products"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
GET /products/products/new 404 0.992 ms - 160
GET / 304 2.068 ms - -
GET /css.css 304 0.446 ms - -
GET /images/flowers-herbs.jpg 304 0.483 ms - -
Listing all items in Product Table
There are  15 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 } ]
GET /products 304 10.569 ms - -
GET /css.css 304 0.393 ms - -
{ id: 'new' }
GET /products/new 500 12.251 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 32.700 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'new' }
GET /products/new 500 4.392 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/path-to-regexp/index.js:63
  path = ('^' + path + (strict ? '' : path[path.length - 1] === '/' ? '?' : '/?'))
                                               ^

TypeError: Cannot read property 'length' of undefined
    at pathtoRegexp (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/path-to-regexp/index.js:63:48)
    at new Layer (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:45:17)
    at Function.route (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:494:15)
    at Function.proto.(anonymous function) [as get] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:509:22)
    at Object.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/router/boutiqueRouter.js:20:2)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 34.486 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'new' }
GET /products/new 500 3.422 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 34.010 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 34.252 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'new' }
GET /products/new 500 4.272 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'new' }
GET /products/new 500 9.334 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
{ id: 'new' }
GET /products/new 500 2.982 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 34.608 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
20:12 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
{ id: 'new' }
GET /products/new 500 35.664 ms - 72
error: invalid input syntax for integer: "new"
    at Connection.parseE (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:545:11)
    at Connection.parseMessage (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:370:19)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:113:22)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:547:20)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 404 9.614 ms - 151
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 500 14.667 ms - 1645
Error: Failed to lookup view "product/add" in views directory "/Users/student_23/wdi/unit02/projects/ladyd_boutique/views"
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:580:17)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at renderAddForm (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:28:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
    at /Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/index.js:275:10)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 500 19.178 ms - 2324
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/add.ejs:42
    40|             <!-- Creating product drop-down list-->
    41|               <select name="product.id">
 >> 42|                 <% products.forEach((product) => { %>
    43|                   <option value="<%=product.id%>"><%=product.product_name%></option>
    44|                 <% }) %>
    45|               </select>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:8)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at renderAddForm (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:28:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 500 18.770 ms - 2324
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/add.ejs:42
    40|             <!-- Creating product drop-down list-->
    41|               <select name="product.id">
 >> 42|                 <% products.forEach((product) => { %>
    43|                   <option value="<%=product.id%>"><%=product.product_name%></option>
    44|                 <% }) %>
    45|               </select>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:8)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:21:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 500 19.827 ms - 2348
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/add.ejs:42
    40|             <!-- Creating product drop-down list-->
    41|               <select name="product.id">
 >> 42|                 <% products.forEach((product) => { %>
    43|                   <option value="<%=product.id%>"><%=product.product_name%></option>
    44|                 <% }) %>
    45|               </select>

Cannot read property 'forEach' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:16)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:21:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
GET /products/new 500 3.977 ms - 2363
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/add.ejs:42
    40|             <!-- Creating product drop-down list-->
    41|             <!--   <select name="product.id">
 >> 42|                 <% products.forEach((product) => { %>
    43|                   <option value="<%=product.id%>"><%=product.product_name%></option>
    44|                 <% }) %>
    45|               </select> -->

Cannot read property 'forEach' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:16)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:21:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
rs
[nodemon] starting `node server.js`
Listening on port 3000
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
20:25 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 500 20.621 ms - 2363
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/add.ejs:42
    40|             <!-- Creating product drop-down list-->
    41|             <!--   <select name="product.id">
 >> 42|                 <% products.forEach((product) => { %>
    43|                   <option value="<%=product.id%>"><%=product.product_name%></option>
    44|                 <% }) %>
    45|               </select> -->

Cannot read property 'forEach' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:16)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at addOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:21:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
GET /products/new 200 6.768 ms - 2032
GET /css/css.css 404 2.175 ms - 150
{ product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: '3',
  category_id: '4',
  image_url: 'testing' }
anonymous {
  id: 16,
  product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: 3,
  category_id: 4,
  image_url: null }
POST /products 200 62.188 ms - 157
Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:356:11)
    at ServerResponse.header (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:767:10)
    at ServerResponse.send (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:170:12)
    at done (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1004:10)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:257:5)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
{ product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: '3',
  category_id: '4',
  image_url: 'testing' }
anonymous {
  id: 17,
  product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: 3,
  category_id: 4,
  image_url: null }
POST /products 200 14.621 ms - 157
Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:356:11)
    at ServerResponse.header (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:767:10)
    at ServerResponse.send (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:170:12)
    at done (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1004:10)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:257:5)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: '3',
  category_id: '4',
  image_url: 'testing' }
anonymous {
  id: 18,
  product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: 3,
  category_id: 4,
  image_url: null }
POST /products 200 71.796 ms - 2032
GET /css/css.css 404 7.772 ms - 150
{ product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: '3',
  category_id: '4',
  image_url: 'dkfjls' }
anonymous {
  id: 19,
  product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: null }
POST /products 200 24.822 ms - 2032
GET /css/css.css 404 2.922 ms - 150
{ product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: '3',
  category_id: '4',
  image_url: 'dkfjls' }
anonymous {
  id: 20,
  product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: null }
POST /products 200 11.326 ms - 2032
GET /css/css.css 404 0.586 ms - 150
Listing all items in Product Table
There are  20 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 } ]
GET /products 200 12.590 ms - 5290
GET /css.css 304 2.245 ms - -
Listing all items in Product Table
There are  20 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 } ]
GET /products 304 11.745 ms - -
GET /css.css 304 0.506 ms - -
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 304 24.060 ms - -
GET /css/css.css 404 3.293 ms - 150
{ product_name: 'fkskfk',
  description: 'kfjsldkj',
  price: '4',
  category_id: '4',
  image_url: '' }
anonymous {
  id: 21,
  product_name: 'fkskfk',
  description: 'kfjsldkj',
  price: 4,
  category_id: 4,
  image_url: null }
POST /products 302 55.236 ms - 54
GET /index 404 1.379 ms - 144
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/new 304 15.375 ms - -
GET /css/css.css 404 6.601 ms - 150
{ product_name: 'fskfh',
  description: 'dfjsdj',
  price: '4',
  category_id: '4',
  image_url: '' }
anonymous {
  id: 22,
  product_name: 'fskfh',
  description: 'dfjsdj',
  price: 4,
  category_id: 4,
  image_url: null }
POST /products 302 59.024 ms - 62
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Olive Oil',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 } ]
GET /products 200 11.912 ms - 5713
GET /css.css 304 2.610 ms - -
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET /products/edit 500 24.611 ms - 2309
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 200 37.267 ms - 176
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 37.151 ms - -
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
^C✔ ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
20:48 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 36.686 ms - -
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 500 50.098 ms - 2309
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 500 37.627 ms - 73
TypeError: Cannot set property 'product' of undefined
    at boutiqueModels.listOneProduct.then.data (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/boutiqueController.js:28:23)
    at process._tickCallback (internal/process/next_tick.js:109:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 500 49.729 ms - 2309
TypeError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:16
    14| 
    15|      <div id="updateProduct">
 >> 16|         <form action="/products/<%=product.id%>?_method=PUT" method="POST">
    17|             <h4>Enter the category id number of the product you would like to update: </h4>
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />

Cannot read property 'id' of undefined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:32)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 500 48.640 ms - 2546
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/edit.ejs:20
    18|             <br><br>
    19|             <input name="product_name" type="text" value="<%=product.product_name%>" />
 >> 20|             <input name="description" type="text" value="<%description%>" />
    21|             <input name="price" type="number" value="<%price%>" />
    22|             <input name="category_id" type="number" value="<%number%>" >
    23|             <input name="image_url" type="text" value="<%image_url%>" >

description is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:17:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at editOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:38:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 200 18.164 ms - 1615
GET /css/css.css 404 2.264 ms - 150
{ product_name: 'Extra Virgin Olive Oil',
  description: 'Cardiovascular support',
  price: '18',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
PUT /products/3?_method=PUT 500 30.790 ms - 83
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 45.340 ms - -
GET /css/css.css 404 4.979 ms - 150
{ product_name: 'extra virgin Olive Oil',
  description: 'Cardiovascular support',
  price: '15',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
PUT /products/3?_method=PUT 500 25.419 ms - 83
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 49.587 ms - -
GET /css/css.css 404 4.902 ms - 150
{ product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: '15',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
PUT /products/3?_method=PUT 500 26.626 ms - 83
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 44.448 ms - -
GET /css/css.css 404 4.847 ms - 150
this is req.body in update: { product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: '15',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
PUT /products/3?_method=PUT 500 27.350 ms - 83
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 45.873 ms - -
GET /css/css.css 404 3.828 ms - 150
this is req.body in update: { product_name: 'Olive Oil',
  description: 'Cardiovascular ',
  price: '15',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
PUT /products/3?_method=PUT 500 32.599 ms - 76
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3/edit 304 49.454 ms - -
GET /css/css.css 404 4.514 ms - 150
this is req.body in update: { product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: '15',
  category_id: '2',
  image_url: './public/images/herbal-bouquet.jpg',
  id: '3' }
this is data in update: anonymous {
  id: 3,
  product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
PUT /products/3?_method=PUT 302 31.848 ms - 66
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3 500 7.206 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '3' }
this is data: anonymous {
  id: 3,
  product_name: 'Olive Oil2',
  description: 'Cardiovascular support',
  price: 15,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/3 500 14.258 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 } ]
GET /products/ 200 12.417 ms - 5716
GET /css.css 304 3.530 ms - -
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 } ]
GET /products/ 304 45.775 ms - -
GET /css.css 304 3.721 ms - -
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 } ]
GET /products/ 304 13.940 ms - -
GET /css.css 304 0.470 ms - -
{ id: '12' }
this is data: anonymous {
  id: 12,
  product_name: 'Maca Powder',
  description: 'Balances hormones',
  price: 13,
  category_id: 3,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/12/edit 200 12.134 ms - 1613
GET /css/css.css 404 3.327 ms - 150
{ id: '18' }
this is data: anonymous {
  id: 18,
  product_name: 'Black Pepper',
  description: 'Tasty and acts as an antioxidant',
  price: 3,
  category_id: 4,
  image_url: null }
GET /products/18/edit 200 3.251 ms - 1594
GET /css/css.css 404 0.812 ms - 150
{ id: '20' }
this is data: anonymous {
  id: 20,
  product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: null }
GET /products/20/edit 200 9.384 ms - 1568
GET /css/css.css 404 0.529 ms - 150
this is req.body in update: { product_name: 'jhkfkseksfkhelllo',
  description: 'dkfjlsd',
  price: '3',
  category_id: '4',
  image_url: '',
  id: '20' }
this is data in update: anonymous {
  id: 20,
  product_name: 'jhkfkseksfkhelllo',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: '' }
PUT /products/20?_method=PUT 302 34.443 ms - 62
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'jhkfkseksfkhelllo',
    description: 'dkfjlsd',
    price: 3 } ]
GET /products 200 5.307 ms - 5734
GET /css.css 304 0.263 ms - -
{ id: '21' }
this is data: anonymous {
  id: 21,
  product_name: 'fkskfk',
  description: 'kfjsldkj',
  price: 4,
  category_id: 4,
  image_url: null }
GET /products/21 500 16.562 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '20' }
this is data: anonymous {
  id: 20,
  product_name: 'jhkfkseksfkhelllo',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: '' }
GET /products/20 500 11.245 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
{ id: '19' }
this is data: anonymous {
  id: 19,
  product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: null }
GET /products/19 500 19.335 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'jhkfkseksfkhelllo',
    description: 'dkfjlsd',
    price: 3 } ]
GET /products/ 200 17.744 ms - 5734
GET /css.css 304 5.395 ms - -
{ id: '15' }
this is data: anonymous {
  id: 15,
  product_name: 'Ubiquinol',
  description: 'Supports a healthy heart',
  price: 15,
  category_id: 4,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/15 500 6.387 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
GET /product/15 404 0.949 ms - 149
GET /products15 404 0.709 ms - 149

^C^C
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 20…39] 
21:14 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
GET / 200 16.231 ms - 387
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'jhkfkseksfkhelllo',
    description: 'dkfjlsd',
    price: 3 } ]
GET /products 200 39.357 ms - 5734
{ id: '19' }
this is data: anonymous {
  id: 19,
  product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: null }
GET /products/19 500 17.384 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
GET / 304 18.459 ms - -
GET /css.css 304 3.570 ms - -
GET /images/flowers-herbs.jpg 304 0.981 ms - -
GET / 304 2.993 ms - -
GET /css.css 304 0.429 ms - -
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'jhkfkseksfkhelllo',
    description: 'dkfjlsd',
    price: 3 } ]
GET /products 304 31.569 ms - -
GET /css.css 304 0.565 ms - -
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'jhkfkseksfkhelllo',
    description: 'dkfjlsd',
    price: 3 } ]
GET /products/ 304 11.283 ms - -
GET /css.css 304 0.383 ms - -
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'jhkfkseksfkhelllo',
    description: 'dkfjlsd',
    price: 3 } ]
GET /products/ 304 11.387 ms - -
GET /css.css 304 1.632 ms - -
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'jhkfkseksfkhelllo',
    description: 'dkfjlsd',
    price: 3 } ]
GET /products/ 304 13.939 ms - -
GET /css.css 304 4.177 ms - -
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5 },
  anonymous {
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7 },
  anonymous {
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4 },
  anonymous {
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9 },
  anonymous {
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7 },
  anonymous {
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5 },
  anonymous {
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3 },
  anonymous {
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2 },
  anonymous {
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12 },
  anonymous {
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18 },
  anonymous {
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13 },
  anonymous {
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25 },
  anonymous {
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30 },
  anonymous {
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous {
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3 },
  anonymous { product_name: 'jhkfkseksfk', description: 'dkfjlsd', price: 3 },
  anonymous { product_name: 'fkskfk', description: 'kfjsldkj', price: 4 },
  anonymous { product_name: 'fskfh', description: 'dfjsdj', price: 4 },
  anonymous {
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15 },
  anonymous {
    product_name: 'jhkfkseksfkhelllo',
    description: 'dkfjlsd',
    price: 3 } ]
GET /products/ 304 23.872 ms - -
GET /css.css 304 1.027 ms - -
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
Listing all items in Product Table
There are  22 items in the Products table. 
[ anonymous {
    id: 1,
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5,
    category_id: 1,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 2,
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7,
    category_id: 1,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 4,
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 5,
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9,
    category_id: 2,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 6,
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 7,
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5,
    category_id: 1,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 8,
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3,
    category_id: 1,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 9,
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 10,
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12,
    category_id: 2,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 11,
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 12,
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 13,
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25,
    category_id: 4,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 14,
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30,
    category_id: 4,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 15,
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15,
    category_id: 4,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 16,
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 17,
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 18,
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 19,
    product_name: 'jhkfkseksfk',
    description: 'dkfjlsd',
    price: 3,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 21,
    product_name: 'fkskfk',
    description: 'kfjsldkj',
    price: 4,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 22,
    product_name: 'fskfh',
    description: 'dfjsdj',
    price: 4,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 3,
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15,
    category_id: 2,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 20,
    product_name: 'jhkfkseksfkhelllo',
    description: 'dkfjlsd',
    price: 3,
    category_id: 4,
    image_url: '' } ]
GET /products/ 200 54.582 ms - 7796
GET /css.css 304 3.844 ms - -
{ id: '12' }
this is data: anonymous {
  id: 12,
  product_name: 'Maca Powder',
  description: 'Balances hormones',
  price: 13,
  category_id: 3,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/12 500 16.284 ms - 1906
ReferenceError: /Users/student_23/wdi/unit02/projects/ladyd_boutique/views/products/show.ejs:14
    12| 
    13| 
 >> 14| <%products.forEach((product) => { %>
    15|   <div class="products">
    16|    <h4>
    17|     <%=product.product_name%>

products is not defined
    at eval (eval at compile (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:592:12), <anonymous>:11:7)
    at returnedFn (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:623:17)
    at tryHandleCache (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:251:36)
    at View.exports.renderFile [as engine] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/ejs/lib/ejs.js:480:10)
    at View.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:640:10)
    at EventEmitter.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/response.js:1008:7)
    at listOneProduct (/Users/student_23/wdi/unit02/projects/ladyd_boutique/controllers/viewController.js:8:7)
    at Layer.handle [as handle_request] (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/express/lib/router/layer.js:95:5)
GET / 304 2.854 ms - -
GET /css.css 304 0.720 ms - -
GET /images/flowers-herbs.jpg 304 0.532 ms - -
{ id: '5' }
this is data: anonymous {
  id: 5,
  product_name: 'Tea Tree Oil',
  description: 'Posesses antifungul and antiseptic properties',
  price: 9,
  category_id: 2,
  image_url: './public/images/herbal-bouquet.jpg' }
GET /products/5 200 11.881 ms - 746
GET /css/css.css 404 3.219 ms - 150
GET /public/js/script.js 404 4.190 ms - 158
GET /products/public/images/herbal-bouquet.jpg 404 5.258 ms - 180
{ id: '19' }
this is data: anonymous {
  id: 19,
  product_name: 'jhkfkseksfk',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: null }
GET /products/19 200 8.683 ms - 712
GET /css/css.css 404 1.147 ms - 150
GET /public/js/script.js 404 1.317 ms - 158
{ id: '19' }
\q
^C^C
✘-1 ~/wdi/unit02/projects/ladyd_boutique [master|✚ 21…40] 
21:56 $ npm run dev

> ladyd_boutique@1.0.0 dev /Users/student_23/wdi/unit02/projects/ladyd_boutique
> nodemon server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
GET / 304 16.042 ms - -
GET /css.css 304 4.753 ms - -
GET /images/flowers-herbs.jpg 304 1.153 ms - -
{ id: '19' }
GET /products/19 500 28.676 ms - 63
QueryResultError: 0
    at QueryResultError.Error (native)
    at new QueryResultError (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/errors/queryResult.js:131:24)
    at Query.ctx.db.client.query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:209:41)
    at Query.handleReadyForQuery (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/query.js:126:10)
    at Connection.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/client.js:163:19)
    at emitOne (events.js:96:13)
    at Connection.emit (events.js:188:7)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:117:12)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
{ id: '19' }
GET /products/19 500 3.763 ms - 63
QueryResultError: 0
    at QueryResultError.Error (native)
    at new QueryResultError (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/errors/queryResult.js:131:24)
    at Query.ctx.db.client.query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:209:41)
    at Query.handleReadyForQuery (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/query.js:126:10)
    at Connection.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/client.js:163:19)
    at emitOne (events.js:96:13)
    at Connection.emit (events.js:188:7)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:117:12)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
{ id: '20' }
this is data: anonymous {
  id: 20,
  product_name: 'jhkfkseksfkhelllo',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: '' }
GET /products/20 200 12.733 ms - 725
GET /css/css.css 404 5.652 ms - 150
GET /public/js/script.js 404 6.765 ms - 158
{ id: '20' }
this is data: anonymous {
  id: 20,
  product_name: 'jhkfkseksfkhelllo',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: '' }
GET /products/20 200 9.846 ms - 724
GET /css/css.css 404 1.071 ms - 150
GET /public/js/script.js 404 1.274 ms - 158
{ id: '20' }
DELETE /products/20?_method=DELETE - - ms - -
{ id: '20' }
GET /products/20 500 8.656 ms - 63
QueryResultError: 0
    at QueryResultError.Error (native)
    at new QueryResultError (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/errors/queryResult.js:131:24)
    at Query.ctx.db.client.query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:209:41)
    at Query.handleReadyForQuery (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/query.js:126:10)
    at Connection.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/client.js:163:19)
    at emitOne (events.js:96:13)
    at Connection.emit (events.js:188:7)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:117:12)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '21' }
this is data: anonymous {
  id: 21,
  product_name: 'fkskfk',
  description: 'kfjsldkj',
  price: 4,
  category_id: 4,
  image_url: null }
GET /products/21 200 45.069 ms - 702
GET /css/css.css 404 6.297 ms - 150
GET /public/js/script.js 404 7.367 ms - 158
{ id: '21' }
DELETE /products/21?_method=DELETE 302 26.302 ms - 62
Listing all items in Product Table
There are  19 items in the Products table. 
[ anonymous {
    id: 1,
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5,
    category_id: 1,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 2,
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7,
    category_id: 1,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 4,
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 5,
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9,
    category_id: 2,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 6,
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 7,
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5,
    category_id: 1,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 8,
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3,
    category_id: 1,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 9,
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 10,
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12,
    category_id: 2,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 11,
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 12,
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 13,
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25,
    category_id: 4,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 14,
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30,
    category_id: 4,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 15,
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15,
    category_id: 4,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 16,
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 17,
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 18,
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 22,
    product_name: 'fskfh',
    description: 'dfjsdj',
    price: 4,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 3,
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15,
    category_id: 2,
    image_url: './public/images/herbal-bouquet.jpg' } ]
GET /products 200 10.852 ms - 6901
GET /css.css 304 1.823 ms - -
QueryResultError: 0         
    at QueryResultError.Error (native)
    at new QueryResultError (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/errors/queryResult.js:131:24)
    at Query.ctx.db.client.query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:209:41)
    at Query.handleReadyForQuery (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/query.js:126:10)
    at Connection.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/client.js:163:19)
    at emitOne (events.js:96:13)
    at Connection.emit (events.js:188:7)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:117:12)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
{ id: '20' }
this is data: anonymous {
  id: 20,
  product_name: 'jhkfkseksfkhelllo',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: '' }
GE0 12.733 ms - 725
GET /css/css.css 404 5.652 ms - 150
GET /public/js/script.js 404 6.765 ms - 158
{ id: '20' }
this is data: anonymous {
  id: 20,
  product_name: 'jhkfkseksfkhelllo',
  description: 'dkfjlsd',
  price: 3,
  category_id: 4,
  image_url: '' }
GET /products/20 200 9.846 ms - 724
GET /css/css.css 404 1.071 ms - 150
GET /public/js/script.js 404 1.274 ms - 158
{ id: '20' }
DELETE /products/20?_method=DELETE - - ms - -
{ id: '20' }
GET /products/20 500 8.656 ms - 63
QueryResultError: 0
    at QueryResultError.Error (native)
    at new QueryResultError (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/errors/queryResult.js:131:24)
    at Query.ctx.db.client.query (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg-promise/lib/query.js:209:41)
    at Query.handleReadyForQuery (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/query.js:126:10)
    at Connection.<anonymous> (/Users/student_23/wdi/unit02/projes/ladyd_boutique/node_modules/pg/lib/client.js:163:19)
    at emitOne (events.js:96:13)
    at Connection.emit (events.js:188:7)
    at Socket.<anonymous> (/Users/student_23/wdi/unit02/projects/ladyd_boutique/node_modules/pg/lib/connection.js:117:12)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Listening on port 3000
{ id: '21' }
this is data: anonymous {
  id: 21,
  product_name: 'fkskfk',
  description: 'kfjsldkj',
  price: 4,
  category_id: 4,
  image_url: null }
GET /products/21 200 45.069 ms - 702
GET /css/css.css 404 6.297 ms - 150
GET /public/js/script.js 404 7.367 ms - 158
{ id: '21' }
DELETE /products/21?_method=DELETE 302 26.302 ms - 62
Listing all items in Product Table
There are  19 items in the Products table. 
[ anonymous {
    id: 1,
    product_name: 'Pine-Tar bar',
    description: 'antseptic cleanser',
    price: 5,
    category_id: 1,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 2,
    product_name: 'Lavender bar',
    description: 'fragrant bar',
    price: 7,
    category_id: 1,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 4,
    product_name: 'Broccoli Rabe',
    description: 'Eliminates nausea',
    price: 4,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 5,
    product_name: 'Tea Tree Oil',
    description: 'Posesses antifungul and antiseptic properties',
    price: 9,
    category_id: 2,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 6,
    product_name: 'Ginger',
    description: 'Increases circulation',
    price: 7,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 7,
    product_name: 'Chamomile bar',
    description: 'Calming aromatherapy',
    price: 5,
    category_id: 1,
    image_url: './pub.jpg' },
  anonymous {
    id: 8,
    product_name: 'Shea Butter bar',
    description: 'Moisturizes and conditions skin',
    price: 3,
    category_id: 1,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 9,
    product_name: 'Cayenne Pepper',
    description: 'Increases metabolism',
    price: 2,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 10,
    product_name: 'Clove Oil',
    description: 'Antiseptic and aromatic',
    price: 12,
    category_id: 2,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 11,
    product_name: 'Raw Cacao Powder',
    description: 'Provides excellent circulation support',
    price: 18,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 12,
    product_name: 'Maca Powder',
    description: 'Balances hormones',
    price: 13,
    category_id: 3,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 13,
    product_name: 'Raw vitamin C',
    description: 'Supplies the body with antioxidants and fights cellular rusting',
    price: 25,
    category_id: 4,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 14,
    product_name: 'Probiotics',
    description: 'Restores good bacteria in gut',
    price: 30,
    category_id: 4,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 15,
    product_name: 'Ubiquinol',
    description: 'Supports a healthy heart',
    price: 15,
    category_id: 4,
    image_url: './public/images/herbal-bouquet.jpg' },
  anonymous {
    id: 16,
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 17,
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 18,
    product_name: 'Black Pepper',
    description: 'Tasty and acts as an antioxidant',
    price: 3,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 22,
    product_name: 'fskfh',
    description: 'dfjsdj',
    price: 4,
    category_id: 4,
    image_url: null },
  anonymous {
    id: 3,
    product_name: 'Olive Oil2',
    description: 'Cardiovascular support',
    price: 15,
    category_id: 2,
    image_url: './public/images/herbal-bouquet.jpg' } ]
GET /products 200 10.852 ms - 6901



