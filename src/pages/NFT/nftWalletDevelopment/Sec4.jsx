import React from "react";
import { SecFour } from "./nftWalletDevelopmentComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="col-lg-6">
            <div className="section-title text-left underline">
              <div className="sec_tit">
                <H2> NFT wallets - Prop to Uniqueness</H2>
              </div>
            </div>
            <p className="mt10 mb10 text-justify">
              The NFT wallets are no different from the typical wallets, and the
              major difference is their ability to support the non-fungibility
              and to act based on the characteristics of the NFT wallets. Here
              the potential of the NFT wallets can't be undermined. To be
              precise, NFT wallets contribute a lot by taking the NFTs and
              selling them peer-2-peer without any issues.{" "}
            </p>
            <p className="mt10 mb10 text-justify">
              The Need for exclusive NFT wallets is highly increasing, and
              people are starting to search for NFT wallets rather than a common
              wallet that has NFT support. Though there are many in the market,
              the lack of an exclusive one is still a lack. And our development
              team has made extraordinary progress and carved an excellent,
              fully responsive NFT wallet exclusively for handling the NFTs.{" "}
            </p>
          </div>
          <div className="col-lg-6">
            {" "}
            <img
              src="https://www.blockchainappfactory.com/images/nft_wallet/img_2.webp"
              alt="NFT Wallet Development"
              title="NFT Wallets"
            />{" "}
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
