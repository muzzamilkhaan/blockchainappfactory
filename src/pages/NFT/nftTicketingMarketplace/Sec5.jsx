import React from "react";
import { SecFive } from "./nftTicketingMarketplaceComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="section-title text-center underline">
              <div className="sec_tit">
                <H2> NFT Ticketing Platform Features</H2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className="lazy"
                    data-src="/images/nft-ticketing-marketplace/icons/01.webp"
                    src="https://www.blockchainappfactory.com/images/nft-ticketing-marketplace/icons/01.webp"
                  />{" "}
                </div>
                <h4>Homepage</h4>
                <p>
                  On the homepage of the NFT ticketing marketplace, one can see
                  the event schedule. The page also gives an overview of the
                  focus of the business.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className="lazy"
                    data-src="/images/nft-ticketing-marketplace/icons/02.webp"
                    src="https://www.blockchainappfactory.com/images/nft-ticketing-marketplace/icons/02.webp"
                  />{" "}
                </div>
                <h4>Event Page</h4>
                <p>
                  On the event page, one can see various details about an event.
                  Information including the event’s genre, nature, timing ticket
                  costs, and place are provided here.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className="lazy"
                    data-src="/images/nft-ticketing-marketplace/icons/03.webp"
                    src="https://www.blockchainappfactory.com/images/nft-ticketing-marketplace/icons/03.webp"
                  />{" "}
                </div>
                <h4>Listing Portal</h4>
                <p>
                  Here, artists/event managers can post their events by
                  providing necessary information. After posting their events,
                  they can easily mint the event ticket NFTs for sale.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className="lazy"
                    data-src="/images/nft-ticketing-marketplace/icons/04.webp"
                    src="https://www.blockchainappfactory.com/images/nft-ticketing-marketplace/icons/04.webp"
                  />{" "}
                </div>
                <h4>Checkout Portal</h4>
                <p>
                  Fans will be redirected from the event pages to this portal.
                  Fans can pay in this portal through a payment method and get
                  their tickets easily.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className="lazy"
                    data-src="/images/nft-ticketing-marketplace/icons/05.webp"
                    src="https://www.blockchainappfactory.com/images/nft-ticketing-marketplace/icons/05.webp"
                  />{" "}
                </div>
                <h4>Crypto Wallet</h4>
                <p>
                  Users in an NFT ticketing platform will have to link their
                  crypto wallets. This wallet will store cryptocurrencies and
                  NFT tickets to enter the particular event.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className="lazy"
                    data-src="/images/nft-ticketing-marketplace/icons/06.webp"
                    src="https://www.blockchainappfactory.com/images/nft-ticketing-marketplace/icons/06.webp"
                  />{" "}
                </div>
                <h4>Secondary Marketplace</h4>
                <p>
                  This portal will benefit fans who could not attend an event.
                  It helps them resell tickets, which will also benefit original
                  ticket creators through royalties.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-lg-offset-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className="lazy"
                    data-src="/images/nft-ticketing-marketplace/icons/07.webp"
                    src="https://www.blockchainappfactory.com/images/nft-ticketing-marketplace/icons/07.webp"
                  />{" "}
                </div>
                <h4>Notifications</h4>
                <p>
                  Users can receive notifications for events from artists,
                  genres, or languages they prefer. This helps them to book
                  their event tickets promptly if they are interested.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
