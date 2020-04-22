import { take, fork, all, select, put } from "redux-saga/effects";
import { ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";
import { Vector3 } from "three";

import setCameraPosition from "../actions/setCameraPosition";

export default function* CameraSaga() {
  yield all([fork(ZoomTask), fork(KeyboardTask)]);
}

function* ZoomTask() {
  while (true) {
    let zoomAction: TBLAction<number> = yield take(ActionTypes.SET_ZOOM_LEVEL);
    let { cameraPosition } = yield select();
    yield put(
      setCameraPosition(
        new Vector3(
          cameraPosition.x,
          100 * zoomAction.payload + 10,
          cameraPosition.z
        )
      )
    );
  }
}

function* KeyboardTask() {}
