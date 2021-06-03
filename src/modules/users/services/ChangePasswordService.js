const { AppError } = require('@shared/errors/AppError');
const { UserRepository } = require('../repositories/UsersRepository');
const { compare } = require('@shared/providers/bcrypt');
const { PushNotification } = require('@shared/providers/pushnotifications');

class ChangePasswordService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ id, newpassword, repeatnewpassword }) {
    if (!id && !newpassword && !repeatnewpassword)
      throw new AppError('Data was not provided', 400);

    const userExists = await this.userRepository.getUserPasswordById({ id });
    const { token } = await this.userRepository.getUserById({ id });
    if (!userExists) {
      throw new AppError('User was not found', 400);
    }

    const storedUserPassword = userExists.password;

    const isEqual = compare(newpassword, storedUserPassword);

    if (isEqual) {
      throw new AppError(
        'Your new password can not be equal to previous registered password',
        400
      );
    }

    if (newpassword !== repeatnewpassword) {
      throw new AppError(
        'New password and Repeat new password does not match',
        400
      );
    }

    await this.userRepository.updateUserPassword({
      id,
      newPassword: newpassword,
    });
    await PushNotification({
      pushNotificationTokens: [token],
      title: 'Senha Alterada',
      body: 'Você alterou sua senha com sucesso',
    });
  }
}

module.exports = { ChangePasswordService };
