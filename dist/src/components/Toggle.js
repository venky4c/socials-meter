import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

function Toggle(props) {
  const context = useContext(ThemeContext);
  return (
    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>
      Switch Theme
    </button>
  );
}
export default Toggle;
