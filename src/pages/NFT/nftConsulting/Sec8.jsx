import React from "react";
import { SecEight } from "./nftConsultingComp";
import { H2 } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <section className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="section-title text-center underline">
              <div className="sec_tit">
               <H2> NFT Segments Our Consulting Services Offer </H2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/nft-consulting/artwork.webp"
                    src="https://www.blockchainappfactory.com/images/nft-consulting/artwork.webp"
                  />{" "}
                </div>
                <h4>Artwork </h4>
                <p>
                  Registering authentic artworks on blockchains as NFTs and
                  selling them on marketplaces without copyright hassles.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/nft-consulting/video-console.webp"
                    src="https://www.blockchainappfactory.com/images/nft-consulting/video-console.webp"
                  />{" "}
                </div>
                <h4>In-game Items</h4>
                <p>
                  Selling tradable in-game assets to gamers to increase
                  competition and enable a thriving in-game economy.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/nft-consulting/headphones.webp"
                    src="https://www.blockchainappfactory.com/images/nft-consulting/headphones.webp"
                  />{" "}
                </div>
                <h4>Music </h4>
                <p>
                  Albums can be tokenized and sold to fans directly without
                  depending on centralized streaming services.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/nft-consulting/photo.webp"
                    src="https://www.blockchainappfactory.com/images/nft-consulting/photo.webp"
                  />{" "}
                </div>
                <h4>Photography </h4>
                <p>
                  Photographs can be sold by photographers to earn recognition
                  and monetary returns more than ever.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/nft-consulting/running.webp"
                    src="https://www.blockchainappfactory.com/images/nft-consulting/running.webp"
                  />{" "}
                </div>
                <h4>Sports Collectibles</h4>
                <p>
                  Sporting memorabilia can be registered as NFTs to ensure
                  authenticity and sold to enthusiastic fans.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/nft-consulting/ticket.webp"
                    src="https://www.blockchainappfactory.com/images/nft-consulting/ticket.webp"
                  />{" "}
                </div>
                <h4>Event Tickets</h4>
                <p>
                  Tickets can be digitized to ensure that all passionate fans
                  can participate in the events.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-lg-offset-4 col-md-4 col-sm-6 col-xs-12">
              <div className="feature-items">
                <div className="feature_icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/nft-consulting/patent.webp"
                    src="https://www.blockchainappfactory.com/images/nft-consulting/patent.webp"
                  />{" "}
                </div>
                <h4>Patents </h4>
                <p>
                  Patent ownerships for inventions can be transferred over the
                  blockchain, and records can be transparent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecEight>
  );
};

export default Sec8;
