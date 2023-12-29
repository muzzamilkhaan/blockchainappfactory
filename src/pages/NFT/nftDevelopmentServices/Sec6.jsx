import React from "react";
import { SecSix } from "./nftDevelopmentServicesComp";
import { H2, Button } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <div className="technologies1">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="sec_tit underline text-center text-white">
              <H2 style={{ color: "#fff" }}>
                Launch Your NFT Project Like the Famous Ones to Gain Popularity{" "}
              </H2>
            </div>
            <p className="text-center white">
              With NFTs gaining momentum as a virtual asset className in the
              increasingly digital world, launching your own NFT project will be
              the perfect starting point to take the Web3 path. Work with our
              experts to develop and unveil a unique project supplemented with
              intriguing visuals.
            </p>
            <ul>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/bayc.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/bayc.webp"
                />
                <p className="white">Bored Ape Yacht Club</p>
              </li>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/pudgy.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/pudgy.webp"
                />
                <p className="white">Pudgy Penguins</p>
              </li>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/mayc-token.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/mayc-token.webp"
                />
                <p className="white">Mutant Ape Yacht Club</p>
              </li>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/degods.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/degods.webp"
                />
                <p className="white">DeGods</p>
              </li>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/azuki.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/azuki.webp"
                />
                <p className="white">Azuki</p>
              </li>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/moonbirds.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/moonbirds.webp"
                />
                <p className="white">Moonbirds</p>
              </li>
            </ul>
            <div className="clearfix"></div>
            <div className="text-center cta_mine txt">
              {" "}
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
    </SecSix>
  );
};

export default Sec6;
