const { GetDietService } = require('../../../services/GetDietService');
const { CreateMealDiet } = require('../../../providers/createMealDiet');
class MealController {
  async show(request, response) {
    try {
      const { id_user } = request.params;

      const getDietService = new GetDietService();
      const diet = await getDietService.simpleDiet({ id_user });
      const getMeals = new CreateMealDiet(diet).getMeals();

      return response.status(200).json(getMeals);
    } catch (err) {
      return response
        .status(err.statusCode || 404)
        .json({ message: err.message });
    }
  }
}

module.exports = { MealController };
