import React from "react";
import { SecSix } from "./nftMarketPlaceBSCComp";
const Sec6 = () => {
  return (
    <>
      <SecSix>
        <div className="intro_cnt common_spacing gray_bg">
          <div className="container">
            <div className="section-title underline text-center">
              <div className="sec_tit">
                <h2>
                  {" "}
                  Why Build An NFT Marketplace On Binance Smart Chain Platform?
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 text-center">
                {" "}
                <img
                  className="lazy mar-bot"
                  data-src="/images/nft-bsc/binance.webp"
                  alt="Why build NFT Marketplace on BSC"
                  title="NFT Marketplace Development on BSC"
                  src="https://www.blockchainappfactory.com/images/nft-bsc/binance.webp"
                />
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 text-left">
                <p className="text-left">
                  At the present time, the trading of non-fungible tokens is on
                  a rise. Many distinct NFT marketplaces are developed to trade
                  NFTs. But, all NFT marketplaces impose issues, in order to
                  rectify those issues, blockchain experts have decided to build
                  the marketplace on the Binance Smart Chain platform. The
                  benefits of the BSC NFT platform that sets it apart from the
                  other blockchain platforms are listed below.
                </p>
                <ul className="list-ico mt30">
                  <li>
                    It is a growing blockchain platform that is being supported
                    by Binance decentralized exchange, the premium DEX platform.
                  </li>
                  <li>It charges very low transaction fees.</li>
                  <li>
                    The processing speed of transactions in this blockchain
                    platform is very high.
                  </li>
                  <li>
                    High interoperability, due to its quality cross-chain
                    compatibility feature.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SecSix>
    </>
  );
};

export default Sec6;
