import React from "react";

export const fetchRelated = (attribute, value, lightColor, darkColor) => {
  return attribute === value ? lightColor : darkColor;
};

export const fetchCardTopBorderColor = (icon) => {
  switch (icon) {
    case "fb":
      return "hsl(208, 92%, 53%)";
    case "tw":
      return "hsl(203, 89%, 53%)";
    case "in":
      return "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))";
    case "yt":
      return "hsl(348, 97%, 39%)";
    default:
      return <div />;
  }
};
