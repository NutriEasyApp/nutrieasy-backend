'use strict';
require('dotenv').config();
const express = require('express');
require('express-async-errors');
const helmet = require('helmet');
const cors = require('cors');
const os = require('os');

require('@shared/infra/mongoose');

const { AppError } = require('@shared/errors/AppError');
const routes = require('./routes/index.js');
const Logger = require('@shared/providers/logger')('server');

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('*', (req, res, next) => {
  Logger.info(`{ method: ${req.method}, url: ${req.url} }`);
  next();
});

app.use('/nutrieasy/coverage-report', express.static('public/lcov-report/'));
app.use('/nutrieasy', routes);

app.use((err, request, response, _) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  Logger.error(
    `{ method: ${request.method}, url: ${request.url}, params: ${JSON.stringify(
      request.params
    )}, body: ${JSON.stringify(request.body)} }`
  );

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(
    `Local HTTP Express server started on http://${os.hostname()}:${port}`
  );
});
