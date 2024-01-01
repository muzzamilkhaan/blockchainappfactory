import React from "react";
import { SecTwo } from "./nftLayerTwoDevelopmentComp";
import {H2,Button } from "../../../components"
 const Sec2 = () => {
  return (
    <SecTwo>
      <div className="pricing_videos common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="section-title">
                <div
                  className="text-capitalize common_h1 section-title center text-center underline font-wei"
                  //   style="text-align: center;"
                >
              <H2>    Introducing NFT with Ethereum Layer 2 </H2>
                </div>
                <p className="text-justify">
                  The blockchain industries have witnessed influential
                  developments in the field of cryptocurrency in the past few
                  years. More financial products have been introduced that have
                  transformed how we perceive finance sectors. In recent months,
                  crypto users have shifted their focus towards the NFTs. As the
                  NFT domain is experiencing massive growth during this period,
                  investment in the NFT has been huge, leading to congestion and
                  slower transaction time.{" "}
                </p>
                <p className="text-justify">
                  Due to these issues occurring in the NFT domain, the average
                  transaction fee has skyrocketed. Thus, crypto users are
                  finding it difficult to purchase and trade NFTs. In order to
                  solve these problems for our customers, We at Blockchain App
                  Factory will be developing NFT marketplace in Layer 2
                  protocol.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="ico-development-img">
                <img
                  className="etherum"
                  src="https://www.blockchainappfactory.com/images/layer2/img-01.webp"
                  alt="NFT Layer 2 Development"
                  title="NFT with Ethereum Layer 2"
                />
              </div>
            </div>
          </div>
          <div className="text-center cta_mine mt30">
            <div className="cta_mine">
              <div className="d-flex justify-content-center flex-wrap gap-3 ">
                <Button
                  btnContent="Connect with Whatsapp"
                  target="_blank"
                  to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                />
                <Button
                  btnContent="Talk with our Experts"
                  to="#newsletter-form-sec"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
