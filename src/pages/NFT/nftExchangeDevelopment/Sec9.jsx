import React from "react";
import { SecNine } from "./nftExchangeDevelopmentComp";
import { H2 } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <div className="common_h3 text-center font-wei underline">
                  <H2>
                    {" "}
                    Milestones of Our Leading NFT Exchange Platform Development{" "}
                  </H2>
                </div>
                <p className="text-center text-width">
                  We, The Industries best development, offer you the extended
                  and efficient plan for letting you know the way we work. The
                  road map of the Best crypto and NFT trading platform is as
                  below.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <img
                className="roadmap"
                data-src="/images/nfte/road-map-final1.webp"
                alt="NFT Exchange Platform Development"
                title="Develop your NFT Exchange Platform"
                src="https://www.blockchainappfactory.com/images/nfte/road-map-final1.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </SecNine>
  );
};

export default Sec9;
