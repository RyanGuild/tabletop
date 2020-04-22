import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (): TBLAction<undefined> {
  return {
    type: ActionTypes.CLEAR_SELECTION,
    payload: undefined,
  };
}
