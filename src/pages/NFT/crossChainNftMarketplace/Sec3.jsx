import React from "react";
import { SecThree } from "./crossChainNftMarketplaceComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <section className="common_spacing gray_bg ptb-100">
        <div className="container">
          <div className="row">
            <div className="section-title text-center mb30">
              <div className="sec_tit mb20">
                <div className="common_h1 section-title underline">
                  <H2> NFT Marketplace </H2>
                </div>
              </div>
              <p className="text-center para">
                The NFT marketplaces are the space where the numerous NFTs are
                listed after minting for sale or for staking. This NFT
                marketplace acts as a showcase for those NFTs. The user who
                visits the NFT marketplace can interact with the NFT and make a
                trade with them. There are many types of NFT marketplaces in the
                NFT market. They are mainly categorized based on the audience
                and the type of assets they handle. The major famous NFT
                marketplaces are
              </p>
            </div>
          </div>
          <div className="row justify-content-md-center justify-content-sm-center">
            <div className="col-md-6 col-lg-6">
              <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                <div className="card-body">
                  <div className="pb-2">
                    <img
                      className="lazy"
                      data-src="/images/cross_chain/icons/paint-palette.webp"
                      src="https://www.blockchainappfactory.com/images/cross_chain/icons/paint-palette.webp"
                    />{" "}
                  </div>
                  <div className="pt-2 pb-3">
                    <h5>Art NFT Marketplace</h5>
                    <p className="mb-0 para">
                      The Art NFT marketplace is one of the earliest
                      marketplaces, with the largest collection of assets in it.
                      The artist or creators are given the chance of showcasing
                      their works as NFT, which paved the way for recognition of
                      their talents.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                <div className="card-body">
                  <div className="pb-2">
                    <img
                      className="lazy"
                      data-src="/images/cross_chain/icons/musical-note.webp"
                      src="https://www.blockchainappfactory.com/images/cross_chain/icons/musical-note.webp"
                    />{" "}
                  </div>
                  <div className="pt-2 pb-3">
                    <h5>Music NFT Marketplace </h5>
                    <p className="mb-0 para ">
                      The Music NFT marketplace is the space where music of all
                      kinds is being converted into non-fungible tokens. The NFT
                      music can be anything in audio format. A wide range of
                      music is categorized to cover all the aspects of the music
                      industry into NFT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                <div className="card-body">
                  <div className="pb-2">
                    <img
                      className="lazy"
                      data-src="/images/cross_chain/icons/joystick.webp"
                      src="https://www.blockchainappfactory.com/images/cross_chain/icons/joystick.webp"
                    />{" "}
                  </div>
                  <div className="pt-2 pb-3">
                    <h5>Gaming NFT Marketplace</h5>
                    <p className="mb-0 para">
                      The NFT marketplace for gaming assets that contains only
                      gaming collectibles is the Gaming NFT marketplaces. It
                      allows the gamers even to mint their in-game assets to
                      make some revenue out of gaming.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                <div className="card-body">
                  <div className="pb-2">
                    {" "}
                    <img
                      className="lazy"
                      data-src="/images/cross_chain/icons/running.webp"
                      src="https://www.blockchainappfactory.com/images/cross_chain/icons/running.webp"
                    />{" "}
                  </div>
                  <div className="pt-2 pb-3">
                    <h5>Sports-based NFT Marketplace</h5>
                    <p className="mb-0 para">
                      The Sports-based NFT marketplace, where the shorts videos,
                      card collectibles, and many other sports-based assets are
                      being showcased. Sports is one that can influence the
                      emotions of people. The growth rate of the sports market
                      places is very high.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecThree>
  );
};

export default Sec3;
