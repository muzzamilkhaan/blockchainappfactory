import React from "react";
import { SecFive } from "./phygitalNftMarketplaceComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section className="pb-5 pt-5" id="services">
        <div className="container">
          <div className="section-title underline text-center">
            <div className="sec_tit">
              <H2>Features Of Our Phygital NFT Marketplace </H2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="serviceBox1 red">
                <h3 className="title">Storefront </h3>
                <p className="description">
                  This portal shows everything about a product, including
                  descriptions, price, utilities, and ownership history, which
                  help users make informed decisions.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="serviceBox1 red">
                <h3 className="title">Built-in Wallet</h3>
                <p className="description">
                  Built-in or external crypto wallets are where users can hold
                  their cryptocurrencies and digital tokens of physical assets
                  they bought.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="serviceBox1 red">
                <h3 className="title">Search Engine</h3>
                <p className="description">
                  Users can use built-in sophisticated search engines to look
                  for their favorite brand or assets easily to save navigating
                  time.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="serviceBox1 red">
                <h3 className="title">Filter/Sort</h3>
                <p className="description">
                  Usually a search engine sub-feature, filter, and sort help
                  users refine their search results that help in checking out
                  quickly.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="serviceBox1 red">
                <h3 className="title">DeFi Features</h3>
                <p className="description">
                  Phygital NFT marketplace development even integrates
                  stake-to-earn DeFi features for users to increase user
                  engagement through the platform’s native tokens.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="serviceBox1 red">
                <h3 className="title">Listing Portal</h3>
                <p className="description">
                  Here, sellers can list their phygital NFTs after
                  authentication from the marketplace admins. Description,
                  images, and pricing should be given.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="serviceBox1 red">
                <h3 className="title">Live Auction Portal</h3>
                <p className="description">
                  In this portal, buyers can bid for phygital NFT assets and
                  check the live status of the auction and history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
