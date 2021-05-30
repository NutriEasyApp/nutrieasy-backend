const {
  HistoryHealthModel,
} = require('../infra/http/models/HistoryHealthModel');

class HistoryHealthAnalysis {
  async getUser({ id_user }) {
    const user = await HistoryHealthModel.findOne({ _id: id_user }).exec();
    return user;
  }

  async create({ id_user, history }) {
    const data = new HistoryHealthModel({
      _id: id_user,
      history,
    });
    await data.save();
  }
}

module.exports = { HistoryHealthAnalysis };
