import React from "react";
import { SecFiveTeen } from "./nftMarketplaceForCelebritiesComp";
import { H2 } from "../../../components";

const Sec15 = () => {
  return (
    <SecFiveTeen>
      <div className="common_spacing gray_bg solid">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <div className="section-title underline mb20 text-center font-wei">
                <H2> Technology Stack for your Marketplace </H2>
              </div>
              <p className="text-center">
                As a reputable blockchain development company, we provide you
                with a plethora of blockchain networks to develop your
                marketplace. It includes,
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 col-md-offset-1 col-sm-4 col-xs-6">
              <div className="features-box">
                {" "}
                <img
                  className=""
                  data-src="/images/cele/1.webp"
                  alt="Ethereum"
                  src="https://www.blockchainappfactory.com/images/cele/1.webp"
                />
                <h4>Ethereum</h4>{" "}
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="features-box">
                {" "}
                <img
                  className=""
                  data-src="/images/cele/2.webp"
                  alt="Binance Smart Chain"
                  src="https://www.blockchainappfactory.com/images/cele/2.webp"
                />
                <h4>Binance Smart Chain</h4>{" "}
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="features-box">
                {" "}
                <img
                  className=""
                  data-src="/images/cele/3.webp"
                  alt="Polygon"
                  src="https://www.blockchainappfactory.com/images/cele/3.webp"
                />
                <h4>Polygon</h4>{" "}
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="features-box">
                {" "}
                <img
                  className=""
                  data-src="/images/cele/4.webp"
                  alt="Cardano"
                  src="https://www.blockchainappfactory.com/images/cele/4.webp"
                />
                <h4>Cardano</h4>{" "}
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="features-box">
                {" "}
                <img
                  className=""
                  data-src="/images/cele/5.webp"
                  alt="Tezos"
                  src="https://www.blockchainappfactory.com/images/cele/5.webp"
                />
                <h4>Tezos</h4>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFiveTeen>
  );
};

export default Sec15;
