import { Views, ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (
  state: Set<Views> = new Set([Views.Tools]),
  action: TBLAction<Views>
): Set<Views> {
  switch (action.type) {
    case ActionTypes.ADD_VIEW:
      return new Set(state.add(action.payload).values());
    case ActionTypes.REMOVE_VIEW:
      state.delete(action.payload);
      return new Set(state.values());
    default:
      return state;
  }
}
