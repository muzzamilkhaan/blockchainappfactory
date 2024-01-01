import React from "react";
import { SecFive } from "./nftLayerTwoDevelopmentComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <div id="our_services" className="">
        <div className="container">
          <div className="section-title text-center">
            <div className="common_h3">
              <H2 style={{color:"#161515"}}>We Offer these Business Benefits </H2>{" "}
            </div>
            <hr />
          </div>
          <div className="grids">
            <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
              <div className="feature-box-3">
                <div className="icon">
                  <img src="https://www.blockchainappfactory.com/images/layer2/private-key.webp" />
                </div>
                <h4 className="feature-title common_h4">
                  No custodial risk; users can keep their private keys{" "}
                </h4>
              </div>
            </div>
            <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
              <div className="feature-box-3">
                <div className="icon">
                  <img src="https://www.blockchainappfactory.com/images/layer2/user.webp" />
                </div>
                <h4 className="feature-title common_h4">
                  The user can set his/her own trading fees
                </h4>
              </div>
            </div>
            <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
              <div className="feature-box-3">
                <div className="icon">
                  <img src="https://www.blockchainappfactory.com/images/layer2/peer-to-peer.webp" />
                </div>
                <h4 className="feature-title common_h4">
                  Zero gas fees for peer to peer trading
                </h4>
              </div>
            </div>
            <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
              <div className="feature-box-3">
                <div className="icon">
                  <img src="https://www.blockchainappfactory.com/images/layer2/scalability.webp" />
                </div>
                <h4 className="feature-title common_h4">
                  Massive scalability up to 9000+TPS
                </h4>
              </div>
            </div>
            <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
              <div className="feature-box-3">
                <div className="icon">
                  <img src="https://www.blockchainappfactory.com/images/layer2/chain.webp" />
                </div>
                <h4 className="feature-title common_h4">
                  Not a centralized side chain
                </h4>
              </div>
            </div>
            <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
              <div className="feature-box-3">
                <div className="icon">
                  <img src="https://www.blockchainappfactory.com/images/layer2/erc.webp" />
                </div>
                <h4 className="feature-title common_h4">
                  Supports ERC-20 and ERC-721 standards
                </h4>
              </div>
            </div>
            <div className="col-md-4 col-sm-8"></div>
            <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
              <div className="feature-box-3">
                <div className="icon">
                  <img src="https://www.blockchainappfactory.com/images/layer2/ethereum.webp" />
                </div>
                <h4 className="feature-title common_h4">Secured by Ethereum</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFive>
  );
};

export default Sec5;
