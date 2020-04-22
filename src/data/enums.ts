export enum InputKeys {
  Left = 37,
  Up = 38,
  Right = 39,
  Down = 40,
  Space = 32,
  W = 87,
  A = 65,
  S = 83,
  D = 68,
  Shift = 16,
  Tilde = 192,
}

export enum Screens {
  Startup,
  Mat,
  Campain,
  Documents,
}

export enum Views {
  Tools = "Tools View",
  DMDrawer = "DMDrawer View",
  Chat = "Chat View",
  Dice = "Dice View",
  StartupDialog = "Startup Dialog",
}

export enum Tools {
  Select,
  Paint,
  Move,
  Image,
}

export enum PaintSubTools {
  Box,
  Circle,
  Line,
  Erase,
}

export enum ImageSubTools {
  BG,
  Paint,
}

export enum ActionTypes {
  ADD_VIEW = "add view",
  KEY_UP = "key up",
  KEY_DOWN = "key down",
  MOUSE_DOWN = "mouse down",
  MOUSE_UP = "mouse up",
  MOUSE_MOVE = "mouse move",
  REMOVE_VIEW = "remove view",
  SET_ACTIVE_TOOL = "set active tool",
  SET_ZOOM_LEVEL = "set zoom level",
  SET_PAINT_SUB_TOOL = "set paint sub tool",
  SET_PAINT_COLOR = "set paint color",
  SET_PAINT_GRID_SNAP_ENABLED = "set paint grid snap enabled",
  SET_SELECT_END_POSITION = "set select end position",
  SET_SELECT_START_POSITION = "set select start position",
  CLEAR_SELECTION = "clear selection",
  MAT_CLICK = "mat click",
  NEW_MAT = "new mat",
  SET_TILE_PAINT_DATA = "set tile paint data",
  SET_IMAGE_SUB_TOOL = "set image sub tool",
  SET_CAMERA_POSITION = "set camera position",
  ADD_IMAGE_TO_STORE = "ADD_IMAGE_TO_STORE",
  SET_BACKGROUND_IMAGE = "SET_BACKGROUND_IMAGE",
  CLEAR_VIEWS = "CLEAR_VIEWS",
  JOIN_CAMPAIGN = "JOIN_CAMPAIGN",
  LOAD_CAMPAIGN = "LOAD_CAMPAIGN",
  NEW_CAMPAIN = "NEW_CAMPAIN",
  STARTUP_FLOW = "STARTUP_FLOW",
  STARTUP_FLOW_CANCLED = "STARTUP_FLOW_CANCLED",
  LOAD_MAT = "LOAD_MAT",
}
