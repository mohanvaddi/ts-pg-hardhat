import 'jest-extended';
import { CustomJwtPayload } from '../src/lib/zod.schema';

declare module 'jsonwebtoken' {
  export interface JwtPayload extends CustomJwtPayload {}
}
