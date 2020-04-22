import { ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (state: any = 0, action: TBLAction<number>) {
  switch (action.type) {
    case ActionTypes.SET_ZOOM_LEVEL:
      return action.payload;
    default:
      return state;
  }
}
