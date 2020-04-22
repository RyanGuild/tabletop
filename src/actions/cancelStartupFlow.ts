import { ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (): TBLAction<null> {
  return {
    type: ActionTypes.STARTUP_FLOW_CANCLED,
    payload: null,
  };
}
