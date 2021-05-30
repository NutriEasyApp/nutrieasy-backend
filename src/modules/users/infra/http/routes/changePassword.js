const { Router } = require('express');

const {
  ChangePasswordController,
} = require('../controllers/ChangePasswordController');

const routes = new Router();

const changePasswordController = new ChangePasswordController();

routes.post('/', changePasswordController.change);

module.exports = routes;
