//importing configurations and libraries

const config = require('./dbConfig.js');
const pgp = require('pg-promise')();
const dbBoutique = pgp(config);

module.exports = dbBoutique;
