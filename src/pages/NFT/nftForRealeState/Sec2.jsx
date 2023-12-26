import React from "react";
import { SecTwo } from "./nftForRealeStateComp";
import { H2 } from "../../../components";
const Sec2 = () => {
  return (
    <SecTwo>
      <div className="common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit underline">
              <H2> NFT and Real estate- A comprehensive collaboration</H2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <p className="mt10">
                “Imagine if we could buy a piece of land in the form of NFT and
                borrow against that NFT from DeFi at very low interest. Why
                would anyone be willingly going to loan sharks for a mind
                numbingly long paperwork.”
              </p>
              <p>
                NFTs are the most trusted way of owning an asset in this
                digitized world nowadays and the trend for NFTs is continuously
                growing and evolving into the next big thing.As we all know NFTs
                are smart contracts in decentralized nodes which help a specific
                someone to take ownership of his asset for which he/she can
                trade/sell/loan in the futuristic upcoming market platform for a
                huge profit. Scarce or Unique an asset is, up goes its value.
              </p>
              <p>
                NFTs are mingling in every aspect of society, nowadays there is
                a growing trend to collaborate NFTs with the real estate market.
                As technology is crossing the mark of unconventional thoughts,
                virtualization is becoming a parallel world within, which is
                populated with the inconceivable imagination of a person.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="rounded-border mt10"
                src="https://www.blockchainappfactory.com/images/nft_real/real-estate-01.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
