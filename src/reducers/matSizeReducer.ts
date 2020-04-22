import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (state: number = 0, action: TBLAction<number>) {
  switch (action.type) {
    case ActionTypes.NEW_MAT:
      return action.payload;
    default:
      return state;
  }
}
