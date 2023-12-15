import React from "react";
import { SecNine } from "./nftMarketPlaceSportComp";
import { H2, H3 } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <div className="pros-trading common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit mb20">
              <div className="section-title underline mb20 font-wei">
                <H2> Characteristics of NFT </H2>
              </div>
            </div>
          </div>
          <div className="mt60">
            <div className="row flip-box-row eto-exchange-flip">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    <img
                      className="flip-icon"
                      data-src="/images/spo/icon/token.svg"
                      alt="Non-Exchangeable"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/spo/icon/token.svg"
                    />
                  </div>
                  <H3 className="flip-tit">Non-Exchangeable</H3>
                  <p className="flip-txt">
                    NFTs unique features and specification of unique assets
                    makes the token non-exchangeable, which means one NFT cannot
                    be replaced with another NFT due to its unique nature.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    <img
                      className="flip-icon"
                      data-src="/images/spo/icon/crisis.svg"
                      alt="In - divisible"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/spo/icon/crisis.svg"
                    />
                  </div>
                  <H3 className="flip-tit">In-divisible</H3>
                  <p className="flip-txt">
                    NFTs unique value and the representation of unique assets
                    makes the token in-divisible in nature, which means the
                    tokens cannot be transferred in partitions.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    <img
                      className="flip-icon"
                      data-src="/images/spo/icon/images.svg"
                      alt="Scarcity"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/spo/icon/images.svg"
                    />
                  </div>
                  <H3 className="flip-tit">Scarcity</H3>
                  <p className="flip-txt">
                    NFTs are at their peak due to their demand and scarcity.
                    Even the developers are restricted to create limited amounts
                    of NFTs in the same type to maintain its scarcity.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    <img
                      className="flip-icon"
                      data-src="/images/spo/icon/shopping-cart.svg"
                      alt="Scalability"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/spo/icon/shopping-cart.svg"
                    />
                  </div>
                  <H3 className="flip-tit">Scalability</H3>
                  <p className="flip-txt">
                    Multiple crypto enthusiasts have introduced unique standards
                    for NFTs in multiple blockchains for increased performance
                    and throughput.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    <img
                      className="flip-icon"
                      data-src="/images/spo/icon/automation.svg"
                      alt="Interoperable"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/spo/icon/automation.svg"
                    />
                  </div>
                  <H3 className="flip-tit">Interoperable</H3>
                  <p className="flip-txt">
                    NFT standards offer interoperability by listing the project
                    and allowing to purchase NFTs in different marketplaces.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    <img
                      className="flip-icon"
                      data-src="/images/spo/icon/ethereum.svg"
                      alt="Automated listing"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/spo/icon/ethereum.svg"
                    />
                  </div>
                  <H3 className="flip-tit">Automated listing</H3>
                  <p className="flip-txt">
                    NFT marketplace facilitates automated listing across
                    multiple marketplaces once the project is created.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecNine>
  );
};

export default Sec9;
