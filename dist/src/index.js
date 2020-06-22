import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
import { ThemeContextProvider } from "./themeContext";
import "./assets/Main.css";

ReactDOM.render(
  <ThemeContextProvider>
    <Main />
  </ThemeContextProvider>,
  document.getElementById("root")
);
