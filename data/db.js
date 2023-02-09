
const knex = require('knex');

const knexFile = require('../knexfile');

const options = knexFile;

module.exports = knex(options);