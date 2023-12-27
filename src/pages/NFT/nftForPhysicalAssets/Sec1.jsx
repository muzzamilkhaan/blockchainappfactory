import React from "react";
import { SecOne } from "./nftForPhysicalAssetsComp";

const Sec1 = () => {
  return (
    <SecOne>
      <div className="banner my_banner">
        <div className="banner-overlay"></div>
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                <div className="contentall">
                  <div className="ovr">
                    <div className="ban_tirt">
                      <h1>Build a Physically-Redeemable NFT Marketplace </h1>
                    </div>
                    <p>
                      Physically redeemable NFT is the new trend in NFT that
                      welcomes innovation at its peak with exceptional features
                      and business opportunities.
                    </p>
                    {/* <a
                      href="#newsletter-form-sec"
                      className="nectar-button medium regular accent-color regular-button nec-btn"
                    >
                      <strong>Talk with our Experts</strong>
                    </a>{" "}
                    <a
                      href="#viewdeo_redirect"
                      className="nectar-button medium regular accent-color regular-button nec-btn"
                    >
                      View Demo
                    </a> */}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default Sec1;