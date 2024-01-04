import React from "react";
import { SecSeven } from "./p2eNftGameDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <div className="technologies1">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="sec_tit underline text-center text-white">
              <H2 style={{ color: "#fff" }}>
                {" "}
                Make Your P2E NFT Game as Famous as Existing Platforms{" "}
              </H2>
            </div>
            <p className="text-center white">
              P2E NFT gaming is becoming a favored business model, and creating
              a game based on it can be ideal right now for aspiring businesses.
              With our expertise in P2E NFT game development, you gain the
              utmost benefits by launching an app similar to famous platforms.
            </p>
            <ul>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/sandbox.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/sandbox.webp"
                />
                <p className="white">The Sandbox</p>
              </li>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/axieinfinity.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/axieinfinity.webp"
                />
                <p className="white">Axie Infinity</p>
              </li>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/splinterlands.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/splinterlands.webp"
                />
                <p className="white"></p>
              </li>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/gods.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/gods.webp"
                />
                <p className="white">Gods Unchained</p>
              </li>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/illuvium.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/illuvium.webp"
                />
                <p className="white">Illuvium</p>
              </li>
              <li>
                <img
                  className="lazy"
                  data-src="images/nftm/icons/decentraland.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/decentraland.webp"
                />
                <p className="white">Decentraland</p>
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
    </SecSeven>
  );
};

export default Sec7;
