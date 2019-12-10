import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as helmet from 'helmet';

import { corsOpts, helmetOpts, validationPipeOpts } from './constants';
import { ConfigService } from './config/config.service';

export const configure = (app: NestExpressApplication) => {
  const configSrv = app.get<ConfigService>(ConfigService);

  // Cross-origin resource sharing (CORS) is a mechanism that allows resources to be requested from another domain
  app.enableCors(corsOpts);

  if (configSrv.isProduction) {
    app.use(helmet(helmetOpts));
  }

  const options = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('Todo API using CQRS')
    .setVersion('0.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  const { prefix, port, hostname } = configSrv.server;

  app.setGlobalPrefix(prefix);

  app.useGlobalPipes(new ValidationPipe(validationPipeOpts));

  app.enableShutdownHooks();

  return { hostname, port, prefix };
};
