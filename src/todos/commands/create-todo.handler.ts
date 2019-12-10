import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateTodoCommand } from './create-todo.command';
// import { AccountRepository } from '../repositories/account.repository';
// import { AccountAggregate } from '../aggregates/account.aggregate';
// import { AccountAlreadyExistsException } from '../errors/account-already-exists-exception';

@CommandHandler(CreateTodoCommand)
export class CreateCommandHandler implements ICommandHandler<CreateTodoCommand> {
  constructor(private readonly publisher: EventPublisher, private readonly repository: any) {}

  async execute(command: CreateTodoCommand): Promise<void> {
    // const { payload } = command;
    // const todo = this.repository
    //     const aggregate = await this.repository.get(command.accountNumber);
    //     if (!!aggregate) {
    //       throw new AccountAlreadyExistsException(command.accountNumber);
    //     } else {
    //       const aggregate = this.publisher.mergeObjectContext(
    //         new AccountAggregate(command.accountNumber),
    //       );
    //       aggregate.create();
    //       aggregate.commit();
    //     }
  }
}
