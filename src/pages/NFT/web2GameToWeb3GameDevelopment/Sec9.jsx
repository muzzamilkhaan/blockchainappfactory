import React from "react";
import { SecNine } from "./web2GameToWeb3GameDevelopmentComp";
import { H2 } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <section
        className="product-features package_includes"
        style={{ background: "linear-gradient(140deg, #00d28a, #78b0fa)" }}
      >
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <div className="sec_tit mb20">
                <div className="section-title underline mb20">
                  <H2 style={{ color: "#fff" }}>
                    {" "}
                    Game genres you can transform from Web2 to Web3{" "}
                  </H2>
                </div>{" "}
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="Package_list">
                {" "}
                <img
                  className=""
                  data-src="/images/web2-game-to-web3-game-development/icons/action.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/home-new/eth.webp"
                />
                <span>Ethereum</span>{" "}
              </div>
              <div className="Package_list">
                {" "}
                <img
                  className=""
                  data-src="/images/web2-game-to-web3-game-development/icons/adventure.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/home-new/bsc.webp"
                />
                <span>BNB Chain</span>{" "}
              </div>
              <div className="Package_list">
                {" "}
                <img
                  className=""
                  data-src="/images/web2-game-to-web3-game-development/icons/fantasy.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/home-new/polygon.webp"
                />
                <span>Polygon</span>{" "}
              </div>
              <div className="Package_list">
                {" "}
                <img
                  className=""
                  data-src="/images/web2-game-to-web3-game-development/icons/racing.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/home-new/tron.webp"
                />
                <span>TRON</span>{" "}
              </div>
              <div className="Package_list">
                {" "}
                <img
                  className=""
                  data-src="/images/web2-game-to-web3-game-development/icons/sports.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/home-new/cardano.webp"
                />
                <span>Cardano</span>{" "}
              </div>
              <div className="Package_list">
                {" "}
                <img
                  className=""
                  data-src="/images/web2-game-to-web3-game-development/icons/card-games.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/home-new/solana.webp"
                />
                <span>Solana</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecNine>
  );
};

export default Sec9;
