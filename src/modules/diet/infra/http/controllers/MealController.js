const { GetDietService } = require('@modules/diet/services/GetDietService');
const { CreateMealDiet } = require('@modules/diet/providers/createMealDiet');

class MealController {
  async show(request, response) {
    const { id_user } = request.params;

    const getDietService = new GetDietService();
    const diet = await getDietService.simpleDiet({ id_user });
    const getMeals = new CreateMealDiet(diet).getMeals();

    return response.status(200).json(getMeals);
  }
}

module.exports = { MealController };
