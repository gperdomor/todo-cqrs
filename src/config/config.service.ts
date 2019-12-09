import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Configuration, configSchema } from './schemas/configuration.schema';
import { ServerConfig } from './schemas/server-config.schema';

export type EnvConfig = Record<string, string>;

@Injectable()
export class ConfigService {
  private readonly config: Configuration;

  constructor(filePath: string) {
    let parsed: dotenv.DotenvParseOutput = {};

    if (fs.existsSync(filePath)) {
      parsed = dotenv.parse(fs.readFileSync(filePath));
    }
    const config = this.configFactory(parsed);
    this.config = this.validateInput(config);
  }

  private configFactory(parsed: dotenv.DotenvParseOutput): Configuration {
    return {
      NODE_ENV: parsed.NODE_ENV,
      server: {
        hostname: parsed.HOSTNAME,
        port: parsed.PORT,
        prefix: parsed.PREFIX,
      },
    };
  }

  get server(): ServerConfig {
    return this.config.server;
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: Configuration): Configuration {
    const { error, value: validatedEnvConfig } = configSchema.validate(envConfig);

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }

    return validatedEnvConfig;
  }
}
