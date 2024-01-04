import React from "react";
import { SecTen } from "./p2eNftGameDevelopmentComp";
import { H2 } from "../../../components";

const Sec10 = () => {
  return (
    <SecTen>
      <div className="common_spacing">
        <div className="container">
          <div className="sec_tit mb20 text-center">
            <div className="section-title underline mb20 font_wei text-dark">
              <H2> User Perks of P2E NFT Game </H2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-gamepad"></i>
                  </span>
                </div>
                <h3 className="title">Income-Generating Model</h3>
                <p className="description">
                  P2E NFT games will keep the gamers engaged by generating a
                  good income stream. Popular games such as Axie Infinity have
                  proved that it is a viable path for gamers to reap good
                  returns.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox red">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-list-ol"></i>
                  </span>
                </div>
                <h3 className="title">Asset Transparency</h3>
                <p className="description">
                  One of the significant perks of this gaming model is that the
                  scarcity of the assets (NFTs) will be transparent and even
                  developers cannot manipulate the numbers.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox blue">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-chain-broken"></i>
                  </span>
                </div>
                <h3 className="title">Multi-Chain NFTs</h3>
                <p className="description">
                  Users can take the game assets across various blockchain
                  networks to meet their requirements.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox green">
                <div className="service-icon">
                  <span>
                    <i className="fa fa fa-credit-card"></i>
                  </span>
                </div>
                <h3 className="title">Multiple Payment Methods</h3>
                <p className="description">
                  Our development services will provide your users with flexible
                  payment options, where they can use both fiat and crypto for
                  purchasing the assets.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox green">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <h3 className="title">Immutable Ownership</h3>
                <p className="description">
                  Since the game assets are tokenized into NFTs, it provides
                  immutable ownership rights for the asset holders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecTen>
  );
};

export default Sec10;
