import React from "react";
import { SecTen } from "./nftForRealeStateComp";
import { H2 } from "../../../components";

const Sec10 = () => {
  return (
    <SecTen>
      <section className="cta-rewamped ctaRewamped gray_bg">
        <div className="container">
          <div className="row row-flexible-center">
            <div className="col-md-12 col-sm-12 col-xs-12 cta-rewamped-texter text-center">
              <div className="mb30">
                <H2 style={{ color: "#fff" }}>
                  {" "}
                  “There may come a time where you walk past a house and can
                  bought it on your way back”{" "}
                </H2>
              </div>{" "}
            </div>
            <div className="text-center ">
              <a
                className="nectar-button medium regular accent-color regular-button cta-sec cta-sec1"
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
                className="nectar-button medium regular accent-color regular-button cta-sec cta-sec1"
              >
                <span>Talk with our Experts</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SecTen>
  );
};

export default Sec10;
