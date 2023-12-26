import React from "react";
import { SecEight } from "./nftForRealeStateComp";
import { H2 } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <section className="whychoose_sec common_spacing gray_bg">
        <div
          className="container"
          //  style="padding:20px;"
        >
          <div className="row">
            <div className="col-md-6">
              <div className="section-title underline text-left">
                <div className="sec_tit">
                  <H2> Features Of Real Estate NFT marketplace </H2>
                </div>
              </div>
              <ul className="text-left">
                <li>
                  <div className="icon_img">
                    <img
                      className=""
                      data-src="images/nft_real/icon/ownership.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_real/icon/ownership.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      There is full transparency of transferring ownership of
                      the property in full and not in fractions.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className=""
                      data-src="images/nft_real/icon/paperwork.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_real/icon/paperwork.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      In real estate NFT you don’t have to physically move or do
                      anything to property like in art or music. All the work
                      revolves around paperwork.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className=""
                      data-src="images/nft_real/icon/money-bag.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_real/icon/money-bag.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      Rising marginal cost, realtors cut and other fractional
                      costs are the only hurdles in real estate which scare a
                      potential customer. By using NFT, all the overhead cost
                      sheds to give a perfect price.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className=""
                      data-src="images/nft_real/icon/transaction1.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_real/icon/transaction1.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      NFT did not reduce paperwork for property transactions
                      like tax forms, deed forms, etc but only skips a few steps
                      along the way.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center d-flex align-items-center">
              <img
                className="br"
                data-src="images/nft_real/features.webp"
                alt="Real Estate NFT Marketplace"
                title="Features Of Real Estate NFT Marketplace"
                src="https://www.blockchainappfactory.com/images/nft_real/features.webp"
              />{" "}
            </div>
          </div>
        </div>
      </section>
    </SecEight>
  );
};

export default Sec8;
