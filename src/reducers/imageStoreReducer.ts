import { ImageStoreEntry, TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export default function (
  state: ImageStoreEntry[] = [],
  action: TBLAction<ImageStoreEntry>
) {
  switch (action.type) {
    case ActionTypes.ADD_IMAGE_TO_STORE:
      return [...state, action.payload];
    default:
      return state;
  }
}
