const { GetDietService } = require('@modules/diet/services/GetDietService');
const { CreateMealDiet } = require('@modules/diet/providers/createMealDiet');

class DietController {
  async show(request, response) {
    const { id_user } = request.params;

    const getDietService = new GetDietService();
    const diet = await getDietService.execute({ id_user });
    const getMeals = new CreateMealDiet(diet.diet).getMeals();

    return response.status(200).json({ diet, getMeals });
  }
}

module.exports = { DietController };
