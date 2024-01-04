import React from "react";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";
import WeSpotlightedIn from "../../../components/shared/WeSpotlightedIn";
import "./nftRacingGameDevelopment.css";

const nftRacingGameDevelopment = () => {
  return (
    <div className="main" id="nft-racing-game-development">
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <WeSpotlightedIn />
    </div>
  );
};

export default nftRacingGameDevelopment;
