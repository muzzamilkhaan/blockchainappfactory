import React from "react";
import "./icoInfluencerMarketing.css";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";
import Sec6 from "./Sec6";
import Sec7 from "./Sec7";
import Sec8 from "../icoTelegramMarketing/Sec8";
import WeSpotlightedIn from "../../../components/shared/WeSpotlightedIn";

const icoInfluencerMarketing = () => {
  return (
    <div className="main" id="ico-influencer-marketing">
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
      <Sec7 />
      <Sec8 />
      <WeSpotlightedIn />
    </div>
  );
};

export default icoInfluencerMarketing;
