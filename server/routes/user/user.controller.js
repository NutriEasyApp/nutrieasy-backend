const { UserDao } = require("../../dao/user.dao");
const spendCalories = require('../../utils/calculationHealth')

class UserController {
  constructor() {
    this.dao = new UserDao();
  }

  async healthCalculator(request, response) {
    try {
      if(!request.body.id_user){
        return response.status(404).send({ error: 404, message: `User not provider`})
      }

      const user = await this.dao.getHealth(request.body.id_user)

      if(!user){
        return response.status(404).send({ error: 404, message: `User does not exist`})
      }

      return spendCalories(user)

    }catch(err) {
      return response.status(404).send({ error: 404, message: err.message})
    }
  }
}

module.exports = { UserController }
