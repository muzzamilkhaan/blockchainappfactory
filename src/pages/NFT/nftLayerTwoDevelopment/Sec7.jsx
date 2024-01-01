import React from "react";
import { SecSeven } from "./nftLayerTwoDevelopmentComp";
import { H2 } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="row mt20">
            <div className="col-md-6 col-sm-12 col-xs-12 text-left">
              <div className="section-title text-left">
                <div className="sec_tit">
                  <div className="font-wei">
                    <H2>
                      {" "}
                      Why BAF is a Perfect Choice for Integrating Layer 2
                      Protocol with NFT Marketplace?{" "}
                    </H2>
                  </div>
                </div>
                <hr />
              </div>
              <p className="mt20">
                We at Blockchain App Factory serve as a ladder for the
                development of multiple businesses in the blockchain platform.
                Our professional experience and enthusiasm in the blockchain
                industry will provide you with a huge advantage over your
                competitors in the field of cryptocurrency. Our innovative and
                motivated team will ensure the creation of a stable and solid
                NFT marketplace in layer 2 protocol. We ensure that it is
                constructed with your requirements in mind and most importantly
                we will ensure that you are the frontrunner in the race of NFT
                marketplaces and emerge as a new trendsetter in the digital
                market.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-justify">
              <img
                className="lazy crypto"
                data-src="/images/layer2/img-05.webp"
                alt="NFT Layer 2 Development Services"
                title="Integrate Layer 2 Protocol with NFT Marketplace"
                src="https://www.blockchainappfactory.com/images/layer2/img-05.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </SecSeven>
  );
};

export default Sec7;
