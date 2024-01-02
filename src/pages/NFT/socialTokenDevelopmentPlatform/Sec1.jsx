import React from "react";
import { SecOne } from "./socialTokenDevelopmentPlatformComp";

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
                  <div className="ban_tirt">
                    <h1>Social Token development platform</h1>
                  </div>
                  <p>
                    {" "}
                    A digital currency to represent an individual or community
                    to earn in the form of your own tokens for substantial
                    benefits.
                  </p>
                  <div className="cta_mine">
                    <a
                      rel="nofollow"
                      className="nectar-button medium regular accent-color regular-button nec-btn"
                      target="_blank"
                      href="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                      data-color-override="false"
                      data-hover-color-override="false"
                      data-hover-text-color-override="#fff"
                    >
                      <span>Connect with Whatsapp</span>
                    </a>
                    <a
                      href="#newsletter-form-sec"
                      className="nectar-button medium regular accent-color regular-button nec-btn"
                    >
                      <span>Talk with our Experts</span>
                    </a>
                  </div>{" "}
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12 text-left">
                <img
                  src="https://www.blockchainappfactory.com/images/sub/77.webp"
                  className="br-5"
                  alt="Social Token Development Platform"
                  title="Social Token Development Platform"
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
