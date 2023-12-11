import React from "react";
import Button from "../../../components/Button";
import { SecFive } from "./nftMarketPlaceBSCComp";

const Sec5 = () => {
  return (
    <>
      <SecFive>
        <div className="intro_cnt common_spacing ">
          <div className="container">
            <div className="underline text-center">
              <div className="sec_tit">
                <h2>What Is Binance Smart Chain?</h2>{" "}
              </div>
              <hr />{" "}
            </div>
            <div className="row mt40">
              <div className="col-md-6 col-sm-12 col-xs-12 text-center">
                {" "}
                <img
                  className="lazy"
                  data-src="/images/nft-bsc/rough1.webp"
                  alt="What is Binance Smart Chain?"
                  title="Binance Smart Chain NFT Marketplace"
                  src="https://www.blockchainappfactory.com/images/nft-bsc/rough1.webp"
                />{" "}
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <p className="mt10 text-justify">
                  Binance Smart Chain is a blockchain network that is
                  constructed to initiate smart contracts for decentralized
                  applications in the domain. This blockchain functions along
                  with its native blockchain, Binance Chain.
                </p>
                <p>
                  The Binance Smart Chain is highly compatible, it allows users
                  to experience the low transaction processing fee of the
                  Binance Chain and the high smart contract functionality of the
                  Binance Smart Chain. Due to its surplus features, many
                  decentralized applications (DApps) are being built on it. Even
                  NFT marketplaces are being built on Binance Smart Chain, in
                  order to gain high-profit yields.{" "}
                </p>
                {/* <div class="text-left"> */}
                <Button
                  btnContent="Connect with Whatsapp"
                  to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                  target="_blank"
                />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </SecFive>
    </>
  );
};

export default Sec5;
