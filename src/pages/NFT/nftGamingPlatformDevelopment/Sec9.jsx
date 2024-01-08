import React from "react";
import { SecNine } from "./nftGamingPlatformDevelopmentComp";
import { H2 } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <div className="technologies1">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="sec_tit underline text-center text-white">
              <H2 style={{ color: "#fff" }}>
                {" "}
                Find Inspiration for Your NFT Gaming Platform from Famous Apps{" "}
              </H2>
            </div>
            <p className="text-center white">
              Planning to launch your own NFT gaming platform to garner
              humungous traction in no time? Tap into the working models of
              famous NFT-based games to make the most of your new venture to
              gain the desired success.
            </p>
            <ul>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/motodex.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/motodex.webp"
                />
                <p className="white" />
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/sweateconomy.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/motodex.webp"
                />
                <p className="white" />
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/farmers-world.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/farmers-world.webp"
                />
                <p className="white" />
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/5tars.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/5tars.webp"
                />
                <p className="white" />
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/alienworld.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/alienworld.webp"
                />
                <p className="white" />
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/solitaire.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/solitaire.webp"
                />
                <p className="white">Solitaire Blitz</p>
              </li>
            </ul>
            <div className="clearfix" />
            {/* <div className="text-center cta_mine txt mb40"> */}
              {" "}
              <div className="btn-button">
                <button className="neonShadow" style={{marginBottom:"20px"}}>Connect with whatsapp</button>
                <button className="neonShadow">Take your First Step!</button>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </SecNine>
  );
};

export default Sec9;
