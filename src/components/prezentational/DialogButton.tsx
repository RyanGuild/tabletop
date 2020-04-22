import React from "react";
import Button from "@material-ui/core/Button";

export type DialogButtonProps = React.PropsWithChildren<{
  clickHandler?: () => void;
}>;

export default function ({ clickHandler, children }: DialogButtonProps) {
  return (
    <Button variant="contained" color="primary" onClick={clickHandler}>
      {children}
    </Button>
  );
}
