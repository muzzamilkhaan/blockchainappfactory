import React from "react";
import { SecTwo } from "./phygitalNftMarketplaceComp";
import { Button, H2 } from "../../../components";
const Sec2 = () => {
  return (
    <SecTwo>
      <div className="common_spacing">
        <div className="container">
          <div className="section-title text-center">
            <div className="title-th sec_tit underline">
              <H2> What are Phygital (Physical Asset-based) NFTs? </H2> 
            </div>{" "}
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <p className="text-center mt20">
                Phygital NFTs are physical assets that will give access to
                virtual assets through exclusive applications. Even though
                similar tokens have existed for a long time, these bring in the
                aspect of both physical and digital assets existing together
                (previous physical NFTs were based on redeeming tokens). These
                physical asset-based NFTs are predominantly used by brands
                currently which want to claim a position in the Web3 world by
                providing authentic experiences to their customers. Items such
                as alcoholic beverages, antique collectibles, apparel, and even
                toys paired with in-game digital assets are some examples where
                physical product-based NFTs are utilized.{" "}
              </p>
              <div className="text-center">
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
    </SecTwo>
  );
};

export default Sec2;
