const { Router } = require('express');

const { DietController } = require('../controllers/DietController');

const routes = new Router();

const dietController = new DietController();

routes.get('/:id_user', dietController.show);

module.exports = routes;
