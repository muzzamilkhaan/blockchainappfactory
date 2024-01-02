import React from "react";
import { SecFive } from "./nftStreamingPlatformDevelopmentSolutionsComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section className="gray_bg common_spacing bg-2">
        <div className="container">
          <div className="row  text-center">
            <div className="sec_tit underline text-white">
              <H2 style={{ color: "#ffffff" }}>
                {" "}
                Possibilities of NFT in the streaming platform{" "}
              </H2>
            </div>{" "}
          </div>
          <div className="row  text-center mt20">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="partner-sec">
                {" "}
                <img
                  className="lazy"
                  data-src="/images/nfts/icon/facebook.svg"
                  width="60"
                  src="https://www.blockchainappfactory.com/images/nfts/icon/facebook.svg"
                />
                <h4>NFT for video streaming</h4>
                <p>
                  Content creators can create their videos in the form of
                  NFTs.The users can purchase the creator’s exclusive content as
                  NFTs which may have huge value in the market. The user can
                  resale the NFT or use it as collateral in exchange for
                  immediate liquidity.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="partner-sec">
                {" "}
                <img
                  className="lazy"
                  data-src="/images/nfts/icon/live.svg"
                  width="60"
                  src="https://www.blockchainappfactory.com/images/nfts/icon/live.svg"
                />
                <h4>NFT for Live streaming</h4>
                <p>
                  Users can subscribe with real cash or cryptocurrency to enjoy
                  the live streaming of celebrities exclusive content. This
                  facilitates the users to have ownership of their videos with
                  great revenues.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                className="partner-sec"
                //   style="    min-height: 376px;"
              >
                {" "}
                <img
                  className="lazy"
                  data-src="/images/nfts/icon/subscription.svg"
                  width="60"
                  src="https://www.blockchainappfactory.com/images/nfts/icon/subscription.svg"
                />
                <h4>NFT subscription platform</h4>
                <p>
                  NFT streaming platform is a profitable choice to achieve your
                  success in the NFT business. The platform allows the content
                  creators to create their video in the form of NFTs. This
                  allows the user to purchase the NFTs of the celebrities and
                  other social influencers. This platform which can also act as
                  a marketplace benefits the user, creator and the platform
                  owner with a substantial revenue stream.
                </p>
              </div>
            </div>
            <div className="col-lg-offset-left-2  col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                className="partner-sec"
                //    style="    min-height: 376px;"
              >
                {" "}
                <img
                  className="lazy"
                  data-src="/images/nfts/icon/medal.svg"
                  width="60"
                  src="https://www.blockchainappfactory.com/images/nfts/icon/medal.svg"
                />
                <h4>NFT as a reward</h4>
                <p>
                  Offering rewards for the content creators in the form of NFT
                  may benefit the content creators as well as the platform
                  owners financially. Rewards like coins, characters, skins can
                  be created as NFT. The user can purchase those rewards from
                  the open market and offer it to the content creators to show
                  their support. Content creators can use those rewards in their
                  profile to elevate their profile value and followers support.
                  The users can be benefited from the exclusive contents and by
                  communicating with the content creators by offering such NFT
                  rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
