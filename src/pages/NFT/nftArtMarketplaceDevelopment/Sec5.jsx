import React from "react";
import { SecFive } from "./nftArtMarketplaceDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit">
              <H2> NFT for Art </H2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <p className="mt10 text-center para">
                Arts of both form physical and digital assets are tokenized into
                a non-fungible token, which is unique and indivisible. These
                NFTs in the art space created an opportunity for the artist to
                monetize their work. Art NFTs are the markets' most valuable and
                high-tier assets. Some of them even spent more than millions of
                dollars in crypto space. These NFTs are collected for many
                reasons, and also considered as an investment.
              </p>
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
                href="#newsletter-form-sec"
                className="nectar-button medium regular accent-color regular-button nec-btn"
              >
                <span>Talk with our Experts</span>
              </a>
            </div>{" "} */}
            <div className="d-flex justify-content-center  ">
              <Button btnContent="Talk with our Experts" />
            </div>
          </div>
        </div>
      </div>
    </SecFive>
  );
};

export default Sec5;
