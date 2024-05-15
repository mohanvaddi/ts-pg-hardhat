import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
extendZodWithOpenApi(z);

export const JwtPayloadDTO = z.object({
  email: z.string().trim().email(),
  role: z.enum(['user', 'admin']),
});

export type CustomJwtPayload = typeof JwtPayloadDTO._type;
export type Role = typeof JwtPayloadDTO._type.role;
