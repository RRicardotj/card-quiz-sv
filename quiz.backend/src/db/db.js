const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  // eslint-disable-next-line no-console
  logging: process.env.DB_LOG === 'false' ? () => {} : console.log,
});
