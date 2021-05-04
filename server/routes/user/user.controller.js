const { UserDao } = require('../../dao/user.dao');

class UserController {
  constructor() {
    this.daoUser = new UserDao();
  }

  async getUser(request, response) {
    try {
      console.log(request.params.id);
      const user = await this.daoUser.getUserUsernameAndEmail(request.params);

      if (!user)
        return response
          .status(404)
          .json({ error: 404, message: 'The User was not found' });

      return response.status(200).json(user);
    } catch (err) {
      return response.status(404).send({ error: 404, message: err.message });
    }
  }
}

module.exports = { UserController };
