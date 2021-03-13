const express = require('express');
const { UserController } = require("./user.controller")

module.exports = (middlewares) => {
  const controller = new UserController();
  const router = express.Router();

  if (middlewares) {
    middlewares.forEach(middleware => router.use(middleware));
  }

  router.get('/health', controller.healthCalculator.bind(controller));

  return router;
}
