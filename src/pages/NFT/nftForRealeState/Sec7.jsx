import React from "react";
import { SecSeven } from "./nftForRealeStateComp";
import { H2 } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <section className="common_spacing">
        <div className="container">
          <div className="section-title underline text-center">
            <div className="sec_tit">
              <H2> How Real estate NFT works </H2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline1">
                <div className="timeline1">
                  <div className="timeline-content1">
                    {" "}
                    <span className="timeline-count1">1</span>
                    <p className="description">
                      {" "}
                      First of all, the preparations have to be done regarding
                      paperwork of property turned NFT like binding them in a
                      smart contract, permission or legal work way to be
                      recognized by the government.{" "}
                    </p>
                  </div>
                </div>
                <div className="timeline1">
                  <div className="timeline-content1">
                    {" "}
                    <span className="timeline-count1">2</span>
                    <p className="description">
                      A Minting Process is carried out that depicts NFT has
                      legal data about the property like paperwork, disclosures,
                      reports, property images, or videos.{" "}
                    </p>
                  </div>
                </div>
                <div className="timeline1">
                  <div className="timeline-content1">
                    {" "}
                    <span className="timeline-count1">3</span>
                    <p className="description">
                      NFTs can now be shelved onto the real-estate-oriented NFT
                      marketplace platform.{" "}
                    </p>
                  </div>
                </div>
                <div className="timeline1">
                  <div className="timeline-content1">
                    {" "}
                    <span className="timeline-count1">4</span>
                    <p className="description">
                      Now the trading is carried out by bidding wars or direct
                      buy or loan or whatever the property is up for.{" "}
                    </p>
                  </div>
                </div>
                <div className="timeline1">
                  <div className="timeline-content1">
                    {" "}
                    <span className="timeline-count1">5</span>
                    <p className="description">
                      Once a buyer is selected, a smart contract is digitally
                      signed between them promising full payment of the
                      cryptocurrency from buyer to seller crypto wallet after
                      complete ownership of NFT is transferred.{" "}
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
