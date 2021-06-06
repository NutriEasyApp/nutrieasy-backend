const { AppError } = require('@shared/errors/AppError');
const { UserRepository } = require('../repositories/UsersRepository');
const { compare } = require('@shared/providers/bcrypt');
const { PushNotification } = require('@shared/providers/pushnotifications');

class ForgotPasswordService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ email }) {
    if (!email) throw new AppError('Data was not provided', 400);
    const userExists = await this.userRepository.getUserIdByEmail({ email });
    if (!userExists) throw new AppError('User does not exists', 400);

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await this.userRepository.registerUserTempCode({
      email,
      code,
    });

    return { code };
  }
}

module.exports = { ForgotPasswordService };
