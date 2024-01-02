import React from "react";
import { SecOne } from "./nftConsultingComp";

const Sec1 = () => {
  return (
    <SecOne>
      <div className="banner my_banner">
        <div className="banner-overlay"></div>
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="contentall">
                  <div className="ban_tirt">
                    <h1>The Best NFT Consulting Services Provider</h1>{" "}
                  </div>
                  <p>
                    Blockchain App Factory’s NFT consultants are some of the
                    best in the domain who can provide strategies that lead Web3
                    ventures to success. We frame your campaign to include
                    multiple influential personalities in Web3 who can aid your
                    company’s growth.
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
              <div className="col-md-6 col-sm-12 col-xs-12"></div>
            </div>
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default Sec1;
