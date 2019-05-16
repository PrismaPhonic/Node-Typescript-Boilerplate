import { Entity } from "../../../../shared-kernel/Entity.model";
import { EventBus } from "../../../../shared-kernel/EventBus";
import { AggregateRootCreatedEvent } from "../events/AggregateRootCreatedEvent.model";
import { IClonable } from "../../../../shared-kernel/abstractions/IClonable";

export class AggregateRoot extends Entity implements IClonable<AggregateRoot> {
  constructor(
    id: string,
    private eventBus: EventBus,
  ) {
    super(id);
  }

  // Invariants should be enforced in the factory method.
  static create(
    id: string,
    eventBus: EventBus
  ): AggregateRoot {

    const aggregateRoot = new AggregateRoot(id, eventBus);
    const aggregateRootCreated = new AggregateRootCreatedEvent(aggregateRoot);
    eventBus.exampleEventStream.next(aggregateRootCreated);

    return aggregateRoot;
  }

  clone(): AggregateRoot {
    const aggregateClone = new AggregateRoot(this.id, this.eventBus);
    aggregateClone._version = this.version;

    return aggregateClone;
  }
}