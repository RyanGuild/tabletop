import { ImageStoreEntry, TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (
  image: ImageStoreEntry | null
): TBLAction<ImageStoreEntry | null> {
  return {
    type: ActionTypes.SET_BACKGROUND_IMAGE,
    payload: image,
  };
}
