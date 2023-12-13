import React from "react";
import { SecSeven } from "./nftMarketplaceSolanaComp";
import { H2 } from "../../../components/index";
const Sec7 = () => {
  return (
    <SecSeven>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <div className="sec_tit mb20">
                <div className="section-title underline mb20">
                  <H2>The Salient Features Of Solana NFT Marketplace</H2>
                </div>
              </div>
              <p className="text-center">
                The listed below are the top-level features that are integrated
                with our Solana based NFT marketplace platform.{" "}
              </p>
            </div>
            <div className="testimonials-wrapper container-center mt50">
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-xs-12 equalize aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="testimonials-item">
                  <div className="user">
                    {/* <i className=" "> */}
                    <img
                      className="lazy"
                      data-src="/images/solana/icons/composer.webp"
                      src="https://www.blockchainappfactory.com/images/solana/icons/composer.webp"
                    />{" "}
                    {/* </i>{" "} */}
                  </div>
                  <div className="testimonials-content">
                    <h3 className="user-name">Composability</h3>
                    <div className="txt">
                      <p>
                        This NFT marketplace is highly composable, many
                        development protocols and softwares can be integrated
                        with the platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-xs-12 equalize aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <div className="testimonials-item">
                  <div className="user">
                    {" "}
                    <i className=" ">
                      <img
                        className="lazy"
                        data-src="/images/solana/icons/scale.webp"
                        src="https://www.blockchainappfactory.com/images/solana/icons/scale.webp"
                      />{" "}
                    </i>{" "}
                  </div>
                  <div className="testimonials-content">
                    <h3 className="user-name">Scalability</h3>
                    <div className="txt">
                      <p>
                        Solana based NFT marketplace is highly scalable, as it
                        performs millions of transactions at a high speed at the
                        same time.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-xs-12 equalize aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="testimonials-item">
                  <div className="user">
                    {" "}
                    <i className=" ">
                      <img
                        className="lazy"
                        data-src="/images/solana/icons/money-transaction.webp"
                        style={{ height: "50px" }}
                        src="https://www.blockchainappfactory.com/images/solana/icons/money-transaction.webp"
                      />{" "}
                    </i>{" "}
                  </div>
                  <div className="testimonials-content">
                    <h3 className="user-name">Low transaction cost</h3>
                    <div className="txt">
                      <p>
                        The transaction cost is less in this NFT marketplace as
                        there are very less network congestion issues.{" "}
                      </p>
                    </div>
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
