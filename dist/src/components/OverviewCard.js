import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
import Icon from "./Icon";
import { fetchRelated } from "../services/utils";

function OverviewCard(props) {
  const context = useContext(ThemeContext);
  return (
    <div className={`${context.card}-theme`}>
      <div className="overviewCard-div">
        <div className="ocRow1">
          <p className="firstRow">
            <span
              className="cell1"
              style={{
                color: fetchRelated(
                  context.theme,
                  "light",
                  "hsl(228, 12%, 44%)",
                  "hsl(228, 34%, 66%)"
                ),
                fontSize: "0.875rem",
                fontFamily: "https://fonts.google.com/specimen/Inter",
              }}
            >
              {props.text}
            </span>
            <span className="cell2">
              <Icon name={props.icon} />
            </span>
          </p>
        </div>
        <div className="ocRow2">
          <span className="secondRow">
            <span
              className="cell3"
              style={{
                fontSize: "2rem",
                color: fetchRelated(
                  context.theme,
                  "light",
                  "hsl(230, 17%, 14%)",
                  "hsl(0, 0%, 100%)"
                ),
              }}
            >
              {props.number}
            </span>
            <p
              className="cell4"
              style={{
                color: fetchRelated(
                  props.trend,
                  "up",
                  "hsl(163, 72%, 41%)",
                  "hsl(356, 69%, 56%)"
                ),
              }}
            >
              {" "}
              <Icon name={props.trend} />
              {props.percent}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
export default OverviewCard;
