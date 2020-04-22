import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (zoomValue: number): TBLAction<number> {
  return {
    type: ActionTypes.SET_ZOOM_LEVEL,
    payload: zoomValue,
  };
}
