import React from "react";
import { SecTen } from "./nftArtMarketplaceDevelopmentComp";
import { Button, H2 } from "../../../components";
const Sec10 = () => {
  return (
    <SecTen>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="section-title text-center">
                <div className="sec_tit">
                  <div className="section-title">
                    <H2>
                      Why Blockchain App Factory in NFT art marketplace
                      development{" "}
                    </H2>
                  </div>
                </div>
              </div>
              <p className="mt20 text-justify">
                The Blockchain App Factory is one of the Industry's most
                renowned development firms, with a very high number of technical
                developers and market analysts. We never failed to achieve what
                we were destined to deliver. Join us by filling the form above
                to be industries if you are into building your own NFT Art
                marketplace development.
              </p>
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
                </div>{" "} */}
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
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 mt10">
              <img
                className=""
                data-src="/images/art/why-blockchain.webp"
                alt="Why Blockchain App Factory In NFT Art Marketplace Development"
                title="NFT Art Marketplace Development"
                src="https://www.blockchainappfactory.com/images/art/why-blockchain.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </SecTen>
  );
};

export default Sec10;
