import React from "react";
import { SecThree } from "./web2GameToWeb3GameDevelopmentComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row mt20">
            <div className="section-title text-center">
              <div className="sec_tit mb20">
                <div className="section-title underline mb20">
                  <H2> Why to Integrate NFTs in your Traditional Game? </H2>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="row mt20">
            <div className="col-md-6">
              <div className="icon-text-1">
                <div className="icon-text-icon">
                  <img
                    className=""
                    data-src="/images/web2-game-to-web3-game-development/icons/trend.webp"
                    src="https://www.blockchainappfactory.com/images/web2-game-to-web3-game-development/icons/trend.webp"
                  />
                </div>
                <div className="icon_content">
                  <p style={{ fontSize: 20 }}>
                    <strong>Adopt the Modern Trend</strong>
                  </p>
                  <p className="c-grey">
                    {" "}
                    Players in regular games do not get anything in return for
                    their valuable time and money spent in the game. While web3
                    games, aka P2E NFT games, open a door to potential revenues
                    for both players and platform owners.{" "}
                  </p>
                </div>
              </div>
              <div className="icon-text-1">
                <div className="icon-text-icon">
                  <img
                    className=""
                    data-src="/images/web2-game-to-web3-game-development/icons/market.webp"
                    src="https://www.blockchainappfactory.com/images/web2-game-to-web3-game-development/icons/market.webp"
                  />
                </div>
                <div className="icon_content">
                  <p style={{ fontSize: 20 }}>
                    <strong>Potential Market</strong>
                  </p>
                  <p className="c-grey">
                    The reports of DappRadar show that the blockchain gaming
                    industry grew up to 2000% in the past year, and there was
                    nearly $2.5 billion USD spent in investments for the
                    blockchain gaming space in Q1 2022. Using this market
                    opportunity is the smartest decision for gampreneurs like
                    you.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="icon-text-1-group">
                <div className="icon-text-1">
                  <div className="icon-text-icon">
                    <img
                      className=""
                      data-src="/images/web2-game-to-web3-game-development/icons/experience.webp"
                      src="https://www.blockchainappfactory.com/images/web2-game-to-web3-game-development/icons/experience.webp"
                    />
                  </div>
                  <div className="icon_content">
                    <p style={{ fontSize: 20 }}>
                      <strong>Bestow an Immersive Experience</strong>
                    </p>
                    <p className="c-grey">
                      Web3 games are well-known for their immersive and engaging
                      experiences. The use of augmented reality and virtual
                      reality will provide players with an out-of-the-world
                      gaming experience.
                    </p>
                  </div>
                </div>
                <div className="icon-text-1">
                  <div className="icon-text-icon">
                    <img
                      className=""
                      data-src="/images/web2-game-to-web3-game-development/icons/trendsetter.webp"
                      src="https://www.blockchainappfactory.com/images/web2-game-to-web3-game-development/icons/trendsetter.webp"
                    />
                  </div>
                  <div className="icon_content">
                    <p style={{ fontSize: 20 }}>
                      <strong>Be a Trendsetter</strong>
                    </p>
                    <p className="c-grey">
                      Web3 games are burgeoning in the crypto realm, and very
                      few take advantage of this trend. Switching over from web2
                      game to web3 game will make a market leader in this space.{" "}
                    </p>
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
