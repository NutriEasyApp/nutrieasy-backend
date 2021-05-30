const {
  ChangePasswordService,
} = require('../../../services/ChangePasswordService');

class ChangePasswordController {
  async change(request, response) {
    const {
      id,
      currentpassword,
      newpassword,
      repeatnewpassword,
    } = request.body;

    const changePasswordService = new ChangePasswordService();
    await changePasswordService.execute({
      id,
      currentpassword,
      newpassword,
      repeatnewpassword,
    });

    return response.status(204).json();
  }
}

module.exports = { ChangePasswordController };
