import React from "react";
import { SecFive } from "./nftExchangeDevelopmentComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <div className="common_h3 text-center font-wei underline">
                  <H2>
                    {" "}
                    Driving Factors of our NFT Trading Exchange platform{" "}
                  </H2>
                </div>
                <p className="text-center">
                  NFT trading platforms have the core functionalities that make
                  them recursively approach the NFT exchange marketplace for
                  various purposes
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <span>
                    <img
                      className=""
                      data-src="/images/nfte/icon/1.webp"
                      alt=""
                      src="https://www.blockchainappfactory.com/images/nfte/icon/1.webp"
                    />
                  </span>
                </div>
                <h3 className="title">Token Standards</h3>
                <p className="description">
                  {" "}
                  The NFTs need special token standards to present their
                  uniqueness, indivisible and other features to the asset. So it
                  is mandatory to pick those standard tokens that support NFT
                  characteristics.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <span>
                    <img
                      className=""
                      data-src="/images/nfte/icon/2.webp"
                      alt=""
                      src="https://www.blockchainappfactory.com/images/nfte/icon/2.webp"
                    />
                  </span>
                </div>
                <h3 className="title">Search Engine</h3>
                <p className="description">
                  {" "}
                  The search engine is also a mandatory feature that needs to be
                  available in the NFT exchange platform. This will aid the user
                  in finding their desired NFT and allows them to buy them if it
                  suits their needs.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <span>
                    <img
                      className=""
                      data-src="/images/nfte/icon/3.webp"
                      alt=""
                      src="https://www.blockchainappfactory.com/images/nfte/icon/3.webp"
                    />
                  </span>
                </div>
                <h3 className="title">Trade Rule</h3>
                <p className="description">
                  {" "}
                  Trade Rule is something that enables the creator or seller to
                  fix a rule to buy their product, the same in NFT creators or
                  sellers can set the rule between “Fixed price” or “auction” in
                  order to buy that NFT.
                </p>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <span>
                    <img
                      className=""
                      data-src="/images/nfte/icon/4.webp"
                      alt=""
                      src="https://www.blockchainappfactory.com/images/nfte/icon/4.webp"
                    />
                  </span>
                </div>
                <h3 className="title">Wallet Integration</h3>
                <p className="description">
                  {" "}
                  Wallets are essential in the NFT exchange platform, and they
                  help the user receive and send funds for making the trade with
                  the NFTs. They are decentralized and immutable. Wallets will
                  offer to stake the NFT too.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <span>
                    <img
                      className=""
                      data-src="/images/nfte/icon/5.webp"
                      alt=""
                      src="https://www.blockchainappfactory.com/images/nfte/icon/5.webp     "
                    />
                  </span>
                </div>
                <h3 className="title">Support</h3>
                <p className="description">
                  {" "}
                  Customer relationships are the best way to enhance your
                  business to the next level, and you need to be more conscious
                  of what people think about your platform. Support and feedback
                  forms play a vital role in that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFive>
  );
};

export default Sec5;
