import React from "react";
import FAB from "@material-ui/core/Fab";

export type ToolButtonProps = React.PropsWithChildren<{
  name: string;
  clickHandler: () => void;
  selected?: Boolean;
  isToggle: Boolean;
}>;

export default function ({
  name,
  clickHandler,
  isToggle,
  selected,
  children,
}: ToolButtonProps) {
  return (
    <FAB
      focusRipple
      onClick={clickHandler}
      size="small"
      title={name}
      color={isToggle ? (selected ? "primary" : undefined) : "secondary"}
    >
      {children}
    </FAB>
  );
}
