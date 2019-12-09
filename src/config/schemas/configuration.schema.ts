import * as Joi from '@hapi/joi';

import { ServerConfig, serverConfigSchema } from './server-config.schema';

export interface Configuration {
  NODE_ENV: string;
  server: ServerConfig;
}

export const configSchema: Joi.ObjectSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  server: serverConfigSchema.required(),
});
