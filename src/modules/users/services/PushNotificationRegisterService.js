const { AppError } = require('@shared/errors/AppError');
const { UserRepository } = require('../repositories/UsersRepository');
const { PushNotification } = require('@shared/providers/pushnotifications');

class PushNotificationRegisterService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ id, pushNotificationToken }) {
    if (!id && !pushNotificationToken) {
      throw new AppError('Fields not provided', 400);
    }
    await this.userRepository.updateUserToken({ id, pushNotificationToken });

    await PushNotification({
      pushNotificationTokens: [pushNotificationToken],
      title: 'Cadastrado com sucesso',
      body:
        'Uooou!! Parece que você acabou de se registrar, corre lá para fazer sua ficha de saúde',
    });
  }
}

module.exports = { PushNotificationRegisterService };
