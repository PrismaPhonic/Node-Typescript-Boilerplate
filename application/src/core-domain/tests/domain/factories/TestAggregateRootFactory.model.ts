import * as faker from 'faker';
import { AggregateRoot } from "../../../core/domain/example-aggregate/AggregateRoot.model";
import { EventBus } from "../../../../shared-kernel/EventBus";

export class TestAggregateRootFactory {

  static createAggregateRootWithFactoryMethod(optionalParams?: OptionalParams): AggregateRoot {
    const data = {
      id: faker.random.uuid(),
      eventBus: new EventBus()
    };

    if (optionalParams !== undefined) {
      TestAggregateRootFactory.patchObject(data, optionalParams);
    }

    return AggregateRoot.create(
      data.id,
      data.eventBus
    )
  }

  static patchObject(inputObj: {[key: string]: any}, patchObj: object) {
    for (let [key, value] of Object.entries(patchObj)) {
      if (inputObj.hasOwnProperty(key)) inputObj[key] = value;
    }
  }
}

interface OptionalParams {
  id?: string,
  eventBus?: EventBus
}