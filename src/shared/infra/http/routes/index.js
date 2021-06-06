const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const e = path.resolve(__dirname, 'swagger.yaml');
const swaggerDocument = YAML.load(e);

const authRouter = require('@modules/users/infra/http/routes/auth');
const changePasswordRouter = require('@modules/users/infra/http/routes/changePassword');
const forgotPasswordRouter = require('@modules/users/infra/http/routes/forgotPassword');
const verifyCodeRouter = require('@modules/users/infra/http/routes/verifyCode');

const authenticationMiddleware = require('@shared/infra/http/middlewares/authentication.middleware');

const usersRouter = require('@modules/users/infra/http/routes');
const dietRouter = require('@modules/diet/infra/http/routes');
const healthRouter = require('@modules/health/infra/http/routes');
const pushNotificationRegisterRouter = require('@modules/users/infra/http/routes/pushNotificationRegister');

routes.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.use('/forgotpassword', forgotPasswordRouter);
routes.use('/verifycode', verifyCodeRouter);

routes.use('/changepassword', changePasswordRouter);
routes.use('/auth', authRouter);

routes.use(authenticationMiddleware);

routes.use('/users', usersRouter);
routes.use('/diet', dietRouter);
routes.use('/health', healthRouter);
routes.use('/pushnotificationregister', pushNotificationRegisterRouter);

module.exports = routes;
