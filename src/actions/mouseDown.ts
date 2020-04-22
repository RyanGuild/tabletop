import { TBLAction, PointerData } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (pos: PointerData): TBLAction<PointerData> {
  return {
    type: ActionTypes.MOUSE_DOWN,
    payload: pos,
  };
}
