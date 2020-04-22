import { Vector3 } from "three";

export default function (vec: Vector3) {
  return new Vector3(Math.floor(vec.x), vec.y, Math.floor(vec.z));
}
