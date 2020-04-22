import React, { useState } from "react";
import UIContainer from "../structural/UIContainer";
import DialogButton from "../prezentational/DialogButton";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Views } from "../../data/enums";
import { useDispatch } from "react-redux";
import cancelStartupFlow from "../../actions/cancelStartupFlow";

const boundry = (e: any) => {
  e.stopPropagation();
};

enum StartDialogPages {
  START,
  JOIN,
  LOAD,
  NEW,
}

export default function StartupDialog() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(StartDialogPages.START);
  const [newCampainState, setNewCampainState] = useState({
    title: "",
    nickname: "",
    matSize: 25,
  });

  return (
    <UIContainer
      defaultPosition={{
        x: window.innerWidth / 2 - 85,
        y: window.innerHeight / 2 - window.innerHeight / 5,
      }}
      onKill={() =>
        page === StartDialogPages.START
          ? dispatch(cancelStartupFlow())
          : setPage(StartDialogPages.START)
      }
      killable={page !== StartDialogPages.START}
      collapsable={false}
      view={Views.StartupDialog}
      title={"Startup"}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "10px",
        }}
        onClick={boundry}
        onMouseDown={boundry}
        onMouseUp={boundry}
        onMouseMove={boundry}
      >
        {page === StartDialogPages.START ? (
          <>
            <DialogButton clickHandler={() => setPage(StartDialogPages.JOIN)}>
              Join Campain
            </DialogButton>
            <br />
            <DialogButton clickHandler={() => setPage(StartDialogPages.LOAD)}>
              Load Campain
            </DialogButton>
            <br />
            <DialogButton clickHandler={() => setPage(StartDialogPages.NEW)}>
              New Campain
            </DialogButton>
          </>
        ) : null}
        {page === StartDialogPages.NEW ? (
          <>
            <TextField
              id="standard-basic"
              label="Campain Name"
              onChange={(event) =>
                setNewCampainState({
                  title: event.target.value,
                  ...newCampainState,
                })
              }
            />
            <br />
            <TextField
              id="standard-basic"
              label="GM Nickname"
              onChange={(event) =>
                setNewCampainState({
                  nickname: event.target.value,
                  ...newCampainState,
                })
              }
            />
            <br />
            <Typography id="discrete-slider-small-steps" gutterBottom>
              Initial Mat Size
            </Typography>
            <Slider
              defaultValue={25}
              getAriaValueText={(val: number) => `${val} x ${val} sq`}
              aria-labelledby="discrete-slider-small-steps"
              min={10}
              max={100}
              valueLabelDisplay="auto"
              onChange={(event) =>
                setNewCampainState({
                  matSize: event.target.value,
                  ...newCampainState,
                })
              }
            />
            <br />
            <DialogButton>Create</DialogButton>
          </>
        ) : null}
        {page === StartDialogPages.JOIN ? (
          <>
            <TextField id="standard-basic" label="Join Code" />
            <br />
            <TextField id="standard-basic" label="Nickname" />
            <br />
            <DialogButton>Join</DialogButton>
          </>
        ) : null}
        {page === StartDialogPages.LOAD ? <h3> TODO: Load/Save</h3> : null}
      </div>
    </UIContainer>
  );
}
