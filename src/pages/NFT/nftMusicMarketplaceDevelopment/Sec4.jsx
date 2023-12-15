import React from "react";
import { SecFour } from "./nftMusicMarketplaceDevelopmentComp";
import { H2, H3 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <section className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <div className="section-title underline text-left">
                  <div className="sec_tit">
                    <H2> How do Music NFTs penetrate the Marketplace? </H2>
                  </div>
                </div>
                <p style={{ color: "#555555" }}>
                  Marketplace allows creators to mint their NFTs and lists to
                  gain the visibility of the audience. These marketplaces will
                  have a high reputation in the investor's community and the NFT
                  collectors will engage the marketplace often to check the
                  trend and acquire their unique NFTs. The platform allows the
                  users to bid for the NFTs and own it at a reasonable price
                  which may offer exceptional value and fortune for the NFT
                  creators.
                </p>
                <p style={{ color: "#555555" }}>
                  NFTs can be offered in limited numbers as a marketing trick to
                  create supply and demand, which further results in a high
                  asking price. These tokens can be traded like a stock on a
                  similar platform yielding a high reward reap for fans. Markets
                  can come with DIY functions in which starting price, issuance,
                  and minting NFTs can be done solely by the artist.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="arrow">
                <H3 className="re-font">Redeemable NFTs:</H3>
                <p style={{ color: "#555555" }}>
                  When it comes to Music, our marketplace introduces a unique
                  feature called{" "}
                  <strong>
                    <a
                      className="link-col"
                      href="https://www.blockchainappfactory.com/nft-for-physical-assets"
                    >
                      {" "}
                      physically redeemable NFTs,{" "}
                    </a>
                  </strong>
                  which allows musicians to create their NFTs and sell their
                  albums through NFTs. The platform allows the user to redeem
                  the purchased NFT and own the albums; this builds the
                  circulation and demand for the NFTs, which allows the artist
                  to outreach their creations effectively to the global market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecFour>
  );
};

export default Sec4;
