import React from "react";
import { SecOne } from "./carbonCreditsDevelopmentComp";

const Sec1 = () => {
  return (
    <SecOne>
      <div class="banner my_banner">
        <div class="banner-overlay"></div>
        <div class="banner_content">
          <div class="container">
            <div class="row">
              <div class="col-md-5 col-sm-12 col-xs-12 text-left">
                <div class="contentall">
                  <div class="ovr">
                    <div itemscope="" itemtype="http://schema.org/CreativeWork">
                      <div class="ban_tirt">
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
                      <div class="txt">
                        {" "}
                        <a
                          href="#newsletter-form-sec"
                          class="nec-btn"
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
              <div class="col-md-7 col-sm-12 col-xs-12 text-center img-container">
                <img
                  class="magic"
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
