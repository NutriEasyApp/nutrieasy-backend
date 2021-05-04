'use strict';
const Knex = require('../lib/drivers/knex');

class DietDao {
  constructor() {
    this.knex = new Knex();
  }

  async getDiet(id_user) {
    return this.knex.getConnection(async conn => {
      const result = await conn('proposed_diet').where({ id_user }).first();
      conn.destroy();
      return result;
    });
  }

  async createDiet({
    id_user,
    calories,
    carbohydrates,
    protein,
    lipids,
    water,
    meals,
  }) {
    return this.knex.getConnection(async conn => {
      const result = await conn('proposed_diet').insert({
        id_user,
        calories,
        carbohydrates,
        protein,
        lipids,
        water,
        meals,
      });
      conn.destroy();
      return result;
    });
  }
}

module.exports = { DietDao };
