import React from "react";
import { SecFour } from "./nftAggregatorMarketplaceDevelopmentComp";
import { Button } from "../../../components";
const Sec4 = () => {
  return (
    <SecFour>
      <div
        id="ret-inv"
        className="common_spacing"
        style={{
          backgroundImage: "linear-gradient( 311deg , #4c0673 0%, #020e28)",
        }}
        // style="background-image: linear-gradient( 311deg , #4c0673 0%, #020e28);"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h2 className="text-white h2">
                Join Forces with Our Professionals to Build a Novel NFT
                Marketplace Aggregator!{" "}
              </h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text-center">
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
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
