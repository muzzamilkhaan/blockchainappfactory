import React from "react";
import { SecTen } from "./fractionalNftMarketplaceDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec10 = () => {
  return (
    <SecTen>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <div className="fact font-wei">
                <H2>
                  {" "}
                  Why Blockchain App Factory, In Fractional NFT Development ?{" "}
                </H2>
              </div>
            </div>
          </div>
          <p className="mt10 text-center para fract">
            Our NFT developments and{" "}
            <a href="https://www.blockchainappfactory.com/cryptocurrency-development">
              crypto development
            </a>
            , which are making an extensive influence over the markets, are
            effective evidence of our pioneers in NFT development. With our
            exclusive development team, we make promises that we can fulfill
            100%. We are glad to be the first firm to bring in the initial step
            of NFT markets' revolutionary concept Fractional NFT Marketplace
            development. Never worry about the concepts and development; we
            guide you through all hard processes and assist you in all technical
            errors.
          </p>
          <div className="text-center mt14">
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
            </div>
          </div>
        </div>
      </div>
    </SecTen>
  );
};

export default Sec10;
