import React from "react";
import { SecSeven } from "./nftConsultingComp";
import { H2 } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <section className="space-pt bg-dark-half-md tech-padding teck">
        <div className="container">
          <div className="row justify-content-md-center text-center">
            <div className="section-title text-center ">
              <div className="common_h3 text-white">
                <H2 style={{ color: "#fff" }}>
                  Top Blockchains for Launching NFT projects{" "}
                </H2>
              </div>
              <hr />{" "}
            </div>
          </div>
          <div className="row mt50">
            <div className="col-sm-12">
              <div
                className="category category-grid-style-02 aos-item aos-init"
                data-aos="fade-up"
                data-aos-duration={500}
              >
                <div className="category-item aos-item">
                  <div className="category-icon">
                    {" "}
                    <img
                      className="img-fuild"
                      style={{ height: 40 }}
                      src="https://www.blockchainappfactory.com/images/home-new/eth.webp"
                      alt=""
                    />{" "}
                  </div>{" "}
                  <a href="#" className="category-title">
                    Ethereum
                  </a>{" "}
                </div>
                <div className="category-item aos-item">
                  <div className="category-icon">
                    {" "}
                    <img
                      className="img-fuild"
                      style={{ height: 40 }}
                      src="https://www.blockchainappfactory.com/images/home-new/polygon.webp"
                      alt=""
                    />{" "}
                  </div>{" "}
                  <a href="#" className="category-title">
                    Polygon
                  </a>{" "}
                </div>
                <div className="category-item aos-item">
                  <div className="category-icon">
                    {" "}
                    <img
                      className="img-fuild"
                      style={{ height: 40 }}
                      src="https://www.blockchainappfactory.com/images/home-new/binance-logo.webp"
                      alt=""
                    />{" "}
                  </div>{" "}
                  <a href="#" className="category-title">
                    BNB Chain{" "}
                  </a>{" "}
                </div>
                <div className="category-item aos-item">
                  <div className="category-icon">
                    {" "}
                    <img
                      className="img-fuild"
                      style={{ height: 40 }}
                      src="https://www.blockchainappfactory.com/images/home-new/avalanche-logo.webp"
                      alt=""
                    />{" "}
                  </div>{" "}
                  <a href="#" className="category-title">
                    Avalanche
                  </a>{" "}
                </div>
                <div className="category-item aos-item">
                  <div className="category-icon">
                    {" "}
                    <img
                      className="img-fuild"
                      style={{ height: 40 }}
                      src="https://www.blockchainappfactory.com/images/nft-consulting/shardeum.webp"
                      alt=""
                    />{" "}
                  </div>{" "}
                  <a href="#" className="category-title">
                    Shardeum
                  </a>{" "}
                </div>
                <div className="category-item aos-item">
                  <div className="category-icon">
                    {" "}
                    <img
                      className="img-fuild"
                      style={{ height: 40 }}
                      src="https://www.blockchainappfactory.com/images/home-new/harmony-logo.webp"
                      alt=""
                    />{" "}
                  </div>{" "}
                  <a href="#" className="category-title">
                    Harmony
                  </a>{" "}
                </div>
                <div className="category-item aos-item">
                  <div className="category-icon">
                    {" "}
                    <img
                      className="img-fuild"
                      style={{ height: 40 }}
                      src="https://www.blockchainappfactory.com/images/nft-consulting/tron.webp"
                      alt=""
                    />{" "}
                  </div>{" "}
                  <a href="#" className="category-title">
                    Tron
                  </a>{" "}
                </div>
                <div className="category-item aos-item">
                  <div className="category-icon">
                    {" "}
                    <img
                      className="img-fuild"
                      style={{ height: 40 }}
                      src="https://www.blockchainappfactory.com/images/nft-consulting/t3.webp"
                      alt=""
                    />{" "}
                  </div>{" "}
                  <a href="#" className="category-title">
                    Tezos
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecSeven>
  );
};

export default Sec7;
