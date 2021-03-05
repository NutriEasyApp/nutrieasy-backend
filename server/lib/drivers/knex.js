require('dotenv').config();

class Knex {
  constructor() {
    this.knex = require('knex');
    this.cn = process.env.DATABASE_CONNECTION_STRING;
  }

  getConnection(callback) {
    try {
      const conn = this.knex({
        client: 'pg',
        connection: this.cn,
        pool: { min: 0, max: 10 }
      });
      return callback(conn);
    }
    catch (e) {
      return e;
    }
  }
}

module.exports = Knex;
