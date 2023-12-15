import React from "react";
import { SecFour } from "./nftArtMarketplaceDevelopmentComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="row mt30 mb30">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              <div
              //   itemscope="" itemtype="https://schema.org/ImageObject"
              >
                <meta
                  //   itemprop="name"
                  content="NFT Art Marketplace Development"
                />
                <img
                  className=""
                  data-src="https://www.blockchainappfactory.com/images/art/img_art.webp"
                  alt="Characteristics of NFT"
                  title="NFT - Characteristics"
                  //   itemprop="contentUrl"
                  src="https://www.blockchainappfactory.com/images/art/img_art.webp"
                />
                <meta
                //  itemprop="datePublished" 
                 content="2021-08-31" />
                <meta
                  //   itemprop="description"
                  content="NFT Art Marketplace Development - Launching your own NFT art marketplace will be the best and most wise decision of all. As the NFT space is still looking for the perfect art NFT marketplaces to suffice the surge, this is the best option."
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-left">
              <div className="section-title underline text-left">
                <div className="sec_tit ">
                  <H2> NFT - Characteristics</H2>
                </div>
              </div>
              <p className="text-left mt10">
                Non Fungible Tokens are more unique, and at the same time, they
                are
              </p>
              <ul className="list-ico mt20">
                <li>
                  Every process with the NFTs is cryptographically designed, and
                  the authenticity is also carried out with cryptography.
                </li>
                <li>
                  NFT can be traded in exchange for any crypto tokens or stable
                  coins like USDT and also with fiat currency like USD.
                </li>
                <li>
                  NFTs are indivisible, but they are completely tamper-proof.
                  The ownership information inside NFTs can never be changed.
                </li>
                <li>
                  NFT allows only a single user to own an NFT, and they can't be
                  shared or separated. This helps in keeping the NFT unique.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
