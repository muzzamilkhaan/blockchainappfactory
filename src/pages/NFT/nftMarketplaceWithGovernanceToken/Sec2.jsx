import React from "react";
import { SecTwo } from "./nftMarketplaceWithGovernanceTokenComp";
import { H2 } from "../../../components";

const Sec2 = () => {
  return (
    <SecTwo>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <H2 style={{ color: "#333333" }}>
                {" "}
                NFT marketplace and Community
              </H2>
            </div>
          </div>
          <p className="mt10 text-center para" style={{ color: "#555555" }}>
            Every development and product will need more than the developers and
            admins to shape the better pioneering in their respective market.
            That too, when it comes to crypto space, everything lies in the
            digital space with a decentralized nature. Many instances in the
            crypto space making huge prosperity, and one particular thing that
            drives the crypto space with records and victories is the NFT
            market. From a market with many users who are interested in
            collecting the collectibles in the digital medium, the evolution has
            reached to a market with numerous subsidiary markets, which are
            making billions of dollars now. The potential of NFT is still under
            research, and the NFT marketplace - a place to mint and tradean NFT
            is considered to be the most popular platform in the crypto space.
            And the concept of introducing a community-driven space into the NFT
            marketplace is known as the Governance token-based NFT development.
          </p>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
