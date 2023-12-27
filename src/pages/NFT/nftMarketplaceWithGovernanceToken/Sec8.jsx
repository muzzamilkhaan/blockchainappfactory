import React from "react";
import { SecEight } from "./nftMarketplaceWithGovernanceTokenComp";
import { H2, Button } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center underline para">
            <div className="sec_tit">
              <H2 style={{ color: "#333333" }}>
                Blockchain App factory in Governance token-based NFT Marketplace
                Creation
              </H2>
            </div>
          </div>
          <p className="mt10 text-center para" style={{ color: "#555555" }}>
            Crypto space has been showing varied ups and downs, and its
            instances are making a huge revolution in the market. To keep up the
            pace and at the same time to stay in the top position as Crypto
            development pioneers, “Blockchain App Factory'' has made immense
            efforts. The major cause to pioneership our team of professionals,
            who develop, test, and analyze the market. Every one of our moves is
            made focusing on the betterment of crypto space - the people behind
            the crypto space. Our governance-based NFT marketplace is another
            example of our concern towards the market. This community-driven NFT
            marketplace will establish a new standard in the crypto market. Get
            on board with us to stay pioneers as we do.
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
            </div>
          </div>
        </div>
      </div>
    </SecEight>
  );
};

export default Sec8;
