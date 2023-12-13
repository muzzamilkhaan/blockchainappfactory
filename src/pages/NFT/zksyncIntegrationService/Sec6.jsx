import React from "react";
import { SecSix } from "./ZksyncIntegrationServiceComp";
import { H2 } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <div className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-left">
              <div className="section-title text-center">
                <div className="title-th sec_tit underline">
                  <H2>
                    {" "}
                    Scope to Create NFT Marketplaces and dApps on zkSync 2.0
                  </H2>
                </div>{" "}
              </div>
              <p className="text-center mt20 ">
                Indeed, NFT marketplaces and dApps can be natively created and
                launched on the zkSync 2.0 network, just like on any other
                blockchain. The solution’s scalable nature offering increased
                throughput and batch processing, along with EVM-compatible
                networks’ robustness, enables ventures to function by satisfying
                all elements of the blockchain trilemma.
                <br />
                <br />
                The network’s growing nature also aids new-gen enterprises to
                get a place in a manner in the popular, albeit congested,
                Ethereum blockchain. dApp and NFT marketplace ventures can earn
                valuable exposure to the broadest community without having to
                fight difficult business battles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecSix>
  );
};

export default Sec6;
