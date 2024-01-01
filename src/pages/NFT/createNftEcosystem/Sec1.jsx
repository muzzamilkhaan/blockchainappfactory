import React from "react";
import { SecOne } from "./createNftEcosystemComp";

const Sec1 = () => {
  return (
    <SecOne>
      <div className="banner my_banner">
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12 text-left">
                <div className="contentall">
                  <div className="ovr">
                    <div
                    //  itemscope="" itemtype="http://schema.org/CreativeWork"
                    >
                      <div className="ban_tirt">
                        <h1
                        // itemprop="name" style="text-transform:uppercase;"
                        >
                          How to Develop your NFT Ecosystem? The Only Guide for
                          NFT Marketplace Development{" "}
                        </h1>{" "}
                      </div>

                      <div className="txt">
                        <a
                          href="#newsletter-form-sec"
                          className="nec-btn"
                          id="cyz"
                          style={{ borderRadius: "30px " }}
                          //   style="border-radius: 30px !important;"
                        >
                          Talk With Our Expert
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12 text-center">
                {" "}
                <img
                  className="magic"
                  //   style="max-height:300px !important"
                  style={{ maxHeight: "300px" }}
                  src="https://www.blockchainappfactory.com/images/nft-ecosystem.webp"
                  alt="Create An NFT"
                  title="Develop Your NFT Ecosystem"
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
