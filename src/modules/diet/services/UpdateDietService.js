const { DietRepository } = require('../repositories/DietRepository');
const { CalculationNutrition } = require('../providers/CalculationNutrition');

class UpdateDietService {
  constructor() {
    this.dietRepository = new DietRepository();
  }

  async execute({
    id_user,
    genre,
    height,
    weight,
    age,
    bodytype,
    objective,
    exercisetime,
    meals,
  }) {
    const {
      calories,
      lipids,
      carbohydrates,
      water,
      protein,
    } = new CalculationNutrition({
      genre,
      height,
      weight,
      age,
      bodytype,
      objective,
      exercisetime,
    }).valuesNutritional();

    const diet = await this.dietRepository.updateDiet({
      id_user,
      calories,
      carbohydrates,
      protein,
      lipids,
      water,
      meals,
    });

    return diet;
  }
}

module.exports = { UpdateDietService };
