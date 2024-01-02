import React from "react";
import { SecOne } from "./nftArtDesignServicesComp";

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
                    <div>
                      <div className="ban_tirt">
                        <h1>NFT Art Design Services</h1>{" "}
                      </div>
                      <p>
                        Blockchain App Factory is a reputed NFT art design
                        services provider with 7+ years of industry experience.
                        We design artistic ideas that convey what you need at
                        unbelievable precision. Our creative artists understand
                        the need for exclusive NFTs to appeal visually. Believe
                        us: NFTs we create attract each and every prospective
                        customer in some way!
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
              <div className="col-md-6 col-sm-12 col-xs-12 text-center img-container">
                {" "}
                <br />{" "}
                <img
                  className="magic"
                  src="https://www.blockchainappfactory.com/images/nft-art-design-services/banner-img1.webp"
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
