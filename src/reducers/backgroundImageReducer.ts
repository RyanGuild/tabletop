import { ImageStoreEntry, TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (
  state: ImageStoreEntry | null = null,
  action: TBLAction<ImageStoreEntry | null>
): ImageStoreEntry | null {
  switch (action.type) {
    case ActionTypes.SET_BACKGROUND_IMAGE:
      return action.payload;
    default:
      return state;
  }
}
