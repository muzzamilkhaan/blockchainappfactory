import React from "react";
import { SecTen } from "./nftMarketplaceAstarComp";
import Button from "../../../components/Button";

const Sec10 = () => {
  return (
    <>
      <SecTen>
        <div className="intro_cnt common_spacing gray_bg">
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-title text-center underline">
                <div className="sec_tit">
                  <h2>
                    Why Blockchain App Factory For Developing Your New Venture
                    on Astar?
                  </h2>{" "}
                </div>
              </div>
              <p className="mt10 mb10 text-center">
                The experts at Blockchain App Factory have been open to learning
                new technologies, which has allowed us to earn skills in
                development on the Astar blockchain. Our professionals make sure
                that all the appropriate development protocols are followed
                while keeping your requirements paramount. Getting on to a new
                blockchain ecosystem is not easy, and our team helps your
                business settle comfortably with our NFT marketplace development
                service on Astar.
              </p>
              <div className="text-center">
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    btnContent="Connect with Whatsapp"
                    to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                    target="_blank"
                  />
                  <Button
                    btnContent="Talk with our Experts"
                    to="#newsletter-form-sec"
                  />
                  {/* <a
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
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecTen>
    </>
  );
};

export default Sec10;
