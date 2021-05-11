const { Router } = require('express');

const { UsersController } = require('../controllers/UsersController');

const routes = new Router();

const usersController = new UsersController();

routes.get('/:id', usersController.show);

module.exports = routes;
