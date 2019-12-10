import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { IHelmetConfiguration } from 'helmet';
import { ValidationPipeOptions } from '@nestjs/common';

export const corsOpts: CorsOptions = {};

export const helmetOpts: IHelmetConfiguration = {
  // Example of passing an option to x-powered-by middleware
  hidePoweredBy: { setTo: 'PHP 7.3.11' },
};

export const validationPipeOpts: ValidationPipeOptions = {
  whitelist: true,
};
