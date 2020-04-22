import { ImageSubTools, ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export default function (tool: ImageSubTools): TBLAction<ImageSubTools> {
  return {
    type: ActionTypes.SET_IMAGE_SUB_TOOL,
    payload: tool,
  };
}
