import React from "react";
import { SecFour } from "./daoEnabledNftPlatformComp";
import { Button, H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="col-lg-6">
            <div className="section-title text-left underline">
              <div className="sec_tit">
                <H2> Do DAOs Result in the Evolution of NFT Marketplaces? </H2>
              </div>
            </div>
            <p className="mt10 mb10 text-left">
              In a nutshell, yes, DAOs do bring evolutionary changes to NFT
              marketplace ventures. It is mainly because of bringing the
              community along with the NFT marketplace’s growth. DAOs typically
              function as fundraising campaigns at the start and continue as a
              decentralized community trusting smart contract-based protocols
              with time. Although decision-making pioneers as the main facet of
              a{" "}
              <a
                className="internal_link"
                href="https://www.blockchainappfactory.com/decentralized-autonomous-organization"
                target="_blank"
              >
                decentralized autonomous organization
              </a>
              , it gives more than voting powers. The community users can easily
              earn through staking NFTs or native tokens and fix the transaction
              fee, which will be used to manage the platform. The blockchain
              world has been undergoing constant change, and the DAO is a
              disruptive change that is here to stay!
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
                <div className="d-flex justify-content-start flex-wrap gap-3 mt20">
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
          <div className="col-lg-6">
            <img
              className=""
              data-src="/images/dao-enabled-nft-platform/eolution_01.webp"
              src="https://www.blockchainappfactory.com/images/dao-enabled-nft-platform/eolution_01.webp"
            />{" "}
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
