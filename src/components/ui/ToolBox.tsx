import React from "react";
import UIContainer from "../structural/UIContainer";
import ToolButton from "../prezentational/ToolButton";
import { Brush, OpenWith, NearMe, Photo } from "@material-ui/icons";
import { Tools, Views } from "../../data/enums";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import setActiveTool from "../../actions/setActiveTool";
import ImageSubMenu from "./ImageSubMenu";

import PaintSubMenu from "./PaintSubMenu";

export default function () {
  const dispatch = useDispatch();
  const tool = useSelector((state: RootState) => state.activeTool);
  const setTool = (tool: Tools) => dispatch(setActiveTool(tool));
  return (
    <UIContainer
      defaultPosition={{
        x: 0,
        y: window.innerHeight / 2 - window.innerHeight / 5,
      }}
      view={Views.Tools}
      title={"Tools"}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "20px",
          }}
        >
          <ToolButton
            isToggle={true}
            selected={tool === Tools.Select}
            name="Select"
            clickHandler={() => setTool(Tools.Select)}
          >
            <NearMe />
          </ToolButton>
          <br />
          <ToolButton
            isToggle={true}
            selected={tool === Tools.Move}
            name="Move"
            clickHandler={() => setTool(Tools.Move)}
          >
            <OpenWith />
          </ToolButton>
          <br />
          <ToolButton
            isToggle={true}
            selected={tool === Tools.Paint}
            name="Paint"
            clickHandler={() => setTool(Tools.Paint)}
          >
            <Brush />
          </ToolButton>
          <br />
          <ToolButton
            isToggle={true}
            selected={tool === Tools.Image}
            name="Paint"
            clickHandler={() => setTool(Tools.Image)}
          >
            <Photo />
          </ToolButton>
        </div>
        <div>
          {tool === Tools.Paint ? <PaintSubMenu /> : null}
          {tool === Tools.Image ? <ImageSubMenu /> : null}
        </div>
      </div>
    </UIContainer>
  );
}
