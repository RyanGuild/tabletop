import { PaintSubTools, ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (
  state: PaintSubTools = PaintSubTools.Box,
  action: TBLAction<PaintSubTools>
) {
  switch (action.type) {
    case ActionTypes.SET_PAINT_SUB_TOOL:
      return action.payload;
    default:
      return state;
  }
}
