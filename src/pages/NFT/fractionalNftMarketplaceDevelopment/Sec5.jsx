import React from "react";
import { SecFive } from "./fractionalNftMarketplaceDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <div className="intro_cnt common_spacing gray_bg fact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="section-title text-left">
                <div className="sec_tit fraction">
                  <div className="font-wei">
                    <H2> How Fractionalized NFT Marketplace works ? </H2>
                  </div>
                </div>
              </div>
              <br />
              <p className="mt10 text-left fract">
                The Non Fungible tokens are built with token standards that
                support and maintain the characteristics of NFTs. If Ethereum is
                the blockchain, the token standard followed is known as ERC-721
                or one similar to this., In the fractional NFT, the NFTs are
                locked with a smart contract. And then, the smart contract will
                split the NFT into various pieces as ERC-20 tokens. And Now,
                since ERC-20 is a fungible token, their own will represent the
                partial ownership of a particular NFT.
              </p>
              <p className="mt10 text-left fract">
                If the Fractional NFT is bought, the buyer will hold the
                fractional piece of NFT., which is a divided ERC-721 asset. This
                can be put up for sale in various types. Either they can set a
                period to sell the token, or they can be on the market till the
                last one of them is sold. The Fractional NFT marketplace will be
                the center for trading and staking the Fractional NFT, where it
                brought in various revolutionary changes in the typical NFT
                marketplaces.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <img
                data-src="/images/multi_chain/how-fractionalized.webp"
                className="mt10 mb10"
                alt="Fractionalized NFT Marketplace"
                title="Fractionalized NFT Marketplace"
                src="https://www.blockchainappfactory.com/images/multi_chain/how-fractionalized.webp"
              />
            </div>
          </div>
          <br />
          <div className="text-center mt-14">
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
            </div>
          </div>
        </div>
      </div>
    </SecFive>
  );
};

export default Sec5;
