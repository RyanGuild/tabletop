import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { GridOn, GridOff, Lens, Stop, ShowChart } from "@material-ui/icons";
import ToolButton from "../prezentational/ToolButton";
import { PaintSubTools } from "../../data/enums";
import { useDispatch, useSelector } from "react-redux";
import setPaintColor from "../../actions/setPaintColor";
import setPaintSubToolAction from "../../actions/setPaintSubTool";
import setPaintGridSnapEnabled from "../../actions/setGridSnapEnabled";
import { RootState } from "../../reducers";

const Spacer = () => <span style={{ paddingRight: "10px" }} />;
const boundry = (e: any) => {
  e.stopPropagation();
};

export default function () {
  const dispatch = useDispatch();

  const color = useSelector((state: RootState) => state.paintColor);
  const setColor = (nextColor: string) => dispatch(setPaintColor(nextColor));
  const paintSubTool = useSelector((state: RootState) => state.paintSubTool);
  const setPaintSubTool = (nextPaintSubTool: PaintSubTools) => {
    dispatch(setPaintSubToolAction(nextPaintSubTool));
    return;
  };
  const gridSnapEnabled = useSelector(
    (state: RootState) => state.gridSnapEnabled
  );
  const setGridSnapEnabled = (nextGridSnapEnabled: boolean) => {
    dispatch(setPaintGridSnapEnabled(nextGridSnapEnabled));
    return;
  };

  const [colorControlsActive, setColorControlsActive] = useState(false);

  const handleColorChange = ({ hex }: any) =>
    colorControlsActive ? setColor(hex) : null;

  return (
    <div
      onClick={boundry}
      onMouseDown={boundry}
      onMouseUp={boundry}
      onMouseMove={boundry}
    >
      <div
        onMouseEnter={() => setColorControlsActive(true)}
        onMouseLeave={() => setColorControlsActive(false)}
      >
        <ChromePicker color={color} onChangeComplete={handleColorChange} />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ToolButton
          isToggle={true}
          name={"Snap To Grid"}
          selected={gridSnapEnabled}
          clickHandler={() =>
            gridSnapEnabled
              ? setGridSnapEnabled(false)
              : setGridSnapEnabled(true)
          }
        >
          {gridSnapEnabled ? <GridOn /> : <GridOff />}
        </ToolButton>
        <Spacer />
        <ToolButton
          isToggle={true}
          selected={paintSubTool === PaintSubTools.Box}
          name={"Paint Box"}
          clickHandler={() => setPaintSubTool(PaintSubTools.Box)}
        >
          <Stop />
        </ToolButton>
        <Spacer />
        <ToolButton
          isToggle={true}
          selected={paintSubTool === PaintSubTools.Circle}
          name={"Paint Circle"}
          clickHandler={() => setPaintSubTool(PaintSubTools.Circle)}
        >
          <Lens />
        </ToolButton>
        <Spacer />
        <ToolButton
          isToggle={true}
          selected={paintSubTool === PaintSubTools.Line}
          name={"Paint FreeHand"}
          clickHandler={() => setPaintSubTool(PaintSubTools.Line)}
        >
          <ShowChart />
        </ToolButton>
        <Spacer />
        <ToolButton
          isToggle={true}
          selected={paintSubTool === PaintSubTools.Erase}
          name={"Erase"}
          clickHandler={() => setPaintSubTool(PaintSubTools.Erase)}
        >
          <img src="/erase.png" alt="Erase Paint" />
        </ToolButton>
      </div>
    </div>
  );
}
