const { Router } = require('express');

const { HealthController } = require('../controllers/HealthController');

const routes = new Router();

const healthController = new HealthController();

routes.get('/:id_user', healthController.show);

routes.post('/', healthController.create);

routes.get('/history-health/:id_user', healthController.getHistory);

module.exports = routes;
