import { IAggregateRootRepository } from "../../core/application/abstractions/IAggregateRootRepository";
import { AggregateRoot } from "../../core/domain/example-aggregate/AggregateRoot.model";

export class AggregateRootMockRepository implements IAggregateRootRepository {
  private _mockData: AggregateRoot[] = [];

  constructor(
    mockData?: AggregateRoot[]
  ) {
    if (mockData !== undefined) {
      this._mockData = mockData;
    }
  }

  async add(entity: AggregateRoot): Promise<boolean> {
    this._mockData.push(entity);
    return true;
  }

  async addRange(entities: AggregateRoot[]): Promise<boolean> {
    this._mockData = this._mockData.concat(entities);
    return true;
  }

  async get(id: string): Promise<AggregateRoot> {
    const b = this._mockData.find(b => {
      return b.id === id;
    });

    if (b === undefined) {
      throw new Error(`Could not find aggregate root by id: ${id}`)
    }

    return b.clone();
  }

  async getPagedResults(pageSize: number, pageNumber: number): Promise<AggregateRoot[]> {
    return this._mockData
      .slice(
        pageSize * (pageNumber - 1),
        pageSize * pageNumber
      )
      .map(b => {
        return b.clone();
      });
  }

  async update(entity: AggregateRoot): Promise<boolean> {
    const bIdx = this._mockData.findIndex(b => {
      return b.id === entity.id;
    });

    if (bIdx === -1) {
      return false;
    }

    this._mockData[bIdx] = entity;
    return true;
  }

  async remove(id: string): Promise<boolean> {
    let index = this._mockData.findIndex(s => {
      return s.id === id;
    });

    const removed = this._mockData.splice(index, 1);

    return removed.length !== 0;
  }
}
