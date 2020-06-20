import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { ThemeContextProvider } from "./themeContext";
import "./assets/style.css";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);
