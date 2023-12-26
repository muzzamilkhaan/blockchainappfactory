import React from "react";
import { SecThree } from "./nftAggregatorMarketplaceDevelopmentComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-left">
              <div className="section-title text-center">
                <div className="title-th sec_tit underline">
                  <H2> NFT Aggregator Platform Development: The Need </H2>
                </div>{" "}
              </div>
              <p className="text-center mt20 para">
                An NFT aggregator marketplace is needed in today’s Web3 space
                mainly due to the presence of numerous NFT marketplaces that
                fiercely compete with each other. The evolution of blockchain
                technology to support software for multiple networks also plays
                a role here, as many marketplace ventures have spread their
                wings by offering multi-chain support.
                <br />
                <br />
                Such expanse comes with differing prices for the same kind of
                NFTs or NFT collection, not to forget the varying platform fees
                and royalties. Such added fees and blockchain gas costs have
                made NFT trading a hassle in recent times. NFT aggregators aim
                to aid users by giving them access to all marketplaces in a
                single interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
