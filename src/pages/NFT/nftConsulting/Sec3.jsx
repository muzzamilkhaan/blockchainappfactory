import React from "react";
import { SecThree } from "./nftConsultingComp";
import { H2, Button } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="mt10 lazy"
                data-src="/images/nft-consulting/Statics.webp"
                alt="NFT Consulting"
                title="NFT Consulting"
                src="https://www.blockchainappfactory.com/images/nft-consulting/Statics.webp"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="section-title text-left underline">
                <div className="sec_tit">
                  <H2> Statistics that Prove the Hype around NFTs </H2>
                </div>
              </div>
              <ul className="list text-justify">
                <li>
                  <i className="fa-regular fa-hand-point-right"></i>
                  In 2021 alone, more than US$ 41 billion worth of
                  cryptocurrencies was spent buying NFTs across marketplace
                  platforms.
                </li>
                <li>
                <i className="fa-regular fa-hand-point-right"></i>
                  Between the second and third quarters of 2021, the trade
                  volume of NFTs rose by 704%, which fuelled the NFT boom.
                </li>
                <li>
                <i className="fa-regular fa-hand-point-right"></i>
                  The top 5 countries in terms of the number of NFT adopters are
                  all in Asia (The Philippines, Thailand, Malaysia, UAE, and
                  Vietnam).
                </li>
                <li>
                <i className="fa-regular fa-hand-point-right"></i>
                  23% of millennials say that they collect NFT assets either as
                  a hobby or an investment.
                </li>
                <li>
                <i className="fa-regular fa-hand-point-right"></i>
                  Across 2021, the number of NFT artwork trades was more than 11
                  million.{" "}
                </li>
              </ul>
              <div className="cta_mine">
                <div className="d-flex justify-content-center flex-wrap gap-3 ">
                  <Button
                    btnContent="Connect with Whatsapp"
                    target="_blank"
                    to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                  />
                  <Button
                    btnContent="Talk with our Experts"
                    to="#newsletter-form-sec"
                  />
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </SecThree>
  );
};

export default Sec3;
