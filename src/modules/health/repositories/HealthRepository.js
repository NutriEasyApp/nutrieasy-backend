const Knex = require('../../../shared/infra/knex');

class HealthRepository {
  constructor() {
    this.knex = new Knex();
  }

  async getHealth({ id_user }) {
    return this.knex.getConnection(async conn => {
      const result = await conn('health_analysis').where({ id_user }).first();
      conn.destroy();
      return result;
    });
  }

  async createHealth({
    id_user,
    genre,
    height,
    weight,
    birthdate,
    bodytype,
    objective,
    exercisetime,
  }) {
    return this.knex.getConnection(async conn => {
      const result = await conn('health_analysis').insert({
        id_user,
        genre,
        height,
        weight,
        birthdate,
        bodytype,
        objective,
        exercisetime,
      });
      conn.destroy();

      return result;
    });
  }

  async updateHealth({
    id_user,
    genre,
    height,
    weight,
    birthdate,
    bodytype,
    objective,
    exercisetime,
  }) {
    return this.knex.getConnection(async conn => {
      const result = await conn('health_analysis').where({ id_user }).update({
        genre,
        height,
        weight,
        birthdate,
        bodytype,
        objective,
        exercisetime,
      });

      conn.destroy();
      return result;
    });
  }
}

module.exports = { HealthRepository };
