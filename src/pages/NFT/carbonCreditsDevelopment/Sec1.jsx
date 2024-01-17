import React from "react";
import { SecOne } from "./carbonCreditsDevelopmentComp";

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
                    <div itemscope="" itemtype="http://schema.org/CreativeWork">
                      <div className="ban_tirt">
                        <h1 itemprop="name">
                          Blockchain-based Carbon Credits{" "}
                        </h1>{" "}
                      </div>
                      <p itemprop="text">
                        Play a vital role in redefining the fight against
                        climate change by utilizing Web3 technology for carbon
                        credits to control greenhouse gas emissions across the
                        globe.
                      </p>
                      <div className="txt">
                        {" "}
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
              <div className="col-md-7 col-sm-12 col-xs-12 text-center img-container">
                <img
                  className="magic"
                  src="https://www.blockchainappfactory.com/images/carbon-credits-development/banner-img.webp"
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
