import React from "react";
import { SecTwo } from "./nftMarketPlaceSportComp";
import { H2, Button } from "../../../components";
const Sec2 = () => {
  return (
    <SecTwo>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit">
              <div className="font-wei">
                <H2> Magnifying Sports NFTs </H2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <p className="text-center mt20 para">
                Blockchain- A futuristic technology ladders the growth of the
                entire society across the globe. Its significant features and
                benefits support the modernization of the environment through
                technology in versatile industries. Its magnificent inception of
                NFT in the crypto ecosystem plays a major role in offering
                investment opportunities in the digital medium. The first NFT
                standard was introduced by the pioneers of token development,
                Ethereum. The NFT standards act as a digital representation of
                unique collectibles in a decentralized medium, which adds
                intrinsic value for your unique assets and immediate liquidity.{" "}
              </p>
              <p className="text-center para">
                The abundant services offered by NFTs attracts a huge audience
                towards the unique platform to buy, sell and bid for the unique
                collectibles. The huge traction towards the platform attracts
                investors and business developers towards the development of NFT
                for its timely rewards. The value of NFT may spike to millions
                depending on the scarcity and audience interest. The
                non-fungible tokens' unique nature offers the opportunity for
                creators, artists, musicians and social figures to create their
                work into NFTs for huge benefits.{" "}
              </p>
              <p className="text-center para">
                While the unique attraction seeking platform evolves multiple
                industries towards a better revenue stream, sports is not an
                exception to manipulate the futuristic technology to reap the
                benefits of a decentralized environment. Develop your sports NFT
                marketplace now!
              </p>
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
            {/* <div className="cta_mine">
              <a
                href="#newsletter-form-sec"
                className="nectar-button medium regular accent-color regular-button nec-btn"
              >
                <span>Talk with our Experts</span>
              </a>
            </div> */}
            <div className="d-flex justify-content-center  ">
              <Button btnContent="Talk with our Experts" />
            </div>
          </div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
