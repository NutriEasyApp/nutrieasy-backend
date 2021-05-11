const { LoginUserService } = require('../../../services/LoginUserService');
const { SignupUserService } = require('../../../services/SignupUserService');

class AuthenticateUserController {
  async signup(request, response) {
    try {
      const { email, username, password } = request.body;

      const signupUserService = new SignupUserService();
      const session = await signupUserService.execute({
        email,
        username,
        password,
      });

      return response.status(201).json(session);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
  async login(request, response) {
    // try {
    const [, hash] = request.headers.authorization.split(' ');

    const loginUserService = new LoginUserService();

    const session = await loginUserService.execute({ hash });

    return response.status(201).json(session);
    // } catch (err) {
    // return response.status(401).json({ message: err.message });
    // }
  }
}

module.exports = { AuthenticateUserController };
