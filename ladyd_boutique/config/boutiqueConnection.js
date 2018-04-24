//importing configurations and libraries
//load all env variables from .env file into process.env object.
require(‘dotenv’).config()
const config = require('./dbConfig.js');
const pgp = require('pg-promise')();
const dbBoutique = pgp(config);

module.exports = dbBoutique;
