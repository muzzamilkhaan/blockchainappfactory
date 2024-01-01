import React from "react";
import { SecThree } from "./nftLayerTwoDevelopmentComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div
        className="intro_cnt common_spacing"
        //   style="background: #f9f9f9;"
      >
        <div className="container">
          <div className="row mt20">
            <div className="col-md-6 col-sm-12 col-xs-12 text-left">
              <img
                className="lazy crypto"
                data-src="/images/layer2/three.webp"
                alt="NFT in Layer 2"
                title="Why Implement NFT in Layer 2?"
                src="https://www.blockchainappfactory.com/images/layer2/three.webp"
              />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-justify">
              <div className="">
                <div className="section-title text-left mt10">
                  <div className="sec_tit">
                    <div className="font-wei">
                      <H2>NFT in Layer 2 </H2>
                    </div>
                  </div>
                </div>
                <p className="mt20">
                  NFT in layer 2 is a distinct solution designed to scale the
                  application by handling transactions off the main Ethereum
                  chain (layer 1).{" "}
                </p>
              </div>
              <div className="mt10">
                <div className="section-title text-left">
                  <div className="sec_tit">
                    <div className="font-wei">
                      <H2>Why Implement NFT in Layer 2?</H2>
                    </div>
                  </div>
                </div>
                <p className="mt20">
                  Our customer faces lower transaction speed problems when the
                  network is busy which can make the user experience very
                  difficult for certain types of decentralized apps (Dapps). As
                  the network gets busier, our customers face an increase in gas
                  fees as the senders aim to outbid each other and thus making
                  Ethereum very expensive to use. We provide NFT Development in
                  layer 2 services to the customers to overcome these problems
                  and continue a smooth and easy transaction process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
