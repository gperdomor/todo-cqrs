import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateTodoDTO } from './dto/create-todo.dto';
import { CreateTodoCommand } from './commands/create-todo.command';

@Injectable()
export class TodosService {
  constructor(private readonly commandBus: CommandBus) {}

  async create(payload: CreateTodoDTO) {
    return this.commandBus.execute(new CreateTodoCommand(payload));
  }
}
