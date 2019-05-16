import { IDomainEvent } from "../../../../shared-kernel/abstractions/IDomainEvent";
import { AggregateRoot } from "../example-aggregate/AggregateRoot.model";
import uuid = require("uuid/v4");

export class AggregateRootCreatedEvent implements IDomainEvent {
  public readonly eventOccurred: Date;
  public readonly id: string;

  constructor(
    public readonly aggregateRoot: AggregateRoot
  ) {
    this.eventOccurred = new Date();
    this.id = uuid();
  }
}