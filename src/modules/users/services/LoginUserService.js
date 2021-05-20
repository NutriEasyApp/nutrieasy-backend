const { sign } = require('../../../shared/providers/jwt');
const { compare } = require('../../../shared/providers/bcrypt');

const { AppError } = require('../../../shared/errors/AppError');
const { UserRepository } = require('../repositories/UsersRepository');

class LoginUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ hash }) {
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');
    const user = await this.userRepository.getUserPasswordByEmail({ email });

    if (!user) {
      throw new AppError('Invalid user credentials', 401);
    }

    const isValid = compare(password, user.password);

    if (!isValid) {
      throw new AppError('Invalid user credentials', 401);
    }

    const token = sign({ user: user.id });

    return { token, user: user.id };
  }
}

module.exports = { LoginUserService };
