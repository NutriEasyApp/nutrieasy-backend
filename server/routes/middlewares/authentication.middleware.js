require('dotenv').config();
const jwt = require('jsonwebtoken');
const {UserDao} = require('../../dao/user.dao');

const authenticationMiddleware = async (request, response, next) => {
  if (!request.headers.authorization || request.headers.authorization.indexOf('Bearer ') === -1) {
    return response.status(401).json({message: 'Missing Authorization Header'});
  }
  const [, token] = request.headers.authorization.split(' ');
  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    const userDao = new UserDao();
    const user = await userDao.getUserById({id: payload.user});

    if (!user) {
      response.status(401).send('Invalid Authorization');
    }

    next();
  } catch (e) {
    response.status(401).send('Invalid Authorization');
  }
}

module.exports = authenticationMiddleware;
