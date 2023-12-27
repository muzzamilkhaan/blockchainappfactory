import React from "react";
import { SecSeven } from "./crossChainNftMarketplaceComp";
import { Button, H2 } from "../../../components";
const Sec7 = () => {
  return (
    <SecSeven>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center1 underline1 para">
            <div className="sec_tit">
              <H2 style={{ color: "#444444" }}>
                Why us ,In the NFT Marketplace Development with Cross-chain
                Compatibility{" "}
              </H2>
            </div>
          </div>
          <p className="mt10 text-center para" style={{ color: "#444444" }}>
            Our Brand, “Blockchain App factory” has created huge respect for
            itself in the entire crypto space. With the long-lasting products
            and advancements in the development, we are in the position to lead
            the crypto developments. Our NFT marketplace development with
            cross-chain compatibility is the next step in making the NFT space a
            more supportive one. If you are into the development of the
            Cross-Chain NFT marketplace, then join us today to make a greater
            market tomorrow.{" "}
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
            <div className="cta_mine">
              <div className="d-flex justify-content-center flex-wrap gap-3 ">
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
            </div>{" "}
          </div>
        </div>
      </div>
    </SecSeven>
  );
};

export default Sec7;
