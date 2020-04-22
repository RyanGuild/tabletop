import { ImageSubTools, ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (
  state: ImageSubTools = ImageSubTools.BG,
  action: TBLAction<ImageSubTools>
) {
  switch (action.type) {
    case ActionTypes.SET_IMAGE_SUB_TOOL:
      return action.payload;
    default:
      return state;
  }
}
