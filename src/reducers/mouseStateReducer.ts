import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (
  state: boolean = false,
  action: TBLAction<undefined>
): boolean {
  switch (action.type) {
    case ActionTypes.MOUSE_DOWN:
      return true;
    case ActionTypes.MOUSE_UP:
      return false;
    default:
      return state;
  }
}
