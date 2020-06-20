import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
import Toggle from "./Toggle";

function Header(props) {
  const context = useContext(ThemeContext);

  return (
    <header className={`${context.theme}-theme`}>
      <div className="first-row">
        <p>
          <h2 className="title">Social Media Dashboard</h2>
          <div className="toggle">
            <Toggle />
          </div>
        </p>
      </div>
      <div className="subtext">
        <p className="subtext-p">Total Followers 23,004</p>
      </div>
    </header>
  );
}

export default Header;
