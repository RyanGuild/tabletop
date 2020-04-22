import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (
  state: boolean = true,
  action: TBLAction<boolean>
): boolean {
  switch (action.type) {
    case ActionTypes.SET_PAINT_GRID_SNAP_ENABLED:
      return action.payload;
    default:
      return state;
  }
}
