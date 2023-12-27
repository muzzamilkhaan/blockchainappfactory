import React from "react";
import { SecThree } from "./nftMarketplaceWithGovernanceTokenComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing gray_bg uniq_features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center pull-left">
              <img
                data-src="/images/gov/img_1.webp"
                className="mb10"
                alt="Governance NFT Marketplace Development"
                title="Community Driven NFT Marketplace"
                src="https://www.blockchainappfactory.com/images/gov/img_1.webp"
              />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 pull-right">
              <div className="section-title underline text-left">
                <div className="sec_tit">
                  <H2 style={{ color: "#333333" }}>
                    {" "}
                    Community Driven NFT marketplace
                  </H2>
                </div>
              </div>
              <p className="mt10 text-left" style={{ color: "#555555 " }}>
                As said above, even the NFT marketplace can’t be managed by a
                very small group of people to reach the height that still
                remains untouched. And we prefer making developments that help
                our users to reach those heights with our users concerning
                developments. A governance token-based NFT marketplace is one
                excellent platform for such great objectives. The governance
                token is the concept where the stakes of the governance token
                will play a vital role in molding and shaping the future of the
                development of the protocol, where they are deployed. As they
                are led by the community of speakers, the platform can be
                considered to be the community-driven NFT marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
