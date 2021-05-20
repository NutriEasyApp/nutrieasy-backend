const { differenceInDays, parseISO } = require('date-fns');
const {
  CreateHealthService,
} = require('../../../services/CreateHealthService');
const { GetHealthService } = require('../../../services/GetHealthService');
const {
  GetHistoryHealthService,
} = require('../../../services/GetHistoryHealthService');
const {
  CreateDietService,
} = require('../../../../diet/services/CreateDietService');
const {
  CreateHistoryHealthAnalysisService,
} = require('../../../services/CreateHistoryHealthAnalysisService');

class HealthController {
  async create(request, response) {
    const {
      id_user,
      genre,
      height,
      weight,
      birthdate,
      bodytype,
      objective,
      exercisetime,
      meals,
    } = request.body;

    const createHealthService = new CreateHealthService();
    const health = await createHealthService.execute({
      id_user,
      genre,
      height,
      weight,
      birthdate,
      bodytype,
      objective,
      exercisetime,
      meals,
    });

    const createDietService = new CreateDietService();
    const diet = await createDietService.execute({
      id_user,
      genre,
      height,
      weight,
      age: parseInt(differenceInDays(new Date(), parseISO(birthdate)) / 365),
      bodytype,
      objective,
      exercisetime,
      meals,
    });

    const createHistoryHealthAnalysisService = new CreateHistoryHealthAnalysisService();
    const history = await createHistoryHealthAnalysisService.execute({
      id_user,
      weight,
      exercisetime,
    });

    return response.status(201).json({ health, diet, history });
  }

  async show(request, response) {
    const { id_user } = request.params;

    const getHealthService = new GetHealthService();
    const health = await getHealthService.execute({ id_user });

    return response.status(200).json(health);
  }

  async getHistory(request, response) {
    // try {
    const { id_user } = request.params;

    const getHistoryHealthService = new GetHistoryHealthService();
    const history = await getHistoryHealthService.execute({ id_user });

    return response.status(200).json(history);
    // } catch (err) {
    // console.log(err);
    // throw err;
    // return response.status(404).json(err);
    // }
  }
}

module.exports = { HealthController };
