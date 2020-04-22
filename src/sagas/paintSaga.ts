import { select, takeEvery, all, put } from "redux-saga/effects";
import { RootState } from "../reducers";
import { ActionTypes, PaintSubTools } from "../data/enums";
import { Vector3 } from "three";
import { TBLAction } from "../data/interfaces";
import setTilePaintData from "../actions/setTilePaintData";
import gridSnapVector from "../utils/gridSnapVector";

export default function* PaintSaga() {
  yield all([
    takeEvery(ActionTypes.SET_SELECT_END_POSITION, function* () {
      let {
        paintSubTool,
        gridSnapEnabled,
        paintColor,
        selection,
        tilePaintData,
      }: RootState = yield select();
      console.debug(
        "Selection Paint",
        paintSubTool,
        gridSnapEnabled,
        paintColor,
        selection
      );
      if (paintSubTool === PaintSubTools.Erase) {
        if (tilePaintData && gridSnapEnabled && selection && selection[1]) {
          setTilePaintData(
            tilePaintData.BoxSet(
              [gridSnapVector(selection[0]), gridSnapVector(selection[1])],
              "#fff"
            )
          );
        }
      } else {
        if (tilePaintData && gridSnapEnabled && selection && selection[1]) {
          setTilePaintData(
            tilePaintData.BoxSet(
              [gridSnapVector(selection[0]), gridSnapVector(selection[1])],
              paintColor
            )
          );
        }
      }
    }),
    takeEvery(ActionTypes.MAT_CLICK, function* (action: TBLAction<Vector3>) {
      let {
        gridSnapEnabled,
        paintColor,
        tilePaintData,
        paintSubTool,
      }: RootState = yield select();
      if (paintSubTool === PaintSubTools.Erase) {
        if (tilePaintData && gridSnapEnabled) {
          yield put(
            setTilePaintData(tilePaintData.VectorSet(action.payload, "#fff"))
          );
        }
      } else {
        if (tilePaintData && gridSnapEnabled) {
          yield put(
            setTilePaintData(
              tilePaintData.VectorSet(action.payload, paintColor)
            )
          );
        }
      }
    }),
  ]);
}
