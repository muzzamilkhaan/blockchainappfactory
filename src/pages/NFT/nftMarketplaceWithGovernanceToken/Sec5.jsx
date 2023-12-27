import React from "react";
import { SecFive } from "./nftMarketplaceWithGovernanceTokenComp";
import { H2, Button } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <div id="ret-inv" className="gray_bg common_spacing">
        <div className="container">
          <div className="section-title text-center mb30">
            <H2 style={{ color: "#2b2c2d" }}>
              {" "}
              Governance Token in NFT Marketplace - Potential and Perks
            </H2>
            <hr />
            <p>
              The governance token, as said above, has been considered to be one
              of the most influential and at the same time decentralizing the
              power among a community to get collective support. This collective
              support and community will aid in a huge space for the growth of
              the{" "}
              <a
                className="nft-mark"
                href="https://www.blockchainappfactory.com/nft-marketplace-development"
              >
                {" "}
                NFT marketplace{" "}
              </a>{" "}
              where the governance token is used.{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="m_s">
                <li>
                  <div className="icon">
                    <img
                      className=""
                      data-src="/images/gov/icon/tick-mark.webp"
                      width="45"
                      src="https://www.blockchainappfactory.com/images/gov/icon/tick-mark.webp"
                    />
                  </div>
                  <h3 className="feature-title">Validation</h3>
                  <p className="feature-desc mb0">
                    The governance token will also act as a validator who has
                    the ability to approve and reject a transaction in the
                    particular marketplace. The validations are done to verify
                    the transaction's trustability. The validator can reject it
                    if they find a flaw in the particular transaction’s
                    trustability.
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <img
                      className=""
                      data-src="/images/gov/icon/vote.webp"
                      width="45"
                      src="https://www.blockchainappfactory.com/images/gov/icon/vote.webp"
                    />
                  </div>
                  <h3 className="feature-title">Voting</h3>
                  <p className="feature-desc mb0">
                    Since the NFT marketplace is completely community-driven,
                    every decision made in the platform can be approved based on
                    the voting of the governance token holders of the NFT
                    marketplace. The voters will play a very vital role in every
                    decision making, and they have the ability to reject a
                    proposal, and the majority of the votes will have a
                    significant impact on the platform.
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <img
                      className=""
                      data-src="/images/gov/icon/debit-card.webp"
                      width="45"
                      src="https://www.blockchainappfactory.com/images/gov/icon/debit-card.webp"
                    />
                  </div>
                  <h3 className="feature-title">Payment</h3>
                  <p className="feature-desc mb0">
                    The token can be used as a payment in the NFT marketplace,
                    to buy an asset, or to avail of service from the platform.
                    These particular features are only available for the people
                    who hold the governance token from the NFT marketplace.
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <img
                      className=""
                      data-src="/images/gov/icon/medal.webp"
                      width="45"
                      src="https://www.blockchainappfactory.com/images/gov/icon/medal.webp"
                    />
                  </div>
                  <h3 className="feature-title">Rewards</h3>
                  <p className="feature-desc mb0">
                    For being a community and for performing various activities
                    that shape the betterment of the NFT marketplaces, the
                    governance tokens are rewarded in various ways. By offering
                    them random rewards or airdrops, which have native tokens or
                    assets that can be used for monetizing.{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cta_mine text-center">
          <div className="d-flex justify-content-center flex-wrap gap-3 ">
            <Button
              btnContent="Talk with our Experts"
              to="#newsletter-form-sec"
            />
          </div>
        </div>
      </div>
    </SecFive>
  );
};

export default Sec5;
