import React from "react";
import { SecEight } from "./nftAdoptionMarketAnalysisReportComp";
import { H2 } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <div className="uniq_features">
        <div className="why-blockchain-sec">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 col-md-12 col-sm-12 col-md-12 gray_background"
                // style="border-radius:15px;"
              >
                <div
                  className="common_h3 sec-tit underline text-center"
                  style={{ padding: "20px 0" }}
                  //  style="padding: 20px 0;"
                >
                  <H2> Conclusion </H2>
                </div>
                <p className="text-center">
                  In conclusion, our NFT market adoption analysis report shows a
                  grand emergence of popularity for NFTs among people,
                  irrespective of whether they hold one or not. With a sales
                  volume exceeding 60 billion dollars, the market outlook is
                  more promising than ever as we progress toward the future.
                  NFTs offer a transparent and secure means for representing
                  various items backed by immutable blockchains, which has been
                  a pioneering reason behind increased adoption levels. The
                  arrival of globally renowned creators and brands even
                  intensifies the need for people to try out NFTs for once. But
                  once they enter the space, they will be so intrigued that they
                  will not leave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecEight>
  );
};

export default Sec8;
