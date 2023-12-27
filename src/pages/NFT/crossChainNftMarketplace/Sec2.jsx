import React from "react";
import { SecTwo } from "./crossChainNftMarketplaceComp";
import { H2, Button } from "../../../components";

const Sec2 = () => {
  return (
    <SecTwo>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <H2 style={{ color: "#444444" }}>
                {" "}
                Cross-Chain NFT Marketplace Development Services
              </H2>
            </div>
          </div>
          <p className="mt10 text-center para">
            The long journey of the NFT can’t be easily ignored, NFT is
            utilizing every day, and the growth of the NFT market is
            significantly high very easily. NFT is now more than the instance of
            the crypto market, and it has its own market where the NFT
            developments are rising in a very high rage. The development of NFTs
            like NFT marketplaces is emerging as an independent market making
            billions of dollars. The trustability over the NFT is also growing
            widely among the people of the crypto space. People from all over
            the globe are minting their own NFT in the crypto market. The NFT
            has the ability to blend in easily. They can use more advanced
            blockchain-based tech on their daily survival because of its
            blend-in ability.
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
    </SecTwo>
  );
};

export default Sec2;
