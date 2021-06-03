const { Router } = require('express');

const {
  PushNotificationRegisterController,
} = require('../controllers/PushNotificationRegisterController');

const routes = new Router();

const pushNotificationRegisterController = new PushNotificationRegisterController();

routes.post('/', pushNotificationRegisterController.send);

module.exports = routes;
