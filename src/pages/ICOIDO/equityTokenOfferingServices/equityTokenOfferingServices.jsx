import React from "react";
import "./equityTokenOfferingServices.css";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";
import WeSpotlightedIn from "../../../components/shared/WeSpotlightedIn";

const equityTokenOfferingServices = () => {
  return (
    <div className="main" id="equity-token-offering-services">
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <WeSpotlightedIn />
    </div>
  );
};

export default equityTokenOfferingServices;
