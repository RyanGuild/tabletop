import { Vector3 } from "three";

type EntityData<N = any> = {
  entity: N;
  height: number;
  width: number;
  x: number;
  z: number;
};

export class EntityLayerData<T = any> {
  private data: EntityData<T>[];
  private size: number;
  constructor(size: number, gridSnapEnabled: boolean, data?: EntityData<T>[]) {
    this.size = size;
    this.data = data || [];
  }

  VectorSet(entity: T, vec1: Vector3, vec2?: Vector3): EntityLayerData<T> {
    if (!vec2) {
      this.data.push({
        entity,
        height: 1,
        width: 1,
        x: Math.floor(vec1.x),
        z: Math.floor(vec1.z),
      });
    } else {
      let x1 = Math.floor(vec1.x);
      let x2 = Math.floor(vec2.x);
      let z1 = Math.floor(vec1.z);
      let z2 = Math.floor(vec2.z);
      this.data.push({
        entity,
        height: Math.max(z1 - z2, z2 - z1),
        width: Math.max(x1 - x2, x2 - x1),
        x: Math.min(x1, x2),
        z: Math.min(z1, z2),
      });
    }
    return this;
  }

  VectorGet(vector: Vector3): Iterable<EntityData<T>> {
    let x = Math.floor(vector.x);
    let z = Math.floor(vector.z);
    let data = this.data;
    return (function* () {
      for (let entry of data) {
        if (
          entry.x <= x &&
          entry.x + entry.width >= x &&
          entry.z <= z &&
          entry.z + entry.height >= z
        )
          yield entry;
      }
    })();
  }

  Data(): Iterable<EntityData<T>> {
    return this.data;
  }

  toJson(): string {
    return JSON.stringify(this.data);
  }

  fromJson<A = any>(
    json: string,
    mapSize: number,
    gridSnapEnabled: boolean
  ): EntityLayerData<A> {
    let data: EntityData<A>[] = JSON.parse(json);
    return new EntityLayerData<A>(mapSize, gridSnapEnabled, data);
  }
}
