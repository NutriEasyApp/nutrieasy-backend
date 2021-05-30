const { AppError } = require('@shared/errors/AppError');
const { HistoryHealthAnalysis } = require('../providers/HistoryHealthAnalysis');

class CreateHistoryHealthAnalysisService {
  constructor() {
    this.historyHealthAnalysis = new HistoryHealthAnalysis();
  }

  async execute({ id_user, weight, exercisetime }) {
    if (!(id_user && weight && exercisetime)) {
      throw new AppError('Input data was not found', 404);
    }

    const user = await this.historyHealthAnalysis.getUser({ id_user });

    let historyUpdated;

    if (!user) {
      historyUpdated = await this.historyHealthAnalysis.create({
        id_user,
        history: [
          {
            date: new Date(),
            weight,
            exercisetime,
          },
        ],
      });
      return historyUpdated;
    }

    user.history.addToSet({ date: new Date(), weight, exercisetime });

    historyUpdated = await user.save();

    return historyUpdated;
  }
}

module.exports = { CreateHistoryHealthAnalysisService };
