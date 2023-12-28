import React from "react";
import { SecThree } from "./phygitalNftMarketplaceComp";
import { H2, Button } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="col-lg-6">
            <div className="section-title text-left underline">
              <div className="sec_tit">
                <H2> Phygital NFT Marketplace Development Services</H2>
              </div>
            </div>
            <p className="mt10 mb10 text-justify">
              Phygital NFT marketplace development has evolved across the years
              since redeemable NFTs were introduced. Such platforms shut
              naysayers’ views on NFTs as they exhibited some real-world use.
              With time, phygital NFTs also have grown to enable simultaneous
              functionality, which became revolutionary as far as the Web3 world
              is concerned. So, create a phygital NFT marketplace to stay on a
              trend that will remain for long.
            </p>
            <p className="mt10 mb10 text-justify">
              Our experts have nailed the skill of phygital NFT marketplace
              development through access to advanced technologies and Web3
              forums. We are a huge family of skilled developers, designers,
              testers, and marketers who can craft perfect phygital NFT
              marketplace solutions for you that satisfy all your business needs
              quickly and affordably.{" "}
            </p>
            <div className="text-left">
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
          <div className="col-lg-6 text-center">
            <img
              src="https://www.blockchainappfactory.com/images/phygital-nft-marketplace/img---2.webp"
              className=""
            />{" "}
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
