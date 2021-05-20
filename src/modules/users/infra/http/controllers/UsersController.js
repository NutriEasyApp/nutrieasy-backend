const { GetUserService } = require('../../../services/GetUserService');

class UsersController {
  async show(request, response) {
    try {
      const { id } = request.params;

      const userService = new GetUserService();
      const user = await userService.execute({ id });

      return response.status(200).json(user);
    } catch (err) {
      return response
        .status(err.statusCode || 404)
        .json({ message: err.message });
    }
  }
}

module.exports = { UsersController };
