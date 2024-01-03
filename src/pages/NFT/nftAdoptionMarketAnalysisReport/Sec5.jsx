import React from "react";
import { SecFive } from "./nftAdoptionMarketAnalysisReportComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <div className="common_spacing uniq_features">
        <div className="why-blockchain-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-md-12"></div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-md-12">
                <div
                  className="common_h3 sec-tit underline text-left"
                  // style="padding: 20px 0;"
                >
                  <H2> How Do People Perceive and React to NFT Adoption? </H2>
                </div>
                <p className="text-left">
                  The Web2-based digital business model has taken a new turn
                  with the arrival of Web3-based NFTs that have earned global
                  recognition in recent years. By studying how people perceive
                  NFTs and the values they bring, we can learn valuable lessons
                  for the future.
                </p>
                <ul>
                  <li>
                    <div className="d-flex gap-2">
                      <i className="fa-solid fa-circle-arrow-right"></i>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-info progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="81"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "81%" }}
                        >
                          {" "}
                          81%{" "}
                        </div>{" "}
                      </div>
                    </div>
                    <div className="content1">
                      <strong> 81%</strong> of the surveyed people defined NFTs
                      correctly as digital tokens representing real-world
                      assets.
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2">
                      <i className="fa-solid fa-circle-arrow-right"></i>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-info progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="44"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "44%" }}
                        >
                          {" "}
                          44%{" "}
                        </div>{" "}
                      </div>
                    </div>
                    <div className="content1">
                      <strong>44%</strong> of respondents said NFTs were worth
                      investing in, while <strong>41%</strong> of those said
                      NFTs are great investments.
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2">
                      <i className="fa-solid fa-circle-arrow-right"></i>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-info progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="68"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "68%" }}
                        >
                          {" "}
                          68%{" "}
                        </div>{" "}
                      </div>
                    </div>
                    <div className="content1">
                      <strong>68%</strong> of all gaming-related trades involved
                      NFT assets used inside video gaming environments.
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2">
                      <i className="fa-solid fa-circle-arrow-right"></i>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-info progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="23"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "23%" }}
                        >
                          {" "}
                          23%{" "}
                        </div>{" "}
                      </div>
                    </div>
                    <div className="content1">
                      <strong>23%</strong> of millennials (Gen-Z population)
                      like to purchase and collect NFTs as a hobby.
                    </div>
                  </li>
                </ul>
                <p className="text-left">
                  Our research stated that artworks and music are popular types
                  of NFTs, followed by photographs and digital collectibles.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-md-12 hidden-sm text-center">
                <img
                  className=""
                  data-src="images/nft-adoption-market-analysis-report/img-3.webp"
                  alt=" "
                  title=" "
                  // style={{marginTop:"100px"}}
                  // style="margin-top:100px;"
                  src="https://www.blockchainappfactory.com/images/nft-adoption-market-analysis-report/img-3.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFive>
  );
};

export default Sec5;
