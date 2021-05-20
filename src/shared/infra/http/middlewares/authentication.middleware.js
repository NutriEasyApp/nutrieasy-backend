const { AppError } = require('../../../errors/AppError');
const { verify } = require('../../../providers/jwt');
const {
  UserRepository,
} = require('../../../../modules/users/repositories/UsersRepository');

const authenticationMiddleware = async (request, response, next) => {
  try {
    if (!request.headers.authorization)
      throw new AppError('Invalid Authorization', 401);

    const [, token] = request.headers.authorization.split(' ');

    const payload = verify(token);
    const userRepository = new UserRepository();
    const user = await userRepository.getUserIdById({ id: payload.user });

    if (!user) {
      throw new AppError('Invalid Authorization', 401);
    }

    next();
  } catch (err) {
    return response
      .status(401)
      .json({ message: err.message, statusCode: err.statusCode });
  }
};

module.exports = authenticationMiddleware;
