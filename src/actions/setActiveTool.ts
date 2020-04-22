import { Tools, ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (tool: Tools): TBLAction<Tools> {
  return {
    type: ActionTypes.SET_ACTIVE_TOOL,
    payload: tool,
  };
}
