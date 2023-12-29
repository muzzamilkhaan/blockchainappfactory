import React from "react";
import { SecFive } from "./nftLaunchpadDevelopmentServiceComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section className="intro_cnt common_spacing uniq_features">
        <div className="container">
          <div className="section-title underline text-center">
            <div className="sec_tit">
              <H2> What is NFT Launchpad Development?</H2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <p className="mt10 text-justify">
                NFT Launchpad Development facilitates Minting and launching of
                NFT projects efficiently, which involves minting and marketing
                your NFTs. This platform supports creators to mint and sell
                their NFTs in a unique portfolio with a curated collection that
                allows collectors to purchase their required one at ease.
                Creators would launch on a first-come-first-serve basis or
                lottery model to fairly distribute their NFTs, thereby boosting
                community engagement. Also, the Launchpad provides gaming
                activities to benefit the investors who can use the purchased
                tokens to participate in.
              </p>
              <p className="mt10 text-justify">
                We introduce the NFT launchpad with a mission to support
                sprouting creators to raise funds to create their NFT projects.
                Our experience in the crypto industry and enthusiasm in the NFT
                space created phenomenal innovations to elevate and excel the
                prominent industry by unleashing its potential abilities to the
                market. A technology’s success resides upon reaching the nooks
                and corners of the world and making a common man understand and
                make use of it. We took the initiative to support the creators
                to mint and sell NFTs to experience the benefits and
                opportunities of NFTs with a specialized portfolio for their
                creations.{" "}
              </p>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              {" "}
              <img
                src="https://www.blockchainappfactory.com/images/nft_launch/nft-launch.webp"
                className="mt10"
              />{" "}
            </div>
          </div>
          <div className="text-center mt20">
            <div className="cta_mine">
              <a
                href="#newsletter-form-sec"
                className="nectar-button medium regular accent-color regular-button nec-btn"
              >
                <span>Talk with our Experts</span>
              </a>
            </div>{" "}
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
