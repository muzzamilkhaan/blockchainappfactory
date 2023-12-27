import React from "react";
import { SecFour } from "./nftMarketplaceForCelebritiesComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12  pull-left text-center defiimg">
              <img
                className=""
                alt="Celebrity NFT Marketplace"
                title="Celebrity NFT Marketplace"
                data-src="/images/cele/img_1.webp"
                src="https://www.blockchainappfactory.com/images/cele/img_1.webp"
              />{" "}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-right">
              <div className="section-title">
                <div className="section-title underline mb20 text-left font-wei">
                  <H2> NFT Platform For Influencers </H2>
                </div>{" "}
              </div>
              <p className="mt-30 text-justify">
                Being the pioneers in the domain of non-fungible tokens, we, as
                a team, come up with the next potent crypto business model
                featuring celebrities. Unlike other marketplaces, this platform
                features renowned celebrities of a particular domain and rolls
                out their precious assets by tokenizing them into NFTs. This
                would be a dream-come-true moment for their fans and followers
                as they are able to own the prestigious collection of their
                favorite celebrities with the ownership rights getting stored in
                blockchain. For instance, imagine the celebrity to be a
                Hollywood hero. The marketplace featuring this hero will release
                digital movie posters, physical autographed movie posters,
                unseen videos, pictures of the hero, smart contract-driven
                pictures, and other valuable moments as NFTs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
