const {
  LoginUserService,
} = require('@modules/users/services/LoginUserService');
const {
  SignupUserService,
} = require('@modules/users/services/SignupUserService');

class AuthenticateUserController {
  async signup(request, response) {
    const { email, username, password } = request.body;

    const signupUserService = new SignupUserService();
    const session = await signupUserService.execute({
      email,
      username,
      password,
    });

    return response.status(201).json(session);
  }

  async login(request, response) {
    const [, hash] = request.headers.authorization.split(' ');

    const loginUserService = new LoginUserService();

    const session = await loginUserService.execute({ hash });

    return response.status(201).json(session);
  }
}

module.exports = { AuthenticateUserController };
