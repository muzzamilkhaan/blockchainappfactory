import React from "react";
import { SecEight } from "./nftInEcommerceComp";
import { H2, Button } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <H2>
                Why Blockchain App Factory for NFT in E-commerce development
              </H2>
            </div>
          </div>
          <p className="mt10 text-center">
            Blockchain Chain App factory, Our brand has an exclusive name in the
            crypto world for development and deployment. And we always stood as
            foreseers of the crypto, which aided us to the height where we
            reside now. Our NFT in E-commerce development is also the effect of
            foreseen prediction, which has the efficiency in emerging as an
            essential of the commoners. Join us now to stay safe and foresee
            your future with affluence.{" "}
          </p>
          <div className="text-center mt10">
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
                  btnContent="Talk with our Experts"
                  to="#newsletter-form-sec"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </SecEight>
  );
};

export default Sec8;
