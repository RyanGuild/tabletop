import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (state: string = "#ff0000", action: TBLAction<string>) {
  switch (action.type) {
    case ActionTypes.SET_PAINT_COLOR:
      return action.payload;
    default:
      return state;
  }
}
