import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (enabled: boolean): TBLAction<boolean> {
  return {
    type: ActionTypes.SET_PAINT_GRID_SNAP_ENABLED,
    payload: enabled,
  };
}
