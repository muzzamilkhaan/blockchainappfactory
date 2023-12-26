import React from "react";
import { SecOne } from "./nftTicketingMarketplaceComp";

export default function Sec1() {
  return (
    <SecOne>
      <div className="banner my_banner">
        <div className="banner-overlay"></div>
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="contentall">
                  <div className="">
                    <div className="ban_tirt">
                      <h1>NFT ticketing platform Development</h1>{" "}
                    </div>
                    <p className="para">
                      NFTs can back event tickets to power event managers and
                      artists on secondary sales. Fans can have an immersive
                      experience before, during, and after the event.
                    </p>
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
                    <div className="cta_mine">
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
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12"></div>
            </div>
          </div>
        </div>
      </div>
    </SecOne>
  );
}
