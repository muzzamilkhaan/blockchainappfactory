import React from "react";
import { SecThree } from "./nftArtMarketplaceDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing  gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit">
              <div className="section-title underline text-center">
                <H2> NFT - Overview </H2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 mt40">
              <img
                className=" "
                src="https://www.blockchainappfactory.com/images/art/nft-overview-01.webp"
                alt="NFT Development Solutions"
                title="Overview of NFT"
              />
            </div>
          </div>
          {/* <div className="row"> */}
          <div className="col-md-6 col-sm-12 col-xs-12 mt40">
            <p className="mt10 text-justify">
              Non-Fungible Tokens received huge traffic in the crypto market and
              made the history of becoming one of the very quick billion-dollar
              business models. With the advancement of technology, any asset,
              either physical or digital, can be tokenized with a unique value
              assigned to them. This unique value assigned will help up
              identifying every individual NFTs. The Non-fungible tokens are
              built with blockchain technology, which mainly focuses on privacy
              and security. The decentralized structure in the NFT is more
              inclined towards providing a trade where the seller and buyer have
              the ultimate freedom and authenticity over the assets.
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
          {/* </div> */}
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
