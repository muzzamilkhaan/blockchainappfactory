import React, { useEffect } from "react";
import "./idoLaunchpadOnLayer2Blockchain.css";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import WeSpotlightedIn from "../../../components/shared/WeSpotlightedIn";

const idoLaunchpadOnLayer2Blockchain = ({
  headerBgColor,
  toggleHeaderBgColor,
  linkColor,
}) => {
  useEffect(() => {
    toggleHeaderBgColor("#fff", "#444");
  });
  return (
    <div id="ido-launchpad-on-layer-2-blockchain">
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <WeSpotlightedIn />
    </div>
  );
};

export default idoLaunchpadOnLayer2Blockchain;
