import React, { useState, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ToolButton from "../prezentational/ToolButton";
import { Menu as MenuIcon, Clear } from "@material-ui/icons";

import addView from "../../actions/addView";
import startupFlow from "../../actions/startupFlow";
import { useDispatch } from "react-redux";
import { Views } from "../../data/enums";

export default function () {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const handleClose = (choice: Views) => {
    setMenuOpen(false);
    dispatch(addView(choice));
  };
  const newGameHandler = () => {
    setMenuOpen(false);
    dispatch(startupFlow());
  };
  return (
    <AppBar>
      <span ref={anchorRef} />

      <ToolButton
        name="Views"
        isToggle={false}
        clickHandler={() => setMenuOpen(true)}
      >
        <MenuIcon />
      </ToolButton>
      <Menu open={menuOpen} anchorEl={anchorRef.current}>
        <MenuItem onClick={() => setMenuOpen(false)}>
          <Clear />
        </MenuItem>
        <MenuItem onClick={newGameHandler}>New Game</MenuItem>
        <MenuItem onClick={() => handleClose(Views.Tools)}>Tools</MenuItem>
        <MenuItem onClick={() => handleClose(Views.DMDrawer)}>
          DM Drawer
        </MenuItem>
        <MenuItem onClick={() => handleClose(Views.Chat)}>Chat</MenuItem>
        <MenuItem onClick={() => handleClose(Views.Dice)}>Dice</MenuItem>
      </Menu>
    </AppBar>
  );
}
