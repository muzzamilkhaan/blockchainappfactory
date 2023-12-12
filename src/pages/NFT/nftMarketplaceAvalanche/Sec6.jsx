import React from "react";
import { SecSix } from "./nftMarketplaceAvalancheComp";
import Button from "../../../components/Button";

const Sec6 = () => {
  return (
    <SecSix>
      <div className="common_spacing gray_bg solid">
        <div className="container">
          <div className="row">
            <div className="cta_1 pt80 pb30">
              <h3 className="text-center ">
                Launch Your Marketplace on the Ever-efficient Avalanche
                Blockchain Now!
              </h3>
              <div className="text-center pt40 d-flex justify-content-center">
                <Button
                  btnContent="Talk with our Experts"
                  to="#newsletter-form-sec"
                />
              </div>
            </div>
          </div>
        </div>

        <footer className="footer_dark">
          <div className="waveWrapper">
            <div className="footer-wave waveTop"></div>
          </div>
        </footer>
      </div>
    </SecSix>
  );
};

export default Sec6;
