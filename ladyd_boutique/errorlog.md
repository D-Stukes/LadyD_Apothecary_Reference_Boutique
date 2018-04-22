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
--
