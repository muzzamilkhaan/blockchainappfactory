import React from "react";
import { SecSix } from "./nftMusicMarketplaceDevelopmentComp";
import { H2, Button } from "../../../components";
const Sec6 = () => {
  return (
    <SecSix>
      <section className="whychoose_sec common_spacing pad50 mob-resp-pad">
        <div
          className="container"
          // style="padding:20px;"
        >
          <div className="row">
            <div className="section-title underline text-center">
              <div className="sec_tit">
                <H2> Features of Our NFT Marketplace for Music </H2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                className="lazy br hght"
                data-src="/images/nft_music/art.webp"
                alt="NFT Music Marketplace Features"
                title="NFT Music Marketplace Features"
                src="https://www.blockchainappfactory.com/images/nft_music/art.webp"
              />
            </div>
            <div className="col-md-6 res-mar-top">
              <ul className="text-left">
                <li>
                  <div className="icon_img">
                    <img
                      className="lazy"
                      data-src="/images/nft_music/icon/catalogue.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_music/icon/catalogue.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      <strong>Catalogs</strong>
                    </p>
                    <p style={{ color: "#555555" }}>
                      The platform can include a catalog or a list of artists
                      along with their rating, frequency of a song played, token
                      prices, general info, and so on. Possibilities will be
                      endless.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className="lazy"
                      data-src="/images/nft_music/icon/currency.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_music/icon/currency.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      <strong>Multicurrency exchange</strong>
                    </p>
                    <p style={{ color: "#555555" }}>
                      The market can also have a feature by integrating a DEX to
                      convert currency, so the flexibility for buying an NFT can
                      never be delayed.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className="lazy"
                      data-src="/images/nft_music/icon/currencies.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_music/icon/currencies.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      <strong>Multichain platform</strong>
                    </p>
                    <p style={{ color: "#555555" }}>
                      Our Music NFT Marketplace can also be built with such a
                      tendency to integrate Ethereum, TRON, Binance Smart Chain,
                      EOS.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className="lazy"
                      data-src="/images/nft_music/icon/contract1.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_music/icon/contract1.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      <strong>Physical NFTs</strong>
                    </p>
                    <p style={{ color: "#555555" }}>
                      Our marketplace is designed and developed with the
                      intention of allowing the creation of NFTs for physical
                      assets with{" "}
                      <a
                        className="link-col1"
                        href="https://www.blockchainappfactory.com/smart-contract-development "
                      >
                        customized smart contracts.
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center cta_mine marg-t">
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
            </div>{" "} */}
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-40">
              <Button
                btnContent="Connect with Whatsapp"
                target="_blank"
                to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
              />
              <Button btnContent="Talk with our Experts" />
            </div>
          </div>
        </div>
      </section>
    </SecSix>
  );
};

export default Sec6;
