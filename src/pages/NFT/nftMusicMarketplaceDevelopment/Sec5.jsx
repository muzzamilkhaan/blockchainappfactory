import React from "react";
import { SecFive } from "./nftMusicMarketplaceDevelopmentComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section className="whychoose_sec common_spacing pad50 gray_bg">
        <div
          className="container"
          // style="padding:20px;"
        >
          <div className="row">
            <div className="section-title underline text-center">
              <div className="sec_tit">
                <H2> Benefits of our Music NFT Marketplace</H2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ul className="text-left">
                <li>
                  <div className="icon_img">
                    <img
                      className="lazy"
                      data-src="/images/nft_music/icon/live-streaming.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_music/icon/live-streaming.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      <strong>Royalty</strong>
                    </p>
                    <p style={{ color: "#555555" }}>
                      Buying an NFT can take fans and artists on a sweet ride as
                      the song or album they bought NFT for will be a stream of
                      generating profit for many years down the road.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className="lazy"
                      data-src="/images/nft_music/icon/audience.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_music/icon/audience.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      <strong>Marketplace audience</strong>
                    </p>
                    <p style={{ color: "#555555" }}>
                      Selecting a marketplace with a large number of active
                      users can provide a new and far-fetched listening base for
                      the artist and hence generate handsome revenue.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className="lazy"
                      data-src="/images/nft_music/icon/fans.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_music/icon/fans.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      <strong>New fanbase</strong>
                    </p>
                    <p style={{ color: "#555555" }}>
                      As discussed above, selecting a widely known platform can
                      help a creator to grow exponentially as he/she now has a
                      thousand new pairs of ears to perform to.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className="lazy"
                      data-src="/images/nft_music/icon/contract.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_music/icon/contract.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      <strong>Legacy</strong>
                    </p>
                    <p style={{ color: "#555555" }}>
                      The marketplace can help an artist live on for generations
                      as the minted NFT will be there for the long run and can
                      help the family financially in doing so.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img
                className="lazy br hgh"
                data-src="/images/nft_music/nft-coin.webp"
                alt="NFT Music Marketplace Development"
                title="NFT Music Marketplace Development"
                src="https://www.blockchainappfactory.com/images/nft_music/nft-coin.webp"
              />
            </div>
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
