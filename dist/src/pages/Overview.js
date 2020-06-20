import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
import OverviewCard from "../components/OverviewCard";

function Overview(props) {
  const context = useContext(ThemeContext);
  return (
    <div className={`${context.theme}-theme`}>
      <h3 className="overviewTitle" style={{ paddingLeft: "17.5rem" }}>
        Overview - Today
      </h3>
      <div className="overview">
        <OverviewCard
          percent="3"
          text="Page Views"
          icon="fb"
          number="87"
          trend="up"
        />
        <OverviewCard
          percent="2"
          text="Likes"
          icon="fb"
          number="52"
          trend="down"
        />
        <OverviewCard
          percent="2257"
          text="Likes"
          icon="in"
          number="5462"
          trend="up"
        />
        <OverviewCard
          percent="1375"
          text="Profile Views"
          icon="in"
          number="52k"
          trend="up"
        />
        <OverviewCard
          percent="203"
          text="Retweets"
          icon="tw"
          number="117"
          trend="up"
        />
        <OverviewCard
          percent="553"
          text="Likes"
          icon="tw"
          number="507"
          trend="up"
        />
        <OverviewCard
          percent="19"
          text="Likes"
          icon="yt"
          number="107"
          trend="down"
        />
        <OverviewCard
          percent="12"
          text="Total Views"
          icon="yt"
          number="1407"
          trend="down"
        />
      </div>
    </div>
  );
}

export default Overview;
