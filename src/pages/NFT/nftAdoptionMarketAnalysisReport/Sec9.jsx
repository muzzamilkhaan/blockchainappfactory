import React from "react";
import { SecNine } from "./nftAdoptionMarketAnalysisReportComp";
import { H2 } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <div className="why-blockchain-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-md-12 hidden-sm text-center">
              <img
                className=""
                data-src="images/nft-adoption-market-analysis-report/img-2.webp"
                alt=" "
                title=" "
                src="https://www.blockchainappfactory.com/images/nft-adoption-market-analysis-report/img-2.webp"
              />
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 col-md-12"
              style={{ marginTop: "50px " }}
            >
              <div
                className="common_h3 sec-tit underline text-left"
                style={{ padding: "20px 0" }}
              >
                <H2>
                  {" "}
                  About Blockchain App Factory’s NFT Adoption Market Analysis
                  Report{" "}
                </H2>
              </div>
              <p className="text-left">
                The NFT adoption market analysis report from Blockchain App
                Factory offers extensive details on how NFT adoption has
                occurred all over the world in recent times. This report is a
                result of vigorous data collection and research using multiple
                methods to arrive at results. We utilized numerous global
                reports talking about NFT adoption and market trends and
                interpreted vital information to identify the parameters we
                mentioned in the report. We derived data based on demographics,
                nations, and other facets and used advanced data analysis
                methods to gain valuable insights about NFT adoption in today’s
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecNine>
  );
};

export default Sec9;
