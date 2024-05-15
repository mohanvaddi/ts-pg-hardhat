import * as winston from 'winston';
import 'winston-daily-rotate-file';
import { DailyRotateFileTransportOptions } from 'winston-daily-rotate-file';

const { combine, timestamp, printf } = winston.format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level.toUpperCase()}] : ${message} `;
});

const dailyRotateOptions: DailyRotateFileTransportOptions = {
  filename: 'logs/server-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  level: 'info',
};

// This is intentional
// the types for DailyRotateFile is not a constructor, so disabling linting
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/ban-ts-comment
// @ts-ignore
const transport: unknown = new winston.transports.DailyRotateFile(
  dailyRotateOptions
);

const logger: winston.Logger = winston.createLogger({
  format: combine(
    timestamp(),
    winston.format.errors({ stack: true }),
    customFormat
  ),
  transports: [<winston.transport>transport],
});

export default logger;
