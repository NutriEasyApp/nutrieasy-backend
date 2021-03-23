const express = require('express');
const { HealthController } = require('./health.controller');

module.exports = middlewares => {
  const controller = new HealthController();
  const router = express.Router();

  if (middlewares) {
    middlewares.forEach(middleware => router.use(middleware));
  }

  router.post('/', controller.createHealth.bind(controller));
  router.get('/:id', controller.getHealth.bind(controller));
  //router.put('/:id', controller.healthCalculator.bind(controller));

  return router;
};
