import React from "react";

const Sec12 = () => {
  return (
    <div
      className="product-features package_includes"
      style={{ background: "linear-gradient(140deg, #00d28a, #78b0fa)" }}
    >
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <div className="sec_tit mb20">
              <h3
                className="section-title underline mb20"
                style={{ color: "#fff" }}
              >
                Diverse Blockchain Support We Offer
              </h3>{" "}
            </div>
          </div>
          <div className="col-md-12 text-center">
            <div className="Package_list">
              {" "}
              <img
                className=""
                data-src="/images/home-new/eth.webp"
                src="./assets/images/eth.webp"
              />
              <span>Ethereum</span>{" "}
            </div>
            <div className="Package_list">
              {" "}
              <img
                className=""
                data-src="/images/home-new/bsc.webp"
                src="./assets/images/bsc.webp"
              />
              <span>Binance Smart Chain</span>{" "}
            </div>
            <div className="Package_list">
              {" "}
              <img
                className=""
                data-src="/images/home-new/polygon.webp"
                src="./assets/images/polygon.webp"
              />
              <span>Polygon</span>{" "}
            </div>
            <div className="Package_list">
              {" "}
              <img
                className=""
                data-src="/images/home-new/tron.webp"
                src="./assets/images/tron.webp"
              />
              <span>TRON</span>{" "}
            </div>
            <div className="Package_list">
              {" "}
              <img
                className=""
                data-src="/images/home-new/cardano.webp"
                src="./assets/images/cardano.webp"
              />
              <span>Cardano</span>{" "}
            </div>
            <div className="Package_list">
              {" "}
              <img
                className=""
                data-src="/images/home-new/solana.webp"
                src="./assets/images/solana.webp"
              />
              <span>Solana</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec12;
