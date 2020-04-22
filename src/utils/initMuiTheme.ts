import { createMuiTheme } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";

export default function () {
  return createMuiTheme({
    palette: {
      primary: blue,
      secondary: grey,
    },
    overrides: {
      MuiPaper: {
        root: {
          position: "fixed",
          padding: "10px",
        },
      },
    },
  });
}
