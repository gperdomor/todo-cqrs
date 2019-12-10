import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  controllers: [TodosController],
})
export class TodosModule {}
