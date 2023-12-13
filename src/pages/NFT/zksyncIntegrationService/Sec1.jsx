import React from "react";
import { SecOne } from "./ZksyncIntegrationServiceComp";
import { Banner } from "../../../components";
const Sec1 = () => {
  return (
    <SecOne>
      <div className="banner my_banner">
        <div className="banner-overlay"></div>
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12 text-left">
                <div className="contentall">
                  <div className="ovr">
                    <div
                    // itemscope="" itemtype="http://schema.org/CreativeWork"
                    >
                      <div className="ban_tirt">
                        <h1
                        // itemprop="name"
                        >
                          zksync2.0 Integration in NFT Platform{" "}
                        </h1>{" "}
                      </div>
                      <p
                      // itemprop="text"
                      >
                        Emulate the success of early-era NFT ventures on
                        Ethereum with our expertise in zkSync 2.0 integration in
                        NFT platforms. Get on board the second evolution of
                        Web3!
                      </p>
                      <div className="txt">
                        {" "}
                        <a
                          href="#newsletter-form-sec"
                          className="nec-btn"
                          id="cyz"
                          // style="border-radius: 30px !important;"
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
                  src="https://www.blockchainappfactory.com/images/zksync/banner-img.webp"
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
