const { differenceInDays, parseISO } = require('date-fns');
const { HealthDao } = require('../../dao/health.dao');
const { DietController } = require('../diet/diet.controller');

class HealthController {
  constructor() {
    this.daoHealth = new HealthDao();
    this.dietController = new DietController();
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
        meals,
      } = request.body;

      if (
        !(
          id_user &&
          genre &&
          height &&
          weight &&
          birthdate &&
          bodytype &&
          objective &&
          exercisetime &&
          meals
        )
      ) {
        return response
          .status(404)
          .json({ error: 404, message: 'Input data was not found' });
      }

      const responseHealth = await this.daoHealth.createHealth({
        id_user,
        genre,
        height,
        weight,
        birthdate,
        bodytype,
        objective,
        exercisetime,
      });

      if (!responseHealth)
        return response
          .status(404)
          .json({ error: 404, message: 'Erro in saving health data' });

      const diet = await this.dietController.createDiet({
        id_user,
        genre,
        height,
        weight,
        age: parseInt(differenceInDays(new Date(), parseISO(birthdate)) / 365),
        bodytype,
        objective,
        exercisetime,
        meals,
      });

      if (!diet)
        return response
          .status(404)
          .json({ error: 404, message: 'Erro in saving diet data' });

      return response.status(201).json({ responseHealth, diet });
    } catch (err) {
      return response.status(404).send({ error: 404, message: err.message });
    }
  }

  async getHealth(request, response) {
    try {
      const health = await this.daoHealth.getHealth(request.params.id);

      if (!health)
        return response
          .status(404)
          .json({ error: 404, message: 'The health was not found' });

      return response.status(200).json(health);
    } catch (err) {
      return response.status(404).send({ error: 404, message: 'The health was not found' });
    }
  }
}

module.exports = { HealthController };
