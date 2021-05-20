require('dotenv').config();

const mongoConfig = {
  url: process.env.MONGO_CONNECTION_STRING,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

module.exports = { mongoConfig };
