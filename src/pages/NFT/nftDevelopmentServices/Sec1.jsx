import React from "react";
import { SecOne } from "./nftDevelopmentServicesComp";

const Sec1 = () => {
  return (
    <SecOne>
      <div className="banner my_banner">
        <div className="banner-overlay"></div>
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="contentall">
                  <div className="ban_tirt">
                    <h1>NFT Development Company</h1>
                  </div>
                  <p className="mb20">
                    We offer industry-leading NFT development services. From
                    tokenizing digital &amp; physical assets to NFT marketplace
                    development, our expertise empowers us to provide ultimate
                    solutions crafted for your NFT venture.
                  </p>
                  <div className="banner-btn">
                    {" "}
                    <a
                      href="#newsletter-form-sec"
                      className="nectar-button medium regular accent-color regular-button bnt nec-btn btn1"
                    >
                      <strong>Talk with our Experts</strong>
                    </a>
                    <a href="#viewdemo" className="bnt nec-btn btn1">
                      View Demo
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 text-center img-container">
                <br />
                <br />
                <img
                  src="https://www.blockchainappfactory.com/images/demo/img-1.webp"
                  className="mb30"
                  alt="NFT Development Company"
                  title="NFT Development Company"
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
