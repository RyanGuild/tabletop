import { TBLAction } from "../data/interfaces";
import { TileLayerData } from "../data/structs";
import { ActionTypes } from "../data/enums";

export default function (
  data: TileLayerData<string>
): TBLAction<TileLayerData<string>> {
  return {
    type: ActionTypes.SET_TILE_PAINT_DATA,
    payload: data,
  };
}
