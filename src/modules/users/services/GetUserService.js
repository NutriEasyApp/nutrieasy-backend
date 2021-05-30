const { AppError } = require('@shared/errors/AppError');
const { UserRepository } = require('../repositories/UsersRepository');

class GetUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ id }) {
    if (!id) throw new AppError('Id was not provided', 400);

    const user = await this.userRepository.getUserById({ id });
    return user;
  }
}

module.exports = { GetUserService };
