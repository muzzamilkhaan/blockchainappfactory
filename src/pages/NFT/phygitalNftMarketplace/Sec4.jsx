import React from "react";
import { SecFour } from "./phygitalNftMarketplaceComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="intro_cnt common_spacing ">
        <div className="container">
          <div className="col-lg-12 text-center">
            <div className="section-title text-center underline">
              <div className="sec_tit">
               <H2> How Does It Work?</H2>
              </div>
            </div>
            <p className="mt10 mb10 text-justify">
              An NFT marketplace for physical (rather, phygital) collectibles
              works similarly to any other NFT marketplace, with an added
              process of providing your delivery location or preferred delivery
              outlet. Even though getting NFTs and physical items is more of an
              authentication process, phygital NFTs have wider visions. These
              assets strive to respect loyal customers of a brand by using NFTs
              as access passes to exclusive events and airdrops.
            </p>
            <p className="mt10 mb10 text-justify">
              The working process behind a phygital NFT marketplace starts with
              users creating their accounts and linking their crypto wallets.
              Then, they can search through the platform and buy their phygital
              assets through bidding or direct payments. Afterward, they should
              get the physical item and gain access to the NFTs that back it.
              The converse can also be true, where a user can get the NFT and
              use it to get the physical property. They can then own the NFT and
              the physical product and use them together. In some cases, they
              can even trade the NFTs secondarily without losing the physical
              item.
            </p>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
