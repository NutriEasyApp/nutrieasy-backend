require('dotenv').config();
const AppError = require('../../http/errors/AppError');
const { verify } = require('../../shared/provider/jwt');
const { UserDao } = require('../../dao/user.dao');

const authenticationMiddleware = async (request, response, next) => {
  try {
    if (!request.headers.authorization)
      throw new AppError({ message: 'Invalid Authorization', statusCode: 401 });

    const [, token] = request.headers.authorization.split(' ');

    const payload = verify(token);
    const userDao = new UserDao();
    const user = await userDao.getUserById({ id: payload.user });

    if (!user) {
      throw new AppError({ message: 'Invalid Authorization', statusCode: 401 });
    }

    next();
  } catch (err) {
    return response
      .status(401)
      .json({ message: err.message, statusCode: err.statusCode });
  }
};

module.exports = authenticationMiddleware;
