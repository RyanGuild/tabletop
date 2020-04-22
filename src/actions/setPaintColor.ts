import { ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (color: string): TBLAction<string> {
  return {
    type: ActionTypes.SET_PAINT_COLOR,
    payload: color,
  };
}
