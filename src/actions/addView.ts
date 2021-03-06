import { Views, ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (payload: Views): TBLAction<Views> {
  return {
    type: ActionTypes.ADD_VIEW,
    payload,
  };
}
