const { AppError } = require('../../../shared/errors/AppError');
const { HealthRepository } = require('../repositories/HealthRepository');

class UpdateHealthService {
  constructor() {
    this.healthRepository = new HealthRepository();
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

    const health = await this.healthRepository.updateHealth({
      id_user,
      genre,
      height,
      weight,
      birthdate,
      bodytype,
      objective,
      exercisetime,
    });
    console.log(health);
    if (!health) throw new AppError('Input data was not found', 404);

    return health;
  }
}

module.exports = { UpdateHealthService };
