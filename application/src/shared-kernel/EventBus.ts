import { Subject } from "rxjs";
import { ExampleEvent } from "./examples/ExampleEvent.model";

// This should be instantiated as a Singleton and shared around.
export class EventBus {
	public exampleEventStream: Subject<ExampleEvent>;

	constructor() {
		this.exampleEventStream = new Subject();
	}
}
