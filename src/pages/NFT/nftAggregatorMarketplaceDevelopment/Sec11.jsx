import React from "react";
import { SecEleven } from "./nftAggregatorMarketplaceDevelopmentComp";
import { H2 } from "../../../components";

const Sec11 = () => {
  return (
    <SecEleven>
      <section className="common_spacing gray_bg">
        <div className="container ">
          <div className="row">
            <div className="col-md-12  section-title text-center">
              <div className="text-center title-th sec_tit underline">
                <H2> Remuneration Streams in an NFT Aggregator Marketplace </H2>
              </div>{" "}
            </div>
          </div>
          <div className="choose-content-box mt20">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="choose-wrapper">
                  <div className="wrappwer-icon text-center">
                    {" "}
                    <img
                      className=""
                      data-src="/images/nft-aggregator-marketplace-development/icons/transaction-fee.webp"
                      src="https://www.blockchainappfactory.com/images/nft-aggregator-marketplace-development/icons/transaction-fee.webp"
                    />{" "}
                  </div>
                  <div className="choose-para text-center">
                    <h3>Transaction Fees </h3>
                    <p className="text-justify para">
                      Charges can be levied (as a proportion of the sale value)
                      for trading NFT products through the NFT aggregation
                      platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="choose-wrapper">
                  <div className="wrappwer-icon text-center">
                    {" "}
                    <img
                      className=""
                      data-src="/images/nft-aggregator-marketplace-development/icons/advertisements.webp"
                      src="https://www.blockchainappfactory.com/images/nft-aggregator-marketplace-development/icons/advertisements.webp"
                    />{" "}
                  </div>
                  <div className="choose-para text-center">
                    <h3>Advertisements</h3>
                    <p className="text-justify para">
                      Ventures can charge for listing NFT collections under the
                      “Featured” and “Suggested” categories as an advertising
                      strategy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="choose-wrapper">
                  <div className="wrappwer-icon text-center">
                    {" "}
                    <img
                      className=""
                      data-src="/images/nft-aggregator-marketplace-development/icons/tokens.webp"
                      src="https://www.blockchainappfactory.com/images/nft-aggregator-marketplace-development/icons/tokens.webp"
                    />{" "}
                  </div>
                  <div className="choose-para text-center">
                    <h3>Native Tokens </h3>
                    <p className="text-justify para">
                      Art enthusiasts can view new forms of artwork and expose
                      themselves to abstract ideas from their homes, elevating
                      their knowledge and taste in creative art.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecEleven>
  );
};

export default Sec11;
