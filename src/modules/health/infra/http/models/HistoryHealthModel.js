const { mongoose } = require('@shared/infra/mongoose');

const { Schema } = mongoose;

const HistoryHealthSchema = new Schema(
  {
    _id: String,
    history: [
      {
        date: String,
        weight: String,
        exercisetime: String,
      },
    ],
  },
  { strict: 'throw' }
);

const HistoryHealthModel = mongoose.model('HistoryHealth', HistoryHealthSchema);

module.exports = { HistoryHealthModel };
