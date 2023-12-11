import React from "react";
import { SecTen } from "./nftMarketPlaceBSCComp";

const Sec10 = () => {
  return (
    <>
      <SecTen>
        <div className="common_spacing gray-bg extend">
          <div className="container">
            <div className="section-header text-center">
              <h3 className="section-title underline">
                Our Other Blockchain Expertises
              </h3>{" "}
            </div>
            <p className="text-center list-txt">
              We at Blockchain App Factory are equipped with the tools and
              expertise to develop NFT marketplaces on these popular blockchain
              platforms.
            </p>
            <div className="row mt30" style={{ display: "" }}>
              <div className="col-sm-12">
                <div
                  className="category category-grid-style-01 aos-item"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <div className="category-item aos-item">
                    <div className="category-icon">
                      {" "}
                      <img
                        className="lazy img-fuild"
                        style={{ height: "40px" }}
                        data-src="/images/nft-bsc/four.webp"
                        alt="Ethereum"
                        src="https://www.blockchainappfactory.com/images/nft-bsc/four.webp"
                      />{" "}
                    </div>
                    <div className="category-title">Ethereum</div>
                  </div>
                  <div className="category-item aos-item">
                    <div className="category-icon">
                      {" "}
                      <img
                        className="lazy img-fuild"
                        style={{ height: "40px" }}
                        data-src="/images/nft-bsc/two.webp"
                        alt="BSC"
                        src="https://www.blockchainappfactory.com/images/nft-bsc/two.webp"
                      />{" "}
                    </div>
                    <div className="category-title">BSC</div>
                  </div>
                  <div className="category-item aos-item">
                    <div className="category-icon">
                      {" "}
                      <img
                        className="lazy img-fuild"
                        style={{ height: "40px" }}
                        data-src="/images/nft-bsc/polygon1.webp"
                        alt="Polygon"
                        src="https://www.blockchainappfactory.com/images/nft-bsc/polygon1.webp"
                      />{" "}
                    </div>
                    <div className="category-title">Polygon</div>
                  </div>
                  <div className="category-item aos-item">
                    <div className="category-icon">
                      {" "}
                      <img
                        className="lazy img-fuild"
                        style={{ height: "40px" }}
                        data-src="/images/nft-bsc/cardano1.webp"
                        alt="Cardano"
                        src="https://www.blockchainappfactory.com/images/nft-bsc/cardano1.webp"
                      />{" "}
                    </div>
                    <div className="category-title">Cardano</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecTen>
    </>
  );
};

export default Sec10;
