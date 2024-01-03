import React from "react";
import { SecFive } from "./nftGamingPlatformDevelopmentComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section className="advantages">
        <div className="container">
          <div className="row">
            <div
              className="title"
              style={{ backgroundPosition: "47.4105% 77.0316%" }}
            >
              <div className="section-title col-md-12 text-center">
                <div className="font-weight-6 less-mar-1 line-height-5 text-white">
                  <H2 style={{ color: "#fff" }}>
                    {" "}
                    What are the Privileges Gamers Gain While Using NFT Games?{" "}
                  </H2>
                </div>
                <div className="hr" />{" "}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <ul>
                <li className="right">
                  <div>
                    <div className="icons ">
                      <img src="https://www.blockchainappfactory.com/images/nftg/icon/boss.webp" />
                    </div>
                    <p>
                      An NFT game development solution offers ownership of
                      in-game assets to players.
                    </p>
                  </div>
                </li>
                <li className="right">
                  <div>
                    <div className="icons ">
                      <img src="https://www.blockchainappfactory.com/images/nftg/icon/factory.webp" />
                    </div>
                    <p>
                      NFT assets transfer the in-game economy’s control from
                      game studios to gamers.
                    </p>
                  </div>
                </li>
                <li className="right">
                  <div>
                    <div className="icons ">
                      <img src="https://www.blockchainappfactory.com/images/nftg/icon/shopping-cart.webp" />
                    </div>
                    <p>
                      NFT game assets can be traded on external marketplaces
                      allowing players to profit.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 hidden-xs">
              <div className="advantages-img">
                {" "}
                <img
                  className=""
                  data-src="images/nftg/game-play.jpg"
                  alt="NFT Game Development Company"
                  title="NFT Game Development Company"
                  src="https://www.blockchainappfactory.com/images/nftg/game-play.jpg"
                />{" "}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <ul >
                <li >
                  <div>
                    <div className="icons">
                      <img src="https://www.blockchainappfactory.com/images/nftg/icon/storage-box.webp" />
                    </div>
                    <p>
                      Users can gain from the rarity traits while monetizing
                      their in-game NFT assets.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="icons">
                      <img src="https://www.blockchainappfactory.com/images/nftg/icon/compliant.webp" />
                    </div>
                    <p>
                      Distributed storage platforms make the data immutable,
                      securing gamers’ assets.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="icons">
                      <img src="https://www.blockchainappfactory.com/images/nftg/icon/data-analytics.webp" />
                    </div>
                    <p>
                      Blockchains will be the key to players’ privacy and
                      anonymity in the NFT game.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
