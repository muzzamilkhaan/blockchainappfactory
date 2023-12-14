import React from "react";
import { SecNine } from "./nftLoyaltyProgramComp";
import { H2, H3 } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <div className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="sec_tit underline text-center mb20">
              <H2> Top NFT Loyalty Programs in the Current Market</H2>
            </div>{" "}
          </div>
          <div className="row flip-box-row mt20">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="white-flip-box flip-box">
                <div className="flip-icon-outer">
                  {" "}
                  <img
                    className="lazy"
                    data-src="images/nft-loyalty-program/icons/Starbucks.webp"
                    alt="DeFi dApp Development"
                    src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/Starbucks.webp"
                  />{" "}
                </div>
                <div className="flip-tit">
                  <H3 className="h3">Starbucks</H3>
                </div>
                <p className="flip-txt">
                  Starbucks runs an NFT loyalty platform, “Odyssey,” on Polygon,
                  where users can engage in interactive tasks and gain unique
                  rewards that include exclusive experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="white-flip-box flip-box">
                <div className="flip-icon-outer">
                  {" "}
                  <img
                    className="lazy"
                    data-src="images/nft-loyalty-program/icons/Burger.webp"
                    alt="DeFi Smart Contract Development"
                    src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/Burger.webp"
                  />{" "}
                </div>
                <div className="flip-tit">
                  <H3 className="h3">Burger King</H3>
                </div>
                <p className="flip-txt">
                  Burger King’s Web3 loyalty program utilizes gamification to
                  provide rewards to customers that include brand merchandise,
                  digital collectibles, and Whopper sandwiches.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="white-flip-box flip-box">
                <div className="flip-icon-outer">
                  {" "}
                  <img
                    className="lazy"
                    data-src="images/nft-loyalty-program/icons/taco.webp"
                    alt="DeFi Exchange Development"
                    src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/taco.webp"
                  />{" "}
                </div>
                <div className="flip-tit">
                  <H3 className="h3">Taco Bell</H3>
                </div>
                <p className="flip-txt">
                  Taco Bell uses a one-time membership fee model by auctioning
                  exclusive NFTs that come with e-gift cards that the brand uses
                  for a worthy cause.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecNine>
  );
};

export default Sec9;
