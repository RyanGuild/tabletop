import { InputKeys, ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function inputKeyReducer(
  state: Set<InputKeys> = new Set(),
  action: TBLAction<InputKeys>
): Set<InputKeys> {
  switch (action.type) {
    case ActionTypes.KEY_DOWN:
      return state.add(action.payload);
    case ActionTypes.KEY_UP:
      state.delete(action.payload);
      return state;
    default:
      return state;
  }
}
