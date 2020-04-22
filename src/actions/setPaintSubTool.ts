import { PaintSubTools, ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (tool: PaintSubTools): TBLAction<PaintSubTools> {
  return {
    type: ActionTypes.SET_PAINT_SUB_TOOL,
    payload: tool,
  };
}
