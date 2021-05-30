const { AppError } = require('@shared/errors/AppError');
const { UserRepository } = require('../repositories/UsersRepository');
const { compare } = require('@shared/providers/bcrypt');

class ChangePasswordService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ id, currentpassword, newpassword, repeatnewpassword }) {
    if (!id && !currentpassword && !newpassword && !repeatnewpassword)
      throw new AppError('Data was not provided', 400);

    const userExists = await this.userRepository.getUserPasswordById({ id });

    if (!userExists) {
      throw new AppError('User was not found', 400);
    }

    if (
      currentpassword === newpassword &&
      currentpassword === repeatnewpassword
    ) {
      throw new AppError(
        'Your new password can not be equal to previous password',
        400
      );
    }

    if (newpassword !== repeatnewpassword) {
      throw new AppError('New password and Repeat new password does not match');
    }

    const userPassword = userExists.password;

    const isValid = compare(newpassword, userPassword);

    if (isValid) {
      throw new AppError(
        'Your new password can not be equal to previous password',
        400
      );
    }

    await this.userRepository.updateUserPassword({
      id,
      newPassword: newpassword,
    });
  }
}

module.exports = { ChangePasswordService };
