import React from "react";
import { SecSeven } from "./fractionalNftMarketplaceDevelopmentComp";
import { Button, H2 } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <div className="fact font-wei">
               <H2> Fractional NFT Marketplace - a solution to Liquidity </H2>
              </div>
            </div>
          </div>
          <p className="mt10 text-center para fract">
            The liquidity problem can be solved when an NFT that possesses
            ERC-721 is fractionalized and converted into a Fungible ERC-20. Here
            as mentioned above, the ERC-721 token is locked into a smart
            contract. And the smart contract will split the ERC-721 tokens into
            an ERC-20 token. So if a user buys an ERC-20 token from here, then
            he technically owns a piece of the ERC-721 token. This enables many
            investors to make an investment in Fractional NFT. Since it is
            fractionalized and the values are very low, this fractionalized NFT
            will be bought for instant sale, which will eventually increase the
            liquidity.
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
    </SecSeven>
  );
};

export default Sec7;
