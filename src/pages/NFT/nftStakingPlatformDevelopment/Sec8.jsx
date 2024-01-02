import React from "react";
import { SecEight } from "./nft-staking-platform-developmentComp";
import { H2, Button } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center underline para">
            <div className="sec_tit">
              <H2> Staking Platform With - Blockchain App factory </H2>
            </div>
          </div>
          <p className="mt10 text-center para">
            Engage with us to develop your own NFT staking platform. We, the
            Blockchain App Factory, are recognized as one of the best
            development firms with a premium standardized development process.
            Our NFT staking platform is the most stable and reliable one in the
            market. If you need to be in the NFTs next wave of fortune, avail of
            our NFT staking platform development services soon.{" "}
          </p>
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
    </SecEight>
  );
};

export default Sec8;
