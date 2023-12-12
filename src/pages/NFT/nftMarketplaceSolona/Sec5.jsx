import React from "react";
import { SecFive } from "./nftMarketplaceSolanaComp";
import { H2, H3 } from "../../../components";
const Sec5 = () => {
  return (
    <SecFive>
      <div className="common_spacing gray-bg" id="business">
        <div className="container">
          <div className="section-title text-center m-b-30">
            <H2 className="common_h3 sec-tit">
              Benefits Of Our Solana NFT Marketplace
            </H2>
            <hr />
            <p>
              The listed below are the unique benefits provided by our Solana
              based NFT marketplace development platform.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="blog-box mb40 indus-box">
                <div className="blog-img-box">
                  <div
                    // style="background-image: url(images/solana/solana3.webp);"
                    className="indus-img img-1"
                  ></div>
                </div>
                <div className="indus-box-content">
                  <H3 className="mt20 blog-title">High transaction speed</H3>
                  <p className="indus-txt">
                    This type of NFT marketplace provides high-level transaction
                    speed because the network congestion is low in the platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="blog-box mb40 indus-box">
                <div className="blog-img-box">
                  <div
                    // style="background-image: url(images/solana/solana4.webp);"
                    className="indus-img img-2"
                  ></div>
                </div>
                <div className="indus-box-content">
                  <H3 className="mt20 blog-title">Elimination of middleman</H3>
                  <p className="indus-txt">
                    Solana based NFT marketplace is trustless since it functions
                    in a decentralized environment, it eliminates the
                    involvement of central authorities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="blog-box mb40 indus-box">
                <div className="blog-img-box">
                  <div
                    // style="background-image: url(images/solana/native.webp);"
                    className="indus-img img-3"
                  ></div>
                </div>
                <div className="indus-box-content">
                  <H3 className="mt20 blog-title">Native token</H3>
                  <p className="indus-txt">
                    The Solana platform has its own native token called SOL. The
                    investors stake the SOL tokens in the liquidity pool for
                    gaining high rewards and profits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFive>
  );
};

export default Sec5;
