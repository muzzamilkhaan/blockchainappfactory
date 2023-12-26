import React from "react";
import { SecFour } from "./nftTicketingMarketplaceComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="section-title text-center underline">
              <div className="sec_tit">
                <H2>Steps involved in building an NFT Ticketing Marketplace</H2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="lazy mt10"
                data-src="/images/nft-ticketing-marketplace/nft_ticket_02.webp"
                alt="NFT Ticketing Marketplace"
                title="NFT Ticketing Marketplace"
                src="https://www.blockchainappfactory.com/images/nft-ticketing-marketplace/nft_ticket_02.webp"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul className="list text-justify mobile">
                <li>
                  <i className="fa-regular fa-hand-point-right"></i>
                  First, you should plan extensively for the NFT ticketing
                  platform platform. You should decide on the target audience,
                  technology, market, and competitors to frame the whitepaper.
                </li>
                <li>
                  <i className="fa-regular fa-hand-point-right"></i>
                  Now, you should create the prototype of your new NFT ticketing
                  marketplace. Test it with a small set of users and get
                  feedback for future use.
                </li>
                <li>
                  <i className="fa-regular fa-hand-point-right"></i>
                  Now, design the front-end of the NFT ticketing system based on
                  feedback received. The platform should have an engaging
                  interface to provide an immersive user experience.
                </li>
                <li>
                  <i className="fa-regular fa-hand-point-right"></i>
                  Then, develop the NFT ticketing platform’s back-end that holds
                  it together. Here, you will also create smart contracts and
                  native tokens and integrate them into blockchain(s).
                </li>
                <li>
                  <i className="fa-regular fa-hand-point-right"></i>
                  Now, test the NFT ticketing marketplace for deficiencies using
                  various manual and automated methods. If defects are found,
                  resolve them promptly to have an error-free platform.
                </li>
                <li>
                  <i className="fa-regular fa-hand-point-right"></i>
                  Before launching, promote the NFT event ticketing marketplace
                  across various mediums. Garner an initial community consisting
                  of event managers, artists, and fans for the best results.
                </li>
                <li>
                  <i className="fa-regular fa-hand-point-right"></i>
                  Finally, release the NFT ticketing platform for public use,
                  and gather user feedback. Ensure that the platform is updated
                  regularly to provide the best user experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SecFour>
  );
};

export default Sec4;
