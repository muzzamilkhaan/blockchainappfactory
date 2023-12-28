import React from "react";
import { SecSix } from "./nftMarketplaceForCelebritiesComp";
import { Button, H2 } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section id="Workflow" className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <div className="section-title underline mb20 text-center font-wei">
                <H2> Who are the “So-Called” Celebrities? </H2>
              </div>
              <p className="text-center">
                Any individual who already has a unique fan base in their social
                media or any other platforms will be eligible to have their own
                marketplace to stay connected and updated with the latest news
                of their leaders. Some of the examples include,
              </p>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-md-4">
              <div className="work-process">
                <div className="work-icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/cele/icons/celebrity.webp"
                    src="https://www.blockchainappfactory.com/images/cele/icons/celebrity.webp"
                  />{" "}
                </div>
                <h4>Movie Celebs</h4>
                <p>
                  When we hear about the word celebrity, the first thing that
                  comes to mind is actors/actresses. They will have a separate
                  fan base, and creating a marketplace for them would do
                  wonders.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-process">
                <div className="work-icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/cele/icons/model.webp"
                    src="https://www.blockchainappfactory.com/images/cele/icons/model.webp"
                  />{" "}
                </div>
                <h4>Fashion Models</h4>
                <p>
                  Fashion Models are inevitable when it comes to attracting the
                  crowd. Every photo and video of the models can be monetized,
                  and this marketplace is a fabulous boon to increase their
                  revenue.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-process">
                <div className="work-icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/cele/icons/musicians.webp"
                    src="https://www.blockchainappfactory.com/images/cele/icons/model.webp"
                  />{" "}
                </div>
                <h4> Musicians</h4>
                <p>
                  Musicians are real crowd-pullers; you have no other choice
                  other than to accept. The marketplace would pull in the music
                  lovers and would create a remarkable chance for them to own
                  the immutable rights for their favorite albums.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-process">
                <div className="work-icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/cele/icons/artist.webp"
                    src="https://www.blockchainappfactory.com/images/cele/icons/artist.webp"
                  />{" "}
                </div>
                <h4>Artists</h4>
                <p>
                  Art has a significant contribution in making NFTs reach
                  worldwide. To all such artists who have colossal supporters,
                  this is an incredible chance to further climb up the ladder of
                  success.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-process">
                <div className="work-icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/cele/icons/gamer.webp"
                    src="https://www.blockchainappfactory.com/images/cele/icons/gamer.webp"
                  />{" "}
                </div>
                <h4>Gamers</h4>
                <p>
                  Gamers in current times are highly regarded as esporting has
                  gained momentum as a professional option. They can reach their
                  fellow gaming patrons through these platforms by offering
                  exclusive in-game NFTs.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-process">
                <div className="work-icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/cele/icons/wallet.webp"
                    src="https://www.blockchainappfactory.com/images/cele/icons/wallet.webp"
                  />{" "}
                </div>
                <h4>Sports Personalities</h4>
                <p>
                  Sporting personalities have been popular across history for
                  their achievements and they have massive fan followings. Their
                  relationship with loyal fans can be enhanced by selling
                  special NFT assets associated with their sporting life.
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
              <div className="cta_mine">
                <div className="d-flex justify-content-center flex-wrap gap-3 ">
                  <Button
                    btnContent="Connect with Whatsapp"
                    target="_blank"
                    to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                  />
                  <Button
                    btnContent="Talk with our Experts"
                    to="#newsletter-form-sec"
                  />
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </SecSix>
  );
};

export default Sec6;
