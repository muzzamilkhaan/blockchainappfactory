import React from "react";
import { SecThree } from "./nftMarketplaceSidechainComp";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing gray_bg uniq_features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center pull-left">
              <img
                data-src="/images/sidechain/img_1.webp"
                className="mb10"
                alt="NFT Development in Sidechain"
                title="Blockchains - A Settler Of The Digital Era"
                src="https://www.blockchainappfactory.com/images/sidechain/img_1.webp"
              />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 pull-right">
              <div className="section-title underline text-left">
                <div className="sec_tit">
                  <h2> Blockchains - A settler of the Digital Era</h2>
                </div>
              </div>
              <p className="mt10 text-left">
                The Digital Era can be divided into before and after blockchain
                emergence; their contribution in the digital space has made much
                betterment. DeFi and the crypto space is the best example of
                Blockchain’s Efficiency. DeFi made remarkable progress in the
                finance space, and it stands as an alternative to the standard
                traditional financial services. The crypto space does not need
                any introductions as they can be witnessed all over the internet
                and other digital platforms. Blockchain is a digital ledger with
                a decentralized structure that holds the complete record of
                everything that happens in the space where it is deployed.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container mt50">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="section-title underline text-left">
                <div className="sec_tit">
                  <h2> Sidechain - Need for a Support</h2>
                </div>
              </div>
              <p className="mt10 text-left">
                Blockchains have the ability to make many complex challenges
                easy with their efficiency, and they made their own name for
                their efficiency. So this makes the blockchain more trustable.
                And eventually, the traffic of the crypto space increased, and
                after the emergence of NFT, the traffic went high. The
                Transactions in the blockchain started increasing very high, and
                the need for validating the transactions is also surging. In the
                mainnet like Ethereum, miners who validate the transactions will
                prioritize based on the gas fee they receive, which makes the
                cost high as the traffic is too high. Here the need for
                enhancement in scalability becomes a major need of the crypto
                space. And Ethereum brings in the layer two protocol or
                Sidechain to suffice the lack that the main chain has.{" "}
              </p>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              <img
                data-src="/images/sidechain/img-side-chain.webp"
                className="mt20 mb10"
                alt="Sidechain - Need For A Support"
                title="Sidechain Support"
                src="https://www.blockchainappfactory.com/images/sidechain/img-side-chain.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
