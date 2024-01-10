import React from "react";
import UnderLine from "../../components/UnderLine";

function LandingSec11() {
  return (
    <section
      className="space-pt bg-dark-half-md tech-padding teck"
      style={{
        background: "linear-gradient(81.32deg, #2A317D 0%, #1C224F 100%)",
      }}
    >
      <div className="container">
        <div className="row home-sec-11">
          <div className="section-title text-center col-sm-12 mb50">
            <h3 className="common_h3 text-white">
              Our Blockchain Tech Expertise
            </h3>
            {/* <hr /> */}
            <UnderLine height="2px" background="#fff" />
          </div>
          <div className="col-sm-12">
            <div
              className="category category-grid-style-01 aos-item aos-init"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <div className="category-item aos-item">
                <div className="category-icon">
                  {" "}
                  <img
                    className="img-fuild lazy"
                    width="49px"
                    height="80px"
                    data-src="./assets/images/eth.webp"
                    alt=""
                    src="./assets/images/eth.webp"
                  />{" "}
                </div>{" "}
                <a href="#" className="category-title text-white" alt="">
                  Ethereum
                </a>{" "}
              </div>
              <div className="category-item aos-item">
                <div className="category-icon">
                  {" "}
                  <img
                    className="img-fuild lazy"
                    width="80px"
                    height="80px"
                    data-src="./assets/images/polygon.webp"
                    alt=""
                    src="./assets/images/polygon.webp"
                  />{" "}
                </div>{" "}
                <a href="#" className="category-title text-white" alt="">
                  Polygon
                </a>{" "}
              </div>
              <div className="category-item aos-item">
                <div className="category-icon">
                  {" "}
                  <img
                    className="img-fuild lazy"
                    width="80px"
                    height="80px"
                    data-src="./assets/images/binance-logo.webp"
                    alt=""
                    src="./assets/images/binance-logo.webp"
                  />{" "}
                </div>{" "}
                <a href="#" className="category-title text-white" alt="">
                  BNB Chain
                </a>{" "}
              </div>
              <div className="category-item aos-item">
                <div className="category-icon">
                  {" "}
                  <img
                    className="img-fuild lazy"
                    width="80px"
                    height="80px"
                    data-src="./assets/images/avalanche-logo.webp"
                    alt=""
                    src="./assets/images/avalanche-logo.webp"
                  />{" "}
                </div>{" "}
                <a href="#" className="category-title text-white" alt="">
                  Avalanche
                </a>{" "}
              </div>
              <div className="category-item aos-item">
                <div className="category-icon">
                  {" "}
                  <img
                    className="img-fuild lazy"
                    width="80px"
                    height="80px"
                    data-src="./assets/images/tron.webp"
                    alt=""
                    src="./assets/images/tron.webp"
                  />{" "}
                </div>{" "}
                <a href="#" className="category-title text-white" alt="">
                  Tron{" "}
                </a>{" "}
              </div>
              <div className="category-item aos-item">
                <div className="category-icon">
                  {" "}
                  <img
                    className="img-fuild lazy"
                    width="80px"
                    height="80px"
                    data-src="./assets/images/solana.webp"
                    alt=""
                    src="./assets/images/solana.webp"
                  />{" "}
                </div>{" "}
                <a href="#" className="category-title text-white" alt="">
                  Solana
                </a>{" "}
              </div>
              {/* <div className="category-item aos-item">
              <div className="category-icon">
                {" "}
                <img
                  className="img-fuild lazy"
                  width="auto"
                  height="40px"
                  data-src="./assets/images/harmony-logo.webp"
                  alt=""
                  src="./assets/images/harmony-logo.webp"
                />{" "}
              </div>{" "}
              <a href="#" className="category-title" alt="">
                Harmony
              </a>{" "}
            </div>
            <div className="category-item aos-item">
              <div className="category-icon">
                {" "}
                <img
                  className="img-fuild lazy"
                  width="auto"
                  height="40px"
                  data-src="./assets/images/polkadot.webp"
                  alt=""
                  src="./assets/images/polkadot.webp"
                />{" "}
              </div>{" "}
              <a href="#" className="category-title" alt="">
                Polkadot
              </a>{" "}
            </div>
            <div className="category-item aos-item">
              <div className="category-icon">
                {" "}
                <img
                  className="img-fuild lazy"
                  width="auto"
                  height="40px"
                  data-src="./assets/images/cardano.webp"
                  alt=""
                  src="./assets/images/cardano.webp"
                />{" "}
              </div>{" "}
              <a href="#" className="category-title" alt="">
                Cardano{" "}
              </a>{" "}
            </div>
            <div className="category-item aos-item">
              <div className="category-icon">
                {" "}
                <img
                  className="img-fuild lazy"
                  width="auto"
                  height="40px"
                  data-src="./assets/images/shardeum.webp"
                  alt=""
                  src="./assets/images/shardeum.webp"
                />{" "}
              </div>{" "}
              <a href="#" className="category-title" alt="">
                Shardeum
              </a>{" "}
            </div>
            <div className="category-item aos-item">
              <div className="category-icon">
                {" "}
                <img
                  className="img-fuild lazy"
                  width="auto"
                  height="40px"
                  data-src="./assets/images/tezos.webp"
                  alt=""
                  src="./assets/images/tezos.webp"
                />{" "}
              </div>{" "}
              <a href="#" className="category-title" alt="">
                Tezos
              </a>{" "}
            </div>
            <div className="category-item aos-item">
              <div className="category-icon">
                {" "}
                <img
                  className="img-fuild lazy"
                  width="auto"
                  height="40px"
                  data-src="./assets/images/fantom.webp"
                  alt=""
                  src="./assets/images/fantom.webp"
                />{" "}
              </div>{" "}
              <a href="#" className="category-title" alt="">
                Fantom
              </a>{" "}
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSec11;
