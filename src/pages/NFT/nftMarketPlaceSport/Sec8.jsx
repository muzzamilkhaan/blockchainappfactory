import React from "react";
import { SecEight } from "./nftMarketPlaceSportComp";
import { Button, H2 } from "../../../components";
const Sec8 = () => {
  return (
    <SecEight>
      <div className="common_spacing bg-grey" id="viewdemo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="section-title text-center">
                <div className="section-title underline mb20 font-wei">
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
              {/* <div className="text-center mt50">
                <a
                  href="https://nft.bafdemo.com/"
                  target="_blank"
                  className="nectar-button medium regular accent-color regular-button nec-btn"
                >
                  <span>Live Demo</span>
                </a>
              </div> */}
              <div className="d-flex justify-content-center F ">
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
    </SecEight>
  );
};

export default Sec8;
