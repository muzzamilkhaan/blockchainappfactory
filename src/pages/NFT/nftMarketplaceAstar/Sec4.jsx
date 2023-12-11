import React from "react";
import { SecFour } from "./nftMarketplaceAstarComp";

const Sec4 = () => {
  return (
    <>
      <SecFour>
        <div className="common_spacing">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2 className="section-title underline mb20 text-center font-wei">
                  Features of Astar Platform
                </h2>{" "}
              </div>
            </div>
            <div className="row mt40">
              <div className="col-sm-12 col-md-6 col-lg-6">
                {" "}
                <img
                  className="rounded-border"
                  data-src="/images/nft-marketplace-development-on-astar/astar_feature.webp"
                  src="https://www.blockchainappfactory.com/images/nft-marketplace-development-on-astar/astar_feature.webp"
                />{" "}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="list-box">
                  <ul className="primary-list">
                    <li>
                      <h4>
                        <i className="fa fa-caret-right"></i>Scalability{" "}
                      </h4>
                      <p className="port-txt">
                        Astar is able to provide higher scalability levels which
                        result in higher transactions per second (TPS), cheaper
                        expenses, and quicker finality for transactions.{" "}
                      </p>
                    </li>
                    <li>
                      <h4>
                        <i className="fa fa-caret-right"></i>Interoperability
                      </h4>
                      <p className="port-txt">
                        The platform is able to support various L1, L2
                        protocols, and X-VM (cross virtual machine), which
                        results in a broader ecosystem for the dApps on it.
                      </p>
                    </li>
                    <li>
                      <h4>
                        <i className="fa fa-caret-right"></i>dApp Staking
                      </h4>
                      <p className="port-txt">
                        The staking process on Astar helps incentivize
                        developers to build on the Astar ecosystem, which means
                        it recognizes the developers’ efforts.
                      </p>
                    </li>
                    <li>
                      <h4>
                        <i className="fa fa-caret-right"></i>Smart Contracts
                      </h4>
                      <p className="port-txt">
                        Smart contracts from a blockchain like Astar tend to
                        support applications based on decentralized autonomous
                        organizations (DAOs), non-fungible tokens (NFTs), and
                        decentralized finance (DeFi).
                      </p>
                    </li>
                    <li>
                      <h4>
                        <i className="fa fa-caret-right"></i>Blockchain Bridges
                      </h4>
                      <p className="port-txt">
                        The Astar parachain has blockchain bridges called Celer
                        and Anyswap through which assets can be swapped from and
                        to other blockchains (Ethereum and BSC).
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecFour>
    </>
  );
};

export default Sec4;
