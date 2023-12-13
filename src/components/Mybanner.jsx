import React from "react";
import { H1 } from "./index";
const Mybanner = ({ bgImg, leftImg, heading, para }) => {
  return (
    <div>
      <div
        className="banner my_banner"
        style={{ backgroundImage: `url(${bgImg})`, minHeight: "800px" }}
      >
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
                      <div className="ban_tirt">{heading}</div>
                      <p
                      // itemprop="text"
                      >
                        {para}
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
                <img className="magic" src={leftImg} alt=" " title=" " />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mybanner;
