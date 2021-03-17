'use strict';
const crypto = require('crypto');
const Knex = require("../lib/drivers/knex");
const AppError = require("../http/errors/AppError");
const {StatusCode} = require("../http/statusCode/statusCode");

class UserDao {
  constructor() {
    this.knex = new Knex();
  }

  async getHealth(id_user) {
    return this.knex.getConnection(async (conn) => {
      const result = await conn('health_analysis').where({id_user}).first();
      conn.destroy();
      return result;
    })
  }

  async register({email, username, password}) {
    return this.knex.getConnection(async (conn) => {
      const userExists = await conn('users').where({email}).first();

      if (userExists) throw new AppError('user already registered', StatusCode.Bad_Request_400);

      const data = await conn('users').insert({
        username,
        password: crypto.createHash('sha256').update(password).digest('hex'),
        email,
        birthdate: 'null',
        last_login: new Date().toISOString(),
      }, ['id'])
      return data[0];
    })
  }

  async getUser({email, password}) {
    return this.knex.getConnection(async (conn) => {
      const data = await conn.select('id').from('users').where({
        email,
        password: crypto.createHash('sha256').update(password).digest('hex')
      }).first();
      return data;
    })
  }

  async getUserById({id}) {
    return this.knex.getConnection(async (conn) => {
      const data = await conn.select('id').from('users').where({
        id,
      }).first();
      return data;
    })
  }
}

module.exports = {UserDao};
