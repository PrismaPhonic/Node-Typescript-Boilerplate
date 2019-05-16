import { Subject } from "rxjs";
import { AggregateRootCreatedEvent } from "../core-domain/core/domain/events/AggregateRootCreatedEvent.model";

// This should be instantiated as a Singleton and shared around.
export class EventBus {
	public exampleEventStream: Subject<AggregateRootCreatedEvent>;

	constructor() {
		this.exampleEventStream = new Subject();
	}
}
