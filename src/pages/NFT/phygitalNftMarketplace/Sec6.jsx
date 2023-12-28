import React from "react";
import { SecSix } from "./phygitalNftMarketplaceComp";
import { H2, Button } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <div className="common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="title-th sec_tit underline">
              <H2> Metaverse-based Phygital NFT Marketplace </H2>
            </div>{" "}
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <p className="text-center mt20">
                A metaverse-based phygital NFT marketplace is a platform where
                digital assets bought can be utilized on metaverses. For
                example, if someone buys a pair of shoes as phygital NFTs, they
                can use the physical product in real life and its virtual
                version for their avatar in a metaverse. Today, metaverses such
                as the Sandbox have partnered with phygital NFT marketplaces to
                integrate such NFTs on the platform. Metaverses today have AR
                and VR features that offer users more immersive experiences in
                the virtual world. Phygital NFTs add to the real world-like
                experience metaverses offer with their futuristic use cases and
                features.{" "}
              </p>
              <div className="text-center">
                <div className="text-center">
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
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecSix>
  );
};

export default Sec6;
