import React, { useState, ElementType, HTMLAttributes } from "react";

import Paper from "@material-ui/core/Paper";
import Draggable, { ControlPosition } from "react-draggable";

import WindowControls from "./WindowControls";
import removeView from "../../actions/removeView";
import { useDispatch } from "react-redux";
import { Views } from "../../data/enums";

export type UIContainerProps = React.PropsWithChildren<{
  defaultPosition: ControlPosition;
  view: Views;
  title: string;
  killable?: boolean;
  collapsable?: boolean;
  onKill?: () => void;
  onCollapse?: () => void;
  draggable?: boolean;
  screenSnapping?: boolean;
  component?: ElementType<HTMLAttributes<HTMLElement>>;
  flow?: "row" | "column";
}>;

export default function ({
  defaultPosition = { x: 0, y: 0 } as ControlPosition,
  view,
  title,
  killable = true,
  collapsable = true,
  onKill,
  onCollapse,
  component = "div",
  children,
}: UIContainerProps) {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  return (
    <Draggable defaultPosition={defaultPosition}>
      <Paper square component={component} elevation={5}>
        <WindowControls
          killable={killable}
          collapsable={collapsable}
          collapsed={collapsed}
          onCollapse={
            onCollapse ||
            (() => (collapsed ? setCollapsed(false) : setCollapsed(true)))
          }
          onKill={
            onKill ||
            (() => {
              console.log("onKill", title);
              dispatch(removeView(view));
            })
          }
        />
        <h2
          style={{
            fontSize: "12pt",
            cursor: "default",
          }}
        >
          {title}
        </h2>
        {collapsed ? null : children}
      </Paper>
    </Draggable>
  );
}
