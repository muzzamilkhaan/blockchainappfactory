import React from "react";
import { SecThree } from "./nftMarketplaceAvalancheComp";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="section-title text-center underline">
              <div className="sec_tit">
                <h2>What is Avalanche?</h2>{" "}
              </div>
            </div>
            <p className="mt10 mb10 text-center">
              Avalanche is an open-source blockchain network driven by efficient
              smart contracts. Originally planned as a protocol to combat the
              problem of consensus from unreliable machines that had affected
              the blockchain world multiple times, its developers planned to
              establish Avalanche as a blockchain network for complex financial
              applications of today, and soon, the network was available to the
              public as open-source. It has a family of consensus protocols
              called Snow that includes the features Avalanche, Snowman, and
              Frosty. It has higher transaction speeds (around 4,500 TPS) and
              lower gas fees, which are burned (removed from the blockchain) to
              ensure scarcity. It can also support sharding, whereby the
              blockchain can be partitioned to help various applications.
            </p>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
