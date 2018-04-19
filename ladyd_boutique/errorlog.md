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
