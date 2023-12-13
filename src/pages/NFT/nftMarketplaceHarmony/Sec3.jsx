import React from "react";
import { SecThree } from "./nftMarketplaceHarmonyComp";
import { H2, H3 } from "../../../components";
const Sec3 = () => {
  return (
    <SecThree>
      <div className="feature_area common_spacing" id="develop">
        <div className="container">
          <div className="row">
            <div className="section-title text-center underline">
              <div className="sec_tit">
                <div className="feature_develop">
                  <H2>Features Of Non-Fungible Tokens </H2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven" >
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className="lazy"
                      data-src="images/harmony/icon/exchange-rate.webp"
                      src="https://www.blockchainappfactory.com/images/harmony/icon/exchange-rate.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content ">
                  <H3 >Tradability</H3>
                  <p>
                    NFTs are easily traded across NFT marketplaces since they
                    are unique and trading NFTs in a unique NFT marketplace
                    makes the process simple and quick.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven">
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className="lazy"
                      data-src="images/harmony/icon/encrypted.webp"
                      src="https://www.blockchainappfactory.com/images/harmony/icon/encrypted.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content">
                  <H3>Highly Secure</H3>
                  <p>
                    Since non-fungible tokens are constructed on blockchain
                    technology, their transactions are secured safely and remove
                    the threat of theft.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven">
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className="lazy"
                      data-src="images/harmony/icon/trust.webp"
                      src="https://www.blockchainappfactory.com/images/harmony/icon/trust.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content">
                  <H3>Trustworthy</H3>
                  <p>
                    Since non-fungible tokens are existing in a decentralized
                    ecosystem, the interference of third party authorities is
                    removed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
