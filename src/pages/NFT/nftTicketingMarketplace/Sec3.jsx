import React from "react";
import { SecThree } from "./nftTicketingMarketplaceComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <section className="intro_cnt common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title  ">
                <div className="sec_tit underline " >
                  <H2 className="h2"> NFT Ticketing Marketplace Development</H2>
                </div>
              </div>
              <p className="mt10 mb10 text-justify">
                NFT ticketing marketplace development has become a hot trend as
                NFTs reach worldwide. Our NFT ticketing marketplace development
                has already resulted in many promising projects. NFT ticketing
                is similar to digital ticketing, except that NFTs are employed
                here. NFTs in tickets make them unique and valued.
              </p>
              <p className="mt10 mb10 text-justify">
                In transferable tickets, the new owner’s details will be
                automatically updated through smart contracts. The process will
                help event managers to know the attendees. NFT Tickets can even
                offer utilities over the course of the event for fans. An
                effective NFT ticketing marketplace development process can help
                achieve these goals easily.
              </p>
            </div>
            <div className="col-lg-6">
              {" "}
              <img
                className="rounded-border mt10"
                src="https://www.blockchainappfactory.com/images/nft-ticketing-marketplace/nft_ticket_01.webp"
                alt="NFT Ticketing Marketplace Development"
                title="NFT Ticketing Marketplace Development"
              />{" "}
            </div>
          </div>
        </div>
      </section>
    </SecThree>
  );
};

export default Sec3;
