import React from "react";
import { SecFive } from "./nftLoyaltyProgramComp";
import { Button, H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section className="common_spacing gray_bg" id="viewdemo1">
        <div className="container">
          <div className="section-title text-center">
            <H2
              className="section-title underline mb20"
              //   style="font-size:25px;"
            >
              Demo Video of our NFT Loyalty Platform
            </H2>
            <p>
              Want to know how our NFT loyalty platform looks and works? Watch
              the demo video showing the intricacies of our Web3 loyalty
              platform in detail.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <a
                href="https://www.youtube.com/watch?v=3LLJw7xpikU"
                rel="nofollow"
                target="_blank"
              >
                <img
                  className=""
                  data-src="images/nft-loyalty-program/video-thumb.webp"
                  src="https://www.blockchainappfactory.com/images/nft-loyalty-program/video-thumb.webp"
                />
              </a>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="text-center mt40">
                <a
                  href="https://www.youtube.com/watch?v=3LLJw7xpikU"
                  target="_blank"
                  rel="nofollow"
                  className="nectar-button medium regular accent-color regular-button nec-btn"
                >
                  <span>
                    Witness the Magic of the NFT Loyalty Program We Create!
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
