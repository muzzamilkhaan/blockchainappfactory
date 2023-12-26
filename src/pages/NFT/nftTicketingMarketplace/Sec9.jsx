import React from "react";
import { SecNine } from "./nftTicketingMarketplaceComp";
import { H2 } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <section className="intro_cnt common_spacing">
        <div className="container">
          <div className="row">
            <div className="section-title text-center underline">
              <div className="sec_tit">
                <H2> Benefits of NFT Ticketing Marketplace</H2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul className="primary-list">
                <li>
                  <i className="fa-regular fa-circle"></i>
                  Ownership of NFT tickets can be tracked easily by the initial
                  seller. This helps to eliminate security concerns surrounding
                  event management as attendees will be known. Knowing the
                  people who will be present is important, especially in
                  large-scale events.
                </li>
                <li>
                  <i className="fa-regular fa-circle"></i>
                  NFT ticketing marketplaces can also provide tickets with added
                  utilities. Benefits such as access to premium seats, food, and
                  beverages mean a lot. Top-tier tickets can also offer benefits
                  such as gifts signed by artists.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="primary-list">
                <li>
                  <i className="fa-regular fa-circle"></i>
                  Initial sellers (artists/event managers) can earn royalties
                  from secondary NFT ticket sales. This was previously
                  impossible as scammers profited by selling over-priced
                  tickets. Initial sellers can also fix a price ceiling for
                  secondary sales of NFT tickets.
                </li>
                <li>
                  <i className="fa-regular fa-circle"></i>
                  NFT ticketing works on blockchains, so replicas of tickets
                  cannot be produced. NFT tickets can be traced on the
                  blockchains, and replicas cannot be traced. This means fans no
                  longer need to worry about the ticket’s originality.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SecNine>
  );
};

export default Sec9;
