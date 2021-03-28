import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  ChakraProvider,
  ColorModeScript,
  ColorModeProvider,
} from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { mode } from "@chakra-ui/theme-tools";
import Fonts from "./components/Fonts";
import App from "./components/App";
import rootReducer from "./reducers";
import { extendTheme } from "@chakra-ui/react";
import "./index.css";
import theme from "./theme";

const store = configureStore({
  reducer: rootReducer,
});

const rootElement = document.getElementById("root");

export const history = createBrowserHistory();

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Fonts />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ChakraProvider>,
  rootElement
);
