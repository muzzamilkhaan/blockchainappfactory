import React from "react";
import { SecThree } from "./nftForPhysicalAssetsComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              <img
                className="rounded-corners"
                src="https://www.blockchainappfactory.com/images/physical/physically-redeemable.webp"
                alt="Physically-Redeemable NFT Marketplace"
                title="Physically-Redeemable NFT Marketplace"
              />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-left mt20">
              <div className="section-title text-left underline">
                <div className="sec_tit">
                  <H2> What is a physically redeemable NFT Token ?</H2>
                </div>
              </div>
              <p className="text-justify mt40">
                Physical asset NFTs are real assets in the form of NFTs. These
                NFTs can be easily redeemed on the NFT platform for physical
                assets. They inherit properties such as rarity, royalty, and
                scarcity for both their physical &amp; real-world assets.
                Moreover, it is said to be proof of authentication and ownership
                to record all the transactions related to NFTs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
