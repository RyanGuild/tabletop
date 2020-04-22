import { combineReducers } from "redux";
import inputKey from "./inputKeyReducer";
import zoomLevel from "./zoomLevelReducer";
import mouseState from "./mouseStateReducer";
import activeViews from "./activeViewsReducer";
import activeTool from "./activeToolReducer";
import paintColor from "./paintColorReducer";
import paintSubTool from "./paintSubToolReducer";
import gridSnapEnabled from "./gridSnapEnabledReducer";
import selection from "./selectionReducer";
import tilePaintData from "./tilePaintDataReducer";
import matSize from "./matSizeReducer";
import imageSubTool from "./imageSubToolReducer";
import cameraPosition from "./cameraPositionReducer";
import imageStore from "./imageStoreReducer";
import backgroundImage from "./backgroundImageReducer";
import activeScreen from "./activeScreenReducer";

export const RootReducer = combineReducers({
  matSize,
  inputKey,
  zoomLevel,
  mouseState,
  activeViews,
  activeTool,
  paintColor,
  paintSubTool,
  gridSnapEnabled,
  selection,
  tilePaintData,
  imageSubTool,
  cameraPosition,
  imageStore,
  backgroundImage,
  activeScreen,
});

export type RootState = ReturnType<typeof RootReducer>;
