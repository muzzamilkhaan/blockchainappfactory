import React from "react";
import { SecEight } from "./nftWalletDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <H2> Blockchain App Factory - Leader of crypto advancements </H2>
            </div>
          </div>
          <p className="mt10 mb10 text-center">
            The Blockchain App Factory, we make better advancements in the
            crypto space. The best developers on the border tend to provide
            greater support to the growth of the crypto space. NFT wallets,
            where they need and demands are very high, but the lack of potential
            product created a setback. Blockchain App Factory designs and builds
            an NFT wallet that can create an ecosystem for the users to engage.
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
