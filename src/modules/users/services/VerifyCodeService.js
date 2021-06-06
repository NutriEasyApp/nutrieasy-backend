const { AppError } = require('@shared/errors/AppError');
const { UserRepository } = require('../repositories/UsersRepository');
const { compare } = require('@shared/providers/bcrypt');
const { PushNotification } = require('@shared/providers/pushnotifications');

class VerifyCodeService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ email, code }) {
    if (!email) throw new AppError('Data was not provided', 400);
    const userExists = await this.userRepository.getUserByEmail({ email });
    if (!userExists) throw new AppError('User does not exists', 400);

    if (code !== userExists.temporary_code)
      throw new AppError('Invalid Temporary Code', 400);

    await this.userRepository.registerUserTempCode({
      email,
      code: null,
    });

    return true;
  }
}

module.exports = { VerifyCodeService };
