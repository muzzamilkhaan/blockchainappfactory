import React from "react";
import { SecFive } from "./nftForRealeStateComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec_tit underline text-left">
                <H2> Metaverse Real Estate</H2>
              </div>
              <p className="mt10 mb10 text-justify">
                With the concept of metaverse gaining traction through various
                means, sales of plots of land on existing metaverse-based
                platforms have been exploding in the era of NFTs. This can be
                justified by the fact that someone paid a hefty $4.3 million on
                a plot of land on the metaverse real estate-based game
                Decentraland, and someone paid $50,000 to own the property next
                to that of Snopp Dogg’s in the Sandbox. Hence, it is certain
                that metaverse real estate plots will be hot assets to hold in
                the future, given the next step from the tech giant Meta
                (formerly Facebook.Inc) towards realizing the metaverse happens
                sooner. It is also possible that a copy of real-world plots will
                be created on a metaverse, where virtual plots would back
                real-world plots, and transactions can be written on smart
                contracts, hence eliminating lengthy paperwork.
              </p>
            </div>
            <div className="col-lg-6">
              {" "}
              <img
                className="img-responsive rounded-border"
                data-src="images/nft_real/real-estate-02.webp"
                alt=""
                title=""
                src="https://www.blockchainappfactory.com/images/nft_real/real-estate-02.webp"
              />{" "}
            </div>
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
