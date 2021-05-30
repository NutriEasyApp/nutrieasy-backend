const { Router } = require('express');

const authRouter = require('../../../../modules/users/infra/http/routes/auth');
const changePasswordRouter = require('../../../../modules/users/infra/http/routes/changePassword');

const authenticationMiddleware = require('../middlewares/authentication.middleware');

const usersRouter = require('../../../../modules/users/infra/http/routes');
const dietRouter = require('../../../../modules/diet/infra/http/routes');
const healthRouter = require('../../../../modules/health/infra/http/routes');

const routes = new Router();

routes.use('/changepassword', changePasswordRouter);
routes.use('/auth', authRouter);

routes.use(authenticationMiddleware);

routes.use('/users', usersRouter);
routes.use('/diet', dietRouter);
routes.use('/health', healthRouter);

module.exports = routes;
