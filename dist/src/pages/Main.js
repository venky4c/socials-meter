import React, { useContext } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Overview from "../components/Overview";
import { ThemeContext } from "../themeContext";

function Main() {
  const context = useContext(ThemeContext);
  return (
    <div className={`${context.theme}-theme`} id="wrapper">
      <Header />
      <Content />
      <header className="overviewTitle">Overview - Today</header>
      <Overview />
    </div>
  );
}
export default Main;
