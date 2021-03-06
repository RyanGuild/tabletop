import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";
import { Vector3 } from "three";

export default function (pos: Vector3): TBLAction<Vector3> {
  return {
    type: ActionTypes.MAT_CLICK,
    payload: pos,
  };
}
