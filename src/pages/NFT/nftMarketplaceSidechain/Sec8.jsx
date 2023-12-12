import React from "react";
import { SecEight } from "./nftMarketplaceSidechainComp";
import { Button } from "../../../components/index";
const Sec8 = () => {
  return (
    <SecEight>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center underline para">
            <div className="sec_tit">
              <h2>
                Why Blockchain App Factory in NFT development with Sidechain?
              </h2>
            </div>
          </div>
          <p className="mt10 text-center para">
            We know how the market runs, and everyone exhales and inhales of the
            NFT market exactly matching our prediction.The importance of the NFT
            Marketplace or any other development in the Sidechain is well known.
            To provide a very fast and stable deployment, our highly skilled
            development team will take care of the very smooth and fast
            deployment of NFT development in Sidechain. Ring us quickly, and we
            will make you never regret the decision.{" "}
          </p>
          <div className="text-center">
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <Button
                btnContent="Connect with Whatsapp"
                to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                target="_blank"
              />
              <Button btnContent="Talk with our Experts" />
            </div>
          </div>
        </div>
      </div>
    </SecEight>
  );
};

export default Sec8;
