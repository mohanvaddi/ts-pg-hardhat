import * as JWT from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import config from '../../config';
import { Role } from '../lib/zod.schema';

export default (allowedRoles: Role[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res
        .status(401)
        .send({ error: 'Please set Authorization header', data: {} });
    }

    JWT.verify(token, config.JWT_SECRET, (err, payload) => {
      if (err) {
        return res.status(403).send({ error: 'Invalid JWT Token', data: {} });
      }

      if (
        allowedRoles &&
        !allowedRoles.includes((payload as JWT.JwtPayload).role)
      ) {
        return res
          .status(403)
          .send({ error: 'You are not authorized to access this', data: {} });
      }

      req.payload = <JWT.JwtPayload>payload;
      return next();
    });
  };
