import React from "react";
import { SecFour } from "./nftDevelopmentServicesComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div
        style={{ background: "#0d011e", padding: "60px 0" }}
        //   style="background: #0d011e; padding: 60px 0;"
      >
        <div className="container">
          <div className="row real-estate-list">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <div className="section-title text-center">
                <div className="sec_tit underline text-center mb20 text-white">
                  <H2 style={{ color: "#fff" }}>
                    {" "}
                    What Do Our NFT Systems Support?{" "}
                  </H2>
                </div>
                <p className="text-white">
                  We specialize in developing robust NFT systems that support
                  and enhance the four fundamental processes involved in NFT
                  transactions.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
              <div
                className="perfect-script-items"
                style={{
                  padding: "0",
                  minHeight: "auto",
                  boxShadow: "none",
                  marginBottom: "5px",
                  background: "none",
                }}
                // style="padding: 0px; min-height: auto; box-shadow: none; margin-bottom: 5px; background: none;"
              >
                <div
                  className="icon"
                  // style="margin-bottom: 0; background: #fff;"
                >
                  {" "}
                  <img
                    className="lazy"
                    data-src="images/demo/icon/drawing.webp"
                    src="https://www.blockchainappfactory.com/images/demo/icon/drawing.webp"
                  />{" "}
                </div>
                <div className="content">
                  {" "}
                  <h3 className="font-wei text-white">NFT Creation</h3>{" "}
                  <p
                    className="text-white"
                    //    style="margin-top:0;"
                  >
                    We create and mint NFTs backed by a diverse range of unique
                    assets.
                  </p>{" "}
                </div>
              </div>
              <div
                className="perfect-script-items"
                // style="padding: 0px; min-height: auto; box-shadow: none; margin-bottom: 5px; background: none;"
              >
                <div
                  className="icon"
                  // style="margin-bottom: 0; background: #fff;"
                >
                  {" "}
                  <img
                    className="lazy"
                    data-src="images/demo/icon/auctions.webp"
                    src="https://www.blockchainappfactory.com/images/demo/icon/auctions.webp"
                  />{" "}
                </div>
                <div className="content">
                  {" "}
                  <h3 className="font-wei text-white">NFT Auction</h3>{" "}
                  <p
                    className="text-white"
                    //    style="margin-top:0;"
                  >
                    Our systems offer a seamless process of submitting bids for
                    NFTs in auctions.
                  </p>{" "}
                </div>
              </div>
              <div
                className="perfect-script-items"
                // style="padding: 0px; min-height: auto; box-shadow: none; margin-bottom: 5px; background: none;"
              >
                <div
                  className="icon"
                  //  style="margin-bottom: 0; background: #fff;"
                >
                  {" "}
                  <img
                    className="lazy"
                    data-src="images/demo/icon/transaction.webp"
                    src="https://www.blockchainappfactory.com/images/demo/icon/transaction.webp"
                  />{" "}
                </div>
                <div className="content">
                  {" "}
                  <h3 className="font-wei text-white">NFT Transaction</h3>{" "}
                  <p
                    className="text-white"
                    //    style="margin-top:0;"
                  >
                    We ensure on maintaining the security and integrity of your
                    NFT transactions.
                  </p>{" "}
                </div>
              </div>
              <div
                className="perfect-script-items"
                // style="padding: 0px; min-height: auto; box-shadow: none; margin-bottom: 5px; background: none;"
              >
                <div
                  className="icon"
                  //  style="margin-bottom: 0; background: #fff;"
                >
                  {" "}
                  <img
                    className="lazy"
                    data-src="images/demo/icon/redeem.webp"
                    src="https://www.blockchainappfactory.com/images/demo/icon/redeem.webp"
                  />{" "}
                </div>
                <div className="content">
                  {" "}
                  <h3 className="font-wei text-white">
                    Redeeming Of NFTs
                  </h3>{" "}
                  <p
                    className="text-white"
                    //    style="margin-top:0;"
                  >
                    Our systems support the redeeming of NFTs for physical or
                    digital assets.
                  </p>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
              <br />
              <img
                className="lazy"
                data-src="images/demo/nft-systems.webp"
                alt="How Our NFT Systems Work"
                title="How Our NFT Systems Work"
                src="https://www.blockchainappfactory.com/images/demo/nft-systems.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
