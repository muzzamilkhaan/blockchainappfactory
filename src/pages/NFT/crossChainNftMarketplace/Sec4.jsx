import React from "react";
import { SecFour } from "./crossChainNftMarketplaceComp";
import { H2, Button } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center pull-left">
              <img
                data-src="/images/cross_chain/img_1.webp"
                className="lazy mt20 mb20"
                src="https://www.blockchainappfactory.com/images/cross_chain/img_1.webp"
              />{" "}
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 pull-right">
              <div className="section-title underline text-left">
                <div className="sec_tit">
                  <H2>
                    NFT Marketplace Development with Cross-Chain Compatibility
                  </H2>
                </div>
              </div>
              <p className="mt10 text-left">
                This NFT marketplace development is an advancement of a huge
                revolution in the entire crypto world, where the traditional NFT
                marketplaces had limitations in aiding the blockchains that are
                built on different platforms. But this NFT marketplace
                development came into existence where the NFT built on any
                blockchain can be listed on this platform. And even the NFT can
                be revoked to its old state if required. This is one of the best
                models in the crypto space. Blockchain of particular NFT will be
                locked within the smart contracts, which are completely
                developed to run on the NFT marketplace with cross-chain
                compatibility. If the user prefers to revoke the bridge
                established, they can easily revoke the process.{" "}
              </p>
              <div className="text-left">
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
                {/* <div className="cta_mine"> */}
                <div className="d-flex  flex-wrap gap-3 justify-content-center">
                  <Button
                    btnContent="Connect with Whatsapp"
                    target="_blank"
                    to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                  />
                  <Button
                    btnContent="Talk with our Experts"
                    to="#newsletter-form-sec"
                  />
                </div>
                {/* </div>{" "} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
