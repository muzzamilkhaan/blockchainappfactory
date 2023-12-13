import React from "react";
import { SecSix } from "./nftMarketplaceHarmonyComp";
import { H2, H3, Button } from "../../../components";
const Sec6 = () => {
  return (
    <SecSix>
      <section
        className="service_area bg_color2 common_spacing gray_bg"
        id="popular"
      >
        <div className="container">
          <div className="row">
            <div className="section-title underline text-center">
              <div className="sec_tit">
                <H2>Develop Your Own NFT Marketplace On Harmony With Us</H2>
              </div>
            </div>
            <p className="text-center">
              At the present time, the Harmony platform is considered to be a
              better alternative for developing NFT marketplaces due to its
              salient features, such as high-speed transaction, and very low
              transaction cost. There is already an NFT marketplace called
              DaVinci NFT marketplace that is built on the Harmony blockchain
              platform. Since the DaVinci NFT marketplace platform is built on
              Harmony, its ecosystem is maintained by the native token, Harmony
              one. This system enables complete decentralization for the
              functioning of networks. We at Blockchain App Factory develop an
              NFT marketplace like the DaVinci NFT marketplace for our
              customers. We primarily focus on two key methodologies to develop
              an NFT marketplace on any blockchain platform. The first method is
              the{" "}
              <a href="https://www.blockchainappfactory.com/white-label-nft-marketplace">
                Whitelabel NFT marketplace
              </a>{" "}
              approach and the second method is building the NFT marketplace
              from scratch.{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="service_style_one text_center pt-40 pb-40 pl-3 pr-3 mb-4">
                <div className="service_style_one_title mb-30">
                  <div className="fnt_clr">
                    <H3 className="h3">
                      Whitelabel NFT Marketplace On Harmony
                    </H3>
                  </div>{" "}
                </div>
                <div className="service_style_one_text">
                  <p>
                    In this method, we deploy an in-built market-ready NFT
                    marketplace to our customers. We have NFT marketplaces built
                    on various blockchain technologies, including Harmony. It is
                    a complete custom based marketplace. This approach allows
                    the customers to launch their NFT marketplace on Harmony
                    immediately into the digital world. The only drawback is
                    that add on features cannot be added after the deployment,
                    since the customization process is in-built.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="service_style_one text_center pt-40 pb-40 pl-3 pr-3 mb-4">
                <div className="service_style_one_title mb-30">
                  <div className="fnt_clr">
                    <H3 className="h3">
                      NFT Marketplace With End-To-End Services
                    </H3>
                  </div>{" "}
                </div>
                <div className="service_style_one_text">
                  <p>
                    In this method, the NFT marketplace on harmony is developed
                    from scratch. It is a complete custom-made NFT marketplace,
                    and it can even be customized after the deployment of the
                    NFT marketplace. The only drawback is that it cannot be
                    deployed into the digital world quickly like the whitelabel
                    NFT marketplace approach.
                  </p>
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
            {/* <div className="cta_mine">
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
            </div> */}
            <div className="d-flex gap-3 justify-content-center flex-wrap" >
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
    </SecSix>
  );
};

export default Sec6;
