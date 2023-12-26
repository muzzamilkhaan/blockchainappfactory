import React from "react";
import { SecNine } from "./nftForPhysicalAssetsComp";
import { H2, Button } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <div className="common_spacing bg-grey" id="viewdeo_redirect">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="section-title text-center">
                <div className="section-title underline mb20">
                  <H2> Watch Our NFT Marketplace Demo </H2>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="rnd_img"
                  alt="NFT Development Company"
                  title="NFT Marketplace Demo"
                  data-src="/images/demo/nft-view-demo.webp"
                  src="https://www.blockchainappfactory.com/images/demo/nft-view-demo.webp"
                />
              </div>
              <div className="text-center mt50">
                <div className="d-flex justify-content-center flex-wrap gap-3 ">
                  <Button
                    btnContent="Live Demo"
                    to="https://nft.bafdemo.com"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecNine>
  );
};

export default Sec9;
