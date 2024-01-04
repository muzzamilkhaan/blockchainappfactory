import React from "react";
import { SecEleven } from "./p2eNftGameDevelopmentComp";
import { H2 } from "../../../components";

const Sec11 = () => {
  return (
    <SecEleven>
      <section className="space-pt bg-dark-half-md tech-padding teck">
        <div className="container">
          <div className="row justify-content-md-center text-center">
            <div className="section-title text-center ">
              <div className="common_h3 text-white">
                <H2 style={{ color: "#fff" }}>
                  {" "}
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
                      src="https://www.blockchainappfactory.com/images/p2e/bsc.webp"
                      alt=""
                    />{" "}
                  </div>{" "}
                  <a href="#" className="category-title">
                    BSC
                  </a>{" "}
                </div>
                <div className="category-item aos-item">
                  <div className="category-icon">
                    {" "}
                    <img
                      className="img-fuild"
                      style={{ height: 40 }}
                      src="https://www.blockchainappfactory.com/images/p2e/cardano_ada-512.webp"
                      alt=""
                    />{" "}
                  </div>{" "}
                  <a href="#" className="category-title">
                    Cardano
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
                      src="https://www.blockchainappfactory.com/images/p2e/Solana_logo.webp"
                      alt=""
                    />{" "}
                  </div>{" "}
                  <a href="#" className="category-title">
                    Solana
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecEleven>
  );
};

export default Sec11;
