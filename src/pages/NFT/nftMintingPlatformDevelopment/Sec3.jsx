import React from "react";
import { SecThree } from "./nftMintingPlatformDevelopmentComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit mb20">
              <div className="section-title underline mb20">
                <H2> NFT Standards </H2>
              </div>
            </div>
          </div>
          <div className="row di-flex">
            <div className="col-md-6 col-lg-3 col-sm-12">
              <div className="card-content">
                <div className="card-img">
                  {" "}
                  <img
                    className="lazy"
                    data-src="/images/nftmi/1.webp"
                    src="https://www.blockchainappfactory.com/images/nftmi/1.webp"
                  />{" "}
                </div>
                <div className="card-desc">
                  <h3>ERC-721</h3>
                  <p>
                    Ethereum token standard ERC -721 offers non-fungible tokens
                    that facilitate the digital representation of your unique
                    assets. NFTs possess unique features and characteristics
                    which add intrinsic value to your unique assets.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 di-flex">
              <div className="card-content">
                <div className="card-img">
                  {" "}
                  <img
                    className="lazy"
                    data-src="/images/nftmi/2.webp"
                    src="https://www.blockchainappfactory.com/images/nftmi/2.webp"
                  />{" "}
                </div>
                <div className="card-desc">
                  <h3>ERC-1155</h3>
                  <p>
                    Enjin’s 1155 offers a semi fungibility feature for your NFTs
                    that allows the user to trade and transfer NFTs for
                    exchange. This token standard offers flexibility and
                    scalability for your unique assets.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 di-flex">
              <div className="card-content">
                <div className="card-img">
                  {" "}
                  <img
                    className="lazy"
                    data-src="/images/nftmi/4.webp"
                    src="https://www.blockchainappfactory.com/images/nftmi/4.webp"
                  />{" "}
                </div>
                <div className="card-desc">
                  <h3>ERC-998</h3>
                  <p>
                    This token standard comprises multiple ERC-721 or ERC20 in a
                    composition. This standard allows composing multiple tokens
                    in the same hierarchy that enables the users to own multiple
                    NFTs or other tokens in a single purchase.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 di-flex">
              <div className="card-content">
                <div className="card-img">
                  {" "}
                  <img
                    className="lazy"
                    data-src="/images/nftmi/3.webp"
                    src="https://www.blockchainappfactory.com/images/nftmi/3.webp"
                  />{" "}
                </div>
                <div className="card-desc">
                  <h3>TRC-721</h3>
                  <p>
                    TRC-721 token standard is released by TRON, a significant
                    blockchain network. This token standard is the inheritance
                    of ERC 721 standards from ethereum that features
                    transparency, scalability and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecThree>
  );
};

export default Sec3;
