import React from "react";
import { SecTwo } from "./daoEnabledNftPlatformComp";
import { H2 } from "../../../components";

const Sec2 = () => {
  return (
    <SecTwo>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="sec_tit underline text-left mt50">
                <H2> What is a DAO? </H2>
              </div>
              <p className="mt10 mb10 text-justify">
                A decentralized autonomous organization (DAO) is a feature in
                the crypto world through which users can participate in the
                supported platform’s major decision-making activities. Users can
                now make decisions in the platform’s facets, including
                governance, protocols, service, investment, operating systems,
                collection, social, and media.
              </p>
              <p className="mt20">
                DAOs eliminate the need for human trust and leadership, as all
                the flow of the platform is taken care of by the community
                through implementing smart contracts on the host blockchain.
                Such a protocol also helps in disposing of the barriers in
                decision-making by distributing power to the community so that
                independent voting paves the way for new changes.
              </p>
            </div>
            <div className="col-lg-6">
              {" "}
              <img
                className=""
                data-src="/images/dao-enabled-nft-platform/dao_02.webp"
                src="https://www.blockchainappfactory.com/images/dao-enabled-nft-platform/dao_02.webp"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
