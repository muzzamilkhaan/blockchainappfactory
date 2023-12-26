import React from "react";
import { SecTwelve } from "./nftForRealeStateComp";
import { H2, H3, Button } from "../../../components";

const Sec12 = () => {
  return (
    <SecTwelve>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row mt40 ">
            <div className="section-title underline text-center">
              <div className="sec_tit">
                <H2> Blockchain App Factory </H2>
              </div>
            </div>
            <p className="text-center">
              Teams at Blockchain App Factory will provide you with cutting-edge
              technology. As we have research centers from around the world,
              your project will be showered with the utmost user experience.
            </p>
            <H2 className="text-center" style={{ color: "#2b2c2d" }}>
              Our development services are
            </H2>
            <div className=" feature-block mt30">
              <div className="col-sm-6 ">
                <div className="app-overview equal-height">
                  <div className="media">
                    <div className="media-left">
                      <div className="app-icon text-center">
                        {" "}
                        <img src="https://www.blockchainappfactory.com/images/nft_real/icon/nft-market.webp" />{" "}
                      </div>
                    </div>
                    <div className="media-body">
                      <h4
                        style={{
                          fontFamily: "lato, sans-serif ",
                          color: "#2b2c2d",
                        }}
                      >
                        Building an NFT Marketplace
                      </h4>
                      <p>
                        Teams will help you tokenize your collectible, develop
                        integrated UI, Mobile Dashboards and all the required
                        specifications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="app-overview equal-height">
                  <div className="media">
                    <div className="media-left">
                      <div className="app-icon text-center">
                        {" "}
                        <img src="https://www.blockchainappfactory.com/images/nft_real/icon/white-label.webp" />{" "}
                      </div>
                    </div>
                    <div className="media-body">
                      <h4
                        style={{
                          fontFamily: "lato, sans-serif ",
                          color: "#2b2c2d",
                        }}
                      >
                        White-label NFT Marketplace Deployment
                      </h4>
                      <p>
                        At Blockchain App Factory, we provide you with the
                        pre-processed, fully ready-to-deploy marketplace
                        blueprint which can be tweaked according to your
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="app-overview equal-height">
                  <div className="media">
                    <div className="media-left">
                      <div className="app-icon text-center">
                        {" "}
                        <img src="https://www.blockchainappfactory.com/images/nft_real/icon/token.webp" />{" "}
                      </div>
                    </div>
                    <div className="media-body">
                      <h4
                        style={{
                          fontFamily: "lato, sans-serif ",
                          color: "#2b2c2d",
                        }}
                      >
                        NFT Token Development
                      </h4>
                      <p>
                        The Marketing and Research group will help fuel the
                        development by giving teams insight into what the world
                        market is currently offering in the type of token and
                        coin development
                      </p>
                    </div>
                  </div>
                </div>
                <div className="app-overview equal-height">
                  <div className="media">
                    <div className="media-left">
                      <div className="app-icon text-center">
                        {" "}
                        <img src="https://www.blockchainappfactory.com/images/nft_real/icon/minting.webp" />{" "}
                      </div>
                    </div>
                    <div className="media-body">
                      <h4
                        style={{
                          fontFamily: "lato, sans-serif ",
                          color: "#2b2c2d",
                        }}
                      >
                        NFT Minting Platform Development
                      </h4>
                      <p>
                        Blockchain App Factory helps you build smart contracts
                        which are rigid, flexible, and unhackable to
                        transparently lock your ownership and all the
                        information across multiple blockchains.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            {/* <style type="text/css">
.nec-btn{
    position: relative !important;
    color:#fff !important;
    border-radius:30px !important;
    font-size: 11px;
    text-transform: uppercase !important;
    transform: scale(1.1,1.1) !important;
    transition:all 0.3s ease-out 0s !important;
    background: #47b475 !important;
}
.nec-btn:hover{
    transform: scale(1,1) !important;
    color:#fff !important;
    background:#00a9e2!important;
}
a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin-bottom: 15px!important;
    display: inline-block;
    margin-right: 26px!important;
}
.contentall a, a.home-talk-experts{
	padding: 10px 20px !important;
}
</style> */}
            <div className="d-flex justify-content-center flex-wrap gap-3 ">
              <Button
                btnContent="Connect with Whatsapp"
                target="_blank"
                to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
              />
              <Button btnContent="Talk with our Experts" />
            </div>
          </div>
        </div>
      </section>
    </SecTwelve>
  );
};

export default Sec12;
