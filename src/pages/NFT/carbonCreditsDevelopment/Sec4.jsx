import React from "react";
import { SecFour } from "./carbonCreditsDevelopmentComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="common_spacing ">
        <div className="container">
          <div className=" ">
            <div className="sec_tit underline text-center">
              <H2> Features of Web3-based Carbon Credits </H2>
            </div>
          </div>
          <div className="row mt20">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="awesome-features-wrapper1 text-center mb-30">
                <div className="awesome-features-icon-img">
                  <img
                    className=""
                    data-src="/images/carbon-credits-development/icons/carbon-credit.webp"
                    src="https://www.blockchainappfactory.com/images/carbon-credits-development/icons/carbon-credit.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <p>
                    {" "}
                    <strong
                    //  style="display:block; font-size: 18px; padding-bottom: 5px;"
                     >
                      Carbon Credit Tokens
                    </strong>
                    They can be fungible tokens registered on the blockchain
                    representing carbon credits. They can be provided to
                    industries after minting, and their movement can be
                    monitored by members of the network.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="awesome-features-wrapper1 text-center mb-30">
                <div className="awesome-features-icon-img">
                  {" "}
                  <img
                    className=""
                    data-src="/images/carbon-credits-development/icons/smart-contracts.webp"
                    src="https://www.blockchainappfactory.com/images/carbon-credits-development/icons/smart-contracts.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <p>
                    {" "}
                    <strong 
                    // style="display:block; font-size: 18px; padding-bottom: 5px;"
                    >
                      Smart Contracts
                    </strong>
                    Smart contracts here determine the token flow through
                    decisions on minting, burning, and distribution of these
                    tokens. Also, trading these tokens can be facilitated by
                    these advanced programs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="awesome-features-wrapper1 text-center mb-30">
                <div className="awesome-features-icon-img">
                  {" "}
                  <img
                    className=""
                    data-src="/images/carbon-credits-development/icons/marketplaces.webp"
                    src="https://www.blockchainappfactory.com/images/carbon-credits-development/icons/marketplaces.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <p>
                    {" "}
                    <strong 
                    // style="display:block; font-size: 18px; padding-bottom: 5px;"
                    >
                      Secondary Marketplaces
                    </strong>
                    Carbon credit tokens can be sold through these platforms by
                    companies having excess tokens to firms needing more tokens.
                    The platform has advanced features to ensure a seamless
                    token trading process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
