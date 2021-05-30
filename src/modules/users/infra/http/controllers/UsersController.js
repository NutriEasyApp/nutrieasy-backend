const { GetUserService } = require('@modules/users/services/GetUserService');

class UsersController {
  async show(request, response) {
    const { id } = request.params;

    const userService = new GetUserService();
    const user = await userService.execute({ id });

    return response.status(200).json(user);
  }
}

module.exports = { UsersController };
