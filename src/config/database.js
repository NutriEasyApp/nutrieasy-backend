require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_CONNECTION_STRING,
  pool: { min: 0, max: 10 },
};
