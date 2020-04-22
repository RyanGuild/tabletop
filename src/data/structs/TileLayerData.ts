import { Vector3 } from "three";

export class TileLayerData<T = any> {
  update: number = 0;
  private data: T[][];
  private size: number;
  constructor(...args: [T[][]] | [number, T]) {
    console.debug("new TileLayerData from:", args);
    if (args.length === 1) {
      this.size = (args[0] as T[][]).length;
      this.data = args[0] as T[][];
    } else if (args.length === 2) {
      console.debug("new TileLayerData from [size, default] constructor");
      this.size = args[0] as number;
      this.data = new Array(this.size);
      for (let i = 0; i < this.size; i++) {
        this.data[i] = [];
        for (let j = 0; j < this.size; j++) {
          this.data[i].push(args[1]);
        }
      }
      console.debug("new TileLayerData initial data:", this.data);
    } else {
      throw new Error("Illeagal argument count");
    }
  }

  VectorSet(vector: Vector3, color: T): TileLayerData {
    let { x, z } = this.Target(vector);
    console.debug("vectorSet TilePaintData:", x, z, color);
    this.data[x][z] = color;
    this.update++;
    return this;
  }

  VectorGet(vector: Vector3): T {
    let { x, z } = this.Target(vector);
    return this.data[x][z];
  }

  BoxSet(box: [Vector3, Vector3], color: T): TileLayerData<T> {
    let { x: x1, z: z1 } = this.Target(box[0]);
    let { x: x2, z: z2 } = this.Target(box[1]);
    let startX = x1 > x2 ? x2 : x1;
    let endX = x1 > x2 ? x1 : x2;
    let startZ = z1 > z2 ? z2 : z1;
    let endZ = z1 > z2 ? z1 : z2;
    for (let x = startX; x <= endX; x++) {
      for (let z = startZ; z <= endZ; z++) {
        this.data[x][z] = color;
      }
    }
    return this;
  }

  private Target(vector: Vector3): { x: number; z: number } {
    let centerX = this.size / 2;
    let centerZ = this.size / 2;
    return {
      x: Math.floor(centerX + vector.x),
      z: Math.floor(centerZ + vector.z),
    };
  }

  Data(): Iterable<T> {
    if (!this.data[0]) throw new Error("no data yet");
    return (function* (data: T[][]) {
      for (let row of data) {
        for (let entry of row) {
          yield entry;
        }
      }
    })(this.data);
  }

  toJson(): string {
    return JSON.stringify(this.data);
  }

  static fromJson<N = any>(json: string): TileLayerData<N> {
    let data: N[][] = JSON.parse(json);
    return new TileLayerData<N>(data);
  }
}
