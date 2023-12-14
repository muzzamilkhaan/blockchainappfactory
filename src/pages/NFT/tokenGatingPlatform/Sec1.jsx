import React from "react";
import { SecOne } from "./tokenGatingPlatformComp";

const Sec1 = () => {
  return (
    <SecOne>
      <div className="banner my_banner">
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 text-left">
                <div className="contentall">
                  <div className="ovr">
                    <div
                    //  itemscope="" itemtype="http://schema.org/CreativeWork"
                    >
                      <div className="ban_tirt">
                        <h1
                        // itemprop="name"
                        >
                          {" "}
                          Token Gating Platform
                        </h1>{" "}
                      </div>
                      <p
                      //   itemprop="text"
                      >
                        Create your own token gating platform to offer sublime
                        experiences to your trusted community. With our
                        expertise in building token-based applications, you gain
                        easy access to the global market.{" "}
                      </p>
                      <div className="txt">
                        <a
                          href="#demo"
                          className="nectar-button medium regular accent-color regular-button nec-btn"
                        >
                          View Demo
                        </a>
                        <a
                          href="#newsletter-form-sec"
                          className="nec-btn"
                          id="cyz"
                          //   style="border-radius: 30px !important;"
                        >
                          Talk With Our Expert
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 text-center">
                <img
                  className="magic"
                  src="https://www.blockchainappfactory.com/images/token-gating-platform/banner-img.webp"
                  alt=" "
                  title=" "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default Sec1;
