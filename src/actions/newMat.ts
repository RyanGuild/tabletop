import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (size: number): TBLAction<number> {
  return { type: ActionTypes.NEW_MAT, payload: size };
}
