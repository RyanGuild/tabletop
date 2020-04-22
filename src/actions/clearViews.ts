import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (): TBLAction<null> {
  return {
    type: ActionTypes.CLEAR_VIEWS,
    payload: null,
  };
}
