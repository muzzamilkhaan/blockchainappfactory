import React from "react";
import { SecThree } from "./nft-staking-platform-developmentComp";
import { H2, Button } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing gray_bg uniq_features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center pull-left">
              {" "}
              <img
                data-src="/images/staking/img_1.webp"
                className="mt20 mb10"
                src="https://www.blockchainappfactory.com/images/staking/img_1.webp"
              />{" "}
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 pull-right">
              <div className="section-title underline text-left">
                <div className="sec_tit">
                  <H2> NFT- Splendid Market </H2>
                </div>
              </div>
              <p className="mt10 text-left">
                The crypto’s most successful brainchild NFT has shown its
                capability to the world. The blockchain with the NFT has made it
                the most trusted and transparent tech in the crypto world. The
                market is increasing vigorously day by day. The enormous
                features of minting the NFT have brought in many artists and
                other creators into the crypto world. The NFT market’s
                efficiency is still in the growth transit, and the market
                predictions are very high in the crypto space. The need for an
                NFT is getting varied based on the people who are in need, as it
                transforms and adapts to various use cases without any issues.{" "}
              </p>
              <div className="text-left">
                <div className="cta_mine">
                  <div className="d-flex justify-content-center flex-wrap gap-3 ">
                    <Button
                      btnContent="Connect with Whatsapp"
                      target="_blank"
                      to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                    />
                    <Button
                      btnContent="Talk with our Experts"
                      to="#newsletter-form-sec"
                    />
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
