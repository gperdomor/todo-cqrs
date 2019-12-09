import * as Joi from '@hapi/joi';

export interface ServerConfig {
  hostname: string;
  port: number | string;
  prefix: string;
}

// SCHEMAS

export const serverConfigSchema: Joi.ObjectSchema = Joi.object({
  hostname: Joi.string()
    .hostname()
    .default('0.0.0.0'),
  port: Joi.number()
    .port()
    .default(3331),
  prefix: Joi.string().default(''),
});
