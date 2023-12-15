import React from "react";
import { SecSix } from "./nftArtMarketplaceDevelopmentComp";
import { H2, Button } from "../../../components";
const Sec6 = () => {
  return (
    <SecSix>
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
                  <div className="section-title underline mb20 mt-40 ">
                    <H2> Monetizing with the NFT Art </H2>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="strategies-items">
                  <div className="icons">
                    <img
                      className=""
                      data-src="/images/art/img_5.webp"
                      alt="NFT space offers royalty to the artist"
                      title="Royalty"
                      src="https://www.blockchainappfactory.com/images/art/img_5.webp"
                    />
                  </div>
                  <p>
                    <strong>Royalty</strong>
                    <br />
                    <br />
                    NFT space offers royalty to the artist. The royalty is
                    issued based on the recursive sale of the art, and the
                    creator or artist who created it will receive a royalty on
                    every sale. More importantly, the NFT artist will get the
                    credit for their work, which can’t be altered or tampered
                    with.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="strategies-items1">
                  <div className="icons">
                    <img
                      className=""
                      data-src="/images/art/img_4.webp"
                      art="Selling Art NFTs"
                      title="NFT Art Selling"
                      src="https://www.blockchainappfactory.com/images/art/img_4.webp"
                    />
                  </div>
                  <p>
                    <strong>Selling Art NFT</strong>
                    <br />
                    <br />
                    Selling Art NFT in the respective marketplace itself can
                    help the artist to make huge revenue, as the demand is
                    actually based on the quality of the work. With the auction
                    system, artists will get the real value benefit for their
                    work. NFT paved the way for making money for the Artist.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="strategies-items">
                  <div className="icons">
                    <img
                      className=""
                      data-src="/images/art/img_3.webp"
                      alt="Staking &amp; Selling NFTs"
                      title="Stake, and Sell NFTs"
                      src="https://www.blockchainappfactory.com/images/art/img_3.webp"
                    />
                  </div>
                  <p>
                    <strong>Staking and selling</strong>
                    <br />
                    <br />
                    As we know, NFT art is one of the most preferred forms of
                    NFT, and there is always a rise in the growth chart.
                    Utilizing the opportunity, investors can buy and stake the
                    art-based NFT in the popular NFT marketplaces, and they can
                    get an excellent cut from them by selling them at the right
                    time.
                  </p>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="text-center cta_mine">
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
                href="#newsletter-form-sec"
                className="nectar-button medium regular accent-color regular-button nec-btn"
              >
                <span>Talk with our Experts</span>
              </a>
            </div>{" "} */}
            <div className="d-flex justify-content-center  ">
              <Button btnContent="Talk with our Experts" />
            </div>
          </div>
        </div>
      </div>
    </SecSix>
  );
};

export default Sec6;
