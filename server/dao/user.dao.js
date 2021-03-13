'use strict';

const Knex = require("../lib/drivers/knex");

class UserDao {
  constructor() {
    this.knex = new Knex();
    }

    async getHealth(id_user){
        return this.knex.getConnection(async (conn) =>{
            const result = await conn('health_analysis').where({id_user}).first();
            conn.destroy();
            return result;
        })
    }
}

module.exports = { UserDao };
