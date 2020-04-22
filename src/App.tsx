import React from "react";
import { Canvas } from "react-three-fiber";
import Mat from "./components/game/Mat";
import CameraController from "./components/game/CameraController";
import { ReactReduxContext, Provider, useSelector } from "react-redux";
import TopMenu from "./components/ui/TopMenu";
import ToolBox from "./components/ui/ToolBox";
import DMDrawer from "./components/ui/DMDrawer";
import StartupDialog from "./components/ui/StartupDialog";

import { Views, Screens } from "./data/enums";
import { RootState } from "./reducers";

const UIelements = () => {
  const activeScreen = useSelector((state: RootState) => state.activeScreen);
  const activeViews = useSelector((state: RootState) => state.activeViews);
  switch (activeScreen) {
    case Screens.Mat:
      return (
        <>
          {activeViews.has(Views.Tools) ? <ToolBox /> : null}
          {activeViews.has(Views.DMDrawer) ? <DMDrawer /> : null}
        </>
      );
    case Screens.Startup:
      return <StartupDialog />;
    default:
      return null;
  }
};

const Canvases = () => {
  const activeScreen = useSelector((state: RootState) => state.activeScreen);
  const size = useSelector((state: RootState) => state.matSize);
  switch (activeScreen) {
    case Screens.Mat:
      return (
        <ReactReduxContext.Consumer>
          {({ store }) => (
            <Canvas style={{ zIndex: -1 }}>
              <Provider store={store}>
                <ambientLight />
                <Mat size={size} />
                <CameraController />
              </Provider>
            </Canvas>
          )}
        </ReactReduxContext.Consumer>
      );
    default:
      return null;
  }
};

function App() {
  return (
    <div className="App">
      <TopMenu />
      <UIelements />
    </div>
  );
}

export default App;
