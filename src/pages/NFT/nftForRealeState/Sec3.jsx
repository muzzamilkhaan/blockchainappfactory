import React from "react";
import { SecThree } from "./nftForRealeStateComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title underline text-center">
            <div className="sec_tit ">
              <H2> Why Real estate Market? </H2>
            </div>
          </div>
          <p className="text-center mt10 para">
            Before the technological boom, people would buy a piece of property
            and get involved in the long and tedious paperwork and before they
            even think to move in, another selling opportunity will leave them
            hanging in between and get them stuck again in paperwork and as it
            is true “Time is Money” they lose a potential gain. Just like
            “Billionaires Row” in New York City has apartments worth $20M to
            $30M with no one living in them, People nowadays made a piece with
            the fact that real estate needs a change in the technical
            department.
          </p>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
