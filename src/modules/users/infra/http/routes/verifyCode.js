const { Router } = require('express');

const { VerifyCodeController } = require('../controllers/VerifyCodeController');

const routes = new Router();

const verifyCodeController = new VerifyCodeController();

routes.post('/', verifyCodeController.verify);

module.exports = routes;
