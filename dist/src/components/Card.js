import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
import Icon from "./Icon";
import { fetchRelated, fetchCardTopBorderColor } from "../services/utils";

function Card(props) {
  const context = useContext(ThemeContext);

  return (
    <div className={`${context.card}-theme`}>
      <div
        className="cardDiv"
        style={{
          borderTop: fetchCardTopBorderColor(props.icon),
          borderTopStyle: "solid",
          borderRadius: "0.6rem",
        }}
      >
        <p>
          {" "}
          <Icon name={props.icon} />
          {"  "}{" "}
          <span
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
            {props.handle}
          </span>
        </p>
        <h3
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
        </h3>
        <p
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
          {props.icon === "yt" ? "SUBSCRIBERS" : "FOLLOWERS"}
        </p>
        <p
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
          {props.people} Today
        </p>
      </div>
    </div>
  );
}

export default Card;
