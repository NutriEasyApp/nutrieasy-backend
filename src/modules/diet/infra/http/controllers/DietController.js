const { GetDietService } = require('@modules/diet/services/GetDietService');

class DietController {
  async show(request, response) {
    const { id_user } = request.params;
    const getDietService = new GetDietService();
    const diet = await getDietService.execute({ id_user });

    return response.status(200).json({ diet });
  }
}

module.exports = { DietController };
