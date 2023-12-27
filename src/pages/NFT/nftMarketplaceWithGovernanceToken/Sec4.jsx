import React from "react";
import { SecFour } from "./nftMarketplaceWithGovernanceTokenComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <section className="service-section web-servic pad-tb">
        <div className="container">
          <div className="section-header underline text-center">
            <div className="text-white">
              <H2 style={{ color: "#fff" }}>
                Governance Token-Based NFT Marketplace{" "}
              </H2>
            </div>
          </div>
          <div className="row upset link-hover shape-num justify-content-center">
            <div
              className="col-lg-4 col-md-4 col-sm-12 mt30 shape-loc wow fadeInUp boxx"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="box4"
                // style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
              >
                <div className="s-card-icon">
                  <img
                    className=""
                    data-src="/images/gov/icon/transaction.webp"
                    width="30"
                    src="https://www.blockchainappfactory.com/images/gov/icon/transaction.webp"
                  />
                </div>
                <h3>Transaction ratio</h3>
                <p>
                  The governance token can be earned by the user by meeting a
                  threshold of translation ratio that proves that a particular
                  user is efficient enough to interact and interfere with the
                  decisions of the NFT marketplace. This will ensure the
                  authority will be placed in the right hand, where the
                  contribution decides the community to drive the marketplace.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12 mt30 shape-loc wow fadeInUp"
              data-wow-delay="0.6s"
              //   style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
            >
              <div
                className="box4"
                // style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
              >
                <div className="s-card-icon">
                  <img
                    className=""
                    data-src="/images/gov/icon/stack.webp"
                    width="30"
                    src="https://www.blockchainappfactory.com/images/gov/icon/stack.webp"
                  />
                </div>
                <h3>Staking native coin</h3>
                <p>
                  The user who wishes to be in the community that drives the NFT
                  marketplace can be done by staking the certain native coins of
                  our NFT marketplace. Sufficing the criteria will help the user
                  to avail a governance token. After earning them, they can take
                  part in the events and campaigns that are conducted for the
                  betterment of the marketplace. They will have many other
                  perks, which are explained in the latter part.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12 mt30 shape-loc wow fadeInUp"
              data-wow-delay="0.8s"
              //   style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInUp;"
            >
              <div
                className="box4 mb0"
                // style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
              >
                <div className="s-card-icon">
                  <img
                    className=""
                    data-src="/images/gov/icon/goverment.webp"
                    width="30"
                    src="https://www.blockchainappfactory.com/images/gov/icon/goverment.webp"
                  />
                </div>
                <h3>Minting threshold</h3>
                <p>
                  Another major way to earn a governance token is by reaching a
                  minting threshold, and this shows that the user is very much
                  active in the particular NFT marketplace. They are already
                  eligible enough to earn a governance token that gives
                  significant authority to that particular user. The user’s
                  minting history will need to be verified in order to avail a
                  governance token.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecFour>
  );
};

export default Sec4;
