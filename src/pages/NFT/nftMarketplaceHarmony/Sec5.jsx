import React from "react";
import { SecFive } from "./nftMarketplaceHarmonyComp";
import { H2, H3 } from "../../../components";
const Sec5 = () => {
  return (
    <SecFive>
      <div className="stable-services- common_spacing">
        <div className="container">
          <div className="section-title underline text-center">
            <div className="sec_tit">
              <H2>Business Features Of Harmony Platform</H2>
            </div>
          </div>
          <div className="row mt30">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="service-row">
                <div>
                  <img
                    className="lazy"
                    data-src="images/asset-token/icons/gold-ingots.webp"
                    src="https://www.blockchainappfactory.com/images/asset-token/icons/gold-ingots.webp"
                  />
                </div>
                <div>
                  <H3>Safe Random State Sharding </H3>
                  <p>
                    The sharding feature in this blockchain network scales the
                    platform without losing any security and decentralization
                    factors.
                  </p>
                </div>
              </div>
              <div className="service-row">
                <img
                  className="lazy"
                  data-src="images/asset-token/icons/money.webp"
                  src="https://www.blockchainappfactory.com/images/asset-token/icons/money.webp"
                />
                <H3>Quick Consensus Transaction</H3>
                <p>
                  This blockchain platform has a special feature called
                  Practical Byzantine Fault Tolerance, which increases the speed
                  of consensus block transactions.
                </p>
              </div>
              <div className="service-row">
                {" "}
                <img
                  className="lazy"
                  data-src="images/asset-token/icons/diamond.webp"
                  src="https://www.blockchainappfactory.com/images/asset-token/icons/diamond.webp"
                />
                <H3>Efficient Proof Of Stakes</H3>
                <p>
                  The primary function of PoS is to provide security and
                  economics for the platform and it distributes rewards to the
                  validators and reduces centralization.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
              {" "}
              <img
                data-src="images/harmony/img-2.webp"
                className="lazy mt10 mb10"
                alt="NFT Marketplace On Harmony Platform"
                title="NFT Marketplace On Harmony Platform"
                src="https://www.blockchainappfactory.com/images/harmony/img-2.webp"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </SecFive>
  );
};

export default Sec5;
