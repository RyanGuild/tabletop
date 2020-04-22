import { Vector3 } from "three";
import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (
  state: Array<Vector3> | null = null,
  action: TBLAction<Vector3>
) {
  switch (action.type) {
    case ActionTypes.SET_SELECT_START_POSITION:
      return [action.payload];

    case ActionTypes.SET_SELECT_END_POSITION:
      return [...state, action.payload];

    case ActionTypes.CLEAR_SELECTION:
      return null;

    default:
      return state;
  }
}
