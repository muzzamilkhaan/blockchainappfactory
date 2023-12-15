import React from "react";
import { SecFour } from "./nftMarketPlaceSportComp";
import { H2, Button } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div
        className="strategies"
        // style="z-index: 1; position: relative;"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 col-lg-12 col-sm-12 col-xs-12 section-heade aos-init aos-animate mt-20 right-content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="section-title text-center">
                <div className="sec_tit mb20">
                  <div className="section-title underline mb20 font-wei mt-40">
                    <H2> Tokenizable assets in Sport NFT Marketplace </H2>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="strategies-items">
                  <div className="icons">
                    <img
                      className=""
                      data-src="/images/spo/6.webp"
                      alt="Tokenizable Assets In Sport NFT Marketplace - Trading cards"
                      title="Trading cards"
                      src="https://www.blockchainappfactory.com/images/spo/6.webp"
                    />
                  </div>
                  <p>
                    <strong>Trading cards</strong>
                    <br />
                    <br />
                    Trading cards are the huge traffic generators towards the
                    platform which attracts huge crowds for the unique
                    collection of player’s cards and images. Collecting the
                    traditional trading cards in the form of NFT keeps your
                    collection unique and also increases your asset value in the
                    marketplace, which is also fun to own a unique collection of
                    NFT cards.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="strategies-items1">
                  <div className="icons">
                    <img
                      className=""
                      data-src="/images/spo/7.webp"
                      alt="Tokenizable Assets In Sport NFT Marketplace - Accessories"
                      title="Accessories"
                      src="https://www.blockchainappfactory.com/images/spo/7.webp"
                    />
                  </div>
                  <p>
                    <strong>Accessories</strong>
                    <br />
                    <br />
                    Players accessories like jersey, shoes, wristbands, caps,
                    coolers receive a huge invitation from the audience. These
                    are a unique collectable that manages a stable increase of
                    its value in real life. Converting it as NFTs offers huge
                    revenue and ownership rights for your assets with royalty.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="strategies-items">
                  <div className="icons">
                    <img
                      className=""
                      data-src="/images/spo/9.webp"
                      alt="Tokenizable Assets In Sport NFT Marketplace - Memorabilia"
                      title="Memorabilia"
                      src="https://www.blockchainappfactory.com/images/spo/9.webp"
                    />
                  </div>
                  <p>
                    <strong>Memorabilia</strong>
                    <br />
                    <br />
                    Sports memorabilia such as awards, trophies, autographs and
                    sports equipment of exclusive players are widely accepted
                    and in-demanding unique assets in auction houses.Tokenizing
                    such a collectable into NFTs offers substantial benefits and
                    unimaginable fortunes for your NFTs.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="strategies-items1">
                  <div className="icons">
                    <img
                      className=""
                      data-src="/images/spo/8.webp"
                      alt="Tokenizable Assets In Sport NFT Marketplace - Video clips"
                      title="Video clips"
                      src="https://www.blockchainappfactory.com/images/spo/8.webp"
                    />
                  </div>
                  <p>
                    <strong>Video clips</strong>
                    <br />
                    <br />
                    Tokenizing Exclusive Video clips and photographs of players
                    into NFTs gains huge traction to the platform. Few early
                    adopters have launched their marketplace for a particular
                    sport and experiencing huge success in the trend of NFTs.
                  </p>
                </div>
              </div>
              <div className="clearfix"></div>
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
                {/* <div className="cta_mine">
                  <a
                    rel="nofollow"
                    className="nectar-button medium regular accent-color regular-button nec-btn"
                    target="_blank"
                    href="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                    data-color-override="false"
                    data-hover-color-override="false"
                    data-hover-text-color-override="#fff"
                  >
                    <span>Connect with Whatsapp</span>
                  </a>
                  <a
                    href="#newsletter-form-sec"
                    className="nectar-button medium regular accent-color regular-button nec-btn"
                  >
                    <span>Talk with our Experts</span>
                  </a>
                </div> */}
                <div className="d-flex justify-content-center flex-wrap gap-3 p-4 ">
                  <Button
                    btnContent="Connect with Whatsapp"
                    target="_blank"
                    to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                  />
                  <Button btnContent="Talk with our Experts" />
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
