import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
import Toggle from "./Toggle";

function Header(props) {
  const context = useContext(ThemeContext);

  return (
    <header className={`${context.header}-theme`} id="header">
      <div className="first-row">
        <span>
          <header className="title">Social Media Dashboard</header>
          <div className="toggle">
            <Toggle />
          </div>
        </span>
      </div>
      <div className="subtext">
        <p className="subtext-p">Total Followers 23,004</p>
      </div>
    </header>
  );
}

export default Header;
