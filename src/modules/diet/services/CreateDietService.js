const { DietRepository } = require('../repositories/DietRepository');
const { CalculationNutrition } = require('../providers/CalculationNutrition');
const { UpdateDietService } = require('./UpdateDietService');

class CreateDietService {
  constructor() {
    this.dietRepository = new DietRepository();
    this.updateDietService = new UpdateDietService();
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

    const dietExists = await this.dietRepository.getDiet({ id_user });

    if (!dietExists) {
      const diet = await this.dietRepository.createDiet({
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

    const diet = await this.updateDietService.execute({
      id_user,
      genre,
      height,
      weight,
      age,
      bodytype,
      objective,
      exercisetime,
      meals,
    });

    return diet;
  }
}

module.exports = { CreateDietService };
