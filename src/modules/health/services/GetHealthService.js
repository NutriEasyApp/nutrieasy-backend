const { AppError } = require('../../../shared/errors/AppError');
const { HealthRepository } = require('../repositories/HealthRepository');

class GetHealthService {
  constructor() {
    this.healthRepository = new HealthRepository();
  }
  async execute({ id_user }) {
    const health = await this.healthRepository.getHealth({ id_user });

    if (!health) throw new AppError('The health was not found', 404);

    return health;
  }
}

module.exports = { GetHealthService };
