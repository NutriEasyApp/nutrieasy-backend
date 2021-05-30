const { Router } = require('express');

const { DietController } = require('../controllers/DietController');
const { MealController } = require('../controllers/MealController');

const routes = new Router();

const dietController = new DietController();
const mealController = new MealController();

routes.get('/:id_user', dietController.show);
routes.get('/meals/:id_user', mealController.show);

module.exports = routes;
