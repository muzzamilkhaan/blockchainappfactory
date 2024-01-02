import React from "react";
import { SecFive } from "./nft-staking-platform-developmentComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 pull-left">
              {" "}
              <img
                data-src="/images/staking/img_3.webp"
                className="mt10 mb10"
                src="https://www.blockchainappfactory.com/images/staking/img_3.webp"
              />{" "}
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 pull-right">
              <div className="section-title underline text-left">
                <div className="sec_tit mt_40">
                  <div className="mtt30">
                    <H2> DeFi - Ignition NFT staking possible </H2>
                  </div>
                </div>
              </div>
              <p className="mt10 text-left">
                Decentralized Finance is a stronghold of the crypto space, which
                fuels the survival of the crypto and all other subsidiaries
                based on the crypto sphere. Decentralized Finance brought in the
                major change in the centralized and controlled financial
                structure. The DeFi removed the central authority and made
                everything privacy concerned by automating the transaction with
                Smart Contracts. DeFi supports performing lending, borrowing,
                sending and receiving assets, and staking in a decentralized
                medium.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt50">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="section-title underline text-left">
                <div className="sec_tit mt_40">
                  <H2> NFT Staking </H2>
                </div>
              </div>
              <p className="mt10 text-left">
                NFT Staking with the DeFi enhances the progress, where the smart
                contracts are established between the platform and the person
                who tends to stake the asset. These smart contracts has some
                protocols to follow, and violations may lead to serious
                consequences. As the transactions are automated with the DeFi,
                the decentralized structure will ensure the privacy and
                anonymity of the user. NFT staking will also offer various
                monetizing opportunities like incentives, rewards, etc.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              {" "}
              <img
                data-src="/images/staking/img_4.webp"
                className="mt10 mb10"
                src="https://www.blockchainappfactory.com/images/staking/img_4.webp"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </SecFive>
  );
};

export default Sec5;
