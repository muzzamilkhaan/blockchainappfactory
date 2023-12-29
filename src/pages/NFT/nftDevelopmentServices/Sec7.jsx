import React from "react";
import { SecSeven } from "./nftDevelopmentServicesComp";
import { H2 } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <section
        className="intro_cnt common_spacing our-prom"
        style={{ background: "#eee" }}
        // style="background:#eee;"
      >
        <div className="container">
          <div className="row">
            <div className="sec_tit underline text-center">
              <H2>Key Components Of The NFT Ecosystem We Build </H2>
            </div>
          </div>
          <div className="row">
            <div className="container-center container">
              <div className="col-md-4 equalize">
                <div className="prom-box text-center">
                  <div className="prom-icon">
                    <img
                      className="lazy"
                      data-src="images/demo/icon/application.webp"
                      src="https://www.blockchainappfactory.com/images/demo/icon/application.webp"
                    />
                  </div>
                  <div className="prom-desp">
                    <h4>Application Layer</h4>
                    <p>
                      We develop custom front-ends and back-end logic tailored
                      to specific use cases and ensure our NFT systems provide
                      intuitive interfaces and advanced functionalities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 equalize">
                <div className="prom-box text-center">
                  <div className="prom-icon">
                    <img
                      className="lazy"
                      data-src="images/demo/icon/payment.webp"
                      src="https://www.blockchainappfactory.com/images/demo/icon/payment.webp"
                    />
                  </div>
                  <div className="prom-desp">
                    <h4>Payment Gateways</h4>
                    <p>
                      To enable effortless transactions, we integrate various
                      payment gateways and offer multiple payment options within
                      our ecosystem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 equalize">
                <div className="prom-box text-center">
                  <div className="prom-icon">
                    <img
                      className="lazy"
                      data-src="images/demo/icon/auctions.webp"
                      src="https://www.blockchainappfactory.com/images/demo/icon/auctions.webp"
                    />
                  </div>
                  <div className="prom-desp">
                    <h4>Authentication Layer</h4>
                    <p>
                      We effectively code self-executing smart contracts that
                      authenticate and automate transactions between NFT sellers
                      and buyers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 equalize">
                <div className="prom-box text-center">
                  <div className="prom-icon">
                    <img
                      className="lazy"
                      data-src="images/demo/icon/validate.webp"
                      src="https://www.blockchainappfactory.com/images/demo/icon/validate.webp"
                    />
                  </div>
                  <div className="prom-desp">
                    <h4>Validation Layer</h4>
                    <p>
                      To establish the validity of NFT transactions, we add a
                      hash specific to each NFT to enhance security and provide
                      a verifiable record of ownership.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 equalize">
                <div className="prom-box text-center">
                  <div className="prom-icon">
                    <img
                      className="lazy"
                      data-src="images/demo/icon/data.webp"
                      src="https://www.blockchainappfactory.com/images/demo/icon/data.webp"
                    />
                  </div>
                  <div className="prom-desp">
                    <h4>Storage Layer</h4>
                    <p>
                      Our NFT ecosystems utilize a decentralized storage network
                      and cloud storage solutions to securely store blockchain
                      data and digital assets.
                    </p>
                  </div>
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
