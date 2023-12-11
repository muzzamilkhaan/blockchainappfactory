import React from "react";
import { SecSeven } from "./nftMarketPlaceBSCComp";
import Button from "../../../components/Button";
const Sec7 = () => {
  return (
    <>
      <SecSeven>
        <div className="common_spacing bg-grey" id="viewdemo">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="section-title text-center">
                  <h3 className="section-title underline mb20">
                    Watch Our NFT Marketplace Demo
                  </h3>{" "}
                </div>
                <div className="text-center">
                  <img
                    className="lazy rnd_img"
                    alt="NFT Development Company"
                    title="NFT Marketplace Demo"
                    data-src="/images/demo/nft-view-demo.webp"
                    src="https://www.blockchainappfactory.com/images/demo/nft-view-demo.webp"
                  />
                </div>
                <div
                  className="text-center mt50"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    btnContent="Live Demo"
                    target="_blank"
                    to="https://nft.bafdemo.com/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecSeven>
    </>
  );
};

export default Sec7;
