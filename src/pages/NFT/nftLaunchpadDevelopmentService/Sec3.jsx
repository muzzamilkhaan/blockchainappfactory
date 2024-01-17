import React from "react";
import { SecThree } from "./nftLaunchpadDevelopmentServiceComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing gray_bg uniq_features">
        <div className="container">
          <div className="section-title underline text-center">
            <div className="sec_tit">
              <H2> Why NFT Launchpad Development?</H2>
            </div>
          </div>
          <div className="row list_box mt50 box_list">
            <div className="col-md-4">
              <h3>To empower the NFT Market</h3>
            </div>
            <div className="col-md-4">
              <h3>To Benefit the creators</h3>
            </div>
            <div className="col-md-4">
              <h3>To empower the community</h3>
            </div>
            <div className="col-md-4">
              <h3>To provide the experience of NFTs</h3>
            </div>
            <div className="col-md-4">
              <h3>To build trust among the Investors</h3>
            </div>
            <div className="col-md-4">
              <h3>To Implement a fair Minting process</h3>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
