const { AppError } = require('@shared/errors/AppError');
const { HealthRepository } = require('../repositories/HealthRepository');
const { UpdateHealthService } = require('../services/UpdateHealthService');

class CreateHealthService {
  constructor() {
    this.healthRepository = new HealthRepository();
    this.updateHealthService = new UpdateHealthService();
  }

  async execute({
    id_user,
    genre,
    height,
    weight,
    birthdate,
    bodytype,
    objective,
    exercisetime,
    meals,
  }) {
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
      throw new AppError('Input data was not found', 404);
    }
    const healthExists = await this.healthRepository.getHealth({ id_user });

    if (!healthExists) {
      const health = await this.healthRepository.createHealth({
        id_user,
        genre,
        height,
        weight,
        birthdate,
        bodytype,
        objective,
        exercisetime,
      });
      return health;
    }

    const health = await this.updateHealthService.execute({
      id_user,
      genre,
      height,
      weight,
      birthdate,
      bodytype,
      objective,
      exercisetime,
      meals,
    });

    return health;
  }
}

module.exports = { CreateHealthService };
