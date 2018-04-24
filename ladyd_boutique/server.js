// Importing all dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
const pgp = require('pg-promise');
const path = require('path');
const methodoverride = require("method-override");
//setting up router
const boutiqueRouter = require('./router/boutiqueRouter');

// setting up middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// setting up middleware for views functionality
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

//making more methods available in HTML EJS form
app.use(methodoverride('_method'))

//rending landing page for root route
app.get('/', (req, res) => {
  res.render('index');
});

//all other views are being rendered via /products route
app.use('/products', boutiqueRouter);

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});



