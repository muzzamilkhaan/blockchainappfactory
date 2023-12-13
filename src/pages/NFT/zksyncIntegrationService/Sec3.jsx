import React from "react";
import { SecThree } from "./ZksyncIntegrationServiceComp";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="main-sec3">
        <div
          className="container"
          //   style="background: linear-gradient(140deg, #00d28a, #78b0fa); border-radius: 15px; padding:25px 0 15px 0;"
        >
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-left">
              <div className="section-title text-center">
                <h2 className="title-th sec_tit underline text-white">
                  Why Should You Integrate zkSync 2.0 into Your NFT Venture?
                </h2>{" "}
              </div>
              <p className="text-center mt20 text-white">
                Integrating zkSync 2.0 into your NFT business can be handy as
                the platform can gain significantly by using such an advanced
                blockchain solution. Its ability to work seamlessly with all
                EVM-compatible networks allows it to be a viable option for
                businesses to attract audiences. <br />
                <br />
                Additionally, its reliance on the math-based zero-knowledge (ZK)
                proofs compared to the game theory-based optimistic rollups
                boosts the security levels of ventures using zkSync 2.0. Also,
                its usage of price oracles from Chainlink, a popular
                decentralized oracle network built on Ethereum, ensures accuracy
                for NFT applications, along with DeFi and P2E gaming ventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
