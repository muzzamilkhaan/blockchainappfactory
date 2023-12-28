import React from "react";
import { SecThree } from "./nftDevelopmentServicesComp";
import { H2, Button } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              <br />
              <img
                src="https://www.blockchainappfactory.com/images/demo/img-2.webp"
                alt="NFT Development Services"
                title="NFT Development Services"
              />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="section-title">
                <div className="sec_tit underline text-left mb20">
                  <H2 style={{ color: "#161515" }}>
                    Propel Your NFT Journey With Our Custom NFT Development
                    Services
                  </H2>
                </div>
              </div>
              <p className="mt10 text-justify">
                NFTs have emerged as a game-changer, revolutionizing the way
                digital assets are owned, traded, and valued. As the popularity
                of NFTs continues to soar, businesses across various industries
                are recognizing the immense potential and value they offer. At
                Blockchain App Factory, we offer comprehensive NFT development
                services to help businesses harness the power of this disruptive
                technology.
              </p>
              <p className="mt10 text-justify">
                We have established ourselves as a trusted name in the industry
                with a proven track record of delivering impeccable NFT
                development solutions to a global clientele. Whether you want to
                tokenize digital art, gaming assets, or any other unique item,
                we provide mission-driven NFT solutions that effectively cater
                to your requirements. Create non-fungible tokens or build an NFT
                marketplace. We have what it needs to make your NFT venture
                lucrative.
              </p>

              <div className="d-flex flex-wrap gap-3 ">
                <Button
                  btnContent="Partner with us today!"
                  to="#newsletter-form-sec"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
