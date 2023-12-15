import React from "react";
import { SecEleven } from "./nftMarketPlaceSportComp";
import { H2, H3 } from "../../../components";

const Sec11 = () => {
  return (
    <SecEleven>
      <section className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="font-wei"
                //   style="font-weight: 600;"
              >
                <H2>
                  Existing NFT marketplaces that adopted sports for their
                  journey in NFT{" "}
                </H2>
              </div>
              <p className="mt20">
                Few early adopters of NFT profound the business opportunity in
                sports and launched their unique NFT marketplace sports to reap
                its benefits.
              </p>
              <div className="mt100">
                <img
                  className=""
                  data-src="/images/spo/5.webp"
                  alt="NFT Sports Marketplace"
                  title="NFT marketplaces that adopted sports"
                  width="450"
                  height="auto"
                  src="https://www.blockchainappfactory.com/images/spo/5.webp"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box">
                <H3>NBA Top Shots</H3>
                <p>
                  Dapper labs launched a marketplace called NBA Top Shots in
                  Matic blockchain which exclusively offers the video clips and
                  trading cards of NBA players and their rare moments. This
                  created a huge craze among the audience to purchase the NFT
                  from their unique marketplace.{" "}
                </p>
              </div>
              <div className="box">
                <H3>Sorare</H3>
                <p>
                  Sorare is a unique marketplace for fantasy sports that picks
                  soccer as their niche to boost their revenue and offers a
                  virtual gaming experience in a fantasy league where the users
                  can buy players and teams in the form of NFTs to participate
                  in the scheduled leagues. The winning team earns the rewards
                  in the form of NFTs. This provides huge market visibility in
                  the crypto crowd who strive to participate and reap the
                  benefits.
                </p>
              </div>
              <div className="box">
                <H3>Dibbs</H3>
                <p>
                  An exclusive marketplace that offers trading cards of athletes
                  and other sports players that facilitates the traditional card
                  collection in the form of NFTs. The marketplace offers a
                  combination of card collection and fantasy sports where the
                  user can purchase NFT trading cards and build an exclusive
                  team to participate in the leagues. This multi-feature
                  integration offers a huge revenue stream and success in the
                  crypto market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecEleven>
  );
};

export default Sec11;
