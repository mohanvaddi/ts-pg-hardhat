import { config } from 'dotenv';
config();

export default {
  PORT: process.env['PORT']!,
  JWT_SECRET: process.env['JWT_SECRET']!,
  JSON_RPC_URL: process.env['JSON_RPC_URL']!,
  ACCOUNT_PRIVATE_KEY: process.env['ACCOUNT_PRIVATE_KEY']!,
  CONTRACT_ADDRESS: process.env['CONTRACT_ADDRESS']!,
  ACCOUNT_ADDRESS: process.env['ACCOUNT_ADDRESS']!,
  CUSTOM_MORGAN_FORMAT: process.env['CUSTOM_MORGAN_FORMAT']!,

  // postgres
  POSTGRES_USER: process.env['POSTGRES_USER']!,
  POSTGRES_HOST: process.env['POSTGRES_HOST']!,
  POSTGRES_DB: process.env['POSTGRES_DB']!,
  POSTGRES_PASSWORD: process.env['POSTGRES_PASSWORD']!,
  POSTGRES_PORT: process.env['POSTGRES_PORT']!,
} as const;
