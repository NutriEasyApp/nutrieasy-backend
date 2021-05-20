const mongoose = require('mongoose');

const { mongoConfig } = require('../../../config/mongoose');

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoConfig.url, mongoConfig.options)
  .then(() => {
    console.log('Mongo Database connected');
  })
  .catch(err => {
    console.log(
      `Error while trying to connect with Mongo Database, Error: ${err} `
    );
  });

module.exports = { mongoose };
