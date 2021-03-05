'use strict';

const http = require('http');
const logger = require('./logger/common')('api');

const configResponseObject = () => {
  http.ServerResponse.prototype.errorHandler = function (req, res, err, code = 500, message = 'An error has occurred during the request processing', isJson = false) {
    logger.error(err && err.stack ? err.stack : err);

    if (!isJson) {
      res.status(code).send({})
    } else {
      res.status(code).json(message);
    }
  }
}

const configureApp = app => {
  const express = require('express');

  app.use(express.json());

  // const authenticationMiddleware = require('./routes/middlewares/authentication.middleware');
  // const authorizationMiddleware = require('./routes/middlewares/authorization.middleware');

  // app.use(authenticationMiddleware);
  // app.use(authorizationMiddleware);

  app.use('*', (req, res, next) => {
    logger.info(`{ method: ${req.method}, url: ${req.url}, params: ${JSON.stringify(req.params)}, body: ${JSON.stringify(req.body)} }`);
    next();
  })

  const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-access-token');

    if ('OPTIONS' === req.method) {
      res.send(200, '');
    } else {
      next();
    }
  };

  app.use(allowCrossDomain);
};

const configSwagger = app => {

}

const initRoutes = app => {
  const parameter = require('./routes/parameter');

  app.use('/nutrieasy/parameter', parameter());
}

const startApp = app => {
  const http = require('http');
  const server = http.createServer(app);
  server.timeout = 0;
  const port = process.env.PORT;

  server.listen(port, () => {
    console.log('Local HTTP Express server started on http://localhost:' + port);
  })
}

const init = app => {
  configResponseObject();
  configureApp(app);
  configSwagger(app);
  initRoutes(app);
  startApp(app);

}

module.exports = init;
