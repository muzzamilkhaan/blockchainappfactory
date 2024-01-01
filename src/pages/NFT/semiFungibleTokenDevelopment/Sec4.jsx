import React from "react";
import { SecFour } from "./semiFungibleTokenDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <section className="common_spacing">
        <div className="container">
          <div className="row">
            <H2 className="sec_tit underline text-center">
              Uses of Semi-fungible Token
            </H2>{" "}
          </div>
          <div className="row mt20">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven">
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className=""
                      data-src="images/semi-fungible-token-development/icons/01.webp"
                      src="https://www.blockchainappfactory.com/images/semi-fungible-token-development/icons/01.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content">
                  <h4>In-game Assets</h4>
                  <p>
                    SFT development for blockchain games can offer semi-fungible
                    tokens with utilities that make them work as currency and
                    assets such as weapons.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven">
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className=""
                      data-src="images/semi-fungible-token-development/icons/02.webp"
                      src="https://www.blockchainappfactory.com/images/semi-fungible-token-development/icons/02.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content">
                  <h4>Event Tickets</h4>
                  <p>
                    With ticketing becoming digital, semi-fungible tokens can be
                    used as redeemable tickets before an event and collectibles
                    after the event.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven">
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className=""
                      data-src="images/semi-fungible-token-development/icons/03.webp"
                      src="https://www.blockchainappfactory.com/images/semi-fungible-token-development/icons/03.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content">
                  <h4>Voucher Coupons</h4>
                  <p>
                    Semi-fungible tokens here act as the same, with tokens
                    exchangeable before redemption for an offer/gift and
                    non-fungible collectibles after redeeming.
                  </p>
                </div>
              </div>
            </div>
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
          </div>
          {/* <div className="contentall" align="center"></div> */}
        </div>
      </section>
    </SecFour>
  );
};

export default Sec4;
