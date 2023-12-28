import React from "react";
import { SecEleven } from "./nftMarketplaceForCelebritiesComp";
import { H2 } from "../../../components";

const Sec11 = () => {
  return (
    <SecEleven>
      <div className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <div className="section-title underline mb20 text-center font-wei">
                <H2> How to Launch a Celebrity NFT Marketplace </H2>
              </div>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline1">
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <p className="description">
                      Extensively plan for the venture by considering all
                      factors.
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i className="fa fa-rocket"></i>
                    </div>
                    <p className="description">
                      Design the platform’s front-end features for various
                      users.
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i className="fa fa-rocket"></i>
                    </div>
                    <p className="description">
                      Develop the platform’s back-end to make the front-end
                      function.
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i className="fa fa-rocket"></i>
                    </div>
                    <p className="description">
                      Test the solution repetitively and resolve errors
                      promptly.
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i className="fa fa-rocket"></i>
                    </div>
                    <p className="description">
                      Launch the celebrity NFT marketplace for public use.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecEleven>
  );
};

export default Sec11;
