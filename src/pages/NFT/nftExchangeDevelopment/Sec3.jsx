import React from "react";
import { SecThree } from "./nftExchangeDevelopmentComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt gray_bg common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="sec_tit">
                  <div className="font-wei underline">
                    <H2> Significance of NFT in DeFi </H2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt40">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              <img
                className="ig-size"
                src="https://www.blockchainappfactory.com/images/nfte/sig.webp"
                alt="NFT Exchange Platform Development"
                title="Significance Of NFT In DeFi"
              />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <p className="mt10 text-justify">
                Non-fungible tokens are the digital representation of unique
                assets that adds intrinsic value to your unique collectibles.
                The value of a token depends on the value of its assets which
                can be sold in billions. The unique representation of digital
                assets adds to its value allowing DeFi platforms to accept NFTs
                as collateral. NFTs' indivisible nature does not allow NFTs to
                exchange for each other. To offer a transaction facility for
                NFTs, the DeFi platform offers an innovative solution to offer
                immediate liquidity for your NFTs.{" "}
              </p>
              <p className="mt10 text-justify">
                These attract huge investors towards the creation of NFTs.
                Liquidity is the prominent feature of any tokens. By offering
                such an irreplaceable solution for NFTs by mitigating the
                inconvenience of its standards, DeFi finds NFTs as a booster to
                gain traction back to the platform and introduces a
                cross-exchange platform that provides immediate liquidity for
                the NFTs. The NFT exchange platform uplifts the DeFi services by
                accepting NFTs as collateral for immediate liquidity which also
                supports the development of NFTs.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
