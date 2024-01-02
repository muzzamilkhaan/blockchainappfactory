import React from "react";
import { SecThree } from "./nftStreamingPlatformDevelopmentSolutionsComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <section className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              {" "}
              <img
                className="lazy"
                data-src="/images/nfts/3.webp"
                alt="NFT Video Streaming Platform"
                title="Video Streaming Platform Development"
                src="https://www.blockchainappfactory.com/images/nfts/3.webp"
              />{" "}
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-left">
              <div className="sec_tit underline text-left">
                {" "}
                <H2> NFT’s role in the Streaming Platform </H2>
              </div>
              <p className="text-justify mt20">
                Non-fungible tokens are the digital representation of unique
                assets that gain intrinsic value for your digital assets.
                Content creators create their videos and mint into NFTs for its
                unique token standards and exclusive features. These videos can
                be purchased or subscribed by the users to watch the video, and
                also, the users can own the complete ownership of the purchased
                video. Exclusive videos of celebrities like rare moments, funny
                moments can be sold for a huge price on the platform.
              </p>
              <p className="text-justify mt20">
                The platform has the possibility to evolve as a marketplace for
                selling unique video clips. Few marketplaces and auction
                platforms in the existing markets also allow to sell and
                purchase those NFT videos. These NFTs can be sold in the open
                market and other markets for a huge sum. Also some exchange
                platforms accept these NFTs as collateral in exchange for fiat
                or other cryptocurrencies for its intrinsic value.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right">
              <div className="sec_tit underline mt-40">
                {" "}
                <H2> NFT Marketplace for Celebrities </H2>
              </div>
              <p>
                In recent times the celebrities are more interested in NFT and
                many celebrities of various professions are making their debut
                into the NFT market by launching their own NFTs. Celebrities
                have a huge portion to hold on to the NFT market’s popularity.
                NFT marketplace exclusively for celebrities will be a great
                service, where it will have more advantages than NFT
                marketplaces of other types. NFT marketplace for celebrities
                will have a wide opening and the brand establishment will have a
                huge role to play in this marketplace.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center pull-right">
              {" "}
              <img src="https://www.blockchainappfactory.com/images/nft/28.webp" />{" "}
            </div>
          </div>
        </div>
      </section>
    </SecThree>
  );
};

export default Sec3;
