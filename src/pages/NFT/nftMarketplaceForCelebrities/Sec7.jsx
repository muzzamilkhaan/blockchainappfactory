import React from "react";
import { SecSeven } from "./nftMarketplaceForCelebritiesComp";
import { H2, Button } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <div className="service-area section-padding-top" id="about-page">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <div className="section-title underline mb20 text-center font-wei mt30">
                <H2> Various Celebrity NFT Marketplace Models </H2>
              </div>{" "}
            </div>
          </div>
          <div className="row text-center mt20">
            <div className="container container-center">
              <div
                className="col-xs-12 col-sm-4 .equalize text-left wow fadeInUp"
                data-wow-delay="0.3s"
                // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
              >
                <div className="service-box">
                  <div className="service-icon">
                    {" "}
                    <img
                      className=""
                      data-src="/images/cele/icons/celebrities.webp"
                      src="https://www.blockchainappfactory.com/images/cele/icons/celebrities.webp"
                    />{" "}
                  </div>
                  <h3 className="service-title">
                    NFT Marketplace for Celebrities
                  </h3>
                  <p>
                    An NFT marketplace for celebrities is where superstars in
                    various fields can list their NFT assets for sale. These
                    platforms help celebrities establish a strong bonding with
                    their fans with access to exclusive benefits, along with
                    earning passive income through royalty for secondary trades.
                  </p>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 .equalize text-left wow fadeInUp"
                data-wow-delay="0.5s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;"
              >
                <div className="service-box">
                  <div className="service-icon">
                    {" "}
                    <img
                      className=""
                      data-src="/images/cele/icons/actor.webp"
                      src="https://www.blockchainappfactory.com/images/cele/icons/actor.webp"
                    />{" "}
                  </div>
                  <h3 className="service-title">NFT Marketplace for Actors</h3>
                  <p>
                    An NFT marketplace for actors helps film stars to become
                    closer with their loyal fans through selling tokenized
                    images, video clips, movie posters and their own creative
                    works such as artworks and poems. These platforms can be
                    used as marketing weapons during new releases by listing
                    exclusive content.
                  </p>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 .equalize text-left wow fadeInUp"
                data-wow-delay="0.7s"
                // style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;"
              >
                <div className="service-box">
                  <div className="service-icon">
                    {" "}
                    <img
                      className=""
                      data-src="/images/cele/icons/artists.webp"
                      src="https://www.blockchainappfactory.com/images/cele/icons/artists.webp"
                    />{" "}
                  </div>
                  <h3 className="service-title">NFT Marketplace for Artists</h3>
                  <p>
                    An NFT marketplace for artists helps creators to exhibit and
                    sell their tokenized artworks (physical or digital). These
                    platforms can either be open or curated for listing art
                    NFTs. They also allow artists to earn royalties on resales
                    and fractional ownership to lower the entry barriers for
                    buyers.
                  </p>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 .equalize text-left wow fadeInUp"
                data-wow-delay="0.7s"
                // style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;"
              >
                <div className="service-box">
                  <div className="service-icon">
                    {" "}
                    <img
                      className=""
                      data-src="/images/cele/icons/musician.webp"
                      src="https://www.blockchainappfactory.com/images/cele/icons/musician.webp"
                    />{" "}
                  </div>
                  <h3 className="service-title">
                    NFT Marketplace for Musicians
                  </h3>
                  <p>
                    An NFT marketplace for musicians helps them to sell their
                    songs as whole or fractional NFTs to loyal fans. These
                    platforms can help connect musicians and fans better by
                    offering exclusive invites and royalties for listening to
                    tokenized music albums using streaming service platforms.{" "}
                  </p>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 .equalize text-left wow fadeInUp"
                data-wow-delay="0.7s"
                // style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;"
              >
                <div className="service-box">
                  <div className="service-icon">
                    {" "}
                    <img
                      className=""
                      data-src="/images/cele/icons/models.webp"
                      src="https://www.blockchainappfactory.com/images/cele/icons/models.webp "
                    />{" "}
                  </div>
                  <h3 className="service-title">
                    NFT Marketplace for Fashion Models
                  </h3>
                  <p>
                    An NFT marketplace for fashion models is where fashion icons
                    can sell their images, signed posters, memorabilia, and
                    video clips as NFTs to their followers. These platforms can
                    help models establish themselves in the community through
                    their fan base, which also benefits from these applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="cta_mine mb30">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecSeven>
  );
};

export default Sec7;
