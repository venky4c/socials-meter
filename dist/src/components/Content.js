import React, { useContext } from "react";
import Card from "./Card";
import { ThemeContext } from "../themeContext";

function Content() {
  const context = useContext(ThemeContext);
  return (
    <div className={`${context.theme}-theme`} id="content">
      <Card icon="fb" handle="@nathanf" number="1987" trend="up" people="12" />
      <Card icon="tw" handle="@nathanf" number="1044" trend="up" people="99" />
      <Card
        icon="in"
        handle="@realnathanf"
        number="11k"
        trend="up"
        people="1099"
      />
      <Card
        icon="yt"
        handle="NathanF."
        number="8239"
        trend="down"
        people="144"
      />
    </div>
  );
}
export default Content;
