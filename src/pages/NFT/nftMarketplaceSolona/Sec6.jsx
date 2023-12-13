import React from "react";
import { SecSix } from "./nftMarketplaceSolanaComp";
import { Button } from "../../../components/index";
import { H2 } from "../../../components/index";
const Sec6 = () => {
  return (
    <SecSix>
      <div className="common_spacing bg-grey" id="viewdemo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="section-title text-center">
                <div className="section-title underline mb20">
                  <H2>Watch Our NFT Marketplace Demo</H2>
                </div>{" "}
              </div>
              <div className="text-center">
                <img
                  className="lazy rnd_img"
                  alt="NFT Development Company"
                  title="NFT Marketplace Demo"
                  data-src="/images/demo/nft-view-demo.webp"
                  src="https://www.blockchainappfactory.com/images/demo/nft-view-demo.webp"
                />{" "}
              </div>
              <div className="d-flex justify-content-center ">
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
    </SecSix>
  );
};

export default Sec6;
