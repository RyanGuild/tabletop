import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Clear, Maximize, AspectRatio } from "@material-ui/icons";

export type WindowControlsProps = {
  killable: boolean;
  collapsable: boolean;
  collapsed: boolean;
  onCollapse?: () => void;
  onKill?: () => void;
};

export default function ({
  killable,
  collapsable,
  collapsed,
  onCollapse,
  onKill,
}: WindowControlsProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      {killable ? (
        <IconButton size="small" onClick={onKill}>
          <Clear />
        </IconButton>
      ) : null}
      {collapsable ? (
        <IconButton size="small" onClick={onCollapse}>
          {collapsed ? <AspectRatio /> : <Maximize />}
        </IconButton>
      ) : null}
    </div>
  );
}
