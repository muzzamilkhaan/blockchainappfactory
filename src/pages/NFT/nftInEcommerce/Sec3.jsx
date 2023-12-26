import React from "react";
import { SecThree } from "./nftInEcommerceComp";
import { H2, Button } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing uniq_features gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="section-title underline text-left">
                <div className="sec_tit">
                  <H2> NFT in E-commerce</H2>
                </div>
              </div>
              <p className="mt10 text-justify">
                E-commerce is one such platform with a net worth of trillions of
                dollars. The fusion of the tech’s most utilized platforms and
                the tech’s most potential platform the E-commerce.NFT will have
                a huge impact on the economy and on the way things carry in the
                future. The NFT in E-commerce is the modern economic evolution.
                Powering the E-commerce with NFT will create a boundless or
                limitless opportunity for the E-commerce platform to perform.{" "}
              </p>
              <p className="mt10 text-justify">
                There are many more possibilities, and the NFT trade in the
                E-commerce platform will break the myth behind the NFT. The NFT
                in E-commerce will also have many direct and indirect advantages
                like the Blockchain integration in the E-commerce platform to
                support NFT will increase the security of the E-commerce
                platform.{" "}
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
                <div className="cta_mine1">
                  {/* <a
                    href="#newsletter-form-sec"
                    className="nectar-button medium regular accent-color regular-button nec-btn"
                  >
                    <span>Talk with our Experts</span>
                  </a> */}
                  <div className="d-flex  mobile ">
                    <Button
                      btnContent="Talk with our Experts"
                      to="#newsletter-form-sec"
                    />
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              {" "}
              <img
                data-src="/images/eco/nft-token.webp"
                className="mb10 mt20"
                alt="NFT in E-Commerce"
                title="NFT E-Commerce Platform"
                src="https://www.blockchainappfactory.com/images/eco/nft-token.webp"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
