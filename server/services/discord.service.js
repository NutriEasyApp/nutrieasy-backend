'use strict';
const ParameterDao = require('../dao/parameter.dao');
require('dotenv').config();

class DiscordService {
  constructor() {
    this.parameter = new ParameterDao();
    this.axios = require('axios');
    this.os = require('os');
  }

  async getDiscordURL() {
    return await this.parameter.get('DISCORD', 'WEBHOOK');
  }

  async send(message) {
    const discordURL = await this.getDiscordURL();
    const hostname = this.os.hostname();
    return this.axios.post(discordURL, {
      content: `[${hostname}] - ${new Date().toLocaleString()} - [${message}]`,
    });
  }
}

module.exports = DiscordService;
