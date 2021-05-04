const express = require('express');
const { ParameterController } = require('./parameter.controller');

module.exports = middlewares => {
  const controller = new ParameterController();
  const router = express.Router();

  if (middlewares) {
    middlewares.forEach(middleware => router.use(middleware));
  }

  router.get('/', controller.getAllParameters.bind(controller));

  router.post('/', controller.updateParameter.bind(controller));

  return router;
};
