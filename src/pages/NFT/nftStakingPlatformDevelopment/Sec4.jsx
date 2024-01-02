import React from "react";
import { SecFour } from "./nft-staking-platform-developmentComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="common_spacing pad">
        <div className="container">
          <div className="section-title text-center m-b-30">
            <div className="sec_tit underline text-center">
              <H2> Business possibilities </H2>
            </div>
            <p className="text-center" style={{ color: "#555555" }}>
              The growth of the NFT became possible with the instances of NFT,
              which made their own fortune in the crypto market. The NFT has
              various business models in it to serve the growth of the NFT
              market. NFT marketplaces have a huge contribution in the NFTs
              fortune market, as the different types of NFT marketplace with a
              huge set of audiences are doing their own billion-dollar worth
              business in a very short time. Here are some of the major types of
              NFT that decide the marketplace classNameification and which have
              great potential for NFT staking.{" "}
            </p>
          </div>
          <div className="row flip-box-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="white-flip-box flip-box">
                <div className="flip-icon-outer">
                  {" "}
                  <img
                    className=""
                    data-src="/images/staking/icon/canvas.webp"
                    width="60"
                    src="https://www.blockchainappfactory.com/images/staking/icon/canvas.webp"
                  />{" "}
                </div>
                <h5 className="flip-tit">Art-based NFT </h5>
                <p className="flip-txt">
                  {" "}
                  The Art-based NFTs are created by the designer or artist,
                  these arts are converted into NFT, and they are put for sale
                  in the NFT marketplace. Mostly in the Art-based NFT
                  marketplaces. For the creators, every time the art is sold,
                  the sale fetches a royalty for the creators.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="white-flip-box flip-box">
                <div className="flip-icon-outer">
                  {" "}
                  <img
                    className=""
                    data-src="/images/staking/icon/assets.webp"
                    width="60"
                    src="https://www.blockchainappfactory.com/images/staking/icon/assets.webp"
                  />{" "}
                </div>
                <h5 className="flip-tit">Asset-based NFT</h5>
                <p className="flip-txt">
                  The NFT that is created based on assets that are available
                  physically or digitally is considered to be the asset-based
                  NFT. The assets vary from real estate to virtual assets,
                  anything can be minted in NFT, and they are listed in the
                  relevant NFT marketplace.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="white-flip-box flip-box">
                <div className="flip-icon-outer">
                  {" "}
                  <img
                    className=""
                    data-src="/images/staking/icon/console.webp"
                    width="60"
                    src="https://www.blockchainappfactory.com/images/staking/icon/console.webp"
                  />{" "}
                </div>
                <h5 className="flip-tit">Games and Sports based NFT </h5>
                <p className="flip-txt">
                  {" "}
                  This is the most noticed and influential NFTs, as they are
                  minted based on their real players and characters. These NFTs
                  have huge demand in the NFT space. They already have a record
                  of making 100 million dollars sales in fractions of seconds.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="white-flip-box flip-box">
                <div className="flip-icon-outer">
                  {" "}
                  <img
                    className=""
                    data-src="/images/staking/icon/automation.webp"
                    width="60"
                    src="https://www.blockchainappfactory.com/images/staking/icon/automation.webp"
                  />{" "}
                </div>
                <h5 className="flip-tit">Automated NFT </h5>
                <p className="flip-txt">
                  The Automated NFT or generated NFTs are other NFT types that
                  have more influence in the market and the audience. There are
                  different classNameification generative arts based on their
                  theme and their representation like pixels. They have a huge
                  audience in the crypto space.`
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
