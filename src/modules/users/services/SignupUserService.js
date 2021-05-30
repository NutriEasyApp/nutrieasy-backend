const { sign } = require('@shared/providers/jwt');
const { AppError } = require('@shared/errors/AppError');
const { UserRepository } = require('../repositories/UsersRepository');

class SignupUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ email, username, password }) {
    if (!email && !username && !password)
      throw new AppError('Fields not provided', 400);

    const userExists = await this.userRepository.getUserIdByEmail({ email });

    if (userExists) throw new AppError('User already registered', 400);

    const user = await this.userRepository.register({
      email,
      username,
      password,
    });

    const token = sign({ user: user.id });

    return { token, user: user.id };
  }
}

module.exports = { SignupUserService };
