import React from "react";
import { SecFourTeen } from "./nftMarketplaceForCelebritiesComp";
import { Button, H2 } from "../../../components";

const Sec14 = () => {
  return (
    <SecFourTeen>
      <div className="service-area section-padding-top" id="about-page">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <div className="section-title underline mb20 text-center font-wei">
                <H2>
                  {" "}
                  Potential Benefits For Users who engage with a
                  Celebrity-Endorsed NFT Marketplace{" "}
                </H2>
              </div>{" "}
            </div>
          </div>
          <div className="row text-center mt20">
            <div
              className="col-xs-12 col-sm-4 wow fadeInUp"
              data-wow-delay="0.3s"
              //   style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
            >
              <div className="service-box">
                <div className="service-icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/cele/icons/ownership.webp"
                    src="https://www.blockchainappfactory.com/images/cele/icons/ownership.webp"
                  />{" "}
                </div>
                <h3 className="service-title">Immutable Ownership Rights</h3>
                <p>
                  The users will gain the ownership rights of their most
                  cherished celebs’ assets.
                </p>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-4 wow fadeInUp"
              data-wow-delay="0.5s"
              //   style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;"
            >
              <div className="service-box">
                <div className="service-icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/cele/icons/access.webp"
                    src="https://www.blockchainappfactory.com/images/cele/icons/access.webp"
                  />{" "}
                </div>
                <h3 className="service-title">
                  Access to Unseen/Special Assets
                </h3>
                <p>
                  As a true devotee of the personalities, they can claim the
                  never-seen-before assets instantly.
                </p>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-4 wow fadeInUp"
              data-wow-delay="0.7s"
              //   style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;"
            >
              <div className="service-box">
                <div className="service-icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/cele/icons/celebrity.webp"
                    src="https://www.blockchainappfactory.com/images/cele/icons/celebrity.webp"
                  />{" "}
                </div>
                <h3 className="service-title">
                  Closer Relationship with Celebrities
                </h3>
                <p>
                  Owning an asset of the superstars will take them a step closer
                  than others in line.{" "}
                </p>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-4 col-lg-4 col-lg-offset-2 wow fadeInUp"
              data-wow-delay="0.7s"
              //   style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;"
            >
              <div className="service-box">
                <div className="service-icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/cele/icons/community.webp"
                    src="https://www.blockchainappfactory.com/images/cele/icons/community.webp"
                  />{" "}
                </div>
                <h3 className="service-title">Exciting Community</h3>
                <p>
                  Be a part of the exciting community and know the updates of
                  the stars regularly.{" "}
                </p>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-4 wow fadeInUp"
              data-wow-delay="0.7s"
              //   style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;"
            >
              <div className="service-box">
                <div className="service-icon">
                  {" "}
                  <img
                    className=""
                    data-src="/images/cele/icons/payment.webp"
                    src="https://www.blockchainappfactory.com/images/cele/icons/payment.webp"
                  />{" "}
                </div>
                <h3 className="service-title">Payment Flexibility</h3>
                <p>
                  A high number of payment gateways to the users to choose their
                  convenient mode of payment.{" "}
                </p>
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
    </SecFourTeen>
  );
};

export default Sec14;
