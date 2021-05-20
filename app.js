'use strict';

require('dotenv').config({
  silent: true,
});

const express = require('express');
const server = require('./src/shared/infra/http/server');

server(express());
