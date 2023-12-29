import React from "react";
import { SecEleven } from "./nftDevelopmentServicesComp";
import { H2, Button } from "../../../components";

const Sec11 = () => {
  return (
    <SecEleven>
      <div className="common_spacing" id="viewdemo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="section-title text-center">
                <div className="section-title underline mb20 font-wei">
                  <H2> Watch Our NFT Marketplace Demo </H2>
                </div>{" "}
              </div>
              <div className="text-center">
                <img
                  className="lazy rnd_img"
                  alt="NFT Platform Development Demo"
                  title="NFT Platform Development Demo"
                  data-src="images/demo/nft-view-demo.webp"
                  src="https://www.blockchainappfactory.com/images/demo/nft-view-demo.webp"
                />{" "}
              </div>
              <div className="text-center mt50">
                <div className="d-flex justify-content-center flex-wrap gap-3 ">
                  <Button
                    btnContent="Live Demo"
                    to="https://nft.bafdemo.com/"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecEleven>
  );
};

export default Sec11;
