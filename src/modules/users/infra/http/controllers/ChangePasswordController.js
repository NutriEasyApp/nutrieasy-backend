const {
  ChangePasswordService,
} = require('@modules/users/services/ChangePasswordService');

class ChangePasswordController {
  async change(request, response) {
    const { id, newpassword, repeatnewpassword } = request.body;

    const changePasswordService = new ChangePasswordService();
    await changePasswordService.execute({
      id,
      newpassword,
      repeatnewpassword,
    });

    return response.status(204).json();
  }
}

module.exports = { ChangePasswordController };
