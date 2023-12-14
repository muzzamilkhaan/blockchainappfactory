import React from "react";
import { SecSeven } from "./nftLoyaltyProgramComp";
import { H2 } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <div className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="sec_tit underline text-center">
              <H2>The Working of a Web3 Loyalty Program</H2>
            </div>
          </div>
          <div className="col-md-12 mt30">
            <div className="timeline-center">
              <div className="timeline-row row m-0">
                <div className="tm-detail tm-det tm-det-left">
                  <h4
                    className="common_h4 mb10 tm-det-tit"
                    style={{ fontFamily: "Lato,sans-serif" }}
                  >
                    User Involvement
                  </h4>
                  <ul className="process-list">
                    <li>
                      <p>
                        Users in the Web3 loyalty program are involved with the
                        platform through various activities like purchasing,
                        referring new users, and sharing content.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="tm-icon roadmap-icon-outer">
                  {" "}
                  <img
                    className=""
                    data-src="images/nft-loyalty-program/icons/user.webp"
                    src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/user.webp"
                  />{" "}
                </div>
              </div>
              <div className="timeline-row row m-0">
                <div className="tm-detail tm-det tm-det-right">
                  <h4
                    className="mb10 common_h4 tm-det-tit"
                    style={{ fontFamily: "Lato,sans-serif" }}
                  >
                    Earning Rewards
                  </h4>
                  <ul className="process-list">
                    <li>
                      <p>
                        For their active participation in the program, users
                        earn rewards in the form of NFTs and crypto coins that
                        can bestow benefits and loyalty points.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="tm-icon roadmap-icon-outer">
                  {" "}
                  <img
                    className=""
                    data-src="images/nft-loyalty-program/icons/rewards.webp"
                    src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/rewards.webp"
                  />{" "}
                </div>
              </div>
              <div className="timeline-row row m-0">
                <div className="tm-detail tm-det tm-det-left">
                  <h4
                    className="common_h4 mb10 tm-det-tit"
                    style={{ fontFamily: "Lato,sans-serif" }}
                  >
                    Redeeming Rewards
                  </h4>
                  <ul className="process-list">
                    <li>
                      <p>
                        Users can redeem their NFT rewards in the platform once
                        they earn sufficient tokens to purchase items or get
                        services at discounted prices.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="tm-icon roadmap-icon-outer">
                  {" "}
                  <img
                    className=""
                    data-src="images/nft-loyalty-program/icons/redeem.webp"
                    src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/redeem.webp"
                  />{" "}
                </div>
              </div>
              <div className="timeline-row row m-0">
                <div className="tm-detail tm-det tm-det-right">
                  <h4
                    className="mb10 common_h4 tm-det-tit"
                    style={{ fontFamily: "Lato,sans-serif" }}
                  >
                    Tracking Rewards
                  </h4>
                  <ul className="process-list">
                    <li>
                      <p>
                        The use of NFTs lets users track transactions at all
                        times as tokens are stored on the blockchain that cannot
                        be tampered with or modified at any time.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="tm-icon roadmap-icon-outer">
                  {" "}
                  <img
                    className=""
                    data-src="images/nft-loyalty-program/icons/tracking.webp"
                    src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/tracking.webp"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecSeven>
  );
};

export default Sec7;
