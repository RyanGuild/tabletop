import { Tools, ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (
  state: Tools = Tools.Select,
  action: TBLAction<Tools>
): Tools {
  switch (action.type) {
    case ActionTypes.SET_ACTIVE_TOOL:
      return action.payload;
    default:
      return state;
  }
}
