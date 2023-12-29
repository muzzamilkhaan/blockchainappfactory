import React from "react";
import { SecFour } from "./nftLaunchpadDevelopmentServiceComp";
import { H2, Button } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="technologies1">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="sec_tit underline text-center text-white">
              <H2 style={{ color: "#fff" }}>
                {" "}
                Build an NFT Launchpad Similar to Existing Platforms{" "}
              </H2>
            </div>
            <p className="text-center white">
              NFTs have gained a solid reputation as a business model,
              necessitating the establishment of NFT launchpads that add up as a
              vital venture option for entrepreneurs. Our experts can build NFT
              launchpad applications tailored to your requirements in terms of
              features and technology.
            </p>
            <ul>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/nftb.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/nftb.webp"
                />
                <p className="white"></p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/magic-eden.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/magic-eden.webp"
                />
                <p className="white"></p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/nftpad.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/nftpad.webp"
                />
                <p className="white"></p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/okx.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/okx.webp"
                />
                <p className="white"></p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/balthazar.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/balthazar.webp"
                />
                <p className="white"></p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/nft-launch.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/nft-launch.webp"
                />
                <p className="white"></p>
              </li>
            </ul>

            <div className="clearfix"></div>
            <div className="text-center cta_mine txt">
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
    </SecFour>
  );
};

export default Sec4;
