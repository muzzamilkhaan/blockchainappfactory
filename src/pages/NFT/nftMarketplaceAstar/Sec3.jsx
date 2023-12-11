import React from "react";
import { SecThree } from "./nftMarketplaceAstarComp";

const Sec3 = () => {
  return (
    <>
      <SecThree>
        <div className="common_spacing gray_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="section-title how-tit">
                  <h2 className="section-title underline mb20 text-left font-wei">
                    Why Astar for Your NFT Marketplace?
                  </h2>{" "}
                </div>
                <p className="mt-20 text-justify">
                  As a smart contract-based platform capable of running on
                  multiple blockchain networks, Astar has given developers the
                  opportunity to earn when they build on the platform. For an
                  end-user or a business owner though, Astar will be
                  advantageous due to other reasons. The parachain platform acts
                  as a bridge between Polkadot, Ethereum, Binance Smart Chain
                  (BSC), Cosmos, various L2 protocols, and EVM and WASM-based
                  solutions. Such a wide range of support offered by Astar means
                  an NFT marketplace business on the platform can benefit from
                  being able to set foot on many networks, thus widening its
                  user base.{" "}
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12text-center defiimg">
                {" "}
                <img
                  className="rounded-border"
                  data-src="/images/nft-marketplace-development-on-astar/astar-y.webp"
                  src="https://www.blockchainappfactory.com/images/nft-marketplace-development-on-astar/astar-y.webp"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </SecThree>
    </>
  );
};
export default Sec3;
