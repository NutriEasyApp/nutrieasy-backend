const {
  ForgotPasswordService,
} = require('@modules/users/services/ForgotPasswordService');

class ForgotPasswordController {
  async create(request, response) {
    const { email } = request.body;

    const forgotPasswordService = new ForgotPasswordService();
    const code = await forgotPasswordService.execute({ email });

    return response.status(200).json(code);
  }
}

module.exports = { ForgotPasswordController };
