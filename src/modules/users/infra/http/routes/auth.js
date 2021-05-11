const { Router } = require('express');

const {
  AuthenticateUserController,
} = require('../controllers/AuthenticateUserController');

const routes = new Router();

const authenticateUserController = new AuthenticateUserController();

routes.post('/signup', authenticateUserController.signup);

routes.post('/login', authenticateUserController.login);

module.exports = routes;
