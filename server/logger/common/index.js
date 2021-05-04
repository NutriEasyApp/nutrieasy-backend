require('dotenv').config();
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');
const path = require('path');

function getLogger(directory) {
  const logFolder = process.env.nutrieasy_logdir;
  if (!fs.existsSync(logFolder)) {
    fs.mkdirSync(logFolder);
  }
  const logDir = path.resolve(logFolder, directory);

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  const logger = createLogger({
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.printf(info => {
        info.label = info.label ? info.label + ' ' : '';
        return `${info.timestamp} ${info.label}${info.level}: ${info.message}`;
      })
    ),
    transports: [
      new transports.DailyRotateFile({
        filename: `${logDir}/${directory}-%DATE%-main.log`,
        datePattern: 'YYYY-MM-DD',
        level: 'debug',
      }),
    ],
  });

  return logger;
}

module.exports = getLogger;
