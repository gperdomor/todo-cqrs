import { IsString } from 'class-validator';

export class CreateTodoDTO {
  @IsString()
  readonly title: string;
}
