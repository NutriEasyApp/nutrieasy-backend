const Knex = require('@shared/infra/knex');
const { hash } = require('@shared/providers/bcrypt');

class UserRepository {
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
        },
        ['id']
      );
      conn.destroy();
      return data[0];
    });
  }

  async getUserPasswordByEmail({ email }) {
    return this.knex.getConnection(async conn => {
      const data = await conn
        .select('id', 'password')
        .from('users')
        .where({
          email: email,
        })
        .first();
      conn.destroy();
      return data;
    });
  }

  async getUserPasswordById({ id }) {
    return this.knex.getConnection(async conn => {
      const data = await conn
        .select('id', 'password')
        .from('users')
        .where({
          id,
        })
        .first();
      conn.destroy();
      return data;
    });
  }

  async getUserIdByEmail({ email }) {
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

  async getUserIdById({ id }) {
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

  async getUserById({ id }) {
    return this.knex.getConnection(async conn => {
      const { password, ...data } = await conn('users').where({ id }).first();
      conn.destroy();
      return data;
    });
  }

  async updateUserPassword({ id, newPassword }) {
    return this.knex.getConnection(async conn => {
      const result = await conn('users')
        .where({ id })
        .update({
          password: hash(newPassword),
        });

      conn.destroy();
      return result;
    });
  }

  async updateUserToken({ id, pushNotificationToken }) {
    return this.knex.getConnection(async conn => {
      const result = await conn('users').where({ id }).update({
        token: pushNotificationToken,
      });

      conn.destroy();
      return result;
    });
  }
}

module.exports = { UserRepository };
