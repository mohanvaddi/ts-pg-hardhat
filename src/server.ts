import app from './app';
import http from 'http';
import config from '../config';
import { createHttpTerminator } from 'http-terminator';
import { CustomServerError } from '../types/main';

const port = config.PORT;
app.set('port', port);

export const server = http.createServer(app);
export const httpTerminator = createHttpTerminator({
  server,
});

server.listen(port, () => {
  console.log('Server running on PORT:: ' + port);
});



server.on('error', (error) => {
  if ((<CustomServerError>error).syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  switch ((<CustomServerError>error).code) {
    case 'EACCES':
      console.error(`${bind} requires privileges :(`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use :/`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});
