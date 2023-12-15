import React from "react";
import { SecTwo } from "./nftMusicMarketplaceDevelopmentComp";
import { H2, Button } from "../../../components";
const Sec2 = () => {
  return (
    <SecTwo>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit">
              <H2> Music NFT Marketplace! Sounds energetic, right?</H2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <p className="mt10 text-center para">
                The soaring trend of NFTs introduced phenomenal business
                opportunities in the blockchain network. The growth of NFTs and
                its implementations have grown rapidly day by day, which leads
                to unique assets and tends the users to mint their patents,
                tweets, posts, media files, prototypes, and whatever mankind
                feels unique. Their unique characteristics show the capabilities
                of evolving the world to be unique and authentic. Piles of
                innovations, research, and implementations are bursting out from
                innovative brains of tech nerds to bring the revolution in the
                business as well as the environment through NFTs, each NFTs
                mesmerizing about the thought process behind its creation. NFTs
                propels the business to grow exponentially with the raised
                1,785% market cap. Digital artists like Beeple have earned
                millions through NFTs. We are throttling the music industry with
                the creation of Music NFTs and unleashing the potential of NFTs
                by introducing physically redeemable NFTs in our Music NFT
                Marketplace.
              </p>
            </div>
          </div>
          <div className="text-center cta_mine marg-t">
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
      </div>
    </SecTwo>
  );
};

export default Sec2;
