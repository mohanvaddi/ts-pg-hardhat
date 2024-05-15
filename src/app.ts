import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger';
import morgan from 'morgan';
import config from '../config';

const app: Express = express();

const loggerStream = {
  write: (text: string) => {
    logger.info(text);
  },
};
app.use(morgan(config.CUSTOM_MORGAN_FORMAT, { stream: loggerStream }));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err);
  return next();
});

export default app;
