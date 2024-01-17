import React from "react";
import { SecEight } from "./nftForPhysicalAssetsComp";
import { H2 } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <div className="intro_cnt common_spacing gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <div className="section-title text-center underline">
                <div className="sec_tit mt20">
                  <H2> How A Physical Asset NFT Works </H2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="main-timeline2 pt40">
                    <div className="col-md-2 col-sm-4 timeline2">
                      <span className="timeline2-icon">
                        <i className="NaclassName">01</i>
                      </span>
                      <div className="border"></div>
                      <div className="timeline2-content">
                        <p className="description">
                          Create NFT for physical asset
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-4 timeline2">
                      <div className="timeline2-content">
                        <p className="description">List in marketplace</p>
                      </div>
                      <div className="border"></div>
                      <span className="timeline2-icon">
                        <i className="NaclassName">02</i>
                      </span>
                    </div>
                    <div className="col-md-2 col-sm-4 timeline2">
                      <span className="timeline2-icon">
                        <i className="NaclassName">03</i>
                      </span>
                      <div className="border"></div>
                      <div className="timeline2-content">
                        <p className="description">Trade your nft</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-4 timeline2">
                      <div className="timeline2-content">
                        <p className="description">User bids for your NFT</p>
                      </div>
                      <div className="border"></div>
                      <span className="timeline2-icon">
                        <i className="NaclassName">04</i>
                      </span>
                    </div>
                    <div className="col-md-2 col-sm-4 timeline2">
                      <span className="timeline2-icon">
                        <i className="NaclassName">05</i>
                      </span>
                      <div className="border"></div>
                      <div className="timeline2-content">
                        <p className="description">Owns your NFT</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-4 timeline2">
                      <div className="timeline2-content">
                        <p className="description">
                          Redeems it as physical assets
                        </p>
                      </div>
                      <div className="border"></div>
                      <span className="timeline2-icon">
                        <i className="NaclassName">06</i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 text-left">
              <p className="text-center mt20 pt30">
                Physical NFT is the term coined for an asset that can be
                presented when a token is purchased to its respective owners.
                These NFTs can be resold in the same manner as a digital one
                using cryptocurrency as well as can be redeemed to have the
                possession of the physical asset which it is representing.NFT is
                a kind of verifiable ledger sheet in the blockchain which
                pertains to all the transactions, identity, orders and all the
                info related to that asset. These NFTs can be brought to the
                physical world in such ways as using them as a tag with clothes
                so that you can scan while purchasing the item to check its
                authenticity and all the hidden transactions associated with
                them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecEight>
  );
};

export default Sec8;
