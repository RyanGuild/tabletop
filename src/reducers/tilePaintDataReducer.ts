import { TBLAction } from "../data/interfaces";
import { TileLayerData } from "../data/structs";
import { ActionTypes } from "../data/enums";

export default function (
  state: TileLayerData<string> | null = null,
  action: TBLAction<TileLayerData<string> | number>
): TileLayerData<string> | null {
  switch (action.type) {
    case ActionTypes.NEW_MAT:
      return new TileLayerData<string>(action.payload as number, "#fff");
    case ActionTypes.SET_TILE_PAINT_DATA:
      return action.payload as TileLayerData<string>;
    default:
      return state;
  }
}
