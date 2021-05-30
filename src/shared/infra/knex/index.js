const database = require('@config/database');
class Knex {
  constructor() {
    this.knex = require('knex');
  }

  getConnection(callback) {
    try {
      const conn = this.knex(database);
      return callback(conn);
    } catch (e) {
      return e;
    }
  }
}

module.exports = Knex;
