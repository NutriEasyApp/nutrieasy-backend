require('dotenv').config();

const config = {
  secret: String(process.env.JWT_SECRET),
  options: {
    expiresIn: '1d',
  },
};

module.exports = { config };
