import React from "react";
import { SecFive } from "./semiFungibleTokenDevelopmentComp";
import { H2 } from "../../../components";
const Sec5 = () => {
  return (
    <SecFive>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="sec_tit underline text-center">
              <H2>What are the Advantages of Semi Fungible Tokens? </H2>
            </div>
          </div>
          <div className="row first_fet">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="tw_feat">
                <div className="tw_feat_ico tw_feat_ico_hover">
                  {" "}
                  <img
                    className="dam"
                    data-src="images/semi-fungible-token-development/icons/04.webp"
                    src="https://www.blockchainappfactory.com/images/semi-fungible-token-development/icons/04.webp"
                  />{" "}
                </div>
                <div className="tw_feat_cnt">
                  <h5>Fungibility After Trading</h5>
                  <p>
                    A semi-fungible token remains fungible even after being
                    traded from the initial owner and can be easily traded
                    across exchanges, and liquidity is ensured.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="tw_feat tw_feat_1">
                <div className="tw_feat_ico">
                  {" "}
                  <img
                    className="dam"
                    data-src="images/semi-fungible-token-development/icons/05.webp"
                    src="images/semi-fungible-token-development/icons/05.webp"
                  />{" "}
                </div>
                <div className="tw_feat_cnt">
                  <h5>Multi-use Token</h5>
                  <p>
                    A SFT can both be fungible before and non-fungible after
                    redemption and can be used to verify the attributes of a
                    person/product.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="tw_feat tw_feat_1">
                <div className="tw_feat_ico">
                  {" "}
                  <img
                    className="dam"
                    data-src="images/semi-fungible-token-development/icons/06.webp"
                    src="images/semi-fungible-token-development/icons/06.webp"
                  />{" "}
                </div>
                <div className="tw_feat_cnt">
                  <h5>Widely Used in Games</h5>
                  <p>
                    Semi-fungible token development can be advantageous for
                    games as they can be used to represent currency or weapons
                    in them and record their history.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="tw_feat tw_feat_3">
                <div className="tw_feat_ico">
                  {" "}
                  <img
                    className="dam"
                    data-src="images/semi-fungible-token-development/icons/07.webp"
                    src="images/semi-fungible-token-development/icons/07.webp"
                  />{" "}
                </div>
                <div className="tw_feat_cnt">
                  <h5>Tradability</h5>
                  <p>
                    As semi-fungible tokens have both fungibility and
                    non-fungibility built in them, they can allow trading of
                    fractionalized assets which is seen as a boon.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="tw_feat tw_feat_1">
                <div className="tw_feat_ico">
                  {" "}
                  <img
                    className="dam"
                    data-src="images/semi-fungible-token-development/icons/08.webp"
                    src="images/semi-fungible-token-development/icons/08.webp"
                  />{" "}
                </div>
                <div className="tw_feat_cnt">
                  <h5>Easily Developable</h5>
                  <p>
                    Since SFTs are currently being built on the existing
                    Ethereum network using the already available EIP-721
                    standard, SFT development gets easier for developers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="tw_feat tw_feat_1">
                <div className="tw_feat_ico">
                  {" "}
                  <img
                    className="dam"
                    data-src="images/semi-fungible-token-development/icons/09.webp"
                    src="images/semi-fungible-token-development/icons/09.webp"
                  />{" "}
                </div>
                <div className="tw_feat_cnt">
                  <h5>Offers Flexibility</h5>
                  <p>
                    Owing to their nature, semi-fungible tokens are more
                    flexible than their counterparts, which gives them a
                    competitive advantage in the gaming industry for gamers and
                    developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
