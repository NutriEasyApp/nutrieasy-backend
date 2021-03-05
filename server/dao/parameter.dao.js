'use strict';

const Knex = require("../lib/drivers/knex");

class ParameterDao {

  constructor() {
    this.knex = new Knex();
  }

  async all() {
    return await this.knex.getConnection(async (conn) => {
      const result = await conn('parameters');
      conn.destroy();
      return result;
    });
  }

  async get(name, key) {
    return await this.knex.getConnection(async (conn) => {
      const result = await conn.select('name', 'key', 'value').from('parameters').where({
        name,
        key
      }).first()
      conn.destroy();
      return result.value;
    })
  }

  async set(name, key, value) {
    return await this.knex.getConnection(async (conn) => {
      const result = await conn('parameters')
        .insert({
          name,
          key,
          value
        })
        .onConflict(["name", "key"])
        .merge({
          updated_at: new Date()
        })
      conn.destroy();
      return result;
    })
  }
}

module.exports = { ParameterDao };
