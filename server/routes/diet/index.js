const express = require('express');
const { DietController } = require('./diet.controller');

module.exports = middlewares => {
  const controller = new DietController();
  const router = express.Router();

  if (middlewares) {
    middlewares.forEach(middleware => router.use(middleware));
  }


  router.get('/:id', controller.getDiet.bind(controller));


  return router;
};
