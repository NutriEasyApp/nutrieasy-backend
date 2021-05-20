'use strict';
require('dotenv').config();
require('../mongoose');

const { AppError } = require('../../errors/AppError');
const routes = require('./routes/index.js');
const Logger = require('../../providers/logger')('server');

const configResponseObject = app => {
  app.use((err, request, response, _) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    Logger.error(
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
  require('express-async-errors');
  const helmet = require('helmet');
  app.use(express.json());
  app.use(helmet());

  app.use('/nutrieasy/coverage-report', express.static('public/lcov-report/'));

  app.use('*', (req, res, next) => {
    Logger.info(`{ method: ${req.method}, url: ${req.url} }`);
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
  app.use('/nutrieasy', routes);
};

const startApp = app => {
  const os = require('os');
  const http = require('http');

  const server = http.createServer(app);
  server.timeout = 0;

  const port = process.env.PORT;

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
