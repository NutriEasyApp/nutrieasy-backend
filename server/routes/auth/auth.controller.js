require('dotenv').config();
const AppError = require('../../http/errors/AppError');
const { UserDao } = require('../../dao/user.dao');
const { sign } = require('../../shared/provider/jwt');
const { compare } = require('../../shared/provider/encryption');

class AuthController {
  constructor() {
    this.dao = new UserDao();
  }

  async signup(request, response) {
    try {
      const { email, username, password } = request.body;
      if (!email || !username || !password) {
        throw new AppError({ message: 'Fields not provided', statusCode: 400 });
      }

      const userExists = await this.dao.getUserIdByEmail({ email });

      if (userExists) {
        throw new AppError({
          message: 'User already registered',
          statusCode: 400,
        });
      }

      const user = await this.dao.register({ email, username, password });
      const token = sign({ user: user.id });

      return response.status(201).send({
        token,
      });
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  async login(request, response) {
    try {
      const [, hash] = request.headers.authorization.split(' ');
      const [email, password] = Buffer.from(hash, 'base64')
        .toString()
        .split(':');

      const user = await this.dao.getUser({ email });

      if (!user) {
        throw new AppError({
          message: 'Invalid user credentials',
          statusCode: 401,
        });
      }

      const isValid = compare(password, user.password);

      if (!isValid) {
        throw new AppError({
          message: 'Invalid user credentials',
          statusCode: 401,
        });
      }

      const token = sign({ user: user.id });

      return response.status(200).send({
        token,
      });
    } catch (err) {
      return response.status(401).json({ message: err.message });
    }
  }
}

module.exports = { AuthController };
