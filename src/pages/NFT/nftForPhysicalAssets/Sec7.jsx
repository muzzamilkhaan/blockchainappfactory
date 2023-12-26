import React from "react";
import { SecSeven } from "./nftForPhysicalAssetsComp";
import { Button, H2 } from "../../../components";
const Sec7 = () => {
  return (
    <SecSeven>
      <div
        className="strategies"
        // style="z-index: 1; position: relative;"
      >
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit p-4">
              <div className="section-title underline mb20">
                <H2> How is Physical NFT different from Digital NFT? </H2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-lg-12 col-sm-12 col-xs-12 section-heade aos-init aos-animate mt-20 right-content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="strategies-items">
                  <div className="icons">
                    <img
                      className="mt20"
                      data-src="/images/physical/digi.webp"
                      alt="NFT for Physical Assets"
                      title="NFT for Physical Assets"
                      src="https://www.blockchainappfactory.com/images/physical/digi.webp"
                    />
                  </div>
                  <p className="mt10">
                    <strong>Digital Asset</strong>
                    <br />
                    <br />
                    Intangible assets or the assets that are available only in
                    the Digital medium occupy a major role in NFTs development
                    phase. At the initial stage, NFTs were just for the people
                    who prefer to collect the collectible. But the NFTs Unique
                    nature and sturdy security made it expand in all possible
                    ways. Now NFTs are used in various industries and play
                    various roles. NFTs are mainly utilized by the art and
                    creator-based community, where NFTs give them an opportunity
                    to tokenize their work and monetize them.
                    <br className="mt-10" /> Other NFTs created a revolution in
                    the gaming industry where NFT gave the taste of a
                    decentralized gaming experience to gamers who were tired of
                    the centralized games and their servers. NFTs in the gaming
                    industries offer the user to monetize their game assets in
                    the real world. AR and VR assets can also be converted into
                    NFT. Every token generated with digital assets will be
                    enrolled with a unique value, and they can be fetched from
                    anywhere in the world anytime.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="strategies-items1">
                  <div className="icons">
                    <img
                      className="mt30"
                      data-src="/images/physical/car.webp"
                      alt="Physical NFT Marketplace"
                      title="Physical NFT Marketplace"
                      src="https://www.blockchainappfactory.com/images/physical/car.webp"
                    />
                  </div>
                  <p className="mt10">
                    <strong> Physical Asset</strong>
                    <br />
                    <br />
                    NFTs or unique tokens can also be made for real-world
                    physical assets like a painting or a house or a vehicle or
                    anything that exists physically. These NFTs can be presented
                    physically in the form of a barcode or a tag or any other
                    device in which it can be encoded and can be traded in place
                    of a physical item. As the world is claiming ownership of
                    its digital asset, a new trend is commencing in regulating
                    the NFT protocol in real life as well. Physical NFT’s are
                    starting to bloom in our society. It is revolutionising the
                    concept of trusting a third party without the involvement of
                    the intermediary. People are claiming the rights of their
                    ownership and authenticating the identity or any fraudulent
                    transactions that happened in regards to their assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            {/* <style type="text/css">
.nec-btn{
     position: relative !important;
    color:#fff !important;
    border-radius:30px !important;
    font-size: 11px;
    text-transform: uppercase !important;
    transform: scale(1.1,1.1) !important;
    transition:all 0.3s ease-out 0s !important;
    background: #47b475 !important;
}
.nec-btn:hover{
    transform: scale(1,1) !important;
    color:#fff !important;
    background:#00a9e2!important;
}
a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin-bottom: 15px!important;
    display: inline-block;
    margin-right: 26px!important;
}
.contentall a, a.home-talk-experts{
	padding: 10px 20px !important;
}
</style> */}
            <div className="d-flex justify-content-center flex-wrap gap-3 ">
              <Button
                btnContent="Connect with Whatsapp"
                target="_blank"
                to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
              />
            </div>
          </div>
        </div>
      </div>
    </SecSeven>
  );
};

export default Sec7;
