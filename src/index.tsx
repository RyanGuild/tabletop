import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import initStore from "./utils/initStore";
import initMuiTheme from "./utils/initMuiTheme";

import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";

const store = initStore();
const theme = initMuiTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
