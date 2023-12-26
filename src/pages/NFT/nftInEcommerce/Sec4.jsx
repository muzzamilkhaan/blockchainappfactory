import React from "react";
import { SecFour } from "./nftInEcommerceComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="common_spacing">
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <H2> NFT - The story behind Invincibility </H2>
            </div>
          </div>
          <p className="text-center">
            The term NFT is now one of the most influential in the crypto space.
            The exclusiveness of the NFT is another most important highlight for
            the massive growth of the market. Every day when the NFT is filled
            with efficiency and exclusiveness. The assets, which are both
            tangible and intangible, can be minted into an NFT with the
            Blockchain networks. The major advantage is the Exclusiveness of the
            NFT starts with the Token standard used. Token standards used here
            is also exclusive where the NFTs need ERC-721 or similar token
            standard to express their characteristics such as Uniqueness and
            indivisibility,
          </p>
          <p className="text-center">
            Here Every NFT is different, and they don’t resemble each other
            major key characteristics of the NFTs are,
          </p>
          <div className="row mt50">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="awesome-features-wrapper1 text-center mb-30">
                <div className="awesome-features-icon-img">
                  <img
                    className=""
                    data-src="/images/eco/icon/owner.webp"
                    alt="authenticity"
                    title="authenticity"
                    src="https://www.blockchainappfactory.com/images/eco/icon/owner.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <h3>Ownership authenticity</h3>
                  <p>
                    The ownership authenticity is the major perk, and a unique
                    characteristic of the NFT is that there is no additional
                    need for aid to show the authenticity. This brought many
                    people into crypto space.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="awesome-features-wrapper1 text-center mb-30">
                <div className="awesome-features-icon-img">
                  {" "}
                  <img
                    className=""
                    data-src="/images/eco/icon/decentralized.webp"
                    alt="decentralized"
                    title="decentralized"
                    src="https://www.blockchainappfactory.com/images/eco/icon/decentralized.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <h3>Decentralized </h3>
                  <p>
                    The blockchain in the NFT will establish a decentralized
                    structure, where every move made and every data produced
                    will have no centralized authority to monitor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="awesome-features-wrapper1 text-center mb-30">
                <div className="awesome-features-icon-img">
                  {" "}
                  <img
                    className=""
                    data-src="/images/eco/icon/smart-contracts.webp"
                    alt="smart contracts"
                    title="smart contracts"
                    src="https://www.blockchainappfactory.com/images/eco/icon/smart-contracts.webp"
                  />{" "}
                </div>
                <div className="awesome-features-text">
                  <h3>Equipped with the smart contracts</h3>
                  <p>
                    The smart contracts are programmed to perform the tasks
                    without any kickstart from the manual trigger and never
                    stops or allows human intrusion or any other intrusion.
                    Smart contracts automate the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
