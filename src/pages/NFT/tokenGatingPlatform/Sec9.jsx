import React from "react";
import { SecNine } from "./tokenGatingPlatformComp";
import { H2, H3, Button } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <div id="our_services" className="defisec gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="common_h3 title-th sec_tit">
              <H2>
                Token-Gated e-Commerce Platform Development for Web3 Enterprises{" "}
              </H2>
            </div>
            <hr />
            <p>
              The rise of retailers in the Web3 space has accelerated the need
              for quality token-gated e-commerce platform development, and we
              are here with our expertise. Our professionals can aid you in
              launching token gating applications with sublime accessibility and
              easy experiences.
            </p>
          </div>
          <div className="grids">
            <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
              <div className="feature-box-3">
                <div className="icon">
                  {" "}
                  <img
                    data-src="images/token-gating-platform/icons/e-commerce.webp"
                    alt=""
                    className=""
                    width="45px;"
                    src="https://www.blockchainappfactory.com/images/token-gating-platform/icons/e-commerce.webp"
                  />{" "}
                </div>
                <H3
                  className="feature-title common_h4"
                  style={{ color: " #47b475" }}
                >
                  E-Commerce Store Creation
                </H3>
                <p className="feature-desc mb0" style={{ color: "#000" }}>
                  We can build an online store representing your venture
                  according to the niche by incorporating necessary
                  high-className features and branding elements.{" "}
                </p>
              </div>
            </div>
            <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
              <div className="feature-box-3">
                <div className="icon">
                  <img
                    data-src="images/token-gating-platform/icons/tokens.webp"
                    alt=""
                    className=""
                    width="45px;"
                    src="https://www.blockchainappfactory.com/images/token-gating-platform/icons/tokens.webp"
                  />{" "}
                </div>
                <H3
                  className="feature-title common_h4"
                  style={{ color: " #47b475" }}
                >
                  Token Gate Development
                </H3>
                <p className="feature-desc mb0" style={{ color: "#000" }}>
                  {" "}
                  We develop token gates that assist you with restricting access
                  to your platform by scanning and authenticating relevant
                  blockchain-based tokens.{" "}
                </p>
              </div>
            </div>
            <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
              <div className="feature-box-3">
                <div className="icon">
                  <img
                    data-src="images/token-gating-platform/icons/products.svg"
                    alt=""
                    className=""
                    width="45px;"
                    src="https://www.blockchainappfactory.com/images/token-gating-platform/icons/products.svg"
                  />
                </div>
                <H3
                  className="feature-title common_h4"
                  style={{ color: " #47b475" }}
                >
                  Product Generation
                </H3>
                <p className="feature-desc mb0" style={{ color: "#000" }}>
                  We can aid you with setting up systems that can generate
                  on-demand virtual products for your customers that can let you
                  focus on market outreach.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center cta_mine mt40 txt">
            {/* <a
              className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
              target="_blank"
              href="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
              data-color-override="false"
              data-hover-color-override="false"
              data-hover-text-color-override="#fff"
            >
              <span>Connect with Whatsapp</span>
            </a>{" "}
            <a
              href="#newsletter-form-sec"
              className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
            >
              <span>Talk with our Experts</span>
            </a>{" "} */}
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
    </SecNine>
  );
};

export default Sec9;
