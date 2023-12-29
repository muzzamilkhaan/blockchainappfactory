import React from "react";
import { SecThirteen } from "./nftDevelopmentServicesComp";
import { H2 } from "../../../components";

const Sec13 = () => {
  return (
    <SecThirteen>
      <div className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left text-center">
              {" "}
              <img
                className="lazy rnd_img"
                alt="Why Blockchain App Factory for NFT?"
                title="Blockchain App Factory’s NFT Platform Development Service"
                data-src="images/nft/app-factory-01.webp"
                width=""
                src="https://www.blockchainappfactory.com/images/nft/app-factory-01.webp"
              />{" "}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-right">
              <div className="section-title">
                <div className="section-title underline mb20 font-wei">
                  <H2>
                    {" "}
                    Blockchain App Factory’s Decentralized NFT Development
                    Service{" "}
                  </H2>
                </div>{" "}
              </div>
              <p className="mt-30 text-justify">
                At Blockchain App Factory, we ensure to create NFTs that align
                well with the principles of decentralization. It means that
                these NFTs can operate seamlessly across all elements of Web3
                technology, including decentralized finance (DeFi). DeFi has
                become popular in the crypto world for its emerging use cases
                for the virtual communities of tomorrow.{" "}
              </p>
              <p className="mt-30 text-justify">
                NFTs in decentralized finance can be used as collateral for
                crypto loaning processes. With Web3 becoming more widely
                accepted, decentralized banking with NFT assets is an exciting
                prospect for the future. Our experts ensure all our NFT projects
                have flexible smart contracts that can be optimized for DeFi
                collateralization.
              </p>
              <p className="mt-30 text-justify">
                As an experienced NFT development company, we offer you smart
                contract creation services to integrate multiple DeFi
                functionalities. We also ensure to stay true to all Web3 ethics
                so that your NFTs can work for a long time. Get in touch with us
                to begin working on your new NFT project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecThirteen>
  );
};

export default Sec13;
