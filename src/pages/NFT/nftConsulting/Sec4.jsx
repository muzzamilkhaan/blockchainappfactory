import React from "react";
import { SecFour } from "./nftConsultingComp";
import { H2, Button } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <section className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="sec_tit underline text-center">
              <H2>Scope of Our NFT Consulting Services </H2>
            </div>{" "}
          </div>
          <div className="row mt20">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven">
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className="lazy"
                      data-src="/images/nft-consulting/research.webp"
                      src="https://www.blockchainappfactory.com/images/nft-consulting/research.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content">
                  <h4>Market Research</h4>
                  <p>
                    The aim of our market research is to satisfy end-users with
                    diverse digital knowledge levels by providing immersive
                    experiences through user-friendly applications for NFT
                    ventures.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven">
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className="lazy"
                      data-src="/images/nft-consulting/predictive-chart.webp"
                      src="https://www.blockchainappfactory.com/images/nft-consulting/predictive-chart.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content">
                  <h4>Business Prediction</h4>
                  <p>
                    We provide accurate predictions for your venture based on
                    anticipated market movements and the business’s vision that
                    gives out results for our feasibility analysis tests.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven">
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className="lazy"
                      data-src="/images/nft-consulting/settings-gears-outlines-interface-symbol.webp"
                      src="https://www.blockchainappfactory.com/images/nft-consulting/settings-gears-outlines-interface-symbol.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content">
                  <h4>Functional Needs</h4>
                  <p>
                    Our team carefully checks all the needs of your venture
                    platform and filters the ones based on viability to form
                    your Web3 platform’s final solution.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven">
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className="lazy"
                      data-src="/images/nft-consulting/analyze.webp"
                      src="https://www.blockchainappfactory.com/images/nft-consulting/analyze.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content">
                  <h4>Non-functional Needs</h4>
                  <p>
                    Our team analyzes features that work in hindsight to ensure
                    that the platform works as intended at standard speeds and
                    zero errors at any time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven">
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className="lazy"
                      data-src="/images/nft-consulting/offshore-platform.webp"
                      src="https://www.blockchainappfactory.com/images/nft-consulting/offshore-platform.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content">
                  <h4>Platform Architecture</h4>
                  <p>
                    We draw plans to link all the different software components
                    of your Web3 business in a diligent manner to ensure that
                    everything works seamlessly anytime.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_feature_seven">
                <div className="single_feature_six_seven_icon">
                  <div className="icon">
                    {" "}
                    <img
                      className="lazy"
                      data-src="/images/nft-consulting/layers.webp"
                      src="https://www.blockchainappfactory.com/images/nft-consulting/layers.webp"
                    />{" "}
                  </div>
                </div>
                <div className="single_feature_seven_content">
                  <h4>Technological Stacks</h4>
                  <p>
                    Our NFT project advisors help you in choosing the best
                    third-party tech stacks needed for your Web3 venture
                    platform based on your requirements and resources.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="cta_mine">
              <div className="d-flex justify-content-center flex-wrap gap-3 ">
                <Button
                  btnContent="Talk with our Experts"
                  to="#newsletter-form-sec"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </SecFour>
  );
};

export default Sec4;
