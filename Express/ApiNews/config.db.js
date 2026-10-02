const { Sequelize } = require('sequelize');
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = require('./config');

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  logging: false
});

module.exports = { connection };
