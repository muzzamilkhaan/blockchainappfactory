import React from "react";
import { SecEight } from "./nftTicketingMarketplaceComp";
import { H2 } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <section className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center underline">
                <div className="sec_tit">
                  <H2> Why should you have your own NFT ticketing system?</H2>
                </div>
              </div>
              <p className="mt10 mb10 text-center para">
                NFT ticketing systems have become an emerging business model
                inside the Web3 world. The model is projected to be widely used
                in the coming years. This means a business based on the NFT
                ticketing marketplace could profit new entrepreneurs. Also,
                artists have started to look beyond NFTs for artworks and music.
                Tickets had given many problems for most performing artists, and
                NFTs could offer solutions. NFT ticketing platforms can help
                artists to sell event tickets with added value. Hence, an NFT
                ticketing marketplace is ideal if you want to work as a
                user-facing business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SecEight>
  );
};

export default Sec8;
