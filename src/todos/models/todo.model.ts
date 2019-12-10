import { AggregateRoot } from '@nestjs/cqrs';

export class Todo extends AggregateRoot {
  //   constructor(private readonly id: string) {
  //     super();
  //   }
  //   killEnemy(enemyId: string) {
  //     // logic
  //     this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  //   }
}
