import React from "react";
import { SecFive } from "./nftForPhysicalAssetsComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section className="hub_pack pt-60 pb-60 common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-header text-center">
              <div className="common_h2 sec_tit underline">
                <H2 style={{ color: "#000" }}>
                  {" "}
                  Benefits of Non- Fungible Tokens{" "}
                </H2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <img
                    className=""
                    data-src="/images/physical/icons/transparency.webp"
                    src="https://www.blockchainappfactory.com/images/physical/icons/transparency.webp"
                    style={{ width: "45px" }}
                    // style="width: 45px;"
                  />
                </div>
                <h3 className="title">Transparency</h3>
                <p className="description">
                  NFT built with blockchain will let you enjoy complete
                  Transparency, and there is always a trigger key whenever you
                  want to check what happens behind those extraordinary User
                  Interfaces. The Transparency here creates trustability which
                  is a very prime reason for the people to believe in NFT.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <img
                    className=""
                    data-src="/images/physical/icons/price-tag.webp"
                    src="https://www.blockchainappfactory.com/images/physical/icons/price-tag.webp"
                    style={{ width: "45px" }}
                  />
                </div>
                <h3 className="title">Offers Liquidity</h3>
                <p className="description">
                  NFT provides you an instant Liquidity just next after owning
                  your NFT; Liquidity Providers can grant liquidity towards the
                  valuation of NFT, and reselling at a higher price can pay you
                  a hefty sum. All you have to do is to fix a payment method and
                  start waiting for your NFT to get sold.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <img
                    className=""
                    data-src="/images/physical/icons/shield.webp"
                    src="https://www.blockchainappfactory.com/images/physical/icons/shield.webp"
                    style={{ width: "45px" }}
                  />
                </div>
                <h3 className="title">Security</h3>
                <p className="description">
                  Blockchain is not such a technology that can be easily
                  compromised with a bunch of codes. The decentralized nature
                  offers you privacy and security. They are immutable, and even
                  if the NFT's information is captured, it is impossible to
                  trace them back to the owner.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <img
                    className=""
                    data-src="/images/physical/icons/investing.webp"
                    src="https://www.blockchainappfactory.com/images/physical/icons/investing.webp"
                  />
                </div>
                <h3 className="title">Investment Opportunity</h3>
                <p className="description">
                  After salvaging through every nook and corner of the NFT
                  market or by having an eye for a specific NFT, one can
                  generate an investment opportunity for which he/she can
                  generate a lot of profit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <img
                    className=""
                    data-src="/images/physical/icons/brand.webp"
                    src="https://www.blockchainappfactory.com/images/physical/icons/brand.webp"
                  />
                </div>
                <h3 className="title">Branding Outreach</h3>
                <p className="description">
                  NFTs made of famous celebrities' signed or related merchandise
                  can greatly boost the consumer market which boosts your
                  visibility to the market.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <img
                    className=""
                    data-src="/images/physical/icons/royalty.webp"
                    src="https://www.blockchainappfactory.com/images/physical/icons/royalty.webp"
                  />
                </div>
                <h3 className="title">Royalty</h3>
                <p className="description">
                  NFTs are bound by the smart contracts which are developed on
                  the blockchain platform. These contracts have a royalty clause
                  that pays the original maker of that NFT every time that
                  exclusive NFT circulates the market.
                </p>
              </div>
            </div>
            <div className="col-lg-offset-4 col-lg-4 col-md-6 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <img
                    className=""
                    data-src="/images/physical/icons/ownership.webp"
                    src="https://www.blockchainappfactory.com/images/physical/icons/ownership.webp"
                  />
                </div>
                <h3 className="title">Proof of Ownership</h3>
                <p className="description">
                  The Distributed ledger technology, a.k.a Blockchain
                  technology, which keeps track of every transaction and
                  information processed, is used to trace the owner of the NFT
                  very easily. They can't be tampered with, and only the owner
                  of the NFT has every right over the NFT. No intrusion is
                  possible.
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
