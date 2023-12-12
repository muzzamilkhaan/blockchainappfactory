import React from "react";
import { SecThree } from "./nftMarketplaceSolanaComp";
import { H2, H3 } from "../../../components/index";

const Sec3 = () => {
  return (
    <SecThree>
      <section className="p-60 pre-ico-sec-1 gray-bg">
        <div className="container">
          <div className="main-sections">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="section-header underline text-center">
                <H2>Features Of Solana NFT Marketplace Platforms</H2>
              </div>
              <p className="text-center">
                The common features that are presented in an NFT marketplace
                platform are listed below
              </p>
              <div className="why-adit mt50">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="card-big-shadow">
                    <div className="why-adit-list">
                      <div className="icon">
                        {" "}
                        <img
                          className="lazy"
                          data-src="/images/solana/icons/network_1.webp"
                          alt="Transparency"
                          src="https://www.blockchainappfactory.com/images/solana/icons/network_1.webp"
                        />{" "}
                      </div>
                      <div className="content">
                        <h3> Interoperability </h3>
                        <p>
                          NFT marketplaces have the ability to initiate trading
                          between multiple virtual platforms, in order to
                          initiate smooth transactions and storing of data
                          securely.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="card-big-shadow">
                    <div className="why-adit-list">
                      <div className="icon">
                        {" "}
                        <img
                          className="lazy"
                          data-src="/images/solana/icons/crisis.webp"
                          src="https://www.blockchainappfactory.com/images/solana/icons/crisis.webp"
                        />{" "}
                      </div>
                      <div className="content">
                        <h3> Scarcity </h3>
                        <p>
                          The developers in the platform program the smart
                          contracts in such a way that it limits the production
                          of NFTs, thus making them more valuable.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="card-big-shadow">
                    <div className="why-adit-list">
                      <div className="icon">
                        {" "}
                        <img
                          className="lazy"
                          data-src="/images/solana/icons/programmer.webp"
                          src="https://www.blockchainappfactory.com/images/solana/icons/programmer.webp"
                        />{" "}
                      </div>
                      <div className="content">
                        <h3> Programmability </h3>
                        <p>
                          NFT marketplaces are highly controllable, as they are
                          completely programmable by the users and integrate
                          their own specifications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="card-big-shadow">
                    <div className="why-adit-list">
                      <div className="icon">
                        {" "}
                        <img
                          className="lazy"
                          data-src="/images/solana/icons/liquidity.webp"
                          src="https://www.blockchainappfactory.com/images/solana/icons/liquidity.webp"
                        />{" "}
                      </div>
                      <div className="content">
                        <h3> Liquidity </h3>
                        <p>
                          Due to their interoperable nature, immediate trading
                          provides high liquidity for the users and NFTs can be
                          kept as collateral for high liquidity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecThree>
  );
};

export default Sec3;
