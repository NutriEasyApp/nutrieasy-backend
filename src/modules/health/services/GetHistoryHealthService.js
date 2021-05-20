const { AppError } = require('../../../shared/errors/AppError');
const { HistoryHealthAnalysis } = require('../providers/HistoryHealthAnalysis');

class GetHistoryHealthService {
  constructor() {
    this.historyHealthAnalysis = new HistoryHealthAnalysis();
  }
  async execute({ id_user }) {
    const user = await this.historyHealthAnalysis.getUser({ id_user });

    if (!user) throw new AppError('The user was not found', 404);

    return user;
  }
}

module.exports = { GetHistoryHealthService };
