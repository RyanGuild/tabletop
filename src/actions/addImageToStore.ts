import { ActionTypes } from "../data/enums";
import { TBLAction, ImageStoreEntry } from "../data/interfaces";

export default function (
  name: string,
  uri: string
): TBLAction<ImageStoreEntry> {
  return {
    type: ActionTypes.ADD_IMAGE_TO_STORE,
    payload: { name, uri },
  };
}
