import React from "react";
import { SecSix } from "./tokenGatingPlatformComp";
import { Button, H2 } from "../../../components";
const Sec6 = () => {
  return (
    <SecSix>
      <div
        id="ret-inv"
        className="common_spacing"
        style={{
          backgroundImage: "linear-gradient( 311deg , #32028d 0%, #020e28)",
        }}
        // style="background-image: linear-gradient( 311deg , #32028d 0%, #020e28);"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <H2 className="text-white h2" >
                Planning to Build a Token Gating Platform Supporting Your Web3
                Venture??
              </H2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                <div className="d-flex justify-content-center flex-wrap gap-3 mt-30">
                  <Button
                    btnContent="Connect with Whatsapp"
                    to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                    target="_blank"
                  />
                  <Button btnContent="Talk with our Experts" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecSix>
  );
};

export default Sec6;
