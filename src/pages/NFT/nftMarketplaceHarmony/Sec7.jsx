import React from "react";
import { SecSeven } from "./nftMarketplaceHarmonyComp";
import { H2, H3 } from "../../../components";
const Sec7 = () => {
  return (
    <SecSeven>
      <section className="common_spacing">
        <div className="container">
          <div className="section-title underline text-center">
            <div className="sec_tit">
              <H2>Innovative Features Of Our NFT Marketplace On Harmony</H2>
            </div>
          </div>
          <div className="row mt50">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline">
                  <div className="timeline-content1">
                    <div className="icon-container">
                      <i className="fa fa-globe"></i>
                    </div>
                    <H3 className="head">Our Systematic Architecture</H3>
                    <p className="description">
                      {" "}
                      Our architecture is primarily dependent on the operation
                      of sharding which makes it completely scalable for
                      networking, and transaction processing.{" "}
                    </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-content1">
                    <div className="timeline-icon">
                      <i className="fa fa-rocket"></i>
                    </div>
                    <H3 className="head">Random Operation</H3>
                    <p className="description">
                      {" "}
                      This feature allows the network validators to be assigned
                      in a random manner, and shuffled accordingly, in order to
                      protect the sharding process from shard attacks.{" "}
                    </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-content1">
                    <div className="timeline-icon">
                      <i className="fa fa-area-chart"></i>
                    </div>
                    <H3 className="head">Proof-Of-Stake</H3>
                    <p className="description">
                      {" "}
                      Our proof-of-stake feature in the marketplace allows the
                      transaction to be very efficient and cost fewer fees.{" "}
                    </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-content1">
                    <div className="timeline-icon">
                      <i className="fa fa-link"></i>
                    </div>
                    <H3 className="head">Cross-Chain Shard Processing</H3>
                    <p className="description">
                      {" "}
                      Our platform has a special feature known as cross-chain
                      shard processing, which enables the cross-chain
                      composability of smart contracts between shards.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecSeven>
  );
};

export default Sec7;
