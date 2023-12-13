import React from "react";
import { SecFour } from "./nftMarketplaceHarmonyComp";
import { H2, Button } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              {" "}
              <img
                src="https://www.blockchainappfactory.com/images/harmony/img_1.webp"
                className="mt10 mb10"
                alt="NFT Marketplace Development In Harmony"
                title="NFT Marketplace Development In Harmony"
              />{" "}
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 mt20">
              <div className="section-title underline text-left">
                <div className="sec_tit">
                  <H2>Harmony- A Brief Walkthrough</H2>
                </div>
              </div>
              <p className="mt10 text-left">
                Harmony is a fast, reliable, and secure blockchain that has many
                in-built functionalities of peer-to-peer networking and a state
                of sharding. This sharding property makes use of the randomness
                of decentralization, proof of stake, and the networking property
                achieving a high-level cross-sharding system and low latency.
                Many marketplaces for fungible and non-fungible tokens are
                created on this blockchain platform effectively. The primary
                feature of this platform is the zero-knowledge proofs for
                sharing data, which secures the customer’s privacy.
              </p>
              <div className="text-left">
                <div className="d-flex gap-3 flex-wrap justify-content-center">
                  <Button
                    btnContent="Connect with Whatsapp"
                    target="_blank"
                    to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                  />
                  <Button btnContent="Talk with our Experts" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
