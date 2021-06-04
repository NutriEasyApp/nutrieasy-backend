const { AppError } = require('@shared/errors/AppError');
const { HistoryHealthAnalysis } = require('../providers/HistoryHealthAnalysis');

class GetHistoryHealthService {
  constructor() {
    this.historyHealthAnalysis = new HistoryHealthAnalysis();
  }
  async execute({ id_user }) {
    const user = await this.historyHealthAnalysis.getUser({ id_user });

    if (!user) throw new AppError('The user was not found', 404);

    const historylength = user.history.length - 1;
    const limitedHistory = [];
    const intervalDisplayHistoryData = 4;
    if (historylength >= intervalDisplayHistoryData) {
      for (
        let i = historylength;
        i > historylength - intervalDisplayHistoryData;
        i--
      ) {
        limitedHistory.push(user.history[i]);
      }
      user.history = limitedHistory.reverse();
    }
    return user;
  }
}

module.exports = { GetHistoryHealthService };
