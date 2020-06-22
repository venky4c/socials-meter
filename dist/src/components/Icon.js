import React from "react";
import IconFacebook from "./IconFacebook";
import IconTwitter from "./IconTwitter";
import IconInstagram from "./IconInstagram";
import IconYoutube from "./IconYoutube";
import UpIcon from "./UpIcon";
import DownIcon from "./DownIcon";
// Helper component which takes the name of the icon to be shown as a props parameter and returns the respective svg component
const Icon = (props) => {
  switch (props.name) {
    case "fb":
      return <IconFacebook {...props} />;
    case "tw":
      return <IconTwitter {...props} />;
    case "in":
      return <IconInstagram {...props} />;
    case "yt":
      return <IconYoutube {...props} />;
    case "up":
      return <UpIcon {...props} />;
    case "down":
      return <DownIcon {...props} />;
    default:
      return <div />;
  }
};

export default Icon;
