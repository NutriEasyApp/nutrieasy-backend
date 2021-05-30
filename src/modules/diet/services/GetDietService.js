const { AppError } = require('../../../shared/errors/AppError');
const { DietRepository } = require('../repositories/DietRepository');

class GetDietService {
  constructor() {
    this.dietRepository = new DietRepository();
  }

  async execute({ id_user }) {
    const diet = await this.dietRepository.getDiet({ id_user });

    if (!diet) throw new AppError('The diet was not found', 404);

    const dietPerMeal = {
      calories: Math.round(diet.calories / diet.meals),
      carbohydrates: Math.round(diet.carbohydrates / diet.meals),
      protein: Math.round(diet.protein / diet.meals),
      lipids: Math.round(diet.lipids / diet.meals),
      water: Math.round(diet.water / diet.meals),
    };

    return { diet, dietPerMeal };
  }

  async simpleDiet({ id_user }) {
    const diet = await this.dietRepository.getDiet({ id_user });

    if (!diet) throw new AppError('The diet was not found', 404);

    return diet;
  }
}

module.exports = { GetDietService };
