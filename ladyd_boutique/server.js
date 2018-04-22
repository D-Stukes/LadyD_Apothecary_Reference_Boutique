// Importing all dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
const pgp = require('pg-promise');
const path = require('path');

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

// app.get('/', (req, res) => {
//   res.send('hi');
//   // res.render('index',
//   //   {products: });
// });

app.use('/', boutiqueRouter);

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});



