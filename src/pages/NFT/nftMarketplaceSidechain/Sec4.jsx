import React from "react";
import { SecFour } from "./nftMarketplaceSidechainComp";
import { Button } from "../../../components/index";
const Sec4 = () => {
  return (
    <SecFour>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <h2>NFT Development in Sidechain</h2>
            </div>
          </div>
          <p className="mt10 text-center para">
            The NFT is one of the major reasons for the high surge in the crypto
            space.The number of people who tend to buy NFTs has been increasing
            largely in recent times. Ethereum is considered to be the best
            blockchain that serves stability and reliability. To validate the
            huge transaction queue and to provide a fast transaction rate,
            Ethereum brought in its Sidechain. And this Sidechain can be used by
            the people who need to enhance the validation time and transaction
            speed in the crypto space.{" "}
          </p>
          {/* <div className="text-center">
            <div className="cta_mine">
              <a
                href="#newsletter-form-sec"
                className="nectar-button medium regular accent-color regular-button nec-btn"
              >
                <span>Talk with our Experts</span>
              </a>
            </div>{" "}
          </div> */}
          <div className="d-flex justify-content-center">
            <Button btnContent="Talk with our Experts" />
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
