import { ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";
import { Vector3 } from "three";

export default function (
  state: Vector3 = new Vector3(0, 20, 0),
  action: TBLAction<number | Vector3>
) {
  switch (action.type) {
    case ActionTypes.SET_CAMERA_POSITION:
      return action.payload as Vector3;
    default:
      return state;
  }
}
