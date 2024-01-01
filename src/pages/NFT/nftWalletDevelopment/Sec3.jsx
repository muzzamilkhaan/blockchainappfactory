import React from "react";
import { SecThree } from "./nftWalletDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <H2>Wallets - Need &amp; Dominance </H2>
            </div>
          </div>
          <div className="col-lg-12">
            <p className="mt10 mb10 text-center">
              The wallets are the primary key for the transactions and all the
              things in the crypto space which clearly embrace the efficiency of
              the market. The wallets store the tokens, and they transfer the
              tokens to the desired addresses without any issue with the help of
              smart contracts. There are various types of wallets in the crypto
              market. The most utilized ones are decentralized wallets. Here the
              wallets are not only the key to making transactions, and they
              contribute a lot to the advancement of technologies. For instance,
              wallets, validations, and other important services are being aided
              in the crypto market with ease.{" "}
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3 ">
              <Button
                btnContent="Talk with our Experts"
                to="#newsletter-form-sec"
              />
            </div>
          </div>
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
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
