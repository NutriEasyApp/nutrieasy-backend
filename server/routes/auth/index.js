const express = require('express');
const { AuthController } = require('./auth.controller');

module.exports = middlewares => {
  const controller = new AuthController();
  const router = express.Router();

  if (middlewares) {
    middlewares.forEach(middleware => router.use(middleware));
  }

  router.post('/signup', controller.signup.bind(controller));

  router.post('/login', controller.login.bind(controller));

  return router;
};
