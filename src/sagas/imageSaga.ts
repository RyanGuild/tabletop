import { select, takeEvery, all, put } from "redux-saga/effects";
import { RootState } from "../reducers";
import { ActionTypes, ImageSubTools } from "../data/enums";
import { Vector3 } from "three";
import { TBLAction } from "../data/interfaces";

export default function* ImageSaga() {
  yield all([
    takeEvery(ActionTypes.SET_SELECT_END_POSITION, function* () {
      let {
        paintSubTool,
        gridSnapEnabled,
        paintColor,
        selection,
        tilePaintData,
      }: RootState = yield select();
    }),
    takeEvery(ActionTypes.MAT_CLICK, function* (action: TBLAction<Vector3>) {
      let { gridSnapEnabled, imageSubTool }: RootState = yield select();
    }),
  ]);
}
