import { Vector3 } from "three";
import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (pos: Vector3): TBLAction<Vector3> {
  return {
    type: ActionTypes.SET_SELECT_START_POSITION,
    payload: pos,
  };
}
