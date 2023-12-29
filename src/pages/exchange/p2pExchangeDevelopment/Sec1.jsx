import React from "react";
import { SecOne } from "./p2pExchangeDevComp";
import { Button } from "../../../components";
const Sec1 = () => {
  return (
    <SecOne>
      <div className="banner">
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="contental">
                  <h1>P2P Crypto Exchange Development Company</h1>
                  <p>Best White Label P2P Crypto Exchange Software</p>
                  <div className="d-flex justify-content-start flex-wrap gap-3 ">
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
                  <div className="d-flex">
                    <Button btnContent=" View Demo" to="#demo" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
                <div className="p2b_ban">
                  <img
                    src="https://www.blockchainappfactory.com/images/p2p/p2p_banner.webp"
                    alt="Develop your P2P Exchange Platform Securely"
                    title="P2P Exchange Development Company"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default Sec1;
