import { AggregateRoot } from "../../domain/example-aggregate/AggregateRoot.model";

export interface IAggregateRootRepository {
  add(entity: AggregateRoot): Promise<boolean>;
  addRange(entities: AggregateRoot[]): Promise<boolean>;
  get(id: string): Promise<AggregateRoot>;
  getPagedResults(pageSize: number, pageNumber: number): Promise<AggregateRoot[]>;
  update(entity: AggregateRoot): Promise<boolean>;
  remove(id: string): Promise<boolean>;
}
