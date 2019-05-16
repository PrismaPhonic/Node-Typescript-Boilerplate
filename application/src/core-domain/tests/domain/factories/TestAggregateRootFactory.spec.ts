import { assert, expect } from 'chai';
import 'mocha';
import { TestAggregateRootFactory } from "./TestAggregateRootFactory.model";
import { AggregateRoot } from "../../../core/domain/example-aggregate/AggregateRoot.model";

describe('Test TestAggregateRootFactory generator', () => {
  it('should construct an instance of an AggregateRoot entity', () => {
    const aggregateRoot = TestAggregateRootFactory.createAggregateRootWithFactoryMethod();
    expect(aggregateRoot).instanceOf(AggregateRoot);
  });
});
