import React from "react";

const Sec12 = () => {
  return (
    <div
      class="product-features package_includes"
      style={{ background: "linear-gradient(140deg, #00d28a, #78b0fa)" }}
    >
      <div class="container">
        <div class="row">
          <div class="section-title text-center">
            <div class="sec_tit mb20">
              <h3
                class="section-title underline mb20"
                style={{ color: "#fff" }}
              >
                Diverse Blockchain Support We Offer
              </h3>{" "}
            </div>
          </div>
          <div class="col-md-12 text-center">
            <div class="Package_list">
              {" "}
              <img
                class=""
                data-src="/images/home-new/eth.webp"
                src="./assets/images/eth.webp"
              />
              <span>Ethereum</span>{" "}
            </div>
            <div class="Package_list">
              {" "}
              <img
                class=""
                data-src="/images/home-new/bsc.webp"
                src="./assets/images/bsc.webp"
              />
              <span>Binance Smart Chain</span>{" "}
            </div>
            <div class="Package_list">
              {" "}
              <img
                class=""
                data-src="/images/home-new/polygon.webp"
                src="./assets/images/polygon.webp"
              />
              <span>Polygon</span>{" "}
            </div>
            <div class="Package_list">
              {" "}
              <img
                class=""
                data-src="/images/home-new/tron.webp"
                src="./assets/images/tron.webp"
              />
              <span>TRON</span>{" "}
            </div>
            <div class="Package_list">
              {" "}
              <img
                class=""
                data-src="/images/home-new/cardano.webp"
                src="./assets/images/cardano.webp"
              />
              <span>Cardano</span>{" "}
            </div>
            <div class="Package_list">
              {" "}
              <img
                class=""
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
