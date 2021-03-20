'use strict';
const Knex = require('../lib/drivers/knex');
const { hash } = require('../shared/provider/encryption');

class UserDao {
  constructor() {
    this.knex = new Knex();
  }
  async register({ email, username, password }) {
    return this.knex.getConnection(async conn => {
      const data = await conn('users').insert(
        {
          username,
          password: hash(password),
          email,
          birthdate: 'null',
          last_login: new Date(),
        },
        ['id']
      );
      conn.destroy();
      return data[0];
    });
  }

  async getUser({ email }) {
    return this.knex.getConnection(async conn => {
      const data = await conn
        .select('id', 'password')
        .from('users')
        .where({
          email,
        })
        .first();
      conn.destroy();
      return data;
    });
  }

  async getUserByEmail({ email }) {
    return this.knex.getConnection(async conn => {
      const data = await conn
        .select('id')
        .from('users')
        .where({
          email,
        })
        .first();
      conn.destroy();
      return data;
    });
  }

  async getUserById({ id }) {
    return this.knex.getConnection(async conn => {
      const data = await conn
        .select('id')
        .from('users')
        .where({
          id,
        })
        .first();
      conn.destroy();
      return data;
    });
  }
}

module.exports = { UserDao };
