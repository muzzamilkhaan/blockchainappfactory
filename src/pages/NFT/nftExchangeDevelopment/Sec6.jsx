import React from "react";
import { SecSix } from "./nftExchangeDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit underline">
              <div className="font-wei">
                <H2> Exchange platform development in Multi-Chain </H2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <p className="mt10 text-center">
                Exchange platform for NFT offers its services in{" "}
                <a href="https://www.blockchainappfactory.com/multichain-nft-support">
                  multi-chain networks
                </a>{" "}
                to avail of its profound benefits. Each network has its
                significant services and specialities. The increased services in
                the network result in complications with improved NFT exchange
                fees or gas fees with low performance and throughput. Multiple
                networks arise in the market to solve this issue with increased
                throughput in low transaction fees. These networks offer unique
                features for the reliable performance of your platform with
                efficient services. We equip your NFT exchange platform with all
                the significant features and deploy it in multi-chain networks
                for global performance and seamless exchange opportunities.{" "}
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="cta_mine">
              <div className="d-flex justify-content-center flex-wrap gap-3 ">
                <Button
                  btnContent="Talk with our Experts"
                  to="#newsletter-form-sec"
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
