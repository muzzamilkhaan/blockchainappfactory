import React from "react";
import { SecEight } from "./nftLoyaltyProgramComp";
import { Button, H2, H3 } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <section className="common_spacing">
        <div className="container">
          <div className="row mt20">
            <div className="section-title text-center">
              <div className="sec_tit mb20">
                <div className="section-title underline mb20">
                  <H2>
                    Exquisite Features Our White Label NFT Loyalty Platform
                    Offers
                  </H2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt20">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="icon-text-1">
                <div className="icon-text-icon">
                  <img
                    className=""
                    data-src="images/nft-loyalty-program/icons/dashboards.webp"
                    src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/dashboards.webp"
                  />
                </div>
                <div className="icon_content">
                  <H3>Dashboards</H3>
                  <p className="c-grey">
                    {" "}
                    Users can keep an eye on their progress on the platform and
                    the rewards they have earned. They can also see leaderboards
                    that list top gainers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="icon-text-1-group">
                <div className="icon-text-1">
                  <div className="icon-text-icon">
                    <img
                      className=""
                      data-src="images/nft-loyalty-program/icons/cryptocurrencies.webp"
                      src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/cryptocurrencies.webp"
                    />
                  </div>
                  <div className="icon_content">
                    <H3>Gamified Elements</H3>
                    <p className="c-grey">
                      Users can participate in gamified tasks in the NFT loyalty
                      platform to earn rewards in the forms of cryptocurrencies
                      and NFTs with various utilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="icon-text-1-group">
                <div className="icon-text-1">
                  <div className="icon-text-icon">
                    <img
                      className=""
                      data-src="images/nft-loyalty-program/icons/payments.webp"
                      src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/payments.webp"
                    />
                  </div>
                  <div className="icon_content">
                    <H3>Marketplace </H3>
                    <p className="c-grey">
                      Users not wishing to redeem the rewards can sell them to
                      others through the in-app secondary marketplace in
                      exchange for fiat or crypto payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="icon-text-1-group">
                <div className="icon-text-1">
                  <div className="icon-text-icon">
                    <img
                      className=""
                      data-src="images/nft-loyalty-program/icons/crypto-wallets.webp"
                      src="https://www.blockchainappfactory.com/images/nft-loyalty-program/icons/crypto-wallets.webp"
                    />
                  </div>
                  <div className="icon_content">
                    <H3>Wallet </H3>
                    <p className="c-grey">
                      Customers can use the in-app wallet or integrate an
                      existing one into the Web3 loyalty platform to receive and
                      transact NFT loyalty rewards online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            {/* <div className="text-center cta_mine txt">
              <a
                className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
                target="_blank"
                href="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                data-color-override="false"
                data-hover-color-override="false"
                data-hover-text-color-override="#fff"
              >
                <span>Connect with Whatsapp</span>
              </a>{" "}
              <a
                href="#newsletter-form-sec"
                className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
              >
                <span>Talk with our Experts</span>
              </a>{" "}
            </div> */}
            <div className="d-flex justify-content-center flex-wrap gap-3">
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
    </SecEight>
  );
};

export default Sec8;
