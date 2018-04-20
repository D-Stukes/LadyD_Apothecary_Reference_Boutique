// Importing all dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
// const pgp = require('pg-promise');
const path = require('path');

//setup connections to student and house routers
const studentsRouter = require('./boutiRouters/studentsRouter');
const houseRouter = require('./hogwartsRouters/houseRouter');

// setup middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// setup middleware for views functionality
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  // res.send('hello there');
  res.render('home/index');
});

app.use('/students', studentsRouter);
app.use('/houses', houseRouter);

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});



