import React from "react";
import { SecTwelve } from "./nftAggregatorMarketplaceDevelopmentComp";
import { H2 } from "../../../components";

const Sec12 = () => {
  return (
    <SecTwelve>
      <section
        className="product-features package_includes"
        style={{ background: "linear-gradient(140deg, #00d28a, #78b0fa)" }}
        // style="background: linear-gradient(140deg, #00d28a, #78b0fa);"
      >
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <div className="sec_tit mb20">
                <h3
                  className="section-title underline mb20"
                  //   style="color:#fff;"
                >
                  <H2>
                    Web3 Technological Stacks We Utilize for Your New Venture{" "}
                  </H2>
                </h3>{" "}
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="Package_list">
                <img
                  className=""
                  data-src="/images/home-new/eth.webp"
                  src="https://www.blockchainappfactory.com/images/home-new/eth.webp"
                />
                <span>Ethereum</span>{" "}
              </div>
              <div className="Package_list">
                {" "}
                <img
                  className=""
                  data-src="/images/home-new/polygon.webp"
                  src="https://www.blockchainappfactory.com/images/home-new/polygon.webp"
                />
                <span>Polygon</span>{" "}
              </div>
              <div className="Package_list">
                {" "}
                <img
                  className=""
                  data-src="/images/home-new/bsc.webp"
                  src="https://www.blockchainappfactory.com/images/home-new/bsc.webp"
                />
                <span>BNB Chain</span>{" "}
              </div>
              <div className="Package_list">
                {" "}
                <img
                  className=""
                  data-src="/images/home-new/harmony-logo.webp"
                  src="https://www.blockchainappfactory.com/images/home-new/harmony-logo.webp"
                />
                <span>Harmony</span>{" "}
              </div>
              <div className="Package_list">
                {" "}
                <img
                  className=""
                  data-src="/images/home-new/astar-logo.webp"
                  src="https://www.blockchainappfactory.com/images/home-new/astar-logo.webp"
                />
                <span>Astar</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecTwelve>
  );
};

export default Sec12;
