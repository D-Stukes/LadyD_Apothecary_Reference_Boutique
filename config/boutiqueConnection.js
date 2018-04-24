//importing configurations and libraries
//load all env variables from .env file into process.env object.
// require(‘dotenv’).config()
const config = require('./dbConfig.js');
const pgp = require('pg-promise')();
// const dbBoutique = pgp(config);

function setDatabase() {
    if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        return pgp(config);
    } else if (process.env.NODE_ENV === 'production') {
        return pgp(process.env.DATABASE_URL);
    }
}

const dbBoutique = setDatabase();

module.exports = dbBoutique;
