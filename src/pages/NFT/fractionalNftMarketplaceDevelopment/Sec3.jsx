import React from "react";
import { SecThree } from "./fractionalNftMarketplaceDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 mb14">
              <img
                src="https://www.blockchainappfactory.com/images/multi_chain/what-is-nft.webp"
                className="mt10 mb10"
                alt="What Is NFT?"
                title="What Is NFT?"
              />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="section-title  text-left">
                <div className="sec_tit fraction">
                  <div className="fact font-wei">
                    <H2 style={{ color: "#161515" }}>
                      {" "}
                      NFT - What is it? Why is the hype so high?{" "}
                    </H2>
                  </div>
                </div>
              </div>
              <p className="mt10 text-left fract">
                NFT is nothing but a unique physical or digital asset that is
                being tokenized with unique standards. These tokenized assets
                will have unique characteristics and are completely different
                from each other. These Non Fungible Tokens are inseparable or
                indivisible. They are built along the blockchain networks to
                provide efficiency and security.{" "}
              </p>
              <p className="mt10 text-left fract">
                They do have their own token standard to maintain this
                fungibility, and people tend to provide an extensive preference
                to the NFTs for various reasons, which include ownership
                authenticity, tamper-proof, and privacy protection. Initially,
                NFT is considered as collectible that only people who collect
                collectibles liked or preferred. But in a very short time, the
                NFTs application list went dense. They serve as a support for
                various purposes for various kinds of people.
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
