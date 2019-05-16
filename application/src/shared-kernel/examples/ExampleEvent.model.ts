import { IDomainEvent } from "../abstractions/IDomainEvent";
import uuid = require("uuid/v4");

export class ExampleEvent implements IDomainEvent {
  public readonly eventOccurred: Date;
  public readonly id: string;

  constructor(
    public readonly eventData: {"key": "value"}
  ) {
    this.eventOccurred = new Date();
    this.id = uuid();
  }
}