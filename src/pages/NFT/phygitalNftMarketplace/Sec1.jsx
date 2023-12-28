import React from "react";
import { SecOne } from "./phygitalNftMarketplaceComp";

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
                    <div itemscope="" itemtype="http://schema.org/CreativeWork">
                      <div className="ban_tirt">
                        <h1 itemprop="name">
                          Phygital NFT Marketplace Development
                        </h1>{" "}
                      </div>
                      <p itemprop="text">
                        Seal the gap between the physical and virtual worlds
                        through a phygital NFT marketplace which will become the
                        ultimate entry point for new Web3 adopters in the
                        future.
                      </p>
                      <div className="text-left">
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
              <div className="col-md-6 col-sm-12 col-xs-12 text-center img-container">
                <img
                  className="magic"
                  src="https://www.blockchainappfactory.com/images/phygital-nft-marketplace/img---1.webp"
                  width="550"
                  height="auto"
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
