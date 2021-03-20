const { HealthDao } = require('../../dao/health.dao');
const { DietController } = require('../diet/diet.controller')

class HealthController {
  constructor() {
    this.daoHealth = new HealthDao();
    this.dietController = new DietController()
  }

  async createHealth(request, response) {
    try {
      const {
        id_user,
        genre,
        height,
        weight,
        birthdate,
        bodytype,
        objective,
        exercisetime,
      } = request.body

      /*const responseHealth = await this.daoHealth.createHealth({
        id_user,
        genre,
        height,
        weight,
        birthdate,
        bodytype,
        objective,
        exercisetime,
      })*/

      await this.dietController.createDiet({
        id_user,
        genre,
        height,
        weight,
        age:'21',
        bodytype,
        objective,
        exercisetime,})

      return response.status(201).json()

    } catch (err) {
      console.log(err);
      return response.status(404).send({ error: 404, message: err.message });

    }
  }
}

module.exports = { HealthController };
