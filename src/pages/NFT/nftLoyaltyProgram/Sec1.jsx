import React from "react";
import { SecOne } from "./nftLoyaltyProgramComp";

const Sec1 = () => {
  return (
    <SecOne>
      <div className="banner my_banner">
        <div className="banner-overlay"></div>
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 text-left">
                <div className="contentall">
                  <div className="ovr">
                    <div>
                      <div className="ban_tirt">
                        <h1>Launch NFT Loyalty Platform</h1>
                      </div>
                      <p
                      //  itemprop="text"
                       >
                        Revolutionize customer loyalty schemes with a
                        specialized NFT loyalty program! With a customized
                        program, you can redefine how customers perceive your
                        brand in the long run by letting them engage in
                        activities to offer NFT loyalty program rewards.
                      </p>
                      <div className="txt">
                        {" "}
                        <a
                          href="#viewdemo1"
                          className="nec-btn"
                          id="cyz"
                          //   style="border-radius: 30px !important;"
                        >
                          View Demo
                        </a>
                        <a
                          href="#newsletter-form-sec"
                          className="nec-btn"
                          id="cyz"
                          //   style="border-radius: 30px !important;"
                        >
                          Talk with our Experts
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 text-center">
                {" "}
                <img
                  className="magic"
                  src="https://www.blockchainappfactory.com/images/nft-loyalty-program/banner-img.webp"
                  alt=" "
                  title=" "
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default Sec1;
