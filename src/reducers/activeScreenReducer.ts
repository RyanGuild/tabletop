import { Screens, ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (
  state: Screens = Screens.Startup,
  action: TBLAction<null>
) {
  switch (action.type) {
    case ActionTypes.STARTUP_FLOW:
      return Screens.Startup;
    case ActionTypes.LOAD_MAT:
      return Screens.Mat;
    case ActionTypes.NEW_MAT:
      return Screens.Mat;
    default:
      return state;
  }
}
