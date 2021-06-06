const { Router } = require('express');

const {
  ForgotPasswordController,
} = require('../controllers/ForgotPasswordController');

const routes = new Router();

const forgotPasswordController = new ForgotPasswordController();

routes.post('/', forgotPasswordController.create);

module.exports = routes;
