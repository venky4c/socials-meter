import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
// This class handles all the toggling of themes functionality. The best part about this
//  class is that we are able to toggle on different parameters, viz. light/dark theme,
// light/dark-card theme, light/dark-header theme
function Toggle(props) {
  const context = useContext(ThemeContext);
  return (
    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>
      Switch Theme
    </button>
  );
}
export default Toggle;
