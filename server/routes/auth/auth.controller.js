require('dotenv').config();
const jwt = require('jsonwebtoken')
const AppError = require("../../http/errors/AppError");
const {UserDao} = require("../../dao/user.dao");
const {StatusCode} = require('../../http/statusCode/statusCode')

class AuthController {
  constructor() {
    this.dao = new UserDao();
  }

  async signup(request, response) {
    try {
      const {email, username, password} = request.body;
      if ([email, username, password].includes('') || [email, username, password].includes(null)) {
        throw new AppError('Fields not provided', StatusCode.Bad_Request_400);
      }

      const user = await this.dao.register({email, username, password})

      if (user) throw new AppError('User already registered', StatusCode.Bad_Request_400);

      const token = jwt.sign({user: user.id}, process.env.JWT_SECRET, {expiresIn: 86400});

      return response.status(StatusCode.Created_201).send({
        status: StatusCode.Created_201,
        message: 'User registered',
        token
      })
    } catch (err) {
      return response.status(err.statusCode).send({message: err.message, error: err.statusCode})
    }
  }

  async login(request, response) {
    try {
      const [hashType, hash] = request.headers.authorization.split(' ');
      const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

      const user = await this.dao.getUser({email, password});
      if (!user) {
        throw new AppError('Invalid user credentials', StatusCode.Not_Found_404);
      }

      const token = jwt.sign({user: user.id}, process.env.JWT_SECRET, {expiresIn: 86400});

      return response.status(StatusCode.OK_200).send({message: 'user authenticated', status: StatusCode.OK_200, token})
    } catch (err) {
      return response.status(err.statusCode).send({error: err.statusCode, message: err.message})
    }
  }

}

module.exports = {AuthController}
