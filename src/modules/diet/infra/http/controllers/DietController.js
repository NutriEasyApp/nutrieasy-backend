const { GetDietService } = require('../../../services/GetDietService');
const { CreateMealDiet } = require('../../../providers/createMealDiet');
class DietController {
  async show(request, response) {
    try {
      const { id_user } = request.params;

      const getDietService = new GetDietService();
      const diet = await getDietService.execute({ id_user });
      const getMeals = new CreateMealDiet(diet.diet).getMeals();

      return response.status(200).json({ diet, getMeals });
    } catch (err) {
      return response
        .status(err.statusCode || 404)
        .json({ message: err.message });
    }
  }
}

module.exports = { DietController };
