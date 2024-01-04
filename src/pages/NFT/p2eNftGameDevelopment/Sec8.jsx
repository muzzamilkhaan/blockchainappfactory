import React from "react";
import { SecEight } from "./p2eNftGameDevelopmentComp";
import { H2 } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <section className="amazing_feature">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit mb20">
              <div className="section-title underline mb20 font_wei text-dark">
                <H2> Business Perks of Developing your P2E NFT Game </H2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src="https://www.blockchainappfactory.com/images/p2e/business-perks.webp" />
            </div>
            <div className="col-lg-6">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="single_feature">
                  <h3>Lucrative Business Model:</h3>
                  <p>
                    The P2E gaming ecosystem is a model that highly benefits the
                    platform owners with various sources of income, such as
                    token revenue, marketplace fee, sale of nfts, etc.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="single_feature">
                  <h3>Be an Early Adopter:</h3>
                  <p>
                    P2E NFT game trend is one of the emerging trends in the NFT
                    sphere. Developing your own game at such an early stage will
                    make your name stand tall in the market.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="single_feature">
                  <h3>Collaborate with Brand:</h3>
                  <p>
                    Building a strong community with your game will allow you to
                    collaborate with real-time brands. Through this partnership,
                    players can use the game points to avail a coupon/offer for
                    the brand’s product/service.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="single_feature">
                  <h3>Potential Market: </h3>
                  <p>
                    According to the reports of Blockchain Game Alliance, NFT
                    games have generated $2.32 billion in overall revenue in
                    2021, which is 22% of all the total NFT trading volume.
                    Tapping this potential market through building a P2E NFT
                    game is the wisest decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecEight>
  );
};

export default Sec8;
