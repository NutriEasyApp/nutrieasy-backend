'use strict';
const AppError = require('./http/errors/AppError');
const logger = require('./logger/common')('api');

const configResponseObject = app => {
  app.use((err, request, response, _) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);
    logger.error(
      `{ method: ${request.method}, url: ${
        request.url
      }, params: ${JSON.stringify(request.params)}, body: ${JSON.stringify(
        request.body
      )} }`
    );
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  });
};

const configureApp = app => {
  const express = require('express');
  const helmet = require('helmet');
  app.use(express.json());
  app.use(helmet());

  const auth = require('./routes/auth');
  app.use('/nutrieasy/auth', auth());

  const authenticationMiddleware = require('./routes/middlewares/authentication.middleware');
  app.use(authenticationMiddleware);

  app.use('/nutrieasy/coverage-report', express.static('public/lcov-report/'));

  app.use('*', (req, res, next) => {
    logger.info(
      `{ method: ${req.method}, url: ${req.url}, params: ${JSON.stringify(
        req.params
      )}, body: ${JSON.stringify(req.body)} }`
    );
    next();
  });

  const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PUT, POST, DELETE, OPTIONS'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, x-access-token'
    );

    if ('OPTIONS' === req.method) {
      res.send(200, '');
    } else {
      next();
    }
  };

  app.use(allowCrossDomain);
};

const configSwagger = app => {};

const initRoutes = app => {
  const parameter = require('./routes/parameter');
  const diet = require('./routes/diet');
  const health = require('./routes/health');
  const user = require('./routes/user');

  app.use('/nutrieasy/parameter', parameter());
  app.use('/nutrieasy/diet', diet());
  app.use('/nutrieasy/health', health());
  app.use('/nutrieasy/user', user());

  // const express = require('express');
  // app.use('/**', express.static('public/404.html'));
};

const startApp = app => {
  const http = require('http');
  const server = http.createServer(app);
  server.timeout = 0;
  const port = process.env.PORT;
  const os = require('os');

  server.listen(port, () => {
    console.log(
      `Local HTTP Express server started on http://${os.hostname()}:${port}`
    );
  });
};

const init = app => {
  configureApp(app);
  configSwagger(app);
  initRoutes(app);
  configResponseObject(app);
  startApp(app);
};

module.exports = init;
