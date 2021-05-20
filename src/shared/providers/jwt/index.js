require('dotenv').config();
const jwt = require('jsonwebtoken');

const { config } = require('../../../config/auth');

const sign = payload => jwt.sign(payload, config.secret, config.options);

const verify = token => jwt.verify(token, config.secret);

module.exports = {
  sign,
  verify,
};
