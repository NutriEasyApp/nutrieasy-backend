const {
  PushNotificationRegisterService,
} = require('@modules/users/services/PushNotificationRegisterService');

class PushNotificationRegisterController {
  async send(request, response) {
    const { id, pushNotificationToken } = request.body;

    const pushNotificationRegisterService = new PushNotificationRegisterService();
    await pushNotificationRegisterService.execute({
      id,
      pushNotificationToken,
    });

    return response.status(204).json();
  }
}

module.exports = { PushNotificationRegisterController };
