import { Controller, Post, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTodoDTO } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() payload: CreateTodoDTO) {
    // this.commandBus.execute(new CreateTodoCommand(payload));
  }
}
