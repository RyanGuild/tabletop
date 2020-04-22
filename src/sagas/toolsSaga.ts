import { take, cancel, fork } from "redux-saga/effects";
import { ActionTypes, Tools } from "../data/enums";
import { TBLAction } from "../data/interfaces";

import PaintSaga from "./paintSaga";
import PanSaga from "./panSaga";
import ImageSaga from "./imageSaga";

export default function* ToolsSaga() {
  let toolTask;
  while (true) {
    let activeToolAction: TBLAction<Tools> = yield take(
      ActionTypes.SET_ACTIVE_TOOL
    );
    if (toolTask) yield cancel(toolTask);
    switch (activeToolAction.payload) {
      case Tools.Select:
        break;
      case Tools.Move:
        toolTask = yield fork(PanSaga);
        break;
      case Tools.Paint:
        toolTask = yield fork(PaintSaga);
        break;
      case Tools.Image:
        toolTask = yield fork(ImageSaga)
        break;
      default:
        break;
    }
  }
}
