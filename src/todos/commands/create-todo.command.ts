import { ICommand } from '@nestjs/cqrs';
import { CreateTodoDTO } from '../dto/create-todo.dto';

export class CreateTodoCommand implements ICommand {
  constructor(public readonly payload: CreateTodoDTO) {}
}
