const { HealthDao } = require('../../dao/health.dao');
const { DietDao } = require('../../dao/diet.dao');
const CalculationNutrition = require('../../utils/calculationHealth');
const AppError = require('../../http/errors/AppError');

class DietController {
  constructor() {
    this.daoHealth = new HealthDao();
    this.daoDiet = new DietDao();
  }

  async createDiet({
    id_user,
    genre,
    height,
    weight,
    age,
    bodytype,
    objective,
    exercisetime,
  }) {
    try {
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

      const diet = await this.daoDiet.createDiet({
        id_user,
        calories,
        carbohydrates,
        protein,
        lipids,
        water});

        return diet;

    } catch (err) {
      throw new AppError({ error: 404, message: err.message });
    }
  }

  async getDiet(request,response){

    const diet = await this.daoDiet.getDiet(request.params.id)

    if(!diet) return response.status(404).json({error:404, message:'The diet was not found'})

    return response.status(200).json(diet)

  }
}


module.exports = { DietController };
