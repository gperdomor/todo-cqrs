import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { configure } from './configure';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const { hostname, port, prefix } = configure(app);

  await app.listen(port, hostname, () => {
    // tslint:disable-next-line: no-console
    console.log(`Listening at http://${hostname}:${port}/${prefix}`);
  });
}
bootstrap();
