import React from "react";
import { SecFour } from "./nftArtDesignServicesComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="technologies gray_bg" style={{ background: "#eee" }}>
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="sec_tit underline text-center">
              <H2> Our NFT Design Agency Creates Appealing Visuals for </H2>
            </div>
            <p
              className="text-center "
              // style="font-size: 16px;"
            >
              Experienced artists and graphic designers from our NFT design
              agency work tirelessly to bring NFTs that intrigue people visually
              and represent your brand’s theme at first sight.
            </p>
            <ul>
              <li>
                <img
                  className=""
                  data-src="images/nft-art-design-services/icons/nft-gaming.webp"
                  src="https://www.blockchainappfactory.com/images/nft-art-design-services/icons/nft-gaming.webp"
                />
                <p className="white">Gaming Characters </p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nft-art-design-services/icons/artworks.webp"
                  src="https://www.blockchainappfactory.com/images/nft-art-design-services/icons/artworks.webp"
                />
                <p className="white">Artworks </p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nft-art-design-services/icons/music.webp"
                  src="https://www.blockchainappfactory.com/images/nft-art-design-services/icons/music.webp"
                />
                <p className="white">Music Clips</p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nft-art-design-services/icons/video.webp"
                  src="https://www.blockchainappfactory.com/images/nft-art-design-services/icons/video.webp"
                />
                <p className="white">Video Moments</p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nft-art-design-services/icons/generative.webp"
                  src="https://www.blockchainappfactory.com/images/nft-art-design-services/icons/generative.webp"
                />
                <p className="white">Generative Images</p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nft-art-design-services/icons/metaverse.webp"
                  src="https://www.blockchainappfactory.com/images/nft-art-design-services/icons/metaverse.webp"
                />
                <p className="white">Metaverse Avatars</p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nft-art-design-services/icons/fashion.webp"
                  src="https://www.blockchainappfactory.com/images/nft-art-design-services/icons/fashion.webp"
                />
                <p className="white">Fashion Accessories</p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nft-art-design-services/icons/collectibles.webp"
                  src="https://www.blockchainappfactory.com/images/nft-art-design-services/icons/collectibles.webp"
                />
                <p className="white">Digital Collectibles</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
